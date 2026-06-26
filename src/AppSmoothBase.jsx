import { useEffect, useState } from "react";

const basePath = import.meta.env.BASE_URL || "/";
const asset = (path) => `${basePath}${path.replace(/^\/+/, "")}`;
const contactEndpoint = "https://formsubmit.co/ajax/junaidirfan810@gmail.com";

const contactLinks = [
  {
    label: "Gmail",
    value: "junaidirfan810@gmail.com",
    href: "mailto:junaidirfan810@gmail.com",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg",
    tone: "gmail",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/junaid-irfan-ba1027241",
    href: "https://www.linkedin.com/in/junaid-irfan-ba1027241",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    tone: "linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/Ali-Jun",
    href: "https://github.com/Ali-Jun",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    tone: "github",
  },
];

const skillIcons = new Map([
  ["HTML5", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"],
  ["CSS3", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"],
  ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"],
  ["React.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"],
  ["Tailwind CSS", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"],
  ["Bootstrap", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"],
  ["Node.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"],
  ["Express.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"],
  ["REST APIs", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/swagger.svg"],
  ["MongoDB", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"],
  ["MySQL", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"],
  ["JWT", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jsonwebtokens.svg"],
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
  "Git",
  "GitHub",
  "Vercel",
];

const familiarSkills = ["MySQL", "Figma", "VS Code", "Claude", "ChatGPT", "Codex", "DeepSeek"];

const stats = [
  ["30+", "Projects worked on"],
  ["4", "Live flagship demos"],
  ["MERN", "Primary stack"],
  ["AI", "Assisted delivery"],
];

const services = [
  {
    title: "Full Stack Web Apps",
    copy: "React frontends, Express APIs, MongoDB/MySQL workflows, authentication structure, dashboards, and deployment support.",
  },
  {
    title: "Dashboards & Admin Panels",
    copy: "Professional interfaces for booking, management, analytics, tables, forms, invoices, payments, and role-based screens.",
  },
  {
    title: "Portfolio & Business Websites",
    copy: "Modern responsive websites for personal brands, developers, small businesses, Upwork profiles, and Fiverr gigs.",
  },
  {
    title: "AI-Assisted Delivery",
    copy: "Fast development with Claude, ChatGPT, Codex, and DeepSeek for planning, coding, debugging, and UI refinement.",
  },
];

const projects = [
  {
    title: "Modern Animated MERN E-Commerce Store",
    tag: "Premium marketplace build",
    summary:
      "A men's fashion e-commerce platform with animated storefront, catalog, cart, checkout, user dashboard, and a full admin control center.",
    role:
      "Designed and developed the frontend, responsive flows, admin screens, backend API structure, authentication plan, demo data, screenshots, and Vercel deployment.",
    built:
      "What I built: a complete store experience with customer shopping flows plus admin tools for products, categories, banners, orders, coupons, stock, and profit tracking.",
    learned:
      "What I learned: how to structure business workflows across customer and admin screens while keeping the UI responsive and deployment-ready.",
    stack: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Vercel"],
    features: [
      "Product catalog with search, filters, variants, wishlist, cart, and checkout",
      "Admin tools for products, categories, banners, orders, coupons, returns, payments, and stock",
      "Sales analytics, profit/loss tracking, activity logs, and responsive mobile views",
    ],
    live: "https://modern-store-e-commerce-client.vercel.app",
    credential: "Demo admin: admin@modernstore.dev / Admin1234!",
    cover: "images/modern-store/01-home.png",
    screens: [
      ["Shop", "images/modern-store/02-shop.png"],
      ["Admin", "images/modern-store/06-admin-dashboard.png"],
      ["Products", "images/modern-store/07-admin-products.png"],
      ["Mobile", "images/modern-store/13-mobile-home.png"],
    ],
  },
  {
    title: "Auto Tech Management System",
    tag: "Service booking dashboard",
    summary:
      "Vehicle workshop management portal with role-based dashboards, booking, mechanic assignment, invoices, PKR payments, feedback, and reports.",
    role:
      "Built the React UI, dashboard workflows, customer booking screens, admin operations, payment screens, and deployment-ready presentation.",
    built:
      "What I built: a workshop portal where customers book services and admins manage bookings, mechanics, invoices, feedback, and local PKR payments.",
    learned:
      "What I learned: how to design dashboard flows where Admin, Customer, and Mechanic users each need different data, actions, and protected screens.",
    stack: ["React.js", "JavaScript", "Role Dashboards", "PKR Payments", "Vercel"],
    features: [
      "Customer service booking with priority, vehicle, date, mileage, and notes",
      "Admin booking management, mechanic assignment, invoice status, and dashboard metrics",
      "PKR payment recording, feedback, reports, and role-based workspace layout",
    ],
    live: "https://autotechmanagementsystem.vercel.app",
    source: "https://github.com/Ali-Jun/AutoTechmanagementsystem",
    cover: "images/autotech-admin-dashboard.png",
    screens: [
      ["Booking", "images/autotech-customer-booking.png"],
      ["Payments", "images/autotech-payments-pkr.png"],
      ["Jobs", "images/autotech-bookings-management.png"],
      ["Login", "images/autotech-login-screen.png"],
    ],
  },
  {
    title: "HireHub Job Portal",
    tag: "Hiring product workflow",
    summary:
      "MERN job portal concept for role discovery, company listings, search experience, employer pipelines, and candidate application flows.",
    role:
      "Created the product-facing interface, job search layout, application flow direction, employer workspace concept, and live project presentation.",
    built:
      "What I built: a hiring workspace with job discovery, search, candidate/employer logic, and a dashboard-ready authentication structure.",
    learned:
      "What I learned: how to think through two-sided marketplace workflows, protected routes, job filtering, and application management.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Authentication"],
    features: [
      "Role search, location search, featured jobs, and hiring team summaries",
      "Candidate and employer product logic with dashboard-ready structure",
      "Clean interface suitable for a startup-style job marketplace",
    ],
    live: "https://lnkd.in/da95uY8H",
    source: "https://lnkd.in/dUQmbrYE",
    cover: "images/hirehub-project.png",
    screens: [],
  },
  {
    title: "Task Manager",
    tag: "Productivity dashboard",
    summary:
      "A clean task-management workspace with dashboard counters, task board, filters, priority mix, progress tracking, and task creation flow.",
    role: "Built a focused dashboard UI and project workflow for everyday task planning and portfolio proof.",
    built:
      "What I built: a productivity dashboard with task counters, status filters, search, priority mix, and a clear empty-state workflow.",
    learned:
      "What I learned: how to make simple SaaS interfaces feel complete with good states, filters, counters, and clear actions.",
    stack: ["React.js", "JavaScript", "Dashboard UI", "Local Workflow"],
    features: [
      "Task board with status filters, search, priority sorting, and progress view",
      "Dashboard cards for total, to do, in progress, and completed work",
      "Simple SaaS-style layout with sidebar navigation and productivity metrics",
    ],
    live: "https://lnkd.in/dnVkPFCK",
    source: "https://github.com/Ali-Jun/Task-Manager",
    cover: "images/task-manager-project.png",
    screens: [],
  },
];

function getRoute() {
  if (typeof window === "undefined") return "home";
  return window.location.hash.replace(/^#\/?/, "") || "home";
}

function useHashRoute() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

function useTheme() {
  const readTheme = () => {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  };
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return [theme, setTheme];
}

function useReveal(route) {
  useEffect(() => {
    const targets = [...document.querySelectorAll("[data-reveal]")];
    targets.forEach((target) => target.classList.remove("is-visible"));

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [route]);
}

function externalAttrs(href) {
  return href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noreferrer" };
}

function Header({ route, theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const navItems = [
    ["Home", "#/home", route === "home"],
    ["About", "#/about", route === "about"],
    ["Projects", "#/projects", route === "projects"],
    ["Skills", "#/skills", route === "skills"],
    ["Contact", "#/contact", route === "contact"],
    ["Resume", "#/resume", route === "resume"],
  ];

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <header className="site-header" data-header>
      <a className="brand" href="#/home" onClick={() => setOpen(false)} aria-label="Junaid Irfan home">
        <span className="brand-mark" aria-hidden="true">
          <img src={asset("images/junaid-profile.png")} alt="" />
        </span>
        <span className="brand-copy">
          <strong>Junaid Irfan</strong>
          <small>Software Engineer</small>
        </span>
      </a>

      <nav className="site-nav" aria-label="Main navigation">
        {navItems.map(([label, href, isActive]) => (
          <a className={isActive ? "is-active" : ""} href={href} key={label} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <button
        className="icon-button theme-toggle"
        type="button"
        aria-label="Toggle light and dark theme"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <span />
      </button>

      <a className="resume-link" href={asset("assets/Junaid-Irfan-Resume.pdf")} download>
        Resume
      </a>

      <button className="icon-button nav-toggle" type="button" aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

function SmoothHeroVisual() {
  const heroSkills = ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Vercel"];

  return (
    <aside className="hero-visual-panel" data-reveal aria-label="MERN stack highlights">
      <div className="hero-profile-card">
        <img src={asset("images/junaid-profile.png")} alt="Junaid Irfan" />
        <div>
          <span>Available for junior roles and freelance work</span>
          <strong>MERN Stack Developer</strong>
        </div>
      </div>
      <div className="stack-spotlight">
        <p>Core stack</p>
        <div className="stack-grid">
          {heroSkills.map((skill) => (
            <a href={skillLinks.get(skill)} target="_blank" rel="noreferrer" className="stack-pill" key={skill}>
              <span className="skill-level-icon">
                <img src={skillIcons.get(skill)} alt="" loading="lazy" />
              </span>
              {skill}
            </a>
          ))}
        </div>
      </div>
      <div className="mini-dashboard" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </aside>
  );
}

function Hero() {
  return (
    <section className="hero hero-smooth" id="home">
      <div className="hero-noise" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy-block" data-reveal>
          <p className="eyebrow">Building Modern & AI-Driven Applications</p>
          <h1>Full Stack Developer for business-ready web apps, dashboards, and freelance delivery.</h1>
          <p>
            I'm a MERN stack developer who ships full-stack apps with clean UI and real deployments, not just tutorials.
            I build React and MERN applications with responsive layouts, API-ready structure, and deployment polish.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#/projects">
              View Projects
            </a>
            <a className="button button-ghost" href="#/contact">
              Hire Me
            </a>
            <a className="button button-soft" href={asset("assets/Junaid-Irfan-Resume.pdf")} download>
              Download Resume
            </a>
          </div>
        </div>

        <SmoothHeroVisual />
      </div>

      <div className="container stat-grid" data-reveal>
        {stats.map(([value, label]) => (
          <div className="stat-card" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillLogo({ label }) {
  return (
    <a className="skill-logo-card" href={skillLinks.get(label)} target="_blank" rel="noreferrer" aria-label={`Open ${label} website`}>
      <img src={skillIcons.get(label)} alt="" loading="lazy" />
      <span>{label}</span>
    </a>
  );
}

function SkillsBanner() {
  const logos = [...proficientSkills, ...familiarSkills, ...proficientSkills, ...familiarSkills];
  return (
    <section className="skills-banner" aria-label="Technology logos">
      <div className="skill-marquee">
        <div className="skill-track">
          {logos.map((label, index) => (
            <SkillLogo label={label} key={`${label}-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section about-hook-section" id="about" data-reveal>
      <div className="container about-hook-grid">
        <div className="about-hook-copy">
          <p className="eyebrow">About Me</p>
          <h2>I build practical MERN apps with clean UI, dashboard workflows, and real deployment links.</h2>
          <p>
            My strongest work is full-stack product building: React interfaces, API-ready flows, responsive dashboards,
            authentication structure, and polished project presentation for recruiters and freelance clients.
          </p>
          <p>
            I use AI tools like Claude, ChatGPT, Codex, and DeepSeek to plan faster, debug carefully, and improve UI
            quality while still understanding and owning the implementation.
          </p>
        </div>
        <div className="about-proof-card">
          <span>Current focus</span>
          <strong>Junior + Freelance</strong>
          <p>Open to junior developer roles, remote freelance tasks, Upwork/Fiverr web apps, dashboards, and portfolio websites.</p>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="section" id="experience" data-reveal>
      <div className="container section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Working projects and freelance-ready delivery.</h2>
        <p>Practical project experience built around real portfolio screens, live demos, GitHub repositories, and deployable apps.</p>
      </div>
      <div className="container timeline">
        <article className="timeline-item">
          <span className="timeline-dot" />
          <div>
            <p>2023 - Present</p>
            <h3>Full Stack Developer - Project-Based Experience</h3>
            <ul>
              <li>Worked on 30+ academic, practice, and client-style projects with selected apps prepared as live demos.</li>
              <li>Built React interfaces, dashboard layouts, forms, project galleries, authentication-ready flows, and deployment-ready web apps.</li>
              <li>Delivered Modern Store E-Commerce, Auto Tech Management System, HireHub Job Portal, Task Manager, and microservices practice work.</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured = false }) {
  return (
    <article className={`project-card ${featured ? "is-featured" : ""}`} data-reveal>
      <div className="project-media">
        <figure className="project-cover">
          <img src={asset(project.cover)} alt={`${project.title} screenshot`} loading="lazy" />
        </figure>
        {project.screens.length > 0 && (
          <div className="screen-strip">
            {project.screens.map(([label, src]) => (
              <figure key={src}>
                <img src={asset(src)} alt={`${project.title} ${label} screen`} loading="lazy" />
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>

      <div className="project-content">
        <p className="project-tag">{project.tag}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-role">
          <span>My Role</span>
          <strong>{project.role}</strong>
        </div>
        <div className="project-context">
          <p>
            <strong>What I built:</strong> {project.built.replace(/^What I built:\s*/, "")}
          </p>
          <p>
            <strong>What I learned:</strong> {project.learned.replace(/^What I learned:\s*/, "")}
          </p>
        </div>
        {project.credential && <p className="credential">{project.credential}</p>}
        <ul className="feature-list">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <div className="chip-list">
          {project.stack.map((item) => (
            <a href={skillLinks.get(item) || "#/skills"} target={skillLinks.get(item) ? "_blank" : undefined} rel={skillLinks.get(item) ? "noreferrer" : undefined} key={item}>
              {item}
            </a>
          ))}
        </div>
        <div className="project-links">
          <a href={project.live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
          {project.source && (
            <a href={project.source} target="_blank" rel="noreferrer">
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectsSection({ all = false }) {
  const shownProjects = all ? projects : projects.slice(0, 4);
  return (
    <section className="section" id="projects">
      <div className="container section-heading" data-reveal>
        <p className="eyebrow">Selected Projects</p>
        <h2>Project work with context, screenshots, and live links.</h2>
        <p>Each project highlights the problem solved, my role, the technical workflow, and what I learned while building it.</p>
      </div>
      <div className="container projects-grid">
        {shownProjects.map((project, index) => (
          <ProjectCard project={project} featured={index === 0} key={project.title} />
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section" id="services" data-reveal>
      <div className="container services-layout">
        <div>
          <p className="eyebrow">For Jobs, Upwork, and Fiverr</p>
          <h2>What I can build for teams and clients.</h2>
          <p>
            I focus on the practical work most small businesses and junior developer teams need: responsive UI, dashboards,
            forms, APIs, deployment, and clean project presentation.
          </p>
          <div className="service-actions">
            <a className="button button-primary" href="#/contact">
              Start a Project
            </a>
            <a className="button button-ghost" href="#/projects">
              View Work
            </a>
          </div>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillLevelCard({ title, copy, skills }) {
  return (
    <article className="skill-level-card">
      <h3>{title}</h3>
      <p>{copy}</p>
      <div className="skill-level-list">
        {skills.map((skill) => (
          <a href={skillLinks.get(skill)} target="_blank" rel="noreferrer" key={skill}>
            <span className="skill-level-icon">
              <img src={skillIcons.get(skill)} alt="" loading="lazy" />
            </span>
            <span>{skill}</span>
          </a>
        ))}
      </div>
    </article>
  );
}

function SkillsSection() {
  return (
    <section className="section band" id="skills" data-reveal>
      <div className="container section-heading">
        <p className="eyebrow">Tools & Technologies</p>
        <h2>Skills grouped by real confidence.</h2>
        <p>Recruiters should see what I can confidently discuss and use in a project, without a wall of padded logos.</p>
      </div>
      <div className="container skill-level-grid">
        <SkillLevelCard
          title="Proficient"
          copy="Technologies I use for portfolio projects, dashboards, APIs, UI work, and deployment."
          skills={proficientSkills}
        />
        <SkillLevelCard
          title="Familiar"
          copy="Tools I use for design, development workflow, AI-assisted coding, and supporting project work."
          skills={familiarSkills}
        />
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="section compact-section" data-reveal>
      <div className="container education-card">
        <div>
          <p className="eyebrow">Education</p>
          <h2>BS Software Engineering</h2>
          <p>Lahore Leads University · Expected 2025</p>
        </div>
        <ul className="feature-list">
          <li>Software engineering fundamentals, databases, web technologies, and project planning.</li>
          <li>Applied coursework through MERN projects, dashboards, and deployment-ready portfolio work.</li>
        </ul>
      </div>
    </section>
  );
}

function FreelanceProofSection() {
  return (
    <section className="freelance-proof-section" data-reveal>
      <div className="container proof-grid">
        <article className="proof-card is-copy">
          <span>Freelance proof</span>
          <p>
            I do not want to fake testimonials. Instead, this portfolio shows the proof I can stand behind today: live
            projects, source links, screenshots, and clear explanations of my role.
          </p>
        </article>
        <article className="proof-card">
          <strong>30+</strong>
          <span>Projects worked on</span>
        </article>
        <article className="proof-card">
          <strong>4</strong>
          <span>Live demos</span>
        </article>
        <article className="proof-card">
          <strong>100%</strong>
          <span>Real portfolio links</span>
        </article>
      </div>
    </section>
  );
}

function FinalHireSection() {
  return (
    <section className="section final-hire-section" data-reveal>
      <div className="container final-hire-card">
        <div>
          <p className="eyebrow">Ready to talk</p>
          <h2>Need a junior MERN developer or freelance web app builder?</h2>
          <p>Email me directly or open my LinkedIn/GitHub to review the work. I respond best when you include the project goal, pages, deadline, and reference links.</p>
        </div>
        <div className="final-hire-actions">
          <a className="button button-primary" href="mailto:junaidirfan810@gmail.com">
            Email Junaid
          </a>
          <a className="button button-ghost" href="https://www.linkedin.com/in/junaid-irfan-ba1027241" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="button button-soft" href="https://github.com/Ali-Jun" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactIcons() {
  return (
    <div className="contact-link-grid" data-reveal>
      {contactLinks.map((link) => (
        <a
          className={`contact-link-card contact-icon-only ${link.tone}`}
          href={link.href}
          key={link.label}
          aria-label={link.label}
          {...externalAttrs(link.href)}
        >
          <span>
            <img src={link.icon} alt="" loading="lazy" />
          </span>
          <strong>{link.label}</strong>
          <small>{link.value}</small>
        </a>
      ))}
    </div>
  );
}

function ContactPage() {
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  const submitForm = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const message = data.get("message")?.toString().trim();
    const honey = data.get("_honey")?.toString().trim();

    if (honey) return;
    if (!name || !email || !message) {
      setStatus({ type: "error", text: "Please add your name, email, and message." });
      return;
    }

    setSending(true);
    setStatus({ type: "", text: "Sending message..." });

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Message: message,
          _replyto: email,
          _subject: `Portfolio message from ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === "false") throw new Error(result.message || "Message failed");

      setStatus({ type: "success", text: "Thanks, your message has been sent to Junaid's email." });
      form.reset();
    } catch {
      setStatus({
        type: "error",
        text: "Message could not be sent right now. Please email directly at junaidirfan810@gmail.com.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="page-main">
      <section className="page-hero page-hero-smooth">
        <div className="container page-hero-grid">
          <div data-reveal>
            <p className="eyebrow">Contact</p>
            <h1>Let's build a clean web project.</h1>
            <p>Reach out for junior developer opportunities, Upwork jobs, Fiverr work, dashboards, React apps, MERN features, and portfolio websites.</p>
          </div>
          <ContactIcons />
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Message</p>
            <h2>Send project details.</h2>
            <p>Write the project type, required pages or features, deadline, and any reference links. The form sends the message directly to email.</p>
          </div>
          <form className="contact-form" onSubmit={submitForm}>
            <input className="honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />
            <label>
              Name
              <input type="text" name="name" autoComplete="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="6" required />
            </label>
            <button className="button button-primary" type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>
            <p className={`form-status ${status.type ? `is-${status.type}` : ""}`} role="status">
              {status.text}
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-shell">
        <div className="resume-actions-top">
          <a className="button button-primary" href={asset("assets/Junaid-Irfan-Resume.pdf")} download>
            Download PDF
          </a>
          <a className="button button-ghost" href={asset("assets/Junaid-Irfan-Resume.docx")} download>
            Download DOCX
          </a>
        </div>

        <article className="resume-document">
          <header className="resume-title">
            <div>
              <p>Full Stack Developer · MERN Stack · AI-Assisted Development</p>
              <h1>Junaid Irfan</h1>
            </div>
            <address>
              <a href="mailto:junaidirfan810@gmail.com">junaidirfan810@gmail.com</a>
              <a href="https://www.linkedin.com/in/junaid-irfan-ba1027241">linkedin.com/in/junaid-irfan-ba1027241</a>
              <a href="https://github.com/Ali-Jun">github.com/Ali-Jun</a>
            </address>
          </header>

          <section>
            <h2>Summary</h2>
            <p>
              MERN Stack Developer with 30+ project builds spanning e-commerce platforms, role-based dashboards, job
              portals, and booking systems. Focused on clean, responsive UI, REST API design, and shipping client-ready products.
            </p>
          </section>

          <section>
            <h2>Skills</h2>
            <div className="resume-columns">
              <p><strong>Frontend:</strong> HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Bootstrap</p>
              <p><strong>Backend:</strong> Node.js, Express.js, REST APIs</p>
              <p><strong>Databases:</strong> MongoDB, MySQL</p>
              <p><strong>Tools:</strong> Git, GitHub, Figma, VS Code, Vercel</p>
            </div>
          </section>

          <section>
            <h2>Projects</h2>
            {projects.slice(0, 3).map((project) => (
              <div className="resume-item" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p>
                  <a href={project.live}>Live Demo</a>
                  {project.source ? <> · <a href={project.source}>Source Code</a></> : null}
                </p>
              </div>
            ))}
          </section>

          <section>
            <h2>Education</h2>
            <p>BS Software Engineering · Lahore Leads University · Expected 2025</p>
          </section>
        </article>
      </div>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="page-main">
      <section className="page-hero page-hero-smooth">
        <div className="container page-hero-grid">
          <div data-reveal>
            <p className="eyebrow">About</p>
            <h1>MERN developer focused on useful products, not decoration.</h1>
            <p>I build dashboards, booking systems, stores, job portals, and portfolio websites with clear user flows and real deployment links.</p>
          </div>
          <div className="about-proof-card" data-reveal>
            <span>Professional focus</span>
            <strong>Clean UI + real apps</strong>
            <p>React interfaces, backend-ready flows, responsive layouts, and recruiter-friendly project presentation.</p>
          </div>
        </div>
      </section>
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
    </main>
  );
}

function ProjectsPage() {
  return (
    <main className="page-main">
      <section className="page-hero page-hero-smooth">
        <div className="container page-hero-grid">
          <div data-reveal>
            <p className="eyebrow">Projects</p>
            <h1>Business-ready projects with screenshots and live demos.</h1>
            <p>These projects are positioned for recruiters, Upwork clients, and Fiverr buyers who want proof of delivery.</p>
          </div>
          <div className="about-proof-card" data-reveal>
            <span>Project proof</span>
            <strong>4 live demos</strong>
            <p>E-commerce, workshop management, job portal, and productivity dashboard work.</p>
          </div>
        </div>
      </section>
      <ProjectsSection all />
    </main>
  );
}

function SkillsPage() {
  return (
    <main className="page-main">
      <section className="page-hero page-hero-smooth">
        <div className="container page-hero-grid">
          <div data-reveal>
            <p className="eyebrow">Skills</p>
            <h1>Modern full-stack tools with honest confidence levels.</h1>
            <p>The stack is grouped so recruiters can quickly understand what I use regularly and what supports my workflow.</p>
          </div>
          <ContactIcons />
        </div>
      </section>
      <SkillsSection />
    </main>
  );
}

function HomePage() {
  return (
    <main className="page-main">
      <Hero />
      <SkillsBanner />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <SkillsSection />
      <EducationSection />
      <FreelanceProofSection />
      <FinalHireSection />
    </main>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <p>© {new Date().getFullYear()} Junaid Irfan. Full Stack Developer.</p>
        <div>
          {contactLinks.map((link) => (
            <a className={`contact-icon-only ${link.tone}`} href={link.href} key={link.label} aria-label={link.label} {...externalAttrs(link.href)}>
              <span className="inline-tech-logo">
                <img src={link.icon} alt="" loading="lazy" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const route = useHashRoute();
  const [theme, setTheme] = useTheme();
  useReveal(route);

  useEffect(() => {
    const onScroll = () => document.querySelector("[data-header]")?.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const page =
    route === "contact" ? (
      <ContactPage />
    ) : route === "resume" ? (
      <ResumePage />
    ) : route === "about" ? (
      <AboutPage />
    ) : route === "projects" ? (
      <ProjectsPage />
    ) : route === "skills" ? (
      <SkillsPage />
    ) : (
      <HomePage />
    );

  return (
    <>
      <Header route={route} theme={theme} setTheme={setTheme} />
      {page}
      {route !== "resume" && <Footer />}
      {route !== "resume" && (
        <a className="hire-me-sticky" href="mailto:junaidirfan810@gmail.com">
          Hire Me
        </a>
      )}
    </>
  );
}
