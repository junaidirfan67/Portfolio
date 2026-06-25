import { useEffect } from "react";
import AppVisualRuntime from "./AppVisualRuntime.jsx";

const techLogos = new Map([
  ["React", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"],
  ["React.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"],
  ["Vite", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"],
  ["Three.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg"],
  ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"],
  ["Tailwind CSS", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"],
  ["Bootstrap", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"],
  ["Node.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"],
  ["Express.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"],
  ["MongoDB", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"],
  ["MySQL", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"],
  ["JWT", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jsonwebtokens.svg"],
  ["REST APIs", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/swagger.svg"],
  ["GitHub", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"],
  ["Vercel", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vercel.svg"],
  ["Claude", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/anthropic.svg"],
  ["ChatGPT", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg"],
  ["Codex", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg"],
  ["DeepSeek", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/deepseek.svg"],
]);

const contactLogos = [
  {
    match: "mailto:junaidirfan810@gmail.com",
    label: "Email Junaid",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg",
    tone: "gmail",
  },
  {
    match: "linkedin.com/in/junaid-irfan-ba1027241",
    label: "Open LinkedIn",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    tone: "linkedin",
  },
  {
    match: "github.com/Ali-Jun",
    label: "Open GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    tone: "github",
  },
];

function iconNode(src, label) {
  const wrapper = document.createElement("span");
  wrapper.className = "inline-tech-logo";

  const image = document.createElement("img");
  image.src = src;
  image.alt = "";
  image.loading = "lazy";
  image.setAttribute("aria-hidden", "true");

  wrapper.appendChild(image);
  wrapper.dataset.logo = label;
  return wrapper;
}

function decorateTechLinks() {
  document.querySelectorAll(".chip-list a").forEach((link) => {
    const label = link.textContent?.trim();
    const logo = label ? techLogos.get(label) : null;
    if (!logo || link.dataset.logoReady === "true") return;

    link.classList.add("has-tech-logo");
    link.prepend(iconNode(logo, label));
    link.dataset.logoReady = "true";
  });
}

function decorateContactLinks() {
  const selectors = [".contact-link-card", ".footer-grid a"].join(",");

  document.querySelectorAll(selectors).forEach((link) => {
    const href = link.getAttribute("href") || "";
    const contact = contactLogos.find((item) => href.includes(item.match));
    if (!contact || link.dataset.contactIconReady === "true") return;

    link.classList.add("contact-icon-only", contact.tone);
    link.setAttribute("aria-label", contact.label);

    if (!link.querySelector("img")) {
      link.textContent = "";
      link.appendChild(iconNode(contact.icon, contact.label));
    }

    link.dataset.contactIconReady = "true";
  });
}

function enhanceVisualLogos() {
  decorateTechLinks();
  decorateContactLinks();
}

export default function App() {
  useEffect(() => {
    enhanceVisualLogos();

    const observer = new MutationObserver(enhanceVisualLogos);
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return <AppVisualRuntime />;
}
