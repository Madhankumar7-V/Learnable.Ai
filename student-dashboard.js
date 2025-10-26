// Student Dashboard — Personal Learning Analytics
const EVENTS_KEY = 'learnable_events_queue';
const PROGRESS_KEY = 'learnable_student_progress';
const VIDEOS_KEY = 'learnable_videos_library';
const OFFLINE_CACHE_KEY = 'learnable_offline_cache';

// UI Elements
const studentTotalScoreEl = document.getElementById('studentTotalScore');
const studentQuizCountEl = document.getElementById('studentQuizCount');
const studentAvgAccuracyEl = document.getElementById('studentAvgAccuracy');
const studentLevelEl = document.getElementById('studentLevel');
const studentEventsTableBody = document.querySelector('#studentEventsTable tbody');
const achievementsListEl = document.getElementById('achievementsList');
const downloadOfflineBtn = document.getElementById('downloadOffline');
const offlineStatusEl = document.getElementById('offlineStatus');
const cachedVideosEl = document.getElementById('cachedVideos');
const storageUsedEl = document.getElementById('storageUsed');
const clearCacheBtn = document.getElementById('clearCache');
const updateOfflineBtn = document.getElementById('updateOffline');

// Chart instances
let subjectChart = null;
let accuracyChart = null;

// Data storage
let currentEvents = [];
let studentProgress = {};
let currentStudentId = '';

// Utility Functions
function formatDate(ts) {
  const d = new Date(ts);
  return d.toLocaleDateString();
}

function calculateLevel(xp) {
  return Math.floor(xp / 100) + 1;
}

function getLevelProgress(xp) {
  const currentLevel = calculateLevel(xp);
  const currentLevelXP = (currentLevel - 1) * 100;
  const nextLevelXP = currentLevel * 100;
  const progress = ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
  return Math.min(100, Math.max(0, progress));
}

// Load student data
function loadStudentData() {
  const events = JSON.parse(localStorage.getItem(EVENTS_KEY) || '[]');
  const progress = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
  
  // Get the most recent student ID
  if (events.length > 0) {
    currentStudentId = events[events.length - 1].studentId;
  }
  
  currentEvents = events.filter(e => e.studentId === currentStudentId);
  studentProgress = progress[currentStudentId] || {};
  
  return { events: currentEvents, progress: studentProgress };
}

// Calculate student statistics
function calculateStudentStats(events) {
  if (!events || events.length === 0) {
    return {
      totalScore: 0,
      quizCount: 0,
      avgAccuracy: 0,
      level: 1,
      totalXP: 0
    };
  }

  const totalScore = events.reduce((sum, e) => sum + (e.score || 0), 0);
  const totalAccuracy = events.reduce((sum, e) => sum + (e.accuracy || 0), 0);
  const totalXP = events.reduce((sum, e) => sum + (e.xpEarned || 0), 0);

  return {
    totalScore,
    quizCount: events.length,
    avgAccuracy: Math.round(totalAccuracy / events.length),
    level: calculateLevel(totalXP),
    totalXP
  };
}

// Render student statistics
function renderStudentStats(stats) {
  studentTotalScoreEl.textContent = stats.totalScore;
  studentQuizCountEl.textContent = stats.quizCount;
  studentAvgAccuracyEl.textContent = `${stats.avgAccuracy}%`;
  studentLevelEl.textContent = stats.level;
}

// Render recent activity
function renderRecentActivity(events) {
  studentEventsTableBody.innerHTML = '';
  if (!events || events.length === 0) {
    studentEventsTableBody.innerHTML = '<tr><td colspan="7" class="muted">No activity yet</td></tr>';
    return;
  }

  // Sort by timestamp (newest first) and take last 10
  const sortedEvents = [...events].sort((a, b) => b.ts - a.ts).slice(0, 10);

  sortedEvents.forEach(e => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${e.subject || 'General'}</td>
      <td>${e.unit || ''}</td>
      <td>${e.grade || ''}</td>
      <td>${e.score || 0}</td>
      <td>${e.accuracy || 0}%</td>
      <td>${e.time || 0}s</td>
      <td>${formatDate(e.ts)}</td>
    `;
    studentEventsTableBody.appendChild(tr);
  });
}

// Render achievements
function renderAchievements(progress) {
  achievementsListEl.innerHTML = '';
  const achievements = progress.achievements || [];
  
  if (achievements.length === 0) {
    achievementsListEl.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🏆</div><div class="empty-state-text">Complete quizzes to unlock achievements!</div></div>';
    return;
  }

  const achievementData = {
    firstQuiz: { name: 'First Steps', description: 'Complete your first quiz', icon: '👶' },
    perfectScore: { name: 'Perfectionist', description: 'Get 100% on a quiz', icon: '💯' },
    speedDemon: { name: 'Speed Demon', description: 'Complete a quiz in under 2 minutes', icon: '⚡' },
    streak5: { name: 'On Fire', description: 'Get 5 questions correct in a row', icon: '🔥' },
    levelUp: { name: 'Level Up', description: 'Reach level 5', icon: '⬆️' },
    mathMaster: { name: 'Math Master', description: 'Complete 10 quizzes', icon: '🧮' }
  };

  achievements.forEach(achievementId => {
    const achievement = achievementData[achievementId];
    if (achievement) {
      const card = document.createElement('div');
      card.className = 'student-card';
      card.innerHTML = `
        <div class="student-card-header">
          <div class="student-card-name">${achievement.icon} ${achievement.name}</div>
        </div>
        <div class="muted">${achievement.description}</div>
      `;
      achievementsListEl.appendChild(card);
    }
  });
}

// Create subject performance chart
function createSubjectChart(events) {
  const ctx = document.getElementById('subjectChart').getContext('2d');
  
  if (subjectChart) {
    subjectChart.destroy();
  }

  // Group events by subject
  const subjectData = {};
  events.forEach(event => {
    const subject = event.subject || 'General';
    if (!subjectData[subject]) {
      subjectData[subject] = { totalScore: 0, count: 0 };
    }
    subjectData[subject].totalScore += event.score || 0;
    subjectData[subject].count += 1;
  });

  const subjects = Object.keys(subjectData);
  const scores = subjects.map(subject => subjectData[subject].totalScore);

  subjectChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: subjects,
      datasets: [{
        data: scores,
        backgroundColor: [
          'rgba(139, 92, 246, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)'
        ],
        borderColor: [
          'rgba(139, 92, 246, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)'
        ],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#b8b8d1',
            padding: 20
          }
        }
      }
    }
  });
}

// Create accuracy trends chart
function createAccuracyChart(events) {
  const ctx = document.getElementById('accuracyChart').getContext('2d');
  
  if (accuracyChart) {
    accuracyChart.destroy();
  }

  // Group events by date
  const dailyData = {};
  events.forEach(event => {
    const date = formatDate(event.ts);
    if (!dailyData[date]) {
      dailyData[date] = { totalAccuracy: 0, count: 0 };
    }
    dailyData[date].totalAccuracy += event.accuracy || 0;
    dailyData[date].count += 1;
  });

  const dates = Object.keys(dailyData).sort();
  const accuracies = dates.map(date => Math.round(dailyData[date].totalAccuracy / dailyData[date].count));

  accuracyChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [{
        label: 'Accuracy %',
        data: accuracies,
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#b8b8d1'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#b8b8d1'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        y: {
          ticks: {
            color: '#b8b8d1'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        }
      }
    }
  });
}

// Offline functionality
function updateOfflineStatus() {
  if ('serviceWorker' in navigator && 'caches' in window) {
    offlineStatusEl.textContent = '🟢 Online';
    offlineStatusEl.className = 'btn btn-success';
  } else {
    offlineStatusEl.textContent = '🔴 Offline';
    offlineStatusEl.className = 'btn btn-danger';
  }
}

function updateCacheInfo() {
  const videos = JSON.parse(localStorage.getItem(VIDEOS_KEY) || '[]');
  cachedVideosEl.textContent = `${videos.length} Videos`;
  
  // Estimate storage usage
  const dataSize = JSON.stringify(localStorage).length;
  const sizeInMB = (dataSize / (1024 * 1024)).toFixed(2);
  storageUsedEl.textContent = `${sizeInMB} MB`;
}

function downloadForOffline() {
  if ('serviceWorker' in navigator && 'caches' in window) {
    // Cache videos and quiz data
    const videos = JSON.parse(localStorage.getItem(VIDEOS_KEY) || '[]');
    const events = JSON.parse(localStorage.getItem(EVENTS_KEY) || '[]');
    const progress = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
    
    const offlineData = {
      videos,
      events,
      progress,
      timestamp: Date.now()
    };
    
    localStorage.setItem(OFFLINE_CACHE_KEY, JSON.stringify(offlineData));
    alert('Content downloaded for offline access!');
    updateCacheInfo();
  } else {
    alert('Offline functionality not supported in this browser.');
  }
}

function clearOfflineCache() {
  localStorage.removeItem(OFFLINE_CACHE_KEY);
  alert('Offline cache cleared!');
  updateCacheInfo();
}

function updateOfflineContent() {
  // Refresh offline cache with latest data
  downloadForOffline();
}

// Main render function
function renderDashboard() {
  const { events, progress } = loadStudentData();
  const stats = calculateStudentStats(events);
  
  renderStudentStats(stats);
  renderRecentActivity(events);
  renderAchievements(progress);
  
  if (events && events.length > 0) {
    createSubjectChart(events);
    createAccuracyChart(events);
  }
  
  updateOfflineStatus();
  updateCacheInfo();
}

// Event Handlers
downloadOfflineBtn && (downloadOfflineBtn.onclick = downloadForOffline);
clearCacheBtn && (clearCacheBtn.onclick = clearOfflineCache);
updateOfflineBtn && (updateOfflineBtn.onclick = updateOfflineContent);

// Initialize dashboard
document.addEventListener('DOMContentLoaded', () => {
  renderDashboard();
  
  // Update cache info periodically
  setInterval(updateCacheInfo, 30000);
});

// Listen for online/offline events
window.addEventListener('online', updateOfflineStatus);
window.addEventListener('offline', updateOfflineStatus);
