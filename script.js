// Theme Toggle Logic
const themeBtn = document.getElementById('themeToggle');
const themeIcon = themeBtn.querySelector('.theme-icon');
const themeText = themeBtn.querySelector('.theme-text');

let isDarkTheme = true;
document.body.setAttribute('data-theme', 'dark');

themeBtn.addEventListener('click', () => {
  if (isDarkTheme) {
    document.body.setAttribute('data-theme', 'light');
    themeIcon.textContent = '🌙';
    themeText.textContent = 'Dark';
    isDarkTheme = false;
  } else {
    document.body.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
    themeText.textContent = 'Light';
    isDarkTheme = true;
  }
  initGraphics();
});

// Advanced Interactive Particle Mesh & Geometric Rings Canvas Background
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
let rings = [];

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

window.addEventListener('resize', () => {
  resizeCanvas();
  initGraphics();
});

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.9;
    this.vy = (Math.random() - 0.5) * 0.9;
    this.radius = Math.random() * 2 + 1;
    this.pulse = Math.random() * Math.PI;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.pulse += 0.03;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  draw() {
    const pulseRadius = this.radius + Math.sin(this.pulse) * 0.8;
    ctx.beginPath();
    ctx.arc(this.x, this.y, pulseRadius, 0, Math.PI * 2);
    ctx.fillStyle = isDarkTheme ? 'rgba(56, 189, 248, 0.8)' : 'rgba(37, 99, 235, 0.6)';
    ctx.fill();
  }
}

class PulsingRing {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.radius = Math.random() * 80 + 40;
    this.maxRadius = this.radius + 60;
    this.growth = Math.random() * 0.3 + 0.1;
  }

  update() {
    this.radius += this.growth;
    if (this.radius > this.maxRadius) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.radius = 20;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = isDarkTheme 
      ? 'rgba(56, 189, 248, 0.05)' 
      : 'rgba(37, 99, 235, 0.04)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
}

function initGraphics() {
  resizeCanvas();
  particles = [];
  rings = [];

  const particleCount = Math.floor((width * height) / 9000);
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  for (let i = 0; i < 6; i++) {
    rings.push(new PulsingRing());
  }
}

function render() {
  ctx.clearRect(0, 0, width, height);

  rings.forEach(ring => {
    ring.update();
    ring.draw();
  });

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
        const alpha = (1 - dist / 140) * 0.28;
        ctx.strokeStyle = isDarkTheme 
          ? `rgba(56, 189, 248, ${alpha})` 
          : `rgba(37, 99, 235, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(render);
}

initGraphics();
render();

// Typewriter Effect
const words = ["Cloud Architecture", "Cybersecurity", "Machine Learning", "Custom Software"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
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

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}
document.addEventListener('DOMContentLoaded', type);

// Project Data & Modal Logic
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

document.querySelectorAll('.project-btn').forEach(button => {
  button.addEventListener('click', () => {
    const projectIndex = button.getAttribute('data-project');
    const data = projectData[projectIndex];

    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modalTech.textContent = data.tech;
    modalLink.href = data.link;

    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Chatbot Logic with Word Detection & FAQ
const qaPairs = [
  {
    question: "What services do you offer?",
    keywords: ["service", "services", "offer", "provide", "do", "work"],
    answer: "Volga Ltd offers Cloud Architecture, Cybersecurity, Machine Learning Solutions, and Custom Web Applications."
  },
  {
    question: "Where are you located?",
    keywords: ["location", "located", "where", "office", "address", "headquarter"],
    answer: "We are headquartered globally with 24/7 digital enterprise operations."
  },
  {
    question: "How can I request a quote?",
    keywords: ["quote", "cost", "price", "pricing", "hire", "estimate", "contact"],
    answer: "You can send us a message via our contact form or call us directly at +91 98765 43210."
  },
  {
    question: "What technology stack do you use?",
    keywords: ["tech", "technology", "stack", "python", "java", "flask", "react", "language"],
    answer: "Our core stack includes Python, Machine Learning frameworks (Scikit-learn, Pandas), Flask, C++, IoT, and Cloud Infrastructure."
  },
  {
    question: "How long does project delivery take?",
    keywords: ["time", "duration", "long", "delivery", "timeline", "fast"],
    answer: "Project timelines vary by scope: small web applications take 1-2 weeks, while full enterprise systems take 4-8 weeks."
  }
];

const chatToggle = document.getElementById('chatToggle');
const chatBox = document.getElementById('chatBox');
const closeChat = document.getElementById('closeChat');
const chatLogs = document.getElementById('chatLogs');
const chatOptions = document.getElementById('chatOptions');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

chatToggle.addEventListener('click', () => {
  chatBox.style.display = 'flex';
});

closeChat.addEventListener('click', () => {
  chatBox.style.display = 'none';
});

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

function processUserQuery(queryText, customAnswer = null) {
  if (!queryText.trim()) return;

  const userMsg = document.createElement('div');
  userMsg.className = 'msg user-msg';
  userMsg.textContent = queryText;
  chatLogs.appendChild(userMsg);
  userInput.value = '';

  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'msg bot-msg';

    if (customAnswer) {
      botMsg.textContent = customAnswer;
    } else {
      botMsg.textContent = findBestAnswer(queryText);
    }

    chatLogs.appendChild(botMsg);
    chatLogs.scrollTop = chatLogs.scrollHeight;
  }, 400);

  chatLogs.scrollTop = chatLogs.scrollHeight;
}

function findBestAnswer(text) {
  const lowerText = text.toLowerCase();
  
  for (let pair of qaPairs) {
    for (let word of pair.keywords) {
      if (lowerText.includes(word)) {
        return pair.answer;
      }
    }
  }
  
  return "I'm not sure about that specific query. Please choose a question from the FAQ list above or contact us directly at contact@volgaltd.com.";
}

sendBtn.addEventListener('click', () => processUserQuery(userInput.value));
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') processUserQuery(userInput.value);
});

loadChatOptions();