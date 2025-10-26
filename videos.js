// Video Library logic with dynamic Unit/Topic selects populated from saved uploads
const VIDEOS_KEY = 'learnable_videos_library';

const vSubject = document.getElementById('vSubject');
const vGrade = document.getElementById('vGrade');
const vUnit = document.getElementById('vUnit');
const vTopic = document.getElementById('vTopic');
const vApply = document.getElementById('vApply');
const vClear = document.getElementById('vClear');
const videoGrid = document.getElementById('videoGrid');

let videosCache = null;

async function getAllVideos() {
  // Try Firebase first
  try {
    if (window.fetchFirebaseVideos) {
      const remote = await window.fetchFirebaseVideos();
      if (Array.isArray(remote) && remote.length > 0) {
        // Merge remote into local cache to keep offline
        localStorage.setItem(VIDEOS_KEY, JSON.stringify(remote));
        videosCache = remote;
        return videosCache;
      }
    }
  } catch (e) {
    console.warn('Failed to fetch videos from Firebase, using local cache.', e);
  }
  const raw = localStorage.getItem(VIDEOS_KEY);
  videosCache = raw ? JSON.parse(raw) : [];
  return videosCache;
}

async function populateTopics() {
  if (!vTopic) return;
  const subject = vSubject.value;
  const grade = vGrade.value;
  const unit = vUnit.value;
  const list = await getAllVideos();
  const topics = new Set();
  list.forEach(v => {
    const okSubj = subject ? v.subject === subject : true;
    const okGrade = grade ? String(v.grade) === String(grade) : true;
    const okUnit = unit ? String(v.unit) === String(unit) : true;
    if (okSubj && okGrade && okUnit && v.topic) topics.add(v.topic);
  });
  const current = vTopic.value;
  vTopic.innerHTML = '';
  const allOpt = document.createElement('option');
  allOpt.value = '';
  allOpt.textContent = 'All Topics';
  vTopic.appendChild(allOpt);
  Array.from(topics).sort((a,b)=>a.localeCompare(b)).forEach(t => {
    const opt = document.createElement('option');
    opt.value = t; opt.textContent = t;
    vTopic.appendChild(opt);
  });
  if ([...vTopic.options].some(o => o.value === current)) {
    vTopic.value = current;
  } else {
    vTopic.value = '';
  }
}

async function renderVideos() {
  const list = await getAllVideos();
  const subject = vSubject.value;
  const grade = vGrade.value;
  const unit = vUnit.value;
  const topic = vTopic.value;
  const filtered = list.filter(v => {
    const okSubj = subject ? v.subject === subject : true;
    const okGrade = grade ? String(v.grade) === String(grade) : true;
    const okUnit = unit ? String(v.unit) === String(unit) : true;
    const okTopic = topic ? v.topic === topic : true;
    return okSubj && okGrade && okUnit && okTopic;
  });
  videoGrid.innerHTML = '';
  if (filtered.length === 0) {
    videoGrid.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🎞️</div><div class="empty-state-text">No videos found</div><div class="empty-state-subtext">Try different filters</div></div>';
    return;
  }
  filtered.forEach(v => {
    const card = document.createElement('div');
    card.className = 'student-card';
    card.innerHTML = `
      <div class="student-card-header">
        <div class="student-card-name">${v.title || (v.topic || 'Untitled')}</div>
        <div class="student-card-level">${v.subject} • Class ${v.grade}${v.unit ? ' • Unit '+v.unit : ''}</div>
      </div>
      <div style="display:flex; flex-direction:column; gap:8px;">
        <a href="${v.url}" target="_blank" class="btn btn-secondary" style="text-decoration:none; text-align:center;">Open Video</a>
        ${v.topic ? `<div class="muted">Topic: ${v.topic}</div>` : ''}
      </div>
    `;
    videoGrid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populateTopics();
  renderVideos();
  // Realtime updates
  try {
    if (window.firebaseDb) {
      window.firebaseDb.ref('/videos').on('value', snapshot => {
        const data = snapshot.val();
        const arr = data ? Object.values(data) : [];
        localStorage.setItem(VIDEOS_KEY, JSON.stringify(arr));
        videosCache = arr;
        populateTopics();
        renderVideos();
      });
    }
  } catch (e) {
    console.warn('Realtime video listener not available:', e);
  }
});

vSubject && (vSubject.onchange = () => { populateTopics(); renderVideos(); });
vGrade && (vGrade.onchange = () => { populateTopics(); renderVideos(); });
vUnit && (vUnit.onchange = () => { populateTopics(); renderVideos(); });
vTopic && (vTopic.onchange = renderVideos);

vApply && (vApply.onclick = renderVideos);
vClear && (vClear.onclick = () => {
  vSubject.value = '';
  vGrade.value = '';
  vUnit.value = '';
  vTopic.value = '';
  populateTopics();
  renderVideos();
});
