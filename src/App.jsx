import { useEffect, useMemo, useState } from "react";

const basePath = import.meta.env.BASE_URL;
const asset = (path) => `${basePath}${path}`;
const contactEndpoint = "https://formsubmit.co/ajax/junaidirfan810@gmail.com";

const skillLinks = new Map([
  ["MongoDB", "https://www.mongodb.com/"],
  ["Express", "https://expressjs.com/"],
  ["Express.js", "https://expressjs.com/"],
  ["React", "https://react.dev/"],
  ["React.js", "https://react.dev/"],
  ["Node", "https://nodejs.org/"],
  ["Node.js", "https://nodejs.org/"],
  ["HTML", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
  ["HTML5", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
  ["CSS", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
  ["CSS3", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
  ["JavaScript", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
  ["Tailwind CSS", "https://tailwindcss.com/"],
  ["Bootstrap", "https://getbootstrap.com/"],
  ["PHP", "https://www.php.net/"],
  ["MySQL", "https://www.mysql.com/"],
  ["JWT", "https://jwt.io/"],
  ["bcrypt.js", "https://github.com/dcodeIO/bcrypt.js"],
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

const skillLogos = [
  ["MongoDB", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", "mongo-logo"],
  ["Express", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", "express-logo"],
  ["React", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", "react-logo"],
  ["Node.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", "node-logo"],
  ["HTML5", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", "html-logo"],
  ["CSS3", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", "css-logo"],
  ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", "js-logo"],
  ["Tailwind CSS", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", "tailwind-logo"],
  ["Bootstrap", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg", "bootstrap-logo"],
  ["PHP", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", "php-logo"],
  ["MySQL", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", "mysql-logo"],
  ["Git", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", "git-logo"],
  ["GitHub", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", "github-logo"],
  ["Figma", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", "figma-logo"],
  ["VS Code", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", "vscode-logo"],
  ["Vercel", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vercel.svg", "ai-logo"],
  ["Claude", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/anthropic.svg", "ai-logo"],
  ["ChatGPT", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg", "ai-logo"],
  ["Codex", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg", "ai-logo"],
  ["DeepSeek", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/deepseek.svg", "ai-logo"],
];

const skillGroups = [
  {
    title: "Frontend",
    copy: "Responsive pages, accessible UI structure, reusable layout patterns, and browser-friendly interactions.",
    skills: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Backend & APIs",
    copy: "Server-side logic, database-driven features, authentication concepts, and service-oriented workflows.",
    skills: ["Node.js", "Express.js", "PHP", "REST APIs", "JWT", "bcrypt.js"],
  },
  {
    title: "Database",
    copy: "Schema design, persistence, and database-backed features for full stack applications.",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & AI Workflow",
    copy: "Version control, design handoff, editor productivity, deployment, and AI-assisted development workflows.",
    skills: ["Git", "GitHub", "Figma", "VS Code", "Vercel", "Claude", "ChatGPT", "Codex", "DeepSeek"],
  },
];

const projects = [
  {
    title: "Auto Tech Management System",
    type: "Service management portal",
    description:
      "React.js vehicle service management portal with role-based dashboards, service booking, mechanic assignment, invoices, PKR payments, feedback, reports, and Vercel deployment.",
    role: "Frontend and deployment",
    impact: "Shows production-style dashboard thinking with role-based workflows and service operations.",
    features: ["Role-based dashboards", "Service booking flow", "Invoices and PKR payment workflow"],
    stack: ["React.js", "JavaScript", "Vercel", "Role-based dashboards"],
    live: "https://autotechmanagementsystem.vercel.app",
    source: "https://github.com/Ali-Jun/AutoTechmanagementsystem",
    screenshots: [
      {
        image: "images/autotech-admin-dashboard.png",
        alt: "Auto Tech admin dashboard showing workshop control center, booking queue, revenue, ratings, and assignment needs",
        label: "Admin dashboard",
      },
      {
        image: "images/autotech-customer-booking.png",
        alt: "Auto Tech customer booking screen for scheduling vehicle service and selecting service type, vehicle, date, and priority",
        label: "Customer booking",
      },
      {
        image: "images/autotech-bookings-management.png",
        alt: "Auto Tech bookings management screen for assigning and tracking service jobs",
        label: "Bookings",
      },
      {
        image: "images/autotech-payments-pkr.png",
        alt: "Auto Tech payments screen showing invoice payments recorded in PKR",
        label: "PKR payments",
      },
      {
        image: "images/autotech-login-screen.png",
        alt: "Auto Tech login screen with Admin, Customer, and Mechanic role options",
        label: "Login",
      },
    ],
    mediaClass: "project-media-autotech",
  },
  {
    title: "HireHub Job Portal",
    type: "Featured full stack app",
    description: "A hiring platform with job listings, search filters, employer posts, and candidate application flows.",
    role: "Full stack app build",
    impact: "Demonstrates job-market product logic, search UX, and candidate/employer workflows.",
    features: ["Job discovery interface", "Employer pipeline cards", "Candidate application flow"],
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    live: "https://lnkd.in/da95uY8H",
    source: "https://lnkd.in/dUQmbrYE",
    image: "images/hirehub-project.png",
    alt: "HireHub job portal homepage showing search, featured roles, and hiring pipeline cards",
    mediaClass: "project-media-jobs",
  },
  {
    title: "Professional Portfolio Website",
    type: "Marketplace portfolio",
    description:
      "A modern React portfolio built for freelance marketplace trust, recruiter review, project proof, resume downloads, and direct client messages.",
    role: "Design, frontend, content, deployment",
    impact: "Positions services clearly for Upwork, Fiverr, LinkedIn, and junior developer applications.",
    features: ["Animated responsive layout", "Freelance services and project case studies", "Resume download and working contact form"],
    stack: ["React", "Vite", "JavaScript", "Responsive CSS", "Vercel"],
    live: "https://junaid-portfolio-two-phi.vercel.app",
    source: "https://github.com/Ali-Jun/Portfolio",
    image: "images/portfolio-website.png",
    alt: "Junaid Irfan professional portfolio homepage for freelance and full stack development services",
    mediaClass: "project-media-portfolio",
  },
];

const experienceItems = [
  {
    role: "Full Stack Developer - Marketplace Portfolio Projects",
    organization: "Project-based practical delivery",
    period: "Current",
    summary:
      "Building and deploying client-facing portfolio projects that demonstrate frontend, backend, database, dashboard, and deployment workflows.",
    bullets: [
      "Built React interfaces, dashboard layouts, reusable sections, and project case studies for product-style applications.",
      "Practiced API thinking with Node.js, Express.js, REST workflows, authentication concepts, and database-backed features.",
      "Deployed projects on Vercel and GitHub Pages with live demos, source links, and marketplace-ready presentation.",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "GitHub", "Vercel"],
  },
];

const freelanceServices = [
  {
    title: "Portfolio & Personal Brand Websites",
    copy: "Responsive React/Vite websites for developers, students, small businesses, personal brands, and Fiverr gigs.",
    deliverables: ["Modern homepage and section layout", "Contact form setup", "Vercel or GitHub Pages deployment"],
    meta: "Best for profile launch",
  },
  {
    title: "Business Dashboards & Admin Panels",
    copy: "Clean dashboard interfaces for booking, service management, admin workflows, and business operations.",
    deliverables: ["Responsive dashboard UI", "CRUD-friendly page structure", "Reusable cards, tables, and forms"],
    meta: "Best for web apps",
  },
  {
    title: "MERN App Fixes & Feature Builds",
    copy: "Focused help with React features, Node/Express API flows, MongoDB data handling, and Upwork bug-fix tasks.",
    deliverables: ["Feature implementation", "Frontend and API integration", "Code cleanup and deployment support"],
    meta: "Best for ongoing work",
  },
  {
    title: "Landing Pages & UI Conversion",
    copy: "High-quality landing pages and Figma-style UI conversions with polished responsive behavior for client campaigns.",
    deliverables: ["Pixel-conscious React UI", "Mobile and desktop layout polish", "Performance-friendly styling"],
    meta: "Best for fast delivery",
  },
];

const focusAreas = [
  {
    title: "Application Frontends",
    copy: "Modern React interfaces with responsive layouts, reusable components, and smooth user flows.",
  },
  {
    title: "Backend Workflows",
    copy: "REST APIs, authentication concepts, dashboard logic, and database-backed product features.",
  },
  {
    title: "Deployment Ready",
    copy: "Portfolio and project builds prepared for GitHub, Vercel, client review, recruiters, and live demos.",
  },
];

function useHashRoute() {
  const getRoute = () => {
    const value = window.location.hash.replace(/^#\/?/, "") || "home";
    return value;
  };
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

function useTheme() {
  const getSavedTheme = () => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  };
  const [theme, setTheme] = useState(getSavedTheme);

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
      { threshold: 0.16 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [route]);
}

function Chip({ label }) {
  const url = skillLinks.get(label);
  if (!url) return <span>{label}</span>;
  return (
    <a href={url} target="_blank" rel="noreferrer" aria-label={`Open ${label} website`}>
      {label}
    </a>
  );
}

function Header({ route, theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const isPage = (page) => route === page || (page === "home" && ["home", "freelance", "experience", "education", "skills", "projects"].includes(route));

  const closeNav = () => setIsOpen(false);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    document.body.classList.toggle("nav-open", isOpen);
    return () => document.body.classList.remove("nav-open");
  }, [isOpen]);

  return (
    <header className="site-header" data-header>
      <a className="brand" href="#/home" aria-label="Junaid Irfan home" onClick={closeNav}>
        <span className="brand-mark" aria-hidden="true">
          <img src={asset("images/junaid-profile.png")} alt="" />
        </span>
        <span className="brand-copy">
          <span className="brand-text">Junaid Irfan</span>
          <span className="brand-role">Software Engineer</span>
        </span>
      </a>

      <nav className="site-nav" aria-label="Primary navigation" data-nav>
        <a href="#/home" className={isPage("home") ? "is-active" : ""} onClick={closeNav}>
          Home
        </a>
        <a href="#/about" className={isPage("about") ? "is-active" : ""} onClick={closeNav}>
          About
        </a>
        <a href="#/education" className={route === "education" ? "is-active" : ""} onClick={closeNav}>
          Education
        </a>
        <a href="#/experience" className={route === "experience" ? "is-active" : ""} onClick={closeNav}>
          Experience
        </a>
        <a href="#/freelance" className={route === "freelance" ? "is-active" : ""} onClick={closeNav}>
          Freelance
        </a>
        <a href="#/skills" className={route === "skills" ? "is-active" : ""} onClick={closeNav}>
          Skills
        </a>
        <a href="#/projects" className={route === "projects" ? "is-active" : ""} onClick={closeNav}>
          Projects
        </a>
        <a href="#/resume" className={isPage("resume") ? "is-active" : ""} onClick={closeNav}>
          Resume
        </a>
        <a href="#/contact" className={isPage("contact") ? "is-active" : ""} onClick={closeNav}>
          Contact
        </a>
      </nav>

      <a className="header-resume" href={asset("assets/Junaid-Irfan-Resume.pdf")} download onClick={closeNav}>
        Download Resume
      </a>

      <button
        className="theme-toggle"
        type="button"
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        onClick={toggleTheme}
      >
        <span className="theme-toggle-icon" aria-hidden="true"></span>
      </button>

      <button
        className="nav-toggle"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

function HomePage({ showToast }) {
  return (
    <main>
      <section className="hero" id="home">
        <img
          className="hero-image"
          src={asset("images/developer-workspace.png")}
          alt="Modern developer workspace with laptop, code editor, and web interface screens"
        />
        <div className="hero-shade" aria-hidden="true"></div>
        <div className="container hero-content">
          <div className="hero-layout" data-reveal>
            <div className="hero-text">
              <div className="hero-meta-row">
                <p className="eyebrow">Junaid Irfan | Full Stack Developer for Freelance Marketplaces</p>
                <span className="availability-pill">Available for Upwork & Fiverr projects</span>
              </div>
              <h1>Client-Ready React Websites, Dashboards, and MERN Web Apps</h1>
              <p className="hero-copy">
                I help clients turn ideas into responsive portfolio websites, business dashboards, landing pages, and
                MERN features with clean UI, working links, and deployment-ready code.
              </p>
              <div className="hero-stack chip-list compact" aria-label="Primary stack">
                {["Upwork & Fiverr", "React", "Node.js", "Express.js", "MongoDB", "Vercel"].map((skill) => (
                  <Chip label={skill} key={skill} />
                ))}
              </div>
              <div className="hero-actions" aria-label="Portfolio actions">
                <a className="button button-primary" href={asset("assets/Junaid-Irfan-Resume.pdf")} download>
                  Download Resume
                </a>
                <a className="button button-ghost" href="#/projects">
                  View Projects
                </a>
                <a className="button button-secondary" href="#/contact">
                  Hire Me
                </a>
              </div>
            </div>
            <figure className="hero-profile" aria-label="Junaid Irfan profile photo">
              <span className="profile-status">Software Engineer</span>
              <img src={asset("images/junaid-profile.png")} alt="Portrait of Junaid Irfan" />
              <figcaption>
                <strong>Building client-ready web apps</strong>
                <span>Frontend, backend, database, deployment, and AI-assisted development workflows for real projects.</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="container hero-summary" aria-label="Portfolio highlights">
          <div>
            <strong>{projects.length}</strong>
            <span>featured projects</span>
          </div>
          <div>
            <strong>Freelance services</strong>
            <span>React websites, dashboards, UI fixes, API integrations</span>
          </div>
          <div>
            <strong>Upwork & Fiverr ready</strong>
            <span>portfolio proof, resume, links, and contact flow</span>
          </div>
        </div>
      </section>

      <SkillsBanner />
      <FocusSection />
      <ProjectsSection showToast={showToast} />
      <FreelanceSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ResumePanel />
    </main>
  );
}

function FocusSection() {
  return (
    <section className="section focus-section" data-reveal>
      <div className="container focus-layout">
        <div className="section-heading">
          <p className="section-kicker">Marketplace Portfolio</p>
          <h2>Clean project proof, clear services, and fast client contact.</h2>
        </div>
        <div className="focus-grid">
          {focusAreas.map((item, index) => (
            <article className="focus-card" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FreelanceSection() {
  return (
    <section className="section freelance-section" id="freelance" data-reveal>
      <div className="container">
        <div className="freelance-layout">
          <div className="freelance-intro">
            <p className="section-kicker">Freelance Web Development</p>
            <h2>Upwork and Fiverr-ready services for clients who need clean, working web apps.</h2>
            <p>
              I can help with small business websites, portfolio builds, admin dashboards, MERN feature work, and
              deployed React interfaces. The focus is simple: clear scope, responsive UI, working links, and clean handoff
              for fixed-scope marketplace projects.
            </p>
            <div className="freelance-actions">
              <a className="button button-primary" href="#/contact">
                Hire Me for a Project
              </a>
              <a className="button button-ghost" href="#/projects">
                View Work Samples
              </a>
            </div>
          </div>
          <div className="freelance-highlight">
            <span>Client-ready focus</span>
            <strong>Fast communication, practical builds, and portfolio-backed proof.</strong>
            <p>Available for fixed-scope frontend work, MERN improvements, dashboard UI, Fiverr gigs, and Upwork contracts.</p>
          </div>
        </div>

        <div className="freelance-grid" aria-label="Freelance services">
          {freelanceServices.map((service, index) => (
            <article className="freelance-card" key={service.title}>
              <header>
                <span className="freelance-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="service-meta">{service.meta}</span>
              </header>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <ul>
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="section experience-section" id="experience" data-reveal>
      <div className="container">
        <div className="section-heading section-heading-wide">
          <div>
            <p className="section-kicker">Project Experience</p>
            <h2>Practical delivery experience for client-ready web work.</h2>
          </div>
          <p>Focused on responsive UI, dashboard workflows, deployment, communication, and handoff for real portfolio projects.</p>
        </div>

        <div className="experience-list">
          {experienceItems.map((item) => (
            <article className="experience-card" key={item.role}>
              <div className="experience-meta">
                <span>{item.period}</span>
                <strong>{item.organization}</strong>
              </div>
              <div className="experience-content">
                <h3>{item.role}</h3>
                <p>{item.summary}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="chip-list compact">
                  {item.stack.map((skill) => (
                    <Chip label={skill} key={skill} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsBanner() {
  const logoSet = (hidden = false) => (
    <div className="skill-logo-set" aria-hidden={hidden ? "true" : undefined}>
      {skillLogos.map(([label, src, className]) => (
        <div className="skill-logo-card" aria-label={label} title={label} key={`${label}-${hidden}`}>
          <a className="skill-logo-link" href={skillLinks.get(label)} target="_blank" rel="noreferrer" aria-label={`Open ${label} website`}>
            <span className={`skill-logo ${className}`} aria-hidden="true">
              <img src={src} alt="" decoding="async" />
            </span>
          </a>
        </div>
      ))}
    </div>
  );

  return (
    <section className="skills-banner" aria-label="Skills icon banner" data-reveal>
      <div className="container skills-strip">
        <div className="skill-logo-marquee">
          <div className="skill-logo-row" data-skill-row>
            {logoSet()}
            {logoSet(true)}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="section band" id="skills" data-reveal>
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Skills</p>
          <h2>MERN stack and full stack skills</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.copy}</p>
              <div className="chip-list" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <Chip label={skill} key={skill} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="section" id="education" data-reveal>
      <div className="container split-grid">
        <div>
          <p className="section-kicker">Education</p>
          <h2>Academic foundation in software engineering.</h2>
        </div>
        <article className="education-card">
          <p className="education-degree">Bachelor of Science</p>
          <h3>BS Software Engineering</h3>
          <p>Lahore Leads University</p>
          <p>
            Relevant coursework includes Data Structures & Algorithms, Database Systems, Software Engineering Principles,
            Web Technologies, and UI/UX Design.
          </p>
          <div className="chip-list" aria-label="Education focus areas">
            {["Software Engineering", "Full Stack Development", "Databases", "Web Applications"].map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function ProjectMedia({ project }) {
  const className = `project-media ${project.mediaClass || ""} ${project.image ? "project-media-screenshot" : ""}`.trim();
  if (project.screenshots?.length) {
    const [mainShot, ...shots] = project.screenshots;
    return (
      <div className={`${className} project-media-gallery`}>
        <figure className="gallery-main">
          <img src={asset(mainShot.image)} alt={mainShot.alt} />
          <figcaption>{mainShot.label}</figcaption>
        </figure>
        <div className="gallery-strip" aria-label={`${project.title} screenshots`}>
          {shots.map((shot) => (
            <figure className="gallery-thumb" key={shot.image}>
              <img src={asset(shot.image)} alt={shot.alt} />
              <figcaption>{shot.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    );
  }
  if (project.image) {
    return (
      <div className={className}>
        <img src={asset(project.image)} alt={project.alt} />
      </div>
    );
  }
  return (
    <div className={className} aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

function ProjectsSection({ showToast }) {
  return (
    <section className="section" id="projects" data-reveal>
      <div className="container">
        <div className="section-heading section-heading-wide">
          <div>
            <p className="section-kicker">Selected Work</p>
            <h2>Professional project samples for clients and recruiters.</h2>
          </div>
          <p>Only the strongest client-facing work is shown here, with clear outcomes, visuals, live links, and source code.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${index === 0 ? "is-featured" : ""}`} key={project.title}>
              <ProjectMedia project={project} />
              <div className="project-content">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-proof">
                  <span>{project.role}</span>
                  <strong>{project.impact}</strong>
                </div>
                <ul className="project-feature-list">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="chip-list compact">
                  {project.stack.map((item) => (
                    <Chip label={item} key={item} />
                  ))}
                </div>
                <div className="project-links">
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  ) : (
                    <a
                      href="#/projects"
                      onClick={(event) => {
                        event.preventDefault();
                        showToast(project.livePlaceholder || "Add the final project URL before publishing.");
                      }}
                    >
                      Live Demo
                    </a>
                  )}
                  <a href={project.source} target="_blank" rel="noreferrer">
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResumePanel() {
  return (
    <section className="section band" id="resume" data-reveal>
      <div className="container resume-panel">
        <div>
          <p className="section-kicker">Resume</p>
          <h2>Download the resume for internships, junior roles, and freelance proposals.</h2>
          <p>Use the PDF for applications, recruiter messages, LinkedIn outreach, Upwork proposals, and Fiverr client conversations. The printable page stays available for quick review.</p>
        </div>
        <div className="resume-actions">
          <a className="button button-primary" href={asset("assets/Junaid-Irfan-Resume.pdf")} download>
            Download PDF
          </a>
          <a className="button button-ghost" href="#/resume">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">About Junaid</p>
            <h1>Full Stack Developer building client-ready web experiences.</h1>
            <p>
              Junaid Irfan is a BS Software Engineering graduate building full-stack applications, marketplace-ready
              portfolios, and dashboard interfaces for junior roles, Upwork work, and Fiverr gigs.
            </p>
          </div>
          <img className="about-photo" src={asset("images/junaid-profile.png")} alt="Portrait of Junaid Irfan" />
        </div>
      </section>

      <section className="section band" data-reveal>
        <div className="container split-grid">
          <div>
            <p className="section-kicker">Profile</p>
            <h2>From responsive UI to backend workflows.</h2>
          </div>
          <div className="section-copy">
            <p>
              Junaid works across the full stack, with growing strength in React, JavaScript, Tailwind CSS, Bootstrap,
              Node.js, Express.js, PHP, MongoDB, MySQL, and responsive frontend development. His portfolio is centered on
              real project delivery: Auto Tech Management System, HireHub Job Portal, and a Professional Portfolio Website.
            </p>
            <p>He is positioning the portfolio for internship, junior developer, Upwork, and Fiverr web work with clear project stories, live links, and a downloadable resume.</p>
          </div>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="container split-grid">
          <div>
            <p className="section-kicker">Education</p>
            <h2>BS Software Engineering graduate.</h2>
          </div>
          <div className="section-copy">
            <p>
              Junaid completed BS Software Engineering at Lahore Leads University, with coursework in Data Structures &
              Algorithms, Database Systems, Software Engineering Principles, Web Technologies, and UI/UX Design.
            </p>
            <p>That foundation now carries into portfolio projects built for real hiring, service, marketplace, and operations workflows.</p>
          </div>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="container value-grid">
          <article className="skill-card">
            <h3>Frontend</h3>
            <p>Responsive layouts, accessible structure, polished interactions, and user-friendly interface details.</p>
          </article>
          <article className="skill-card">
            <h3>Backend</h3>
            <p>APIs, server-side logic, CRUD workflows, authentication concepts, and database-backed features.</p>
          </article>
          <article className="skill-card">
            <h3>MERN Direction</h3>
            <p>MongoDB, Express.js, React, and Node.js for modern JavaScript applications and service-based products.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

function ResumePage() {
  return (
    <main className="resume-shell">
      <div className="resume-page-actions">
        <a className="button button-ghost" href="#/home">
          Back to Site
        </a>
        <button className="button button-primary" type="button" onClick={() => window.print()}>
          Print Resume
        </button>
      </div>
      <article className="resume-document">
        <header className="resume-title">
          <div>
            <p className="eyebrow">Full Stack Developer | MERN Stack Developer | Freelance Web Developer</p>
            <h1>Junaid Irfan</h1>
          </div>
          <address>
            <a href="tel:+923206304078">0320-6304078</a>
            <a href="mailto:junaidirfan810@gmail.com">junaidirfan810@gmail.com</a>
            <a href="https://github.com/Ali-Jun" target="_blank" rel="noreferrer">
              github.com/Ali-Jun
            </a>
            <a href="https://www.linkedin.com/in/junaid-irfan-ba1027241" target="_blank" rel="noreferrer">
              linkedin.com/in/junaid-irfan-ba1027241
            </a>
            <a href="https://ali-jun.github.io/Portfolio/" target="_blank" rel="noreferrer">
              ali-jun.github.io/Portfolio
            </a>
          </address>
        </header>

        <section>
          <h2>Professional Summary</h2>
          <p>
            Full Stack Developer focused on MERN web applications, responsive React interfaces, admin dashboards, and
            deployment-ready freelance projects. Hands-on experience building role-based dashboards, service booking
            workflows, job portal flows, marketplace portfolio sections, REST API concepts, database-backed features,
            and clean Vercel/GitHub Pages deployments.
          </p>
        </section>

        <section>
          <h2>Education</h2>
          <div className="resume-item">
            <h3>BS Software Engineering</h3>
            <p>Lahore Leads University</p>
            <p>
              <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Database Systems, Software Engineering
              Principles, Web Technologies, UI/UX Design.
            </p>
          </div>
        </section>

        <section>
          <h2>Technical Skills</h2>
          <div className="resume-columns">
            <p><strong>Frontend:</strong> HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Bootstrap</p>
            <p><strong>Backend:</strong> Node.js, Express.js, REST APIs</p>
            <p><strong>Database:</strong> MongoDB, MySQL</p>
            <p><strong>Authentication:</strong> JWT, bcrypt.js</p>
            <p><strong>Tools:</strong> Git, GitHub, Figma, VS Code, Vercel</p>
            <p><strong>AI Tools:</strong> Claude, ChatGPT, Codex, DeepSeek</p>
          </div>
        </section>

        <section>
          <h2>Freelance Services</h2>
          <div className="resume-columns">
            <p><strong>Websites:</strong> portfolio websites, personal brand sites, responsive landing pages</p>
            <p><strong>Dashboards:</strong> admin panels, booking flows, tables, forms, and operational screens</p>
            <p><strong>MERN Work:</strong> React features, API integration, CRUD workflows, bug fixes</p>
            <p><strong>Delivery:</strong> clean UI, mobile polish, deployment support, and client-ready handoff</p>
          </div>
        </section>

        <section>
          <h2>Project-Based Experience</h2>
          <div className="resume-item">
            <h3>Full Stack Developer - Portfolio & Freelance Project Work</h3>
            <p>Current</p>
            <ul>
              <li>Built and deployed React portfolio, dashboard, job portal, and service management projects.</li>
              <li>Designed responsive UI sections, reusable cards, project galleries, contact forms, and recruiter/client-facing flows.</li>
              <li>Practiced full stack workflows across React, Node.js, Express.js, REST APIs, MongoDB/MySQL, GitHub, and Vercel.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Projects</h2>
          <ResumeProject
            title="Auto Tech Management System"
            stack="React.js, vehicle service management, role-based dashboards, Vercel"
            bullets={[
              "Built a service management portal with role-based dashboards, booking, mechanic assignment, invoices, PKR payments, feedback, and reports.",
              "Presented multiple real product screens and deployed the app on Vercel with source code available for review.",
            ]}
            links={[
              ["Live Demo", "https://autotechmanagementsystem.vercel.app"],
              ["GitHub", "https://github.com/Ali-Jun/AutoTechmanagementsystem"],
            ]}
          />
          <ResumeProject
            title="HireHub Job Portal"
            stack="React, Node.js, Express, MongoDB, JWT"
            bullets={[
              "Developed a MERN job portal concept with candidate/employer authentication, role-based access, and job search flows.",
              "Built job posting, application tracking, and protected dashboard workflows for a hiring product experience.",
            ]}
            links={[
              ["Live Demo", "https://lnkd.in/da95uY8H"],
              ["GitHub", "https://lnkd.in/dUQmbrYE"],
            ]}
          />
          <ResumeProject
            title="Portfolio Website"
            stack="React, Vite, JavaScript, responsive CSS, Vercel, GitHub Pages"
            bullets={[
              "Designed and developed a modern animated portfolio with project case studies, resume download, skills banner, and working contact form.",
              "Positioned the site for junior developer applications, LinkedIn outreach, Upwork proposals, and Fiverr client conversations.",
            ]}
            links={[
              ["Live Portfolio", "https://ali-jun.github.io/Portfolio/"],
              ["GitHub", "https://github.com/Ali-Jun/Portfolio"],
            ]}
          />
        </section>

        <section>
          <h2>Core Strengths</h2>
          <p>Client Communication, Fast Learning, Problem Solving, Team Collaboration, Scope Clarity, Adaptability, Attention to Detail.</p>
        </section>
      </article>
    </main>
  );
}

function ResumeProject({ title, stack, bullets, links }) {
  return (
    <div className="resume-item">
      <h3>{title}</h3>
      <p>
        <strong>Stack:</strong> {stack}
      </p>
      <ul>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <p>
        {links.map(([label, href], index) => (
          <span key={href}>
            {index > 0 ? " | " : ""}
            <a href={href} target="_blank" rel="noreferrer">
              {label}
            </a>
          </span>
        ))}
      </p>
    </div>
  );
}

function ContactPage() {
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSending, setIsSending] = useState(false);

  const submitForm = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const honey = String(formData.get("_honey") || "").trim();

    if (!name || !email || !message) {
      setStatus({ type: "error", text: "Please complete every field." });
      return;
    }

    if (honey) {
      setStatus({ type: "success", text: "Thanks, your message has been sent." });
      form.reset();
      return;
    }

    setIsSending(true);
    setStatus({ type: "", text: "" });

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
      if (!response.ok || result.success === "false") {
        throw new Error(result.message || "Message could not be sent.");
      }

      setStatus({
        type: "success",
        text: "Thanks, your message has been sent. Junaid will receive it by email.",
      });
      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        text: "Message could not be sent right now. Please email Junaid directly at junaidirfan810@gmail.com.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h1>Start a freelance web project.</h1>
            <p>Reach out for Upwork or Fiverr freelance work, full stack web development, portfolio websites, dashboards, internships, or project collaboration.</p>
          </div>
          <div className="contact-panel">
            <a href="mailto:junaidirfan810@gmail.com">junaidirfan810@gmail.com</a>
            <a href="https://github.com/Ali-Jun" target="_blank" rel="noreferrer">
              github.com/Ali-Jun
            </a>
            <a href="https://www.linkedin.com/in/junaid-irfan-ba1027241" target="_blank" rel="noreferrer">
              linkedin.com/in/junaid-irfan-ba1027241
            </a>
          </div>
        </div>
      </section>

      <section className="section band" data-reveal>
        <div className="container contact-grid">
          <div>
            <p className="section-kicker">Message</p>
            <h2>Send a focused note.</h2>
            <p className="section-copy">Share the project type, pages or features needed, deadline, and links. The form sends your message directly to Junaid's email.</p>
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
              <textarea name="message" rows="5" required></textarea>
            </label>
            <button className="button button-primary" type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
            <p className={`form-status ${status.type ? `is-${status.type}` : ""}`} role="status" aria-live="polite">
              {status.text}
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

function Footer({ page }) {
  if (page === "resume") return null;
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>Copyright {new Date().getFullYear()} Junaid Irfan. All rights reserved.</p>
        {page === "contact" ? <a href="#/home">Back to home</a> : <a href="#/home">Back to top</a>}
      </div>
    </footer>
  );
}

function Toast({ message }) {
  return (
    <div className={`toast ${message ? "is-visible" : ""}`} role="status" aria-live="polite">
      {message}
    </div>
  );
}

export default function App() {
  const route = useHashRoute();
  const [theme, setTheme] = useTheme();
  const [toast, setToast] = useState("");
  const normalizedRoute = ["about", "resume", "contact"].includes(route) ? route : "home";
  const sectionTarget = ["freelance", "experience", "education", "skills", "projects"].includes(route) ? route : null;

  useReveal(route);

  useEffect(() => {
    const onScroll = () => document.querySelector("[data-header]")?.classList.toggle("is-scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("resume-page", normalizedRoute === "resume");
    document.body.dataset.page = normalizedRoute;
    document.title =
      normalizedRoute === "about"
        ? "About | Junaid Irfan"
        : normalizedRoute === "resume"
          ? "Resume | Junaid Irfan"
          : normalizedRoute === "contact"
            ? "Contact | Junaid Irfan"
            : "Junaid Irfan | Full Stack Developer";
    if (sectionTarget) {
      window.setTimeout(() => document.getElementById(sectionTarget)?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [normalizedRoute, sectionTarget]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(""), 3600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const page = useMemo(() => {
    if (normalizedRoute === "about") return <AboutPage />;
    if (normalizedRoute === "resume") return <ResumePage />;
    if (normalizedRoute === "contact") return <ContactPage />;
    return <HomePage showToast={setToast} />;
  }, [normalizedRoute]);

  return (
    <>
      <Header route={route} theme={theme} setTheme={setTheme} />
      {page}
      <Footer page={normalizedRoute} />
      <Toast message={toast} />
    </>
  );
}
