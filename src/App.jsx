import { useEffect } from "react";
import AppSmoothBase from "./AppSmoothBase.jsx";

const aiIcon = "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg";
const aiHref = "https://platform.openai.com/docs/overview";

function setTextIfChanged(node, value) {
  if (node && node.textContent !== value) node.textContent = value;
}

function replaceText(selector, value, match) {
  document.querySelectorAll(selector).forEach((node) => {
    if (!match || node.textContent.includes(match)) setTextIfChanged(node, value);
  });
}

function updateHeroAndBrand() {
  replaceText(".brand-copy small", "Full Stack AI Engineer");
  replaceText(".hero-profile-card strong", "Full Stack AI Engineer");

  document.querySelectorAll(".hero h1").forEach((heading) => {
    if (heading.textContent.includes("Full Stack Developer")) {
      setTextIfChanged(heading, "Full Stack AI Engineer for business-ready web apps, dashboards, and freelance delivery.");
    }
  });

  const contactHero = [...document.querySelectorAll(".page-hero h1")].find((heading) =>
    heading.textContent.includes("Let's build")
  );
  const copy = contactHero?.parentElement?.querySelector("p:last-child");
  if (!copy) return;

  copy.classList.add("smooth-contact-copy");
  setTextIfChanged(
    copy,
    "Reach out for freelance + collaborations, junior developer opportunities, dashboards, React apps, MERN features, and portfolio websites."
  );
}

function updateExperience() {
  const section = document.querySelector("#experience");
  if (!section || section.querySelector(".experience-feature-card")) return;

  const heading = section.querySelector(".section-heading");
  setTextIfChanged(heading?.querySelector("h2"), "Current fellowship and freelance-ready delivery.");
  setTextIfChanged(
    heading?.querySelector("p:last-child"),
    "One active fellowship, focused on MERN product work, AI-assisted engineering, clean UI, and deployable web apps."
  );

  const timeline = section.querySelector(".timeline");
  if (!timeline) return;

  timeline.className = "container";
  timeline.innerHTML = `
    <article class="experience-feature-card">
      <div>
        <span class="active-badge">Active</span>
        <p class="experience-meta">DevWeekends - Enrolled in Full Stack AI Engineering</p>
        <h3>Full Stack AI Engineer</h3>
        <p>Building modern MERN applications while growing deeper into AI-assisted workflows, LLM tooling, dashboards, API-ready structures, and production-minded UI delivery.</p>
        <ul class="feature-list">
          <li>Currently enrolled in the DevWeekends Full Stack AI Engineering fellowship.</li>
          <li>Worked on 30+ academic, practice, and client-style projects with selected apps prepared as live demos.</li>
          <li>Built React interfaces, dashboard layouts, forms, project galleries, authentication-ready flows, and deployment-ready web apps.</li>
          <li>Delivered Modern Store E-Commerce, Auto Tech Management System, HireHub Job Portal, Task Manager, and MERN practice work.</li>
        </ul>
      </div>
      <div class="experience-focus-list" aria-label="Current focus">
        <span>MERN</span>
        <span>Dashboards</span>
        <span>AI / LLMs - Growing</span>
      </div>
    </article>
  `;
}

function addAiSkill() {
  document.querySelectorAll(".skill-level-card").forEach((card) => {
    const title = card.querySelector("h3");
    const list = card.querySelector(".skill-level-list");
    if (!title || !list || title.textContent.trim() !== "Familiar" || list.querySelector("[data-ai-llms]")) return;

    const link = document.createElement("a");
    link.className = "is-growing";
    link.href = aiHref;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.setAttribute("data-ai-llms", "true");
    link.innerHTML = `
      <span class="skill-level-icon">
        <img src="${aiIcon}" alt="" loading="lazy" />
      </span>
      <span>AI / LLMs <small class="skill-growth-label">Growing</small></span>
    `;
    list.prepend(link);
  });
}

function applySmoothUpdates() {
  updateHeroAndBrand();
  updateExperience();
  addAiSkill();
}

function scheduleSmoothUpdates() {
  const timers = [0, 50, 180, 450].map((delay) => window.setTimeout(applySmoothUpdates, delay));
  return () => timers.forEach((timer) => window.clearTimeout(timer));
}

export default function App() {
  useEffect(() => {
    let cleanupTimers = scheduleSmoothUpdates();

    const onRouteChange = () => {
      cleanupTimers();
      cleanupTimers = scheduleSmoothUpdates();
    };

    window.addEventListener("hashchange", onRouteChange);
    return () => {
      cleanupTimers();
      window.removeEventListener("hashchange", onRouteChange);
    };
  }, []);

  return <AppSmoothBase />;
}
