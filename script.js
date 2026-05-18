const body = document.body;
const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const yearTarget = document.querySelector("[data-year]");
const revealTargets = [...document.querySelectorAll("[data-reveal]")];
const toast = document.querySelector("[data-toast]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const skillRows = [...document.querySelectorAll("[data-skill-row]")];
let toastTimer;

const skillLinks = new Map([
  ["MongoDB", "https://www.mongodb.com/"],
  ["Express", "https://expressjs.com/"],
  ["Express.js", "https://expressjs.com/"],
  ["React", "https://react.dev/"],
  ["Node", "https://nodejs.org/"],
  ["Node.js", "https://nodejs.org/"],
  ["HTML", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
  ["HTML5", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
  ["CSS", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
  ["CSS3", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
  ["JavaScript", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
  ["TypeScript", "https://www.typescriptlang.org/"],
  ["Tailwind CSS", "https://tailwindcss.com/"],
  ["Bootstrap", "https://getbootstrap.com/"],
  ["PHP", "https://www.php.net/"],
  ["MySQL", "https://www.mysql.com/"],
  ["REST APIs", "https://developer.mozilla.org/en-US/docs/Glossary/REST"],
  ["Local Storage", "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"],
  ["Microservices", "https://microservices.io/"],
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

function getSavedTheme() {
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle?.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
}

applyTheme(getSavedTheme());

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

skillRows.forEach((row) => {
  const set = row.querySelector(".skill-logo-set");
  if (!set || row.querySelector(".skill-logo-set[aria-hidden='true']")) return;
  const clone = set.cloneNode(true);
  clone.setAttribute("aria-hidden", "true");
  row.append(clone);
});

document.querySelectorAll(".skill-logo-card").forEach((card) => {
  const label = card.getAttribute("aria-label") || card.getAttribute("title") || "";
  const url = skillLinks.get(label);
  if (!url || card.querySelector("a")) return;

  const link = document.createElement("a");
  link.className = "skill-logo-link";
  link.href = url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.setAttribute("aria-label", `Open ${label} website`);

  while (card.firstChild) {
    link.append(card.firstChild);
  }

  card.append(link);
});

document.querySelectorAll(".chip-list span").forEach((chip) => {
  const label = chip.textContent.trim();
  const url = skillLinks.get(label);
  if (!url) return;

  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = label;
  link.setAttribute("aria-label", `Open ${label} website`);
  chip.replaceWith(link);
});

function setHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeNavigation() {
  body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Open navigation");
}

navToggle?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeNavigation);
});

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("portfolio-theme", nextTheme);
  applyTheme(nextTheme);
});

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

function markActiveNavigation(activeHref) {
  navLinks.forEach((link) => {
    const linkPage = link.dataset.navPage;
    const currentPage = body.dataset.page;
    const isPageMatch = Boolean(linkPage && currentPage && linkPage === currentPage);
    const isHrefMatch = activeHref ? link.getAttribute("href") === activeHref : false;
    link.classList.toggle("is-active", isPageMatch || isHrefMatch);
  });
}

markActiveNavigation();

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  revealTargets.forEach((target) => revealObserver.observe(target));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      const activeHref = id === "home" ? "index.html" : `index.html#${id}`;
      markActiveNavigation(activeHref);
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

  document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

function showToast(message) {
  if (!toast) return;
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 3600);
}

document.querySelectorAll(".placeholder-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showToast(link.dataset.placeholder || "Add the final project URL before publishing.");
  });
});

document.querySelector("[data-contact-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = form.querySelector("[data-form-status]");
  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    if (status) status.textContent = "Please complete every field.";
    return;
  }

  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const bodyText = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
  const mailto = `mailto:junaidirfan810@gmail.com?subject=${subject}&body=${bodyText}`;

  if (status) {
    status.innerHTML = `Message prepared. <a href="${mailto}">Open email draft</a>.`;
  }
});

document.querySelector("[data-print]")?.addEventListener("click", () => {
  window.print();
});
