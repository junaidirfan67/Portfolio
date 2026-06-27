import { useEffect } from "react";
import AppRecruiterRuntime from "./AppRecruiterRuntime.jsx";

const techIcons = new Map([
  ["HTML5", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"],
  ["CSS3", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"],
  ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"],
  ["React.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"],
  ["React", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"],
  ["Tailwind CSS", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"],
  ["Bootstrap", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"],
  ["Node.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"],
  ["Express.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"],
  ["REST APIs", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/swagger.svg"],
  ["MongoDB", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"],
  ["MySQL", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"],
  ["JWT", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jsonwebtokens.svg"],
  ["bcrypt.js", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jsonwebtokens.svg"],
  ["Git", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"],
  ["GitHub", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"],
  ["Figma", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"],
  ["VS Code", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"],
  ["Vercel", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vercel.svg"],
  ["Claude", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/anthropic.svg"],
  ["ChatGPT", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg"],
  ["Codex", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg"],
  ["DeepSeek", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/deepseek.svg"],
]);

const skillLinks = new Map([
  ["HTML5", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
  ["CSS3", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
  ["JavaScript", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
  ["React.js", "https://react.dev/"],
  ["Tailwind CSS", "https://tailwindcss.com/"],
  ["Bootstrap", "https://getbootstrap.com/"],
  ["Node.js", "https://nodejs.org/"],
  ["Express.js", "https://expressjs.com/"],
  ["REST APIs", "https://developer.mozilla.org/en-US/docs/Glossary/REST"],
  ["MongoDB", "https://www.mongodb.com/"],
  ["MySQL", "https://www.mysql.com/"],
  ["JWT", "https://jwt.io/"],
  ["bcrypt.js", "https://github.com/dcodeIO/bcrypt.js"],
  ["Git", "https://git-scm.com/"],
  ["GitHub", "https://github.com/"],
  ["Figma", "https://www.figma.com/"],
  ["VS Code", "https://code.visualstudio.com/"],
  ["Vercel", "https://vercel.com/"],
  ["Claude", "https://claude.ai/"],
  ["ChatGPT", "https://chatgpt.com/"],
  ["Codex", "https://platform.openai.com/docs/codex/overview"],
  ["DeepSeek", "https://www.deepseek.com/"],
]);

const projectContext = new Map([
  [
    "Modern Animated MERN E-Commerce Store",
    {
      built:
        "What I built: a full e-commerce experience with storefront, cart, checkout, user dashboard, and admin tools for products, orders, banners, coupons, stock, and profit tracking.",
      learned:
        "What I learned: how to structure business workflows across customer and admin screens, keep UI responsive, and prepare a MERN app for real deployment.",
    },
  ],
  [
    "Auto Tech Management System",
    {
      built:
        "What I built: a service-management portal for workshop bookings, mechanic assignment, invoices, PKR payments, feedback, and role-based dashboards.",
      learned:
        "What I learned: how to design dashboard flows where Admin, Customer, and Mechanic users each need different data, actions, and protected screens.",
    },
  ],
  [
    "HireHub Job Portal",
    {
      built:
        "What I built: a hiring product with job discovery, search flows, candidate/employer logic, and dashboard-ready authentication structure.",
      learned:
        "What I learned: how to think through two-sided marketplace workflows, protected routes, job filtering, and application management.",
    },
  ],
  [
    "Task Manager",
    {
      built:
        "What I built: a productivity dashboard with task status filters, priority views, search, progress tracking, and clean SaaS-style cards.",
      learned:
        "What I learned: how small UI details like empty states, filters, and counters make a simple app feel more usable and professional.",
    },
  ],
]);

const proficientSkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "REST APIs",
  "MongoDB",
  "JWT",
  "GitHub",
  "Vercel",
];

const familiarSkills = ["MySQL", "bcrypt.js", "Git", "Figma", "VS Code", "Claude", "ChatGPT", "Codex", "DeepSeek"];

function iconMarkup(label) {
  const icon = techIcons.get(label);
  if (!icon) return "";
  return `<span class="skill-level-icon"><img src="${icon}" alt="" loading="lazy" aria-hidden="true"></span>`;
}

function skillLink(label) {
  const href = skillLinks.get(label) || "#/skills";
  const external = href.startsWith("http");
  return `<a href="${href}" ${external ? 'target="_blank" rel="noreferrer"' : ""}>${iconMarkup(label)}<span>${label}</span></a>`;
}

function addAboutHook() {
  const experience = document.getElementById("experience");
  if (!experience || document.querySelector(".about-hook-section")) return;

  const section = document.createElement("section");
  section.className = "section about-hook-section";
  section.setAttribute("data-reveal", "true");
  section.innerHTML = `
    <div class="container about-hook-grid">
      <div>
        <p class="eyebrow">About Me</p>
        <h2>I'm a MERN stack developer who ships full-stack apps with clean UI and real deployments, not just tutorials.</h2>
      </div>
      <div class="about-hook-copy">
        <p>I focus on React frontends, dashboard workflows, REST API structure, MongoDB-backed features, and Vercel deployments that recruiters and clients can actually open.</p>
        <p>My strongest work is building practical business apps: e-commerce stores, service portals, job portals, booking systems, and admin panels with responsive UI.</p>
      </div>
    </div>
  `;

  experience.parentElement?.insertBefore(section, experience);
}

function addProjectContext() {
  document.querySelectorAll(".project-card").forEach((card) => {
    if (card.querySelector(".project-context")) return;
    const title = card.querySelector("h3")?.textContent?.trim();
    const context = title ? projectContext.get(title) : null;
    const role = card.querySelector(".project-role");
    if (!context || !role) return;

    const block = document.createElement("div");
    block.className = "project-context";
    block.innerHTML = `
      <p><strong>What I built:</strong> ${context.built.replace("What I built: ", "")}</p>
      <p><strong>What I learned:</strong> ${context.learned.replace("What I learned: ", "")}</p>
    `;

    role.insertAdjacentElement("afterend", block);
  });
}

function replaceSkillsSection() {
  const section = document.getElementById("skills");
  const grid = section?.querySelector(".skills-grid");
  if (!section || !grid || grid.dataset.recruiterSkills === "true") return;

  const heading = section.querySelector(".section-heading p:last-child");
  if (heading) {
    heading.textContent = "Grouped by interview confidence, not every tool I have ever touched.";
  }

  grid.className = "container skill-level-grid";
  grid.dataset.recruiterSkills = "true";
  grid.innerHTML = `
    <article class="skill-level-card">
      <p class="eyebrow">Proficient</p>
      <h3>Tools I can discuss and use confidently.</h3>
      <div class="skill-level-list">${proficientSkills.map(skillLink).join("")}</div>
    </article>
    <article class="skill-level-card is-familiar">
      <p class="eyebrow">Familiar</p>
      <h3>Tools I have used in projects or workflow support.</h3>
      <div class="skill-level-list">${familiarSkills.map(skillLink).join("")}</div>
    </article>
  `;
}

function addFreelanceProof() {
  const contactPreview = document.querySelector(".contact-preview");
  if (!contactPreview || document.querySelector(".freelance-proof-section")) return;

  const section = document.createElement("section");
  section.className = "section freelance-proof-section";
  section.setAttribute("data-reveal", "true");
  section.innerHTML = `
    <div class="container section-heading">
      <p class="eyebrow">Freelance Proof</p>
      <h2>Built like client work, with live links and handoff-ready repos.</h2>
      <p>I do not want to fake testimonials. Instead, this portfolio shows the proof I can stand behind today: live deployments, project screenshots, GitHub repositories, and practical business workflows.</p>
    </div>
    <div class="container proof-grid">
      <article>
        <strong>30+</strong>
        <span>project builds completed across practice, academic, and client-style work</span>
      </article>
      <article>
        <strong>4</strong>
        <span>flagship live demos prepared for recruiter and marketplace review</span>
      </article>
      <article>
        <strong>100%</strong>
        <span>focused on responsive UI, real deployments, and clear project documentation</span>
      </article>
    </div>
  `;

  contactPreview.parentElement?.insertBefore(section, contactPreview);
}

function addHireCta() {
  if (!document.querySelector(".hire-me-sticky")) {
    const sticky = document.createElement("a");
    sticky.className = "hire-me-sticky";
    sticky.href = "mailto:junaidirfan810@gmail.com?subject=Portfolio%20Opportunity%20for%20Junaid";
    sticky.textContent = "Hire Me";
    document.body.appendChild(sticky);
  }

  const footer = document.querySelector(".site-footer");
  if (!footer || document.querySelector(".final-hire-section")) return;

  const section = document.createElement("section");
  section.className = "section final-hire-section";
  section.innerHTML = `
    <div class="container final-hire-card">
      <div>
        <p class="eyebrow">Let's Talk</p>
        <h2>Need a junior MERN developer who can ship clean UI and deployed full-stack apps?</h2>
        <p>Email me directly or open my LinkedIn/GitHub. I keep the next step simple.</p>
      </div>
      <div class="final-hire-actions">
        <a class="button button-primary" href="mailto:junaidirfan810@gmail.com?subject=Portfolio%20Opportunity%20for%20Junaid">Email Junaid</a>
        <a class="button button-ghost" href="https://www.linkedin.com/in/junaid-irfan-ba1027241" target="_blank" rel="noreferrer">LinkedIn</a>
        <a class="button button-soft" href="https://github.com/Ali-Jun" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  `;

  footer.parentElement?.insertBefore(section, footer);
}

function updateResumeLinks() {
  document.querySelectorAll('a[href$="Junaid-Irfan-Resume.pdf"]').forEach((link) => {
    link.setAttribute("href", `${link.getAttribute("href")}`);
    if (!link.textContent?.toLowerCase().includes("pdf")) return;
    link.textContent = link.textContent;
  });
}

function applyRecruiterFixes() {
  addAboutHook();
  addProjectContext();
  replaceSkillsSection();
  addFreelanceProof();
  addHireCta();
  updateResumeLinks();
}

export default function App() {
  useEffect(() => {
    applyRecruiterFixes();

    const observer = new MutationObserver(applyRecruiterFixes);
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return <AppRecruiterRuntime />;
}
