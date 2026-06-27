import { useEffect } from "react";
import AppResumeGuideBase from "./AppResumeGuideBase.jsx";

const aiItems = [
  ["OpenAI API", "https://platform.openai.com/docs/overview", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg"],
  ["Claude API", "https://docs.anthropic.com/", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/anthropic.svg"],
  ["Codex", "https://platform.openai.com/docs/codex/overview", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg"],
  ["DeepSeek", "https://www.deepseek.com/", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/deepseek.svg"],
];

const strengths = [
  "Client Communication",
  "Fast Learning",
  "Problem Solving",
  "Team Collaboration",
  "Scope Clarity",
  "Adaptability",
  "Attention to Detail",
];

function setText(node, value) {
  if (node && node.textContent !== value) node.textContent = value;
}

function updateMetaFromResume() {
  document.title = "Junaid Irfan | Full Stack MERN Developer & AI Engineering Fellow";
}

function updateResumeDownloadLinks() {
  document.querySelectorAll('a[href$="Junaid-Irfan-Resume.pdf"]').forEach((link) => {
    const href = link.getAttribute("href") || "";
    link.setAttribute("href", href.replace("Junaid-Irfan-Resume.pdf", "Junaid-Irfan-Resume.docx"));
    link.setAttribute("download", "Junaid-Irfan-Resume.docx");
    link.setAttribute("aria-label", "Download Junaid Irfan resume");
  });
}

function updateAboutFromResume() {
  const section = document.querySelector(".about-hook-section");
  if (!section || section.dataset.resumeEnhanced === "true") return;

  const copy = section.querySelector(".about-hook-copy");
  if (!copy) return;

  section.dataset.resumeEnhanced = "true";
  copy.innerHTML = `
    <p>I build complete MERN stack applications: from React frontends to Node.js backends, MongoDB databases, and Vercel deployments.</p>
    <p>I'm currently enrolled with DevWeekends in the Full Stack AI Engineering fellowship, where I'm integrating OpenAI and Claude APIs into full-stack web applications and building AI-powered features.</p>
    <p>I've shipped 30+ projects including e-commerce stores, role-based dashboards, and job portals while actively deepening Data Structures & Algorithms and real engineering workflow skills.</p>
  `;
}

function addResumeExperience() {
  const section = document.getElementById("experience");
  const timeline = section?.querySelector(".timeline");
  if (!section || !timeline || section.querySelector(".resume-current-experience")) return;

  const heading = section.querySelector(".section-heading");
  setText(heading?.querySelector("h2"), "Current fellowship, project experience, and MERN delivery.");
  setText(
    heading?.querySelector("p:last-child"),
    "Currently growing through the DevWeekends Full Stack AI Engineering program while continuing to build live MERN projects."
  );

  const article = document.createElement("article");
  article.className = "resume-current-experience";
  article.innerHTML = `
    <div>
      <span class="active-badge">Active</span>
      <p class="experience-meta">DevWeekends - Remote - June 2026 - Present</p>
      <h3>Full Stack AI Engineering Fellow</h3>
      <p>Integrating AI APIs into full-stack web applications, building React components, developing Node.js/Express APIs, and practicing Data Structures & Algorithms daily.</p>
      <ul class="feature-list">
        <li>Integrating OpenAI and Claude APIs into MERN applications to build intelligent, AI-powered features.</li>
        <li>Developing React frontend components and Node.js/Express backend APIs as part of real engineering tasks.</li>
        <li>Practicing DSA daily, including arrays, linked lists, recursion, and problem-solving patterns.</li>
        <li>Working remotely with task assignments, code reviews, and collaborative delivery.</li>
      </ul>
    </div>
    <div class="experience-focus-list" aria-label="Current focus">
      <span>MERN Stack</span>
      <span>AI APIs</span>
      <span>DSA Practice</span>
    </div>
  `;

  timeline.prepend(article);
}

function addAiIntegrationSkills() {
  const grid = document.querySelector("#skills .skill-level-grid");
  if (!grid || grid.querySelector(".resume-ai-card")) return;

  const card = document.createElement("article");
  card.className = "skill-level-card resume-ai-card";
  card.innerHTML = `
    <p class="eyebrow">AI Integration</p>
    <h3>Building AI-powered features.</h3>
    <p>Currently learning and applying AI APIs through the DevWeekends Full Stack AI Engineering program.</p>
    <div class="skill-level-list">
      ${aiItems
        .map(
          ([label, href, icon]) => `
            <a href="${href}" target="_blank" rel="noreferrer">
              <span class="skill-level-icon"><img src="${icon}" alt="" loading="lazy" aria-hidden="true"></span>
              <span>${label}</span>
            </a>
          `
        )
        .join("")}
    </div>
  `;

  grid.appendChild(card);
}

function addCoreStrengths() {
  const finalCta = document.querySelector(".final-hire-section");
  if (!finalCta || document.querySelector(".core-strengths-section")) return;

  const section = document.createElement("section");
  section.className = "section core-strengths-section";
  section.setAttribute("data-reveal", "true");
  section.innerHTML = `
    <div class="container core-strengths-card">
      <div>
        <p class="eyebrow">Core Strengths</p>
        <h2>Reliable habits for junior roles and client work.</h2>
        <p>These are the working traits I am building alongside technical skill: clear communication, fast learning, problem solving, and careful delivery.</p>
      </div>
      <div class="strength-chip-grid">
        ${strengths.map((strength) => `<span>${strength}</span>`).join("")}
      </div>
    </div>
  `;

  finalCta.parentElement?.insertBefore(section, finalCta);
}

function updateCtaFromResume() {
  const cta = document.querySelector(".final-hire-section");
  if (!cta || cta.dataset.resumeEnhanced === "true") return;

  const heading = cta.querySelector("h2");
  const copy = cta.querySelector("p:last-child");
  setText(heading, "I'm seeking a junior Full Stack, React, or MERN role where I can grow and contribute.");
  setText(copy, "I bring live projects, current DevWeekends AI engineering experience, and daily DSA practice.");
  cta.dataset.resumeEnhanced = "true";
}

function updateResumePage() {
  const documentNode = document.querySelector(".resume-document");
  if (!documentNode || documentNode.dataset.resumeEnhanced === "true") return;

  const summary = [...documentNode.querySelectorAll("section")].find((section) =>
    section.querySelector("h2")?.textContent.includes("Summary")
  );
  if (summary) {
    const text = summary.querySelector("p");
    setText(
      text,
      "Motivated Full Stack Developer currently enrolled with DevWeekends in the Full Stack AI Engineering program. Passionate about real-world MERN applications, AI-powered features, role-based dashboards, e-commerce platforms, and job portals."
    );
  }

  const projects = [...documentNode.querySelectorAll("section")].find((section) =>
    section.querySelector("h2")?.textContent.includes("Projects")
  );
  if (projects) {
    const experience = document.createElement("section");
    experience.innerHTML = `
      <h2>Current Experience</h2>
      <div class="resume-item">
        <h3>Full Stack AI Engineering Fellow - DevWeekends</h3>
        <p>Remote | June 2026 - Present</p>
        <ul>
          <li>Integrating OpenAI and Claude APIs into full-stack web applications.</li>
          <li>Developing React frontend components and Node.js/Express backend APIs.</li>
          <li>Practicing Data Structures & Algorithms daily.</li>
        </ul>
      </div>
    `;
    documentNode.insertBefore(experience, projects);
  }

  documentNode.dataset.resumeEnhanced = "true";
}

function applyResumeEnhancements() {
  updateMetaFromResume();
  updateResumeDownloadLinks();
  updateAboutFromResume();
  addResumeExperience();
  addAiIntegrationSkills();
  addCoreStrengths();
  updateCtaFromResume();
  updateResumePage();
}

function scheduleResumeEnhancements() {
  const timers = [0, 120, 360, 800].map((delay) => window.setTimeout(applyResumeEnhancements, delay));
  return () => timers.forEach((timer) => window.clearTimeout(timer));
}

export default function App() {
  useEffect(() => {
    let cleanup = scheduleResumeEnhancements();
    const onRouteChange = () => {
      cleanup();
      cleanup = scheduleResumeEnhancements();
    };
    window.addEventListener("hashchange", onRouteChange);
    return () => {
      cleanup();
      window.removeEventListener("hashchange", onRouteChange);
    };
  }, []);

  return <AppResumeGuideBase />;
}
