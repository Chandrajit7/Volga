// Real-time Clock Engine
function updateRealTimeClock() {
  const hudClock = document.getElementById('hudClock');
  if (!hudClock) return;

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  hudClock.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateRealTimeClock, 1000);
updateRealTimeClock();

// Dynamic Location Fetcher
async function fetchUserLocation() {
  const hudLocation = document.getElementById('hudLocation');
  if (!hudLocation) return;

  try {
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) throw new Error('Network error');
    const data = await response.json();
    hudLocation.textContent = `${data.city.toUpperCase()}, ${data.country_code_iso3 || data.country_code}`;
  } catch (error) {
    hudLocation.textContent = 'GLOBAL_NODE';
  }
}
fetchUserLocation();

// Dropdown Navigation Menu
const menuDotsBtn = document.getElementById('menuDotsBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

menuDotsBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const isExpanded = dropdownMenu.classList.toggle('show');
  menuDotsBtn.setAttribute('aria-expanded', isExpanded);
});

dropdownMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    dropdownMenu.classList.remove('show');
    menuDotsBtn.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('click', (e) => {
  if (!dropdownMenu.contains(e.target) && !menuDotsBtn.contains(e.target)) {
    dropdownMenu.classList.remove('show');
    menuDotsBtn.setAttribute('aria-expanded', 'false');
  }
});

// Theme Switcher
const themeBtn = document.getElementById('themeToggle');
const themeIcon = themeBtn.querySelector('.theme-icon');
const themeText = themeBtn.querySelector('.theme-text');
let isDarkTheme = true;

themeBtn.addEventListener('click', () => {
  if (isDarkTheme) {
    document.body.setAttribute('data-theme', 'light');
    themeIcon.textContent = '🌙';
    themeText.textContent = 'DARK_MODE';
    isDarkTheme = false;
  } else {
    document.body.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
    themeText.textContent = 'LIGHT_MODE';
    isDarkTheme = true;
  }
});

// Interactive Quantum Particle Grid Canvas
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let width, height;
let particles = [];
let mouse = { x: null, y: null, radius: 150 };

window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

class QuantumParticle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 1.5;
    this.vy = (Math.random() - 0.5) * 1.5;
    this.radius = Math.random() * 2 + 1;
    this.pulse = Math.random() * Math.PI;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.pulse += 0.04;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;

    // Mouse Proximity Repulsion Engine
    if (mouse.x !== null && mouse.y !== null) {
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        let force = (mouse.radius - dist) / mouse.radius;
        this.x -= (dx / dist) * force * 3;
        this.y -= (dy / dist) * force * 3;
      }
    }
  }

  draw() {
    const activeRadius = this.radius + Math.sin(this.pulse) * 0.8;
    ctx.beginPath();
    ctx.arc(this.x, this.y, activeRadius, 0, Math.PI * 2);
    ctx.fillStyle = isDarkTheme ? '#00f0ff' : '#0284c7';
    ctx.shadowBlur = 10;
    ctx.shadowColor = isDarkTheme ? '#00f0ff' : '#0284c7';
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

function initParticles() {
  resizeCanvas();
  particles = [];
  const count = Math.floor((width * height) / 7500);
  for (let i = 0; i < count; i++) {
    particles.push(new QuantumParticle());
  }
}

function renderMatrixBackground() {
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();

    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 140) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        const alpha = (1 - dist / 140) * 0.35;
        ctx.strokeStyle = isDarkTheme 
          ? `rgba(0, 240, 255, ${alpha})` 
          : `rgba(2, 132, 199, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(renderMatrixBackground);
}

window.addEventListener('resize', initParticles);
initParticles();
renderMatrixBackground();

// Typewriter Effect
const words = ["CLOUD_ARCHITECTURE", "CYBER_SECURITY", "MACHINE_LEARNING", "QUANTUM_SOFTWARE"];
let wordIndex = 0, charIndex = 0, isDeleting = false;
const typewriterEl = document.getElementById('typewriter');

function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 400;
  }

  setTimeout(type, speed);
}
document.addEventListener('DOMContentLoaded', type);

// Modal Data Specs
const projectData = [
  {
    title: "Cancer Diagnosis System",
    description: "Developed a machine learning classification model to assist in cancer diagnosis identification using TCGA barcode genomic data analysis.",
    tech: "Python, Scikit-learn, Pandas, NumPy",
    link: "https://github.com/your-username/cancer-diagnosis-tcga"
  },
  {
    title: "RUDRA - Driver Drowsiness Detection System",
    description: "Built an IoT hardware safety device that monitors eye-blink sensors in real-time and alerts drivers to prevent road accidents.",
    tech: "Arduino Nano, Eye-Blink Sensor, C++",
    link: "https://github.com/your-username/rudra-drowsiness-detection"
  },
  {
    title: "Credit Card Fraud Detection System",
    description: "Engineered a predictive model using logistic regression to detect fraudulent transactions and transaction anomalies.",
    tech: "Python, Logistic Regression, Pandas, Scikit-learn",
    link: "https://github.com/your-username/credit-card-fraud-detection"
  },
  {
    title: "E-Voting Application",
    description: "Hosted a full-stack secure web e-voting platform featuring email-based OTP verification and an administrative analytics dashboard.",
    tech: "Flask, HTML/CSS, JavaScript, OTP Email Auth",
    link: "https://github.com/your-username/e-voting-app"
  }
];

const modal = document.getElementById('projectModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalTech = document.getElementById('modalTech');
const modalLink = document.getElementById('modalLink');

document.querySelectorAll('.project-btn').forEach(card => {
  card.addEventListener('click', () => {
    const idx = card.getAttribute('data-project');
    const data = projectData[idx];

    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modalTech.textContent = data.tech;
    modalLink.href = data.link;

    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
  });
});

function hideModal() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}

closeModal.addEventListener('click', hideModal);
window.addEventListener('click', (e) => { if (e.target === modal) hideModal(); });
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') hideModal(); });

// Chatbot Logic
const qaPairs = [
  {
    question: "What capabilities do you offer?",
    keywords: ["capabilities", "services", "offer", "provide", "do"],
    answer: "Volga Ltd engineers Cloud Infrastructure, Neural Cybersecurity, Machine Learning Frameworks, and Cybernetic Applications."
  },
  {
    question: "Where is headquarters?",
    keywords: ["location", "located", "where", "office", "headquarter"],
    answer: "Our operations operate on a distributed quantum network globally."
  },
  {
    question: "How to establish a contract?",
    keywords: ["cost", "price", "hire", "contact", "quote"],
    answer: "Transmit a data message using our COMM_LINK form or initiate direct communication via +91 98765 43210."
  }
];

const chatToggle = document.getElementById('chatToggle');
const chatBox = document.getElementById('chatBox');
const closeChat = document.getElementById('closeChat');
const chatLogs = document.getElementById('chatLogs');
const chatOptions = document.getElementById('chatOptions');
const userInput = document.getElementById('userInput');
const chatForm = document.getElementById('chatForm');

chatToggle.addEventListener('click', () => {
  const show = chatBox.style.display === 'flex';
  chatBox.style.display = show ? 'none' : 'flex';
});

closeChat.addEventListener('click', () => { chatBox.style.display = 'none'; });

function loadChatOptions() {
  chatOptions.innerHTML = '';
  qaPairs.forEach((pair) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = pair.question;
    btn.onclick = () => processUserQuery(pair.question, pair.answer);
    chatOptions.appendChild(btn);
  });
}

function processUserQuery(text, answer = null) {
  if (!text.trim()) return;

  const uMsg = document.createElement('div');
  uMsg.className = 'msg user-msg';
  uMsg.textContent = text;
  chatLogs.appendChild(uMsg);
  userInput.value = '';

  setTimeout(() => {
    const bMsg = document.createElement('div');
    bMsg.className = 'msg bot-msg';
    bMsg.textContent = answer || findBestAnswer(text);
    chatLogs.appendChild(bMsg);
    chatLogs.scrollTop = chatLogs.scrollHeight;
  }, 300);

  chatLogs.scrollTop = chatLogs.scrollHeight;
}

function findBestAnswer(text) {
  const lText = text.toLowerCase();
  for (let p of qaPairs) {
    for (let k of p.keywords) {
      if (lText.includes(k)) return p.answer;
    }
  }
  return "Query unclear. Please select an encrypted prompt from the option matrix above.";
}

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  processUserQuery(userInput.value);
});

loadChatOptions();
