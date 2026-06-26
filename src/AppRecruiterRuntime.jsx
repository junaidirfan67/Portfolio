import { useEffect } from "react";
import AppResponsiveRuntime from "./AppResponsiveRuntime.jsx";

const heroTech = [
  {
    label: "React",
    href: "https://react.dev/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    x: "80%",
    y: "21%",
    z: "46px",
  },
  {
    label: "Node.js",
    href: "https://nodejs.org/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    x: "87%",
    y: "55%",
    z: "22px",
  },
  {
    label: "MongoDB",
    href: "https://www.mongodb.com/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    x: "65%",
    y: "82%",
    z: "54px",
  },
  {
    label: "Express",
    href: "https://expressjs.com/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    x: "31%",
    y: "80%",
    z: "28px",
  },
  {
    label: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    x: "13%",
    y: "49%",
    z: "42px",
  },
  {
    label: "Tailwind",
    href: "https://tailwindcss.com/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    x: "28%",
    y: "18%",
    z: "34px",
  },
  {
    label: "Vercel",
    href: "https://vercel.com/",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vercel.svg",
    x: "50%",
    y: "8%",
    z: "18px",
  },
  {
    label: "AI Tools",
    href: "https://chatgpt.com/",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg",
    x: "52%",
    y: "93%",
    z: "36px",
  },
];

function createTechNode(item, index) {
  const link = document.createElement("a");
  link.className = "tech-orbit-node";
  link.href = item.href;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.setAttribute("aria-label", `Open ${item.label} website`);
  link.style.setProperty("--x", item.x);
  link.style.setProperty("--y", item.y);
  link.style.setProperty("--z", item.z);
  link.style.setProperty("--delay", `${index * 0.18}s`);

  const img = document.createElement("img");
  img.src = item.icon;
  img.alt = "";
  img.loading = "lazy";
  img.setAttribute("aria-hidden", "true");

  const label = document.createElement("span");
  label.textContent = item.label;

  link.append(img, label);
  return link;
}

function injectHeroTechOrbit() {
  const hero = document.querySelector(".hero");
  if (!hero || hero.querySelector(".hero-tech-stage")) return;

  const stage = document.createElement("div");
  stage.className = "hero-tech-stage";
  stage.setAttribute("aria-label", "MERN and AI technology animation");

  const orbit = document.createElement("div");
  orbit.className = "tech-orbit";

  const ringOne = document.createElement("span");
  ringOne.className = "tech-orbit-ring ring-one";
  ringOne.setAttribute("aria-hidden", "true");

  const ringTwo = document.createElement("span");
  ringTwo.className = "tech-orbit-ring ring-two";
  ringTwo.setAttribute("aria-hidden", "true");

  const core = document.createElement("div");
  core.className = "tech-orbit-core";
  core.innerHTML = "<strong>MERN</strong><span>AI workflow</span>";

  orbit.append(ringOne, ringTwo, core, ...heroTech.map(createTechNode));
  stage.appendChild(orbit);

  const stats = hero.querySelector(".stat-grid");
  if (stats) {
    hero.insertBefore(stage, stats);
  } else {
    hero.appendChild(stage);
  }
}

function keepHeroTechOrbit() {
  injectHeroTechOrbit();
}

export default function App() {
  useEffect(() => {
    keepHeroTechOrbit();

    const observer = new MutationObserver(keepHeroTechOrbit);
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return <AppResponsiveRuntime />;
}
