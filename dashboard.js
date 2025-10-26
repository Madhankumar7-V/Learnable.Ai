// Learnable.ai Dashboard — Enhanced Analytics & Gamification
const EVENTS_KEY = 'learnable_events_queue';
const PROGRESS_KEY = 'learnable_student_progress';

// UI Elements
const tableBody = document.querySelector('#eventsTable tbody');
const syncLocalDataBtn = document.getElementById('syncLocalData');
const totalStudentsEl = document.getElementById('totalStudents');
const totalQuizzesEl = document.getElementById('totalQuizzes');
const avgScoreEl = document.getElementById('avgScore');
const avgAccuracyEl = document.getElementById('avgAccuracy');
const leaderboardEl = document.getElementById('leaderboard');
const studentCardsEl = document.getElementById('studentCards');

// Auth and filters
const authGate = document.getElementById('authGate');
const dashHeader = document.getElementById('dashHeader');
const controlPanel = document.getElementById('controlPanel');
const statsOverview = document.getElementById('statsOverview');
const leaderboardCard = document.getElementById('leaderboardCard');
const resultsTableCard = document.getElementById('resultsTableCard');
const studentProgressCard = document.getElementById('studentProgressCard');
const studentRosterCard = document.getElementById('studentRosterCard');
const studentRosterEl = document.getElementById('studentRoster');
const videoUploadCard = document.getElementById('videoUploadCard');
const vuSubject = document.getElementById('vuSubject');
const vuGrade = document.getElementById('vuGrade');
const vuUnit = document.getElementById('vuUnit');
const vuTopic = document.getElementById('vuTopic');
const vuTopicCustomWrap = document.getElementById('vuTopicCustomWrap');
const vuTopicCustom = document.getElementById('vuTopicCustom');
const vuURL = document.getElementById('vuURL');
const vuSave = document.getElementById('vuSave');

const VIDEOS_KEY = 'learnable_videos_library';
const filterBar = document.getElementById('filterBar');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const teacherCodeInput = document.getElementById('teacherCode');
const filterSubject = document.getElementById('filterSubject');
const filterDateFrom = document.getElementById('filterDateFrom');
const filterDateTo = document.getElementById('filterDateTo');
const applyFiltersBtn = document.getElementById('applyFilters');
const clearFiltersBtn = document.getElementById('clearFilters');
const filterGrade = document.getElementById('filterGrade');
const filterUnit = document.getElementById('filterUnit');


// Data storage
let currentEvents = [];
let studentProgress = {};
let filteredEvents = [];

// Utility Functions
function formatTs(ts) { 
  const d = new Date(ts); 
  return d.toLocaleString(); 
}

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

// Statistics Calculation
function calculateStats(events) {
  if (!events || events.length === 0) {
    return {
      totalStudents: 0,
      totalQuizzes: 0,
      avgScore: 0,
      avgAccuracy: 0
    };
  }

  const uniqueStudents = new Set(events.map(e => e.studentId));
  const totalScore = events.reduce((sum, e) => sum + (e.score || 0), 0);
  const totalAccuracy = events.reduce((sum, e) => sum + (e.accuracy || 0), 0);

  return {
    totalStudents: uniqueStudents.size,
    totalQuizzes: events.length,
    avgScore: Math.round(totalScore / events.length),
    avgAccuracy: Math.round(totalAccuracy / events.length)
  };
}

// Render Functions
function renderEvents(events) {
  tableBody.innerHTML = '';
  if (!events || events.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="9" class="muted">No events found</td></tr>';
    return;
  }

  // Sort by timestamp (newest first)
  const sortedEvents = [...events].sort((a, b) => b.ts - a.ts);

  sortedEvents.forEach(e => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${e.studentId}</td>
      <td>${e.subject || e.lessonId || 'General'}</td>
      <td>${e.unit || ''}</td>
      <td>${e.grade || ''}</td>
      <td>${e.score || 0}</td>
      <td>${e.accuracy || 0}%</td>
      <td>${e.time || 0}s</td>
      <td>${e.streak || 0}</td>
      <td>${e.xpEarned || 0}</td>
      <td>${e.level || 1}</td>
      <td>${formatDate(e.ts)}</td>
    `;
    tableBody.appendChild(tr);
  });
}

function renderStats(stats) {
  totalStudentsEl.textContent = stats.totalStudents;
  totalQuizzesEl.textContent = stats.totalQuizzes;
  avgScoreEl.textContent = stats.avgScore;
  avgAccuracyEl.textContent = `${stats.avgAccuracy}%`;
}

function renderLeaderboard(events) {
  if (!events || events.length === 0) {
    leaderboardEl.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🏆</div><div class="empty-state-text">No data available</div></div>';
    return;
  }

  // Group events by student and calculate totals
  const studentStats = {};
  events.forEach(event => {
    if (!studentStats[event.studentId]) {
      studentStats[event.studentId] = {
        totalScore: 0,
        totalXP: 0,
        quizCount: 0,
        avgAccuracy: 0,
        maxLevel: 1,
        lastActivity: 0
      };
    }
    
    const stats = studentStats[event.studentId];
    stats.totalScore += event.score || 0;
    stats.totalXP += event.xpEarned || 0;
    stats.quizCount += 1;
    stats.avgAccuracy += event.accuracy || 0;
    stats.maxLevel = Math.max(stats.maxLevel, event.level || 1);
    stats.lastActivity = Math.max(stats.lastActivity, event.ts);
  });

  // Calculate averages and sort by total score
  Object.keys(studentStats).forEach(studentId => {
    const stats = studentStats[studentId];
    stats.avgAccuracy = Math.round(stats.avgAccuracy / stats.quizCount);
  });

  const sortedStudents = Object.entries(studentStats)
    .sort(([,a], [,b]) => b.totalScore - a.totalScore)
    .slice(0, 5);

  leaderboardEl.innerHTML = '';
  sortedStudents.forEach(([studentId, stats], index) => {
    const rank = index + 1;
    const badges = ['🥇', '🥈', '🥉', '🏅', '🎖️'];
    
    const item = document.createElement('div');
    item.className = 'leaderboard-item';
    item.innerHTML = `
      <div class="rank">${rank}${rank === 1 ? 'st' : rank === 2 ? 'nd' : rank === 3 ? 'rd' : 'th'}</div>
      <div class="student-info">
        <div class="student-name">${studentId}</div>
        <div class="student-stats">Score: ${stats.totalScore} | Level: ${stats.maxLevel} | Quizzes: ${stats.quizCount}</div>
      </div>
      <div class="achievement-badge">${badges[index] || '🏆'}</div>
    `;
    leaderboardEl.appendChild(item);
  });
}

function renderStudentCards(events) {
  if (!events || events.length === 0) {
    studentCardsEl.innerHTML = '<div class="empty-state"><div class="empty-state-icon">👥</div><div class="empty-state-text">No student data available</div></div>';
    return;
  }

  // Group events by student
  const studentData = {};
  events.forEach(event => {
    if (!studentData[event.studentId]) {
      studentData[event.studentId] = {
        events: [],
        totalScore: 0,
        totalXP: 0,
        quizCount: 0,
        avgAccuracy: 0,
        maxLevel: 1,
        lastActivity: 0,
        bySubject: {}
      };
    }
    
    const data = studentData[event.studentId];
    data.events.push(event);
    data.totalScore += event.score || 0;
    data.totalXP += event.xpEarned || 0;
    data.quizCount += 1;
    data.avgAccuracy += event.accuracy || 0;
    data.maxLevel = Math.max(data.maxLevel, event.level || 1);
    data.lastActivity = Math.max(data.lastActivity, event.ts);

    const subj = event.subject || 'General';
    if (!data.bySubject[subj]) {
      data.bySubject[subj] = { quizzes: 0, totalScore: 0, avgAccuracy: 0 };
    }
    data.bySubject[subj].quizzes += 1;
    data.bySubject[subj].totalScore += event.score || 0;
    data.bySubject[subj].avgAccuracy += event.accuracy || 0;
  });

  // Calculate averages
  Object.keys(studentData).forEach(studentId => {
    const data = studentData[studentId];
    data.avgAccuracy = Math.round(data.avgAccuracy / data.quizCount);
    Object.keys(data.bySubject).forEach(subj => {
      const s = data.bySubject[subj];
      s.avgAccuracy = Math.round(s.avgAccuracy / s.quizzes);
    });
  });

  studentCardsEl.innerHTML = '';
  Object.entries(studentData).forEach(([studentId, data]) => {
    const levelProgress = getLevelProgress(data.totalXP);
    
    const card = document.createElement('div');
    card.className = 'student-card';
    const subjectsHtml = Object.entries(data.bySubject).map(([subj, s]) => `
      <div style="display:flex; justify-content:space-between; font-size:0.9rem; color: var(--text-secondary);">
        <span>${subj}</span>
        <span>Quizzes: ${s.quizzes} · Avg Acc: ${s.avgAccuracy}%</span>
      </div>
    `).join('');

    card.innerHTML = `
      <div class="student-card-header">
        <div class="student-card-name">${studentId}</div>
        <div class="student-card-level">Level ${data.maxLevel}</div>
      </div>
      <div class="student-card-stats">
        <div class="student-card-stat">
          <span class="student-card-stat-value">${data.totalScore}</span>
          <span class="student-card-stat-label">Total Score</span>
        </div>
        <div class="student-card-stat">
          <span class="student-card-stat-value">${data.avgAccuracy}%</span>
          <span class="student-card-stat-label">Avg Accuracy</span>
        </div>
        <div class="student-card-stat">
          <span class="student-card-stat-value">${data.quizCount}</span>
          <span class="student-card-stat-label">Quizzes</span>
        </div>
        <div class="student-card-stat">
          <span class="student-card-stat-value">${data.totalXP}</span>
          <span class="student-card-stat-label">Total XP</span>
        </div>
      </div>
      <div class="student-card-progress">
        <div class="student-card-progress-label">
          <span>Level Progress</span>
          <span>${Math.round(levelProgress)}%</span>
        </div>
        <div class="student-card-progress-bar">
          <div class="student-card-progress-fill" style="width: ${levelProgress}%"></div>
        </div>
      </div>
      <div style="margin-top:12px; display:flex; flex-direction:column; gap:6px;">
        ${subjectsHtml}
      </div>
    `;
    studentCardsEl.appendChild(card);
  });
}


// Export Function
function exportData() {
  const eventsToExport = (filteredEvents.length ? filteredEvents : currentEvents);
  if (!eventsToExport || eventsToExport.length === 0) {
    alert('No data to export');
    return;
  }

  // Main CSV
  const csvContent = [
    ['Student ID', 'Subject', 'Unit', 'Grade', 'Score', 'Accuracy', 'Time (s)', 'Streak', 'XP Earned', 'Level', 'Date'],
    ...eventsToExport.map(event => [
      event.studentId,
      event.subject || event.lessonId || 'General',
      event.unit || '',
      event.grade || '',
      event.score || 0,
      event.accuracy || 0,
      event.time || 0,
      event.streak || 0,
      event.xpEarned || 0,
      event.level || 1,
      formatDate(event.ts)
    ])
  ].map(row => row.join(',')).join('\n');

  // Build per-subject summaries
  const bySubject = {};
  eventsToExport.forEach(e => {
    const s = e.subject || 'General';
    if (!bySubject[s]) bySubject[s] = [];
    bySubject[s].push(e);
  });

  const files = [];
  files.push({
    name: `learnable-analytics-${new Date().toISOString().split('T')[0]}.csv`,
    content: csvContent
  });

  Object.entries(bySubject).forEach(([subj, evts]) => {
    const stats = calculateStats(evts);
    const header = [`Subject: ${subj}`];
    const summary = [
      ['Total Students', 'Total Quizzes', 'Avg Score', 'Avg Accuracy'],
      [stats.totalStudents, stats.totalQuizzes, stats.avgScore, stats.avgAccuracy + '%']
    ];
    const rows = [
      header.join(','),
      '',
      summary[0].join(','),
      summary[1].join(','),
      '',
      ['Student ID', 'Unit', 'Grade', 'Score', 'Accuracy', 'Time (s)', 'Streak', 'XP', 'Level', 'Date'].join(','),
      ...evts.map(e => [
        e.studentId, e.unit||'', e.grade||'', e.score||0, e.accuracy||0, e.time||0, e.streak||0, e.xpEarned||0, e.level||1, formatDate(e.ts)
      ].join(','))
    ].join('\n');
    files.push({ name: `subject-${subj}-${new Date().toISOString().split('T')[0]}.csv`, content: rows });
  });

  // Download files (main + per-subject)
  files.forEach(f => {
    const blob = new Blob([f.content], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = f.name;
    a.click();
    window.URL.revokeObjectURL(url);
  });
}

// Main render function
function renderDashboard(events) {
  currentEvents = events;
  const eventsToUse = filteredEvents.length ? filteredEvents : events;
  const stats = calculateStats(eventsToUse);
  
  renderStats(stats);
  renderEvents(eventsToUse);
  renderLeaderboard(eventsToUse);
  renderStudentCards(eventsToUse);
  renderStudentRoster(eventsToUse);
}

function renderStudentRoster(events) {
  if (!events || events.length === 0) {
    studentRosterEl.innerHTML = '<div class="empty-state"><div class="empty-state-icon">📇</div><div class="empty-state-text">No students yet</div></div>';
    return;
  }
  const students = Array.from(new Set(events.map(e => e.studentId))).sort((a,b) => a.localeCompare(b));
  studentRosterEl.innerHTML = '';
  students.forEach(id => {
    const item = document.createElement('div');
    item.className = 'leaderboard-item';
    item.style.cursor = 'pointer';
    item.innerHTML = `
      <div class="rank">👤</div>
      <div class="student-info">
        <div class="student-name">${id}</div>
        <div class="student-stats">Click to filter results</div>
      </div>
    `;
    item.onclick = () => {
      filteredEvents = currentEvents.filter(e => e.studentId === id);
      renderDashboard(currentEvents);
    };
    studentRosterEl.appendChild(item);
  });
}

// Event Handlers
syncLocalDataBtn && (syncLocalDataBtn.onclick = async () => {
  try {
    syncLocalDataBtn.textContent = '🔄 Syncing...';
    syncLocalDataBtn.disabled = true;
    
    // Check if Firebase is available
    if (!window.firebaseDb) {
      alert('Firebase is not loaded yet. Please wait a moment and try again, or check your internet connection.');
      return;
    }
    
    // Get local events
    const raw = localStorage.getItem(EVENTS_KEY);
    const localEvents = raw ? JSON.parse(raw) : [];
    
    if (localEvents.length === 0) {
      alert('No local data to sync');
      return;
    }
    
    // Push to Firebase
    if (window.pushEventsToFirebase) {
      await window.pushEventsToFirebase(localEvents);
      alert(`Successfully synced ${localEvents.length} events to Firebase!`);
      
      // Reload data to show the synced results
      await loadData();
    } else {
      alert('Firebase sync function not available. Please refresh the page and try again.');
    }
  } catch (error) {
    console.error('Sync failed:', error);
    alert('Sync failed: ' + error.message + '\n\nPlease check your internet connection and try again.');
  } finally {
    syncLocalDataBtn.textContent = '🔄 Sync Local Data';
    syncLocalDataBtn.disabled = false;
  }
});

// Initialize dashboard
function applyFilters() {
  const subj = filterSubject.value;
  const grade = filterGrade.value;
  const unit = (filterUnit.value || '').trim().toLowerCase();
  const from = filterDateFrom.value ? new Date(filterDateFrom.value).getTime() : null;
  const to = filterDateTo.value ? new Date(filterDateTo.value).getTime() + (24*60*60*1000 - 1) : null;
  filteredEvents = currentEvents.filter(e => {
    const okSubj = subj ? (e.subject === subj) : true;
    const okGrade = grade ? (String(e.grade||'') === grade) : true;
    const okUnit = unit ? (String(e.unit||'').toLowerCase().includes(unit)) : true;
    const okFrom = from ? (e.ts >= from) : true;
    const okTo = to ? (e.ts <= to) : true;
    return okSubj && okGrade && okUnit && okFrom && okTo;
  });
  renderDashboard(currentEvents);
}

function showDashboardUI() {
  authGate.hidden = true;
  dashHeader.hidden = false;
  controlPanel.hidden = false;
  statsOverview.hidden = false;
  leaderboardCard.hidden = false;
  resultsTableCard.hidden = false;
  studentProgressCard.hidden = false;
  filterBar.hidden = false;
  studentRosterCard.hidden = false;
  videoUploadCard.hidden = false;
}

function requireAuth() {
  const authed = sessionStorage.getItem('learnable_teacher_authed') === 'true';
  if (authed) {
    showDashboardUI();
    loadLocalData();
  } else {
    authGate.hidden = false;
  }
}

loginBtn && (loginBtn.onclick = () => {
  const code = (teacherCodeInput.value || '').trim();
  // Simple passcode for demo; replace with real auth in production
  const PASSCODE = '123';
  if (code === PASSCODE) {
    sessionStorage.setItem('learnable_teacher_authed', 'true');
    showDashboardUI();
    loadLocalData();
  } else {
    alert('Invalid code');
  }
});

logoutBtn && (logoutBtn.onclick = () => {
  sessionStorage.removeItem('learnable_teacher_authed');
  location.reload();
});

applyFiltersBtn && (applyFiltersBtn.onclick = applyFilters);
clearFiltersBtn && (clearFiltersBtn.onclick = () => {
  filterSubject.value = '';
  filterGrade.value = '';
  filterUnit.value = '';
  filterDateFrom.value = '';
  filterDateTo.value = '';
  filteredEvents = [];
  renderDashboard(currentEvents);
});

// Load data function - tries Firebase first, falls back to local
async function loadData() {
  try {
    // Try to load from Firebase first (shared data from all devices)
    if (window.fetchFirebaseEvents) {
      const events = await window.fetchFirebaseEvents();
      console.log(`Loaded ${events.length} events from Firebase`);
      renderDashboard(events);
      
      // Update sync button status
      if (syncLocalDataBtn) {
        syncLocalDataBtn.textContent = '🔄 Sync Local Data';
        syncLocalDataBtn.disabled = false;
      }
      return;
    }
  } catch (error) {
    console.warn('Failed to load from Firebase, falling back to local data:', error);
  }
  
  // Fallback to local data
  const raw = localStorage.getItem(EVENTS_KEY);
  const events = raw ? JSON.parse(raw) : [];
  console.log(`Loaded ${events.length} events from local storage`);
  renderDashboard(events);
  
  // Update sync button status for local data
  if (syncLocalDataBtn) {
    syncLocalDataBtn.textContent = '🔄 Sync Local Data';
    syncLocalDataBtn.disabled = false;
  }
}

// Load local data function (for backward compatibility)
function loadLocalData() {
  loadData();
}

document.addEventListener('DOMContentLoaded', () => {
  requireAuth();
  // Keep upload form's topic list in sync with Firebase in real time
  try {
    if (window.firebaseDb) {
      window.firebaseDb.ref('/videos').on('value', () => {
        refreshTopicOptions();
      });
    }
  } catch (e) {
    console.warn('Realtime listener for upload topics failed:', e);
  }
});

function loadVideos() {
  const raw = localStorage.getItem(VIDEOS_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveVideos(videos) {
  localStorage.setItem(VIDEOS_KEY, JSON.stringify(videos));
}

function getExistingTopics(subject, grade, unit) {
  const list = loadVideos();
  const topics = new Set();
  list.forEach(v => {
    const okSubj = subject ? v.subject === subject : true;
    const okGrade = grade ? String(v.grade) === String(grade) : true;
    const okUnit = unit ? String(v.unit) === String(unit) : true;
    if (okSubj && okGrade && okUnit && v.topic) topics.add(v.topic);
  });
  return Array.from(topics).sort((a,b)=>a.localeCompare(b));
}

function refreshTopicOptions() {
  if (!vuTopic) return;
  const subject = vuSubject.value;
  const grade = vuGrade.value;
  const unit = vuUnit.value;
  const topics = getExistingTopics(subject, grade, unit);
  const current = vuTopic.value;
  vuTopic.innerHTML = '';
  const defaultOpt = document.createElement('option');
  defaultOpt.value = '';
  defaultOpt.textContent = 'Select Topic';
  vuTopic.appendChild(defaultOpt);
  topics.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t;
    opt.textContent = t;
    vuTopic.appendChild(opt);
  });
  const customOpt = document.createElement('option');
  customOpt.value = '__custom';
  customOpt.textContent = '➕ Custom topic…';
  vuTopic.appendChild(customOpt);
  if ([...vuTopic.options].some(o => o.value === current)) {
    vuTopic.value = current;
  } else {
    vuTopic.value = '';
  }
  toggleCustomTopic();
}

function toggleCustomTopic() {
  if (!vuTopic || !vuTopicCustomWrap) return;
  const isCustom = vuTopic.value === '__custom';
  vuTopicCustomWrap.style.display = isCustom ? 'block' : 'none';
}

vuSubject && (vuSubject.onchange = refreshTopicOptions);
vuGrade && (vuGrade.onchange = refreshTopicOptions);
vuUnit && (vuUnit.onchange = refreshTopicOptions);
vuTopic && (vuTopic.onchange = toggleCustomTopic);

document.addEventListener('DOMContentLoaded', () => {
  refreshTopicOptions();
});

vuSave && (vuSave.onclick = () => {
  const subject = vuSubject.value;
  const grade = vuGrade.value;
  const unit = vuUnit.value;
  const topic = vuTopic.value === '__custom' ? (vuTopicCustom.value||'').trim() : vuTopic.value;
  const url = (vuURL.value||'').trim();
  const autoTitle = `${subject} • Class ${grade} • Unit ${unit}${topic ? ' — ' + topic : ''}`;

  const video = {
    id: `vid_${Date.now()}`,
    title: autoTitle,
    subject,
    grade,
    unit,
    topic: topic || '',
    url,
    ts: Date.now()
  };
  if (!url) {
    alert('Please enter the Video URL');
    return;
  }
  // Save locally
  const videos = loadVideos();
  videos.push(video);
  saveVideos(videos);
  // Push to Firebase if available
  if (window.pushVideoToFirebase) {
    window.pushVideoToFirebase(video).catch(err => {
      console.warn('Video sync to Firebase failed. It will remain locally.', err);
    });
  }
  alert('Saved. This video will sync across devices when online.');
  vuTopic.value = '';
  vuTopicCustom.value = '';
  vuURL.value = '';
  refreshTopicOptions();
});

