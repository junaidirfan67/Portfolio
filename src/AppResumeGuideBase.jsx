import { useEffect } from "react";
import AppGuideBase from "./AppGuideBase.jsx";

const skillIcons = new Map([
  ["React.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"],
  ["Node.js + Express.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"],
  ["MongoDB", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"],
  ["JavaScript (ES6+)", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"],
  ["Tailwind CSS + Bootstrap", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"],
  ["REST APIs", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/swagger.svg"],
  ["JWT Authentication", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jsonwebtokens.svg"],
  ["Git + GitHub", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"],
  ["Vercel Deployment", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vercel.svg"],
  ["MySQL", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"],
  ["Figma", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"],
  ["bcrypt.js", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jsonwebtokens.svg"],
]);

const skillLinks = new Map([
  ["React.js", "https://react.dev/"],
  ["Node.js + Express.js", "https://nodejs.org/"],
  ["MongoDB", "https://www.mongodb.com/"],
  ["JavaScript (ES6+)", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
  ["Tailwind CSS + Bootstrap", "https://tailwindcss.com/"],
  ["REST APIs", "https://developer.mozilla.org/en-US/docs/Glossary/REST"],
  ["JWT Authentication", "https://jwt.io/"],
  ["Git + GitHub", "https://github.com/"],
  ["Vercel Deployment", "https://vercel.com/"],
  ["MySQL", "https://www.mysql.com/"],
  ["Figma", "https://www.figma.com/"],
  ["bcrypt.js", "https://github.com/dcodeIO/bcrypt.js"],
]);

const proficientSkills = [
  "React.js",
  "Node.js + Express.js",
  "MongoDB",
  "JavaScript (ES6+)",
  "Tailwind CSS + Bootstrap",
  "REST APIs",
  "JWT Authentication",
  "Git + GitHub",
  "Vercel Deployment",
];

const familiarSkills = ["MySQL", "Figma", "bcrypt.js"];

const projectGuide = new Map([
  [
    "Modern Animated MERN E-Commerce Store",
    {
      what:
        "A full-stack menswear e-commerce platform with product catalog, cart, checkout flow, and a complete admin dashboard with analytics and profit/loss tracking.",
      built:
        "Product catalog, cart and checkout flow, user dashboard, admin product management, order handling, sales analytics, and profit/loss tracking.",
      challenge:
        "The biggest challenge was building the admin analytics system: aggregating order data and calculating useful business numbers like revenue and profit margins.",
      stack: "React, Node.js, Express, MongoDB, JWT auth, Vercel",
    },
  ],
  [
    "Auto Tech Management System",
    {
      what:
        "A vehicle service management portal with separate role-based dashboards for admins, mechanics, and customers.",
      built:
        "Customers can book services, track vehicle status, and pay in PKR. Admins manage bookings and invoices, while mechanics receive assignments and update job status.",
      challenge:
        "The trickiest part was building the role-based routing system so each user type only sees their own dashboard, data, and actions.",
      stack: "React.js, role-based dashboards, Vercel",
    },
  ],
  [
    "HireHub Job Portal",
    {
      what:
        "A MERN stack job portal where employers can post jobs and candidates can search, filter, and apply through protected routes.",
      built:
        "Separate onboarding flows for employers and candidates, job discovery UI, protected dashboard structure, and authentication-ready product flows.",
      challenge:
        "The main challenge was keeping employer and candidate data isolated with protected routes and a clear authentication flow.",
      stack: "React, Node.js, Express, MongoDB, JWT",
    },
  ],
  [
    "Task Manager",
    {
      what:
        "A productivity dashboard for creating, filtering, tracking, and reviewing task progress in a clean SaaS-style workspace.",
      built:
        "Task counters, search, filters, priority views, status tabs, progress summary, and a clear empty-state workflow.",
      challenge:
        "The useful challenge was making a simple app feel complete through dashboard states, filters, counters, and responsive layout polish.",
      stack: "React, JavaScript, dashboard UI",
    },
  ],
]);

function setText(node, value) {
  if (node && node.textContent !== value) node.textContent = value;
}

function skillMarkup(skill) {
  const icon = skillIcons.get(skill);
  const href = skillLinks.get(skill) || "#/skills";
  return `
    <a href="${href}" target="_blank" rel="noreferrer">
      <span class="skill-level-icon"><img src="${icon}" alt="" loading="lazy" aria-hidden="true"></span>
      <span>${skill}</span>
    </a>
  `;
}

function updateMeta() {
  document.title = "Junaid Irfan | Full Stack MERN Developer - Lahore";
}

function updateAbout() {
  const section = document.querySelector(".about-hook-section");
  if (!section || section.dataset.guideApplied === "true") return;

  section.dataset.guideApplied = "true";
  section.innerHTML = `
    <div class="container about-hook-grid">
      <div>
        <p class="eyebrow">About Me</p>
        <h2>Hi, I'm Junaid - a Full Stack Developer based in Lahore.</h2>
      </div>
      <div class="about-hook-copy">
        <p>I build complete MERN stack applications: from React frontends to Node.js backends, MongoDB databases, and Vercel deployments.</p>
        <p>I've shipped 30+ projects including e-commerce stores, job portals, and role-based dashboards. I'm actively looking for my first professional role where I can contribute from day one.</p>
      </div>
    </div>
  `;
}

function updateProjects() {
  document.querySelectorAll(".project-card").forEach((card) => {
    const title = card.querySelector("h3")?.textContent?.trim();
    const guide = title ? projectGuide.get(title) : null;
    const existing = card.querySelector(".project-context");
    if (!guide || !existing || existing.dataset.guideApplied === "true") return;

    existing.dataset.guideApplied = "true";
    existing.innerHTML = `
      <p><strong>What it is:</strong> ${guide.what}</p>
      <p><strong>What I built:</strong> ${guide.built}</p>
      <p><strong>What was challenging:</strong> ${guide.challenge}</p>
      <p><strong>Stack:</strong> ${guide.stack}</p>
    `;
  });
}

function updateSkills() {
  const section = document.getElementById("skills");
  const grid = section?.querySelector(".skill-level-grid");
  if (!section || !grid || grid.dataset.guideApplied === "true") return;

  const heading = section.querySelector(".section-heading p:last-child");
  setText(heading, "Split by interview confidence: tools I use daily, and tools I have used but am still improving.");

  grid.dataset.guideApplied = "true";
  grid.innerHTML = `
    <article class="skill-level-card">
      <p class="eyebrow">Proficient</p>
      <h3>Use daily, can be interviewed on.</h3>
      <div class="skill-level-list">${proficientSkills.map(skillMarkup).join("")}</div>
    </article>
    <article class="skill-level-card is-familiar">
      <p class="eyebrow">Familiar</p>
      <h3>Used in projects, still learning.</h3>
      <div class="skill-level-list">${familiarSkills.map(skillMarkup).join("")}</div>
    </article>
  `;
}

function updateCta() {
  const header = document.querySelector(".site-header");
  if (header && !header.querySelector(".availability-badge")) {
    const badge = document.createElement("a");
    badge.className = "availability-badge";
    badge.href = "#/contact";
    badge.innerHTML = '<span aria-hidden="true"></span>Available for work';
    const resume = header.querySelector(".resume-link");
    header.insertBefore(badge, resume || header.lastElementChild);
  }

  const cta = document.querySelector(".final-hire-section");
  if (cta && cta.dataset.guideApplied !== "true") {
    cta.dataset.guideApplied = "true";
    cta.innerHTML = `
      <div class="container final-hire-card">
        <div>
          <p class="eyebrow">Let's work together</p>
          <h2>I'm actively looking for my first professional role as a Full Stack or React Developer.</h2>
          <p>If you have an opportunity, I'd love to hear from you.</p>
        </div>
        <div class="final-hire-actions">
          <a class="button button-primary" href="mailto:junaidirfan810@gmail.com?subject=Portfolio%20Opportunity%20for%20Junaid">Email Me</a>
          <a class="button button-ghost" href="https://www.linkedin.com/in/junaid-irfan-ba1027241" target="_blank" rel="noreferrer">LinkedIn</a>
          <a class="button button-soft" href="https://github.com/Ali-Jun" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    `;
  }
}

function updateVisibleCopy() {
  document.querySelectorAll(".eyebrow").forEach((node) => {
    if (node.textContent.includes("AI-Driven")) setText(node, "Building Modern MERN Applications");
  });

  document.querySelectorAll(".service-card h3").forEach((title) => {
    if (!title.textContent.includes("AI-Assisted")) return;
    setText(title, "Deployment & Handoff");
    const copy = title.parentElement?.querySelector("p");
    setText(copy, "Vercel deployments, GitHub repositories, clean project documentation, and handoff-ready portfolio presentation.");
  });

  document.querySelectorAll(".tech-orbit-node").forEach((node) => {
    const label = node.querySelector("span");
    if (!label || label.textContent !== "AI Tools") return;
    setText(label, "REST APIs");
    node.setAttribute("href", "https://developer.mozilla.org/en-US/docs/Glossary/REST");
    const img = node.querySelector("img");
    if (img) img.setAttribute("src", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/swagger.svg");
  });
}

function applyGuide() {
  updateMeta();
  updateAbout();
  updateProjects();
  updateSkills();
  updateCta();
  updateVisibleCopy();
}

function scheduleGuideUpdates() {
  const timers = [0, 80, 240, 600].map((delay) => window.setTimeout(applyGuide, delay));
  return () => timers.forEach((timer) => window.clearTimeout(timer));
}

export default function App() {
  useEffect(() => {
    let cleanup = scheduleGuideUpdates();
    const onRouteChange = () => {
      cleanup();
      cleanup = scheduleGuideUpdates();
    };
    window.addEventListener("hashchange", onRouteChange);
    return () => {
      cleanup();
      window.removeEventListener("hashchange", onRouteChange);
    };
  }, []);

  return <AppGuideBase />;
}
