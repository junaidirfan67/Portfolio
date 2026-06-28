const root = document.documentElement;
const menuButton = document.querySelector("[data-menu-button]");
const navLinks = document.querySelector("[data-nav-links]");
const themeToggle = document.querySelector("[data-theme-toggle]");

const readTheme = () => {
  try {
    return localStorage.getItem("junaid-theme");
  } catch {
    return null;
  }
};

const saveTheme = (theme) => {
  try {
    localStorage.setItem("junaid-theme", theme);
  } catch {
    // The portfolio still works if browser storage is unavailable.
  }
};

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const initialTheme = readTheme() || systemTheme;

const applyTheme = (theme) => {
  root.dataset.theme = theme;
  if (!themeToggle) return;

  const nextTheme = theme === "dark" ? "light" : "dark";
  themeToggle.textContent = theme === "dark" ? "Light" : "Dark";
  themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
};

applyTheme(initialTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    saveTheme(nextTheme);
  });
}

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("[data-nav-link]").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage || (currentPage === "index.html" && href === "index.html")) {
    link.classList.add("is-active");
  }
});
