// ============================================================
//  SpeakSync — index.js  (Redesigned)
//  Features:
//   • Category filter tabs → wheel shows topics from that category
//   • Wheel shows 16 topics at a time (from selected category pool)
//   • Beautiful wheel with color-coded segments per category
//   • Live WPM + word/filler counters during speech
//   • Score grades (A/B/C/D), achievement badges
//   • Session history with category tags
// ============================================================

// ──────────────────────────────────────────────────
//  ALL TOPICS
// ──────────────────────────────────────────────────
const TOPICS = [
  { t:"Impact of Social Media on Students", c:"Group Discussion" },
  { t:"Online Learning vs Offline Learning", c:"Group Discussion" },
  { t:"Should Mobile Phones Be Allowed in Classrooms?", c:"Group Discussion" },
  { t:"Role of AI in Daily Life", c:"Group Discussion" },
  { t:"Climate Change Awareness", c:"Group Discussion" },
  { t:"Importance of Teamwork", c:"Group Discussion" },
  { t:"Work From Home Culture", c:"Group Discussion" },
  { t:"Is Technology Making Us Lazy?", c:"Group Discussion" },
  { t:"Future of Electric Vehicles", c:"Group Discussion" },
  { t:"Gaming Addiction Among Youth", c:"Group Discussion" },
  { t:"Digital Payments in India", c:"Group Discussion" },
  { t:"Advantages of Smart Cities", c:"Group Discussion" },
  { t:"Importance of Mental Health", c:"Group Discussion" },
  { t:"Should Attendance Be Mandatory?", c:"Group Discussion" },
  { t:"Space Exploration Benefits", c:"Group Discussion" },
  { t:"Women Empowerment in India", c:"Group Discussion" },
  { t:"Internet Privacy Concerns", c:"Group Discussion" },
  { t:"Importance of Time Management", c:"Group Discussion" },
  { t:"Impact of OTT Platforms", c:"Group Discussion" },
  { t:"Future of Cryptocurrency", c:"Group Discussion" },
  { t:"Role of Youth in Nation Building", c:"Group Discussion" },
  { t:"Artificial Intelligence in Education", c:"Group Discussion" },
  { t:"Fast Food Culture", c:"Group Discussion" },
  { t:"Importance of Reading Books", c:"Group Discussion" },
  { t:"Should Exams Be Removed?", c:"Group Discussion" },
  { t:"Importance of Financial Literacy", c:"Group Discussion" },
  { t:"Cybersecurity Awareness", c:"Group Discussion" },
  { t:"Advantages of Cloud Computing", c:"Group Discussion" },
  { t:"Remote Jobs and Future Careers", c:"Group Discussion" },
  { t:"Role of Communication Skills", c:"Group Discussion" },
  { t:"Can Machines Replace Humans?", c:"Group Discussion" },
  { t:"Future of Robotics", c:"Group Discussion" },
  { t:"Importance of Discipline", c:"Group Discussion" },
  { t:"AI vs Human Creativity", c:"Group Discussion" },
  { t:"Startup Culture in India", c:"Group Discussion" },
  { t:"Impact of Technology on Jobs", c:"Group Discussion" },
  { t:"Importance of Public Speaking", c:"Group Discussion" },
  { t:"Ethics in Artificial Intelligence", c:"Group Discussion" },
  { t:"Future of Digital Education", c:"Group Discussion" },
  { t:"Can AI Become Dangerous?", c:"Group Discussion" },
  { t:"Future of Smart Homes", c:"Group Discussion" },
  { t:"Role of Internet in Education", c:"Group Discussion" },
  { t:"Should Coding Be Mandatory?", c:"Group Discussion" },
  { t:"Future of Cashless Economy", c:"Group Discussion" },
  { t:"Can Humans Live on Mars?", c:"Group Discussion" },
  { t:"Future of AI Assistants", c:"Group Discussion" },
  { t:"Can AI Replace Doctors?", c:"Group Discussion" },
  { t:"Future of Green Energy", c:"Group Discussion" },
  { t:"Future of Biotechnology", c:"Group Discussion" },
  { t:"Technology and Human Dependency", c:"Group Discussion" },

  { t:"Should AI Replace Human Jobs?", c:"Debate" },
  { t:"Is Social Media Harmful?", c:"Debate" },
  { t:"Should Coding Be Mandatory in Schools?", c:"Debate" },
  { t:"Online Classes Are Better Than Offline Classes", c:"Debate" },
  { t:"Can Technology Destroy Human Creativity?", c:"Debate" },
  { t:"Should College Attendance Be Optional?", c:"Debate" },
  { t:"Is Remote Work Better Than Office Work?", c:"Debate" },
  { t:"Should Exams Be Abolished?", c:"Debate" },
  { t:"Can Robots Replace Humans?", c:"Debate" },
  { t:"Is Privacy Dead in Digital Age?", c:"Debate" },
  { t:"Should Mobile Phones Be Banned in Schools?", c:"Debate" },
  { t:"Is AI Dangerous for Humanity?", c:"Debate" },
  { t:"Can Cryptocurrency Replace Cash?", c:"Debate" },
  { t:"Should Space Exploration Continue?", c:"Debate" },
  { t:"Are Video Games Beneficial?", c:"Debate" },
  { t:"Should Social Media Have Age Restrictions?", c:"Debate" },
  { t:"Can Machines Think Like Humans?", c:"Debate" },
  { t:"Should Students Focus Only on Marks?", c:"Debate" },
  { t:"Is Technology Making People Less Social?", c:"Debate" },
  { t:"Should Internet Access Be a Basic Right?", c:"Debate" },

  { t:"Importance of Active Listening", c:"Communication" },
  { t:"How to Speak Confidently", c:"Communication" },
  { t:"Body Language in Communication", c:"Communication" },
  { t:"How to Handle Stage Fear", c:"Communication" },
  { t:"Importance of Eye Contact", c:"Communication" },
  { t:"Professional Email Etiquette", c:"Communication" },
  { t:"How to Improve Vocabulary", c:"Communication" },
  { t:"Speaking Clearly Under Pressure", c:"Communication" },
  { t:"How to Give Presentations", c:"Communication" },
  { t:"Power of Storytelling", c:"Communication" },
  { t:"Communication in Teamwork", c:"Communication" },
  { t:"How to Start a Conversation", c:"Communication" },
  { t:"Role of Confidence in Speaking", c:"Communication" },
  { t:"How to Handle Interviews", c:"Communication" },
  { t:"Importance of Tone of Voice", c:"Communication" },
  { t:"Verbal vs Non Verbal Communication", c:"Communication" },
  { t:"How to Become a Better Listener", c:"Communication" },
  { t:"How to Overcome Hesitation", c:"Communication" },
  { t:"Importance of Group Discussions", c:"Communication" },
  { t:"How to Build Speaking Confidence", c:"Communication" },
  { t:"How to Improve Pronunciation", c:"Communication" },
  { t:"How to Control Nervousness", c:"Communication" },
  { t:"How to Engage an Audience", c:"Communication" },
  { t:"How to Become a Better Speaker", c:"Communication" },
  { t:"How to Speak in Public Effectively", c:"Communication" },
  { t:"How to Answer Unexpected Questions", c:"Communication" },
  { t:"How to Speak Persuasively", c:"Communication" },
  { t:"Communication for Career Growth", c:"Communication" },
  { t:"How to Improve Stage Presence", c:"Communication" },
  { t:"How to Deliver Effective Speeches", c:"Communication" },

  { t:"Describe Your Dream Job", c:"Impromptu" },
  { t:"A Lesson You Learned From Failure", c:"Impromptu" },
  { t:"If You Could Travel Anywhere", c:"Impromptu" },
  { t:"Your Favorite Teacher", c:"Impromptu" },
  { t:"A Memorable Childhood Moment", c:"Impromptu" },
  { t:"The Most Important Skill", c:"Impromptu" },
  { t:"A Book That Changed You", c:"Impromptu" },
  { t:"What Success Means to You", c:"Impromptu" },
  { t:"Your Biggest Motivation", c:"Impromptu" },
  { t:"What Makes a Good Leader?", c:"Impromptu" },
  { t:"The Value of Time", c:"Impromptu" },
  { t:"Your Biggest Fear", c:"Impromptu" },
  { t:"How Technology Changed Life", c:"Impromptu" },
  { t:"A Challenge You Overcame", c:"Impromptu" },
  { t:"The Meaning of True Success", c:"Impromptu" },
  { t:"The Power of Positive Thinking", c:"Impromptu" },
  { t:"How to Handle Failure", c:"Impromptu" },
  { t:"The Role of Technology in Education", c:"Impromptu" },
  { t:"The Best Advice You Ever Received", c:"Impromptu" },
  { t:"How to Build Confidence", c:"Impromptu" },
  { t:"A Life Without Internet", c:"Impromptu" },
  { t:"How to Manage Stress", c:"Impromptu" },
  { t:"What Does Leadership Mean?", c:"Impromptu" },
  { t:"Why Reading Books Matters", c:"Impromptu" },
  { t:"How Music Affects Life", c:"Impromptu" },
  { t:"What Makes You Happy?", c:"Impromptu" },
  { t:"Describe Your Daily Routine", c:"Impromptu" },
  { t:"The Power of Small Habits", c:"Impromptu" },
  { t:"What Freedom Means to You", c:"Impromptu" },
  { t:"The Importance of Responsibility", c:"Impromptu" },

  { t:"What Makes a Leader?", c:"Leadership" },
  { t:"Importance of Vision", c:"Leadership" },
  { t:"How to Build a Team", c:"Leadership" },
  { t:"Role of Empathy in Leadership", c:"Leadership" },
  { t:"Importance of Lifelong Learning", c:"Leadership" },
  { t:"The Value of Persistence", c:"Leadership" },
  { t:"How Leaders Solve Problems", c:"Leadership" },
  { t:"Importance of Integrity", c:"Leadership" },
  { t:"How to Build Mental Strength", c:"Leadership" },
  { t:"How to Develop a Winning Mindset", c:"Leadership" },
  { t:"The Role of Creativity in Leadership", c:"Leadership" },
  { t:"How to Build Trust in Teams", c:"Leadership" },
  { t:"Importance of Self Discipline", c:"Leadership" },
  { t:"How to Handle Criticism", c:"Leadership" },
  { t:"The Importance of Taking Risks", c:"Leadership" },
  { t:"How to Stay Calm Under Pressure", c:"Leadership" },
  { t:"The Importance of Passion", c:"Leadership" },
  { t:"How to Encourage Team Collaboration", c:"Leadership" },
  { t:"The Role of Motivation in Success", c:"Leadership" },
  { t:"Importance of Optimism", c:"Leadership" },
  { t:"How to Stay Consistent With Goals", c:"Leadership" },
  { t:"How Leaders Build Strong Teams", c:"Leadership" },
  { t:"Importance of Self Awareness", c:"Leadership" },
  { t:"How to Build Resilience", c:"Leadership" },
  { t:"How to Become More Responsible", c:"Leadership" },
  { t:"How Leaders Handle Failure", c:"Leadership" },
  { t:"How to Build a Positive Attitude", c:"Leadership" },
  { t:"How to Lead by Example", c:"Leadership" },
  { t:"Importance of Visionary Thinking", c:"Leadership" },
  { t:"How to Achieve Long Term Success", c:"Leadership" },

  { t:"Why Algorithm Efficiency Matters", c:"BTech CSE" },
  { t:"Object Oriented Programming Concepts", c:"BTech CSE" },
  { t:"Operating System Scheduling", c:"BTech CSE" },
  { t:"DBMS Normalization", c:"BTech CSE" },
  { t:"TCP vs UDP", c:"BTech CSE" },
  { t:"What is Cloud Computing?", c:"BTech CSE" },
  { t:"Cybersecurity Threats", c:"BTech CSE" },
  { t:"Machine Learning Basics", c:"BTech CSE" },
  { t:"How Blockchain Works", c:"BTech CSE" },
  { t:"Artificial Intelligence Applications", c:"BTech CSE" },
  { t:"Difference Between Stack and Queue", c:"BTech CSE" },
  { t:"Monolithic vs Microservices", c:"BTech CSE" },
  { t:"Big O Notation", c:"BTech CSE" },
  { t:"SQL vs NoSQL", c:"BTech CSE" },
  { t:"REST API Basics", c:"BTech CSE" },
  { t:"Future of Quantum Computing", c:"BTech CSE" },
  { t:"Importance of Clean Code", c:"BTech CSE" },
  { t:"Software Development Life Cycle", c:"BTech CSE" },
  { t:"How Search Engines Work", c:"BTech CSE" },
  { t:"Role of AI in Healthcare", c:"BTech CSE" },
  { t:"Difference Between Process and Thread", c:"BTech CSE" },
  { t:"Importance of Database Indexing", c:"BTech CSE" },
  { t:"Introduction to Ethical Hacking", c:"BTech CSE" },
  { t:"How Recommendation Systems Work", c:"BTech CSE" },
  { t:"Importance of UI and UX Design", c:"BTech CSE" },
  { t:"Introduction to Internet of Things", c:"BTech CSE" },
  { t:"How Encryption Protects Data", c:"BTech CSE" },
  { t:"Agile vs Waterfall Model", c:"BTech CSE" },
  { t:"Importance of Software Testing", c:"BTech CSE" },
  { t:"Role of DevOps in Software Development", c:"BTech CSE" },
  { t:"How Social Media Algorithms Work", c:"BTech CSE" },
  { t:"Future of Artificial Intelligence", c:"BTech CSE" },
  { t:"Applications of Computer Vision", c:"BTech CSE" },
  { t:"Introduction to Neural Networks", c:"BTech CSE" },
  { t:"Importance of Open Source Software", c:"BTech CSE" },
  { t:"Future of Robotics", c:"BTech CSE" },
  { t:"Applications of Augmented Reality", c:"BTech CSE" },
  { t:"Difference Between AI and ML", c:"BTech CSE" },
  { t:"Introduction to Full Stack Development", c:"BTech CSE" },
  { t:"Basics of Computer Architecture", c:"BTech CSE" },
  { t:"How Chatbots Work", c:"BTech CSE" },
  { t:"How Load Balancers Work", c:"BTech CSE" },
  { t:"Introduction to Edge Computing", c:"BTech CSE" },
  { t:"Applications of Big Data", c:"BTech CSE" },
  { t:"Future of Human Computer Interaction", c:"BTech CSE" },
  { t:"Role of AI in Self Driving Cars", c:"BTech CSE" },
  { t:"Difference Between Authentication and Authorization", c:"BTech CSE" },
  { t:"Applications of Quantum Computing", c:"BTech CSE" },
  { t:"Future of 6G Networks", c:"BTech CSE" },
  { t:"Importance of Innovation in Technology", c:"BTech CSE" },
];

// ──────────────────────────────────────────────────
//  CONSTANTS
// ──────────────────────────────────────────────────
const PREP_TIME  = 60;
const SPEAK_TIME = 100;
const SEGMENTS   = 16;
const FILLER_WORDS = ['um','uh','like','you know','basically','literally','right','so','actually','kind of','sort of','i mean','well','anyway','okay','hmm','aaa'];

// Category color map
const CAT_COLORS = {
  "Group Discussion": { bg: '#0d1f18', arc: '#4dffa6' },
  "Debate":           { bg: '#1a100d', arc: '#ff7a4d' },
  "Communication":    { bg: '#0d1525', arc: '#4dd9ff' },
  "Impromptu":        { bg: '#1a1a0d', arc: '#ffd94d' },
  "Leadership":       { bg: '#150d1a', arc: '#c47aff' },
  "BTech CSE":        { bg: '#0d1825', arc: '#4da9ff' },
  "ALL":              { bg: '#111827', arc: '#4dffa6' },
};

// ──────────────────────────────────────────────────
//  STATE
// ──────────────────────────────────────────────────
let state = {
  screen: 'start',
  topic: null,
  spinning: false,
  prepTimer: null,
  speakTimer: null,
  prepLeft: PREP_TIME,
  speakLeft: SPEAK_TIME,
  transcript: '',
  interimTranscript: '',
  recognition: null,
  recognitionActive: false,
  history: [],
  selectedCategory: 'ALL',
};

// ──────────────────────────────────────────────────
//  WHEEL
// ──────────────────────────────────────────────────
const canvas = document.getElementById('wheelCanvas');
const ctx    = canvas.getContext('2d');
let wheelAngle    = 0;
let wheelAnimFrame = null;
let wheelTopics   = [];

// HiDPI / Retina fix — render at 2x for crisp text
(function scaleCanvasForDPR() {
  const dpr = window.devicePixelRatio || 1;
  const logicalSize = canvas.width; // 480
  canvas.width  = logicalSize * dpr;
  canvas.height = logicalSize * dpr;
  canvas.style.width  = logicalSize + 'px';
  canvas.style.height = logicalSize + 'px';
  ctx.scale(dpr, dpr);
})();

function getPoolTopics() {
  const cat = state.selectedCategory;
  const pool = cat === 'ALL' ? TOPICS : TOPICS.filter(t => t.c === cat);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, SEGMENTS);
}

function drawWheel(angle) {
  const size = parseInt(canvas.style.width) || 480; // use logical CSS size
  const cx = size / 2, cy = size / 2, r = size / 2 - 6;
  ctx.clearRect(0, 0, size, size);
  const arc = (Math.PI * 2) / SEGMENTS;

  for (let i = 0; i < SEGMENTS; i++) {
    const topic = wheelTopics[i];
    const cat   = topic ? topic.c : 'ALL';
    const colors = CAT_COLORS[cat] || CAT_COLORS['ALL'];

    const start = angle + i * arc;
    const end   = start + arc;

    // Slice fill
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, start, end);
    ctx.closePath();
    ctx.fillStyle = i % 2 === 0 ? colors.bg : adjustHex(colors.bg, 8);
    ctx.fill();

    // Border
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Accent arc (outer rim highlight)
    ctx.beginPath();
    ctx.arc(cx, cy, r - 3, start + 0.05, end - 0.05);
    ctx.strokeStyle = colors.arc;
    ctx.lineWidth = 3;
    ctx.stroke();

    // Text
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(start + arc / 2);
    ctx.textAlign = 'right';

    // Topic text
    const label = topic ? truncate(topic.t, 20) : '';
    ctx.font = `700 ${size > 400 ? 12.5 : 10}px Outfit, sans-serif`;
    ctx.fillStyle = '#f0f3ff';
    ctx.fillText(label, r - 14, -2);

    // Category micro label
    if (size > 400 && topic) {
      ctx.font = `600 8px Outfit, sans-serif`;
      ctx.fillStyle = colors.arc;
      ctx.globalAlpha = 0.85;
      ctx.fillText(topic.c.slice(0, 8), r - 14, 9);
      ctx.globalAlpha = 1;
    }

    ctx.restore();
  }

  // Outer ring glow
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(63,255,170,0.25)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Center hole
  ctx.beginPath();
  ctx.arc(cx, cy, 40, 0, Math.PI * 2);
  ctx.fillStyle = '#050810';
  ctx.fill();
  ctx.strokeStyle = 'rgba(63,255,170,0.5)';
  ctx.lineWidth = 2;
  ctx.stroke();
}

function truncate(str, max) {
  return str.length > max ? str.slice(0, max - 1) + '…' : str;
}

function adjustHex(hex, amount) {
  // Lighten a hex color slightly
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, ((num >> 16) & 0xff) + amount);
  const g = Math.min(255, ((num >> 8)  & 0xff) + amount);
  const b = Math.min(255,  (num        & 0xff) + amount);
  return `rgb(${r},${g},${b})`;
}

function spinWheel() {
  if (state.spinning) return;
  state.spinning = true;
  wheelTopics = getPoolTopics();

  const btnSpin  = document.getElementById('btnSpin');
  const btnStart = document.getElementById('btnStart');
  btnSpin.disabled  = true;
  btnStart.disabled = true;

  const topicEl = document.getElementById('topicText');
  topicEl.textContent = 'Spinning…';
  topicEl.classList.remove('revealed');
  document.getElementById('topicCategory').textContent = '—';

  const card = document.getElementById('topicRevealCard');
  card.classList.remove('has-topic');

  canvas.classList.add('spinning');

  const spinCount  = 6 + Math.random() * 6;
  const targetAngle = wheelAngle + spinCount * Math.PI * 2;
  const startAngle  = wheelAngle;
  const duration    = 3800 + Math.random() * 1400;
  const startTime   = performance.now();

  function ease(t) { return 1 - Math.pow(1 - t, 5); }

  function animate(now) {
    const t = Math.min((now - startTime) / duration, 1);
    wheelAngle = startAngle + (targetAngle - startAngle) * ease(t);
    drawWheel(wheelAngle);

    if (t < 1) {
      wheelAnimFrame = requestAnimationFrame(animate);
    } else {
      wheelAngle = targetAngle;
      drawWheel(wheelAngle);
      canvas.classList.remove('spinning');
      state.spinning = false;

      // Determine selected segment
      const arc = (Math.PI * 2) / SEGMENTS;
      const normalAngle = ((wheelAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
      const topAngle    = (Math.PI * 1.5 - normalAngle + Math.PI * 2) % (Math.PI * 2);
      const idx         = Math.floor(topAngle / arc) % SEGMENTS;
      const selected    = wheelTopics[idx] || wheelTopics[0];
      state.topic = selected;

      // Reveal animation
      topicEl.style.opacity = '0';
      topicEl.style.transform = 'translateY(6px)';
      setTimeout(() => {
        topicEl.textContent = selected.t;
        topicEl.classList.add('revealed', 'topic-pop');
        topicEl.style.opacity = '1';
        topicEl.style.transform = 'translateY(0)';

        const catPill = document.getElementById('topicCategory');
        catPill.textContent = selected.c;
        catPill.style.color = (CAT_COLORS[selected.c] || CAT_COLORS['ALL']).arc;

        card.classList.add('has-topic');

        btnSpin.disabled  = false;
        btnStart.disabled = false;
      }, 120);
    }
  }
  requestAnimationFrame(animate);
}

// ──────────────────────────────────────────────────
//  CATEGORY TABS
// ──────────────────────────────────────────────────
document.getElementById('catTabs').addEventListener('click', (e) => {
  const btn = e.target.closest('.cat-tab');
  if (!btn) return;
  document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.selectedCategory = btn.dataset.cat;
  // Refresh wheel for new category
  wheelTopics = getPoolTopics();
  drawWheel(wheelAngle);
  // Reset topic selection
  document.getElementById('topicText').textContent = 'Spin the wheel to begin →';
  document.getElementById('topicText').classList.remove('revealed');
  document.getElementById('topicCategory').textContent = '—';
  document.getElementById('topicRevealCard').classList.remove('has-topic');
  document.getElementById('btnStart').disabled = true;
  state.topic = null;
});

// ──────────────────────────────────────────────────
//  PHASE BAR
// ──────────────────────────────────────────────────
function setPhase(n) {
  ['ps1','ps2','ps3','ps4'].forEach((id, i) => {
    const el = document.getElementById(id);
    el.className = 'phase-step';
    if (i < n)     el.classList.add('done');
    if (i === n - 1) { el.classList.remove('done'); el.classList.add('active'); }
  });
}

function showScreen(id) {
  ['screen-start','screen-prep','screen-speak','screen-done'].forEach(s => {
    document.getElementById(s).classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// ──────────────────────────────────────────────────
//  PREP
// ──────────────────────────────────────────────────
function startPrep() {
  if (!state.topic) return;
  document.getElementById('prepTopicDisplay').textContent = state.topic.t;
  setPhase(1);
  showScreen('screen-prep');
  state.prepLeft = PREP_TIME;
  updatePrepTimer();
  state.prepTimer = setInterval(() => {
    state.prepLeft--;
    updatePrepTimer();
    if (state.prepLeft <= 0) { clearInterval(state.prepTimer); startSpeaking(); }
  }, 1000);
}

function updatePrepTimer() {
  const m = Math.floor(state.prepLeft / 60);
  const s = state.prepLeft % 60;
  document.getElementById('prepTimerDisplay').textContent = `${m}:${s.toString().padStart(2,'0')}`;
  const circ   = 597; // 2π × 95
  const offset = circ * (1 - state.prepLeft / PREP_TIME);
  const ring   = document.getElementById('prepRing');
  ring.style.strokeDashoffset = offset;
  ring.style.stroke = state.prepLeft <= 10 ? 'var(--red)' : 'var(--accent)';
}

function skipPrep() {
  clearInterval(state.prepTimer);
  startSpeaking();
}

// ──────────────────────────────────────────────────
//  SPEAK
// ──────────────────────────────────────────────────
function startSpeaking() {
  document.getElementById('speakTopicDisplay').textContent = state.topic.t;
  setPhase(2);
  showScreen('screen-speak');
  state.transcript = '';
  state.interimTranscript = '';
  state.speakLeft = SPEAK_TIME;
  updateSpeakTimer();
  updateTranscriptLive();
  initSpeechRecognition();

  state.speakTimer = setInterval(() => {
    state.speakLeft--;
    updateSpeakTimer();
    updateLiveStats();
    if (state.speakLeft <= 0) { clearInterval(state.speakTimer); finishSpeaking(); }
  }, 1000);
}

function updateSpeakTimer() {
  const m = Math.floor(state.speakLeft / 60);
  const s = state.speakLeft % 60;
  document.getElementById('speakTimerDisplay').textContent = `${m}:${s.toString().padStart(2,'0')}`;
  const circ   = 471; // 2π × 75
  const offset = circ * (1 - state.speakLeft / SPEAK_TIME);
  const ring   = document.getElementById('speakRing');
  ring.style.strokeDashoffset = offset;
  ring.style.stroke = state.speakLeft <= 20 ? 'var(--red)' : state.speakLeft <= 40 ? 'var(--warn)' : 'var(--accent)';
}

function updateLiveStats() {
  const words = state.transcript.trim().split(/\s+/).filter(w => w.length > 0);
  const wc    = words.length;
  const elapsed = Math.max(1, SPEAK_TIME - state.speakLeft);
  const wpm   = Math.round(wc / (elapsed / 60));
  const fc    = words.filter(w => FILLER_WORDS.some(f => w.toLowerCase().replace(/[^a-z ]/g,'').includes(f))).length;

  document.getElementById('liveWordCount').textContent  = wc;
  document.getElementById('liveFillerCount').textContent = fc;
  document.getElementById('liveWpm').textContent = wc > 0 ? `${wpm} WPM` : '— WPM';
}

function initSpeechRecognition() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    document.getElementById('noMicWarn').style.display = 'block';
    document.getElementById('waveform').classList.add('paused');
    return;
  }
  const rec = new SR();
  rec.continuous      = true;
  rec.interimResults  = true;
  rec.lang            = 'en-US';
  state.recognition   = rec;

  rec.onresult = (e) => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const t = e.results[i][0].transcript;
      if (e.results[i].isFinal) state.transcript += t + ' ';
      else interim += t;
    }
    state.interimTranscript = interim;
    updateTranscriptLive();
  };

  rec.onerror = (e) => {
    if (e.error === 'not-allowed' || e.error === 'audio-capture') {
      document.getElementById('noMicWarn').style.display = 'block';
      document.getElementById('waveform').classList.add('paused');
    }
  };

  rec.onend = () => {
    if (state.speakLeft > 0 && state.recognitionActive) {
      try { rec.start(); } catch(e) {}
    }
  };

  state.recognitionActive = true;
  try { rec.start(); } catch(e) {}
}

function updateTranscriptLive() {
  const el   = document.getElementById('transcriptLive');
  const full = state.transcript + (state.interimTranscript ? `<span class="interim">${state.interimTranscript}</span>` : '');
  if (full.trim()) {
    el.innerHTML = full;
    const ph = document.getElementById('transcriptPlaceholder');
    if (ph) ph.style.display = 'none';
    el.scrollTop = el.scrollHeight;
  }
}

function stopSpeaking() {
  clearInterval(state.speakTimer);
  finishSpeaking();
}

function finishSpeaking() {
  state.recognitionActive = false;
  if (state.recognition) {
    try { state.recognition.stop(); } catch(e) {}
    state.recognition = null;
  }
  showResults();
}

// ──────────────────────────────────────────────────
//  RESULTS
// ──────────────────────────────────────────────────
function analyzeText(text) {
  const words    = text.trim().split(/\s+/).filter(w => w.length > 0);
  const wordCount = words.length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  const elapsed   = Math.max(1, SPEAK_TIME - state.speakLeft);
  const wpm       = Math.round(wordCount / (elapsed / 60));

  const fillerCount = words.filter(w =>
    FILLER_WORDS.some(f => w.toLowerCase().replace(/[^a-z ]/g, '').includes(f))
  ).length;

  let score = 10;
  if (wordCount >= 50)  score += 10;
  if (wordCount >= 100) score += 10;
  if (wordCount >= 200) score += 10;
  if (wpm >= 110 && wpm <= 150)                    score += 25;
  else if ((wpm >= 90 && wpm < 110) || (wpm > 150 && wpm <= 170)) score += 15;
  else                                              score += 5;
  if (fillerCount <= 2) score += 20;
  else if (fillerCount <= 5) score += 10;
  if (sentences >= 15)  score += 15;
  else if (sentences >= 8) score += 10;
  if (wordCount > 150 && fillerCount <= 3 && wpm >= 110 && wpm <= 150) score += 10;
  score = Math.min(score, 100);

  return { wordCount, wpm, fillerCount, sentences, score };
}

function getGrade(score) {
  if (score >= 85) return { label: '🌟 Excellent', cls: 'grade-a' };
  if (score >= 70) return { label: '👍 Good', cls: 'grade-b' };
  if (score >= 50) return { label: '📈 Improving', cls: 'grade-c' };
  return { label: '💪 Keep Practicing', cls: 'grade-d' };
}

function getBadges(stats) {
  const badges = [];
  if (stats.wordCount >= 200)  badges.push({ icon:'🗣', text:'200+ Words', cls:'green' });
  if (stats.fillerCount <= 2)  badges.push({ icon:'✨', text:'Clean Speech', cls:'cyan' });
  if (stats.wpm >= 110 && stats.wpm <= 150) badges.push({ icon:'⚡', text:'Great Pace', cls:'green' });
  if (stats.sentences >= 10)  badges.push({ icon:'📝', text:'Well Structured', cls:'cyan' });
  if (stats.score >= 85)       badges.push({ icon:'🏆', text:'Top Score', cls:'green' });
  if (stats.fillerCount === 0) badges.push({ icon:'💎', text:'Filler Free', cls:'cyan' });
  return badges;
}

function generateFeedback(stats) {
  const items = [];
  if (stats.wordCount < 50)
    items.push({icon:'⚠️', text:'Your response was brief. Aim to develop your points with reasons and examples.'});
  else if (stats.wordCount >= 200)
    items.push({icon:'✅', text:`Great volume — ${stats.wordCount} words shows confident coverage.`});
  else
    items.push({icon:'✅', text:`Good effort with ${stats.wordCount} words. Try expanding with specific examples next time.`});

  if (stats.wpm < 80)
    items.push({icon:'💡', text:'Speaking pace was slow. Aim for 110–150 WPM for natural conversational flow.'});
  else if (stats.wpm > 180)
    items.push({icon:'⚠️', text:`Speed (${stats.wpm} WPM) was high. Slow down — give listeners time to absorb your points.`});
  else
    items.push({icon:'✅', text:`Your pace (${stats.wpm} WPM) is in the natural range — keep it up!`});

  if (stats.fillerCount > 8)
    items.push({icon:'⚠️', text:`${stats.fillerCount} filler words detected. Practice replacing "um/uh/like" with a deliberate pause.`});
  else if (stats.fillerCount <= 2)
    items.push({icon:'✅', text:'Excellent filler word control! Your speech sounded clean and polished.'});
  else
    items.push({icon:'💡', text:`${stats.fillerCount} filler words. Awareness is the first step — replace them with confident pauses.`});

  return items;
}

function showResults() {
  setPhase(4);
  const text  = state.transcript.trim();
  const stats = analyzeText(text);

  // Topic
  document.getElementById('doneTopicDisplay').textContent = state.topic ? state.topic.t : '—';

  // Animated score ring
  const scoreNum  = document.getElementById('overallScore');
  const scoreRing = document.getElementById('scoreRing');
  const circumference = 534;
  scoreNum.textContent = '0';
  scoreRing.style.strokeDashoffset = circumference;
  scoreRing.style.stroke = stats.score >= 80 ? 'var(--accent)' : stats.score >= 60 ? 'var(--cyan)' : 'var(--warn)';
  setTimeout(() => {
    scoreRing.style.strokeDashoffset = circumference * (1 - stats.score / 100);
    let n = 0;
    const step = () => {
      n = Math.min(n + 2, stats.score);
      scoreNum.textContent = n;
      if (n < stats.score) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, 200);

  // Grade
  const grade = getGrade(stats.score);
  const gradeEl = document.getElementById('scoreGrade');
  gradeEl.textContent  = grade.label;
  gradeEl.className    = `score-grade ${grade.cls}`;

  // Transcript
  const finalEl = document.getElementById('transcriptFinal');
  if (text) finalEl.textContent = text;
  else finalEl.innerHTML = '<span class="transcript-placeholder">No speech captured. Make sure mic access is granted.</span>';

  // Stat cards with bar animations
  document.getElementById('statWords').textContent    = stats.wordCount;
  document.getElementById('statWPM').textContent      = stats.wpm;
  document.getElementById('statFiller').textContent   = stats.fillerCount;
  document.getElementById('statSentences').textContent = stats.sentences;

  setTimeout(() => {
    document.getElementById('barWords').style.width     = `${Math.min(100, stats.wordCount / 3)}%`;
    document.getElementById('barWpm').style.width       = `${Math.min(100, stats.wpm / 2)}%`;
    document.getElementById('barFiller').style.width    = `${Math.min(100, stats.fillerCount * 10)}%`;
    document.getElementById('barSentences').style.width = `${Math.min(100, stats.sentences * 5)}%`;
  }, 300);

  // Badges
  const badges = getBadges(stats);
  const badgeRow = document.getElementById('badgesRow');
  badgeRow.innerHTML = '';
  badges.forEach((b, i) => {
    const el = document.createElement('div');
    el.className = `badge-item ${b.cls}`;
    el.style.animationDelay = `${i * 100}ms`;
    el.innerHTML = `<span>${b.icon}</span> ${b.text}`;
    badgeRow.appendChild(el);
  });

  // Feedback
  const feedback = generateFeedback(stats);
  const feedbackList = document.getElementById('feedbackList');
  feedbackList.innerHTML = '';
  feedback.forEach(f => {
    const div = document.createElement('div');
    div.className = 'feedback-item';
    div.innerHTML = `<span class="feedback-icon">${f.icon}</span><span>${f.text}</span>`;
    feedbackList.appendChild(div);
  });

  // History
  state.history.unshift({
    topic: state.topic.t,
    category: state.topic.c,
    score: stats.score,
    words: stats.wordCount,
    time: new Date().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' }),
  });
  updateHistory();
  updateStartStats();

  showScreen('screen-done');

  if (typeof window.runAIFeedback === 'function') {
    window.runAIFeedback({
      topic: state.topic,
      transcript: text,
      stats,
      prepTime: PREP_TIME,
      speakTime: SPEAK_TIME - state.speakLeft,
    });
  }
}

// ──────────────────────────────────────────────────
//  HISTORY & STATS
// ──────────────────────────────────────────────────
function updateHistory() {
  const list = document.getElementById('historyList');
  document.getElementById('sessionCount').textContent = `${state.history.length} session${state.history.length !== 1 ? 's' : ''}`;
  if (!state.history.length) {
    list.innerHTML = '<div class="empty-history">No sessions yet — spin to get started!</div>';
    return;
  }
  list.innerHTML = '';
  state.history.forEach(h => {
    const dotClass = h.score >= 80 ? 'dot-green' : h.score >= 60 ? 'dot-yellow' : 'dot-red';
    const div = document.createElement('div');
    div.className = 'history-item';
    div.innerHTML = `
      <div class="dot ${dotClass}"></div>
      <div class="history-topic">${h.topic}</div>
      <div class="history-cat">${h.category}</div>
      <div class="history-score">${h.score}/100</div>
      <div class="history-time">${h.time}</div>
    `;
    list.appendChild(div);
  });
}

function updateStartStats() {
  const total = state.history.length;
  document.getElementById('statTotalSessions').textContent = total;
  if (total > 0) {
    const avg  = Math.round(state.history.reduce((a,h) => a + h.score, 0) / total);
    const best = Math.max(...state.history.map(h => h.score));
    document.getElementById('statAvgScore').textContent = avg;
    document.getElementById('statBestScore').textContent = best;
    document.getElementById('streakCount').textContent = total;
  }
}

// ──────────────────────────────────────────────────
//  RESET
// ──────────────────────────────────────────────────
function resetToStart() {
  state.topic = null;
  const topicEl = document.getElementById('topicText');
  topicEl.textContent = 'Spin the wheel to begin →';
  topicEl.classList.remove('revealed');
  document.getElementById('topicCategory').textContent = '—';
  document.getElementById('topicRevealCard').classList.remove('has-topic');
  document.getElementById('btnStart').disabled = true;
  document.getElementById('noMicWarn').style.display = 'none';

  // Reset AI panel
  const badge   = document.getElementById('aiStatusBadge');
  const loading = document.getElementById('aiLoadingState');
  const content = document.getElementById('aiFeedbackContent');
  const error   = document.getElementById('aiErrorState');
  if (badge)   { badge.className = 'ai-status-badge ai-status-loading'; badge.innerHTML = '<span class="ai-spinner"></span> Analyzing…'; }
  if (loading) loading.style.display = 'block';
  if (content) { content.style.display = 'none'; content.innerHTML = ''; }
  if (error)   error.style.display = 'none';

  wheelTopics = getPoolTopics();
  drawWheel(wheelAngle);
  setPhase(0);
  showScreen('screen-start');
}

function copyTranscript() {
  const text = state.transcript.trim();
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    const btn  = event.target;
    const orig = btn.textContent;
    btn.textContent = '✓ Copied!';
    setTimeout(() => btn.textContent = orig, 1800);
  }).catch(() => alert('Could not copy. Please select and copy the text manually.'));
}

// ──────────────────────────────────────────────────
//  INIT
// ──────────────────────────────────────────────────
wheelTopics = getPoolTopics();
drawWheel(0);
updateHistory();
setPhase(0);
showScreen('screen-start');
