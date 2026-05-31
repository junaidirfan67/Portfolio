import { useEffect, useMemo, useState } from "react";

const basePath = import.meta.env.BASE_URL;
const asset = (path) => `${basePath}${path}`;

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
    stack: ["React.js", "JavaScript", "Vercel", "Role-based dashboards"],
    live: "https://autotechmanagementsystem.vercel.app",
    source: "https://github.com/Ali-Jun/AutoTechmanagementsystem",
    mediaClass: "project-media-autotech",
  },
  {
    title: "HireHub Job Portal",
    type: "Featured full stack app",
    description: "A hiring platform with job listings, search filters, employer posts, and candidate application flows.",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    live: "https://lnkd.in/da95uY8H",
    source: "https://lnkd.in/dUQmbrYE",
    image: "images/hirehub-project.png",
    alt: "HireHub job portal homepage showing search, featured roles, and hiring pipeline cards",
    mediaClass: "project-media-jobs",
  },
  {
    title: "Task Manager Application",
    type: "Productivity app",
    description: "A dashboard-style task manager for creating, organizing, filtering, and completing tasks with a clean daily workflow.",
    stack: ["React", "JavaScript", "Tailwind CSS", "Local Storage"],
    live: "https://ali-jun.github.io/Task-Manager/",
    source: "https://github.com/Ali-Jun/Task-Manager",
    image: "images/task-manager-project.png",
    alt: "Task Manager dashboard showing task filters, progress stats, and priority mix",
    mediaClass: "project-media-task",
  },
  {
    title: "Time-Off Microservice",
    type: "Backend architecture",
    description: "A backend-focused service for time-off requests, approval flows, API-style communication, and database-backed workflows.",
    stack: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
    livePlaceholder: "Add the live Time-Off Microservice URL before publishing.",
    source: "https://github.com/Ali-Jun/time-off-microservice",
    mediaClass: "project-media-microservices",
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
    copy: "Portfolio and project builds prepared for GitHub, Vercel, recruiters, and live demos.",
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
  const isPage = (page) => route === page || (page === "home" && ["home", "education", "skills", "projects"].includes(route));

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
                <p className="eyebrow">Full Stack Developer | MERN Stack Developer</p>
                <span className="availability-pill">Open to opportunities</span>
              </div>
              <h1>Junaid Irfan</h1>
              <p className="hero-copy">
                Software Engineer building modern web products with React, Node.js, Express, MongoDB, and practical
                full stack workflows.
              </p>
              <div className="hero-stack chip-list compact" aria-label="Primary stack">
                {["React", "Node.js", "Express.js", "MongoDB", "Vercel"].map((skill) => (
                  <Chip label={skill} key={skill} />
                ))}
              </div>
              <div className="hero-actions" aria-label="Portfolio actions">
                <a className="button button-primary" href="#/projects">
                  View Projects
                </a>
                <a className="button button-ghost" href={asset("assets/Junaid-Irfan-Resume.pdf")} download>
                  Download Resume
                </a>
                <a className="button button-secondary" href="#/contact">
                  Contact Me
                </a>
              </div>
            </div>
            <figure className="hero-profile" aria-label="Junaid Irfan profile photo">
              <span className="profile-status">Software Engineer</span>
              <img src={asset("images/junaid-profile.png")} alt="Portrait of Junaid Irfan" />
              <figcaption>
                <strong>Building recruiter-ready web apps</strong>
                <span>Frontend, backend, database, deployment, and AI-assisted development workflows.</span>
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
            <strong>MERN + Full Stack</strong>
            <span>React, Node.js, Express, MongoDB, PHP, MySQL</span>
          </div>
          <div>
            <strong>Recruiter ready</strong>
            <span>resume, links, and contact flow</span>
          </div>
        </div>
      </section>

      <SkillsBanner />
      <FocusSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection showToast={showToast} />
      <ResumePanel />
    </main>
  );
}

function FocusSection() {
  return (
    <section className="section focus-section" data-reveal>
      <div className="container focus-layout">
        <div className="section-heading">
          <p className="section-kicker">Modern Portfolio</p>
          <h2>Clean design, clear proof, and fast access to project work.</h2>
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
            <p className="section-kicker">Projects</p>
            <h2>Selected work</h2>
          </div>
          <p>Project cards are structured for recruiter scanning: problem, features, stack, live demo, and source link.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${index === 0 ? "is-featured" : ""}`} key={project.title}>
              <ProjectMedia project={project} />
              <div className="project-content">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chip-list compact">
                  {project.stack.map((item) => (
                    <Chip label={item} key={item} />
                  ))}
                </div>
                <div className="project-links">
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live demo
                    </a>
                  ) : (
                    <a
                      href="#/projects"
                      onClick={(event) => {
                        event.preventDefault();
                        showToast(project.livePlaceholder || "Add the final project URL before publishing.");
                      }}
                    >
                      Live demo
                    </a>
                  )}
                  <a href={project.source} target="_blank" rel="noreferrer">
                    GitHub
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
          <h2>Ready for internships, junior roles, and freelance web work.</h2>
          <p>Download the resume PDF or open the printable resume page for a quick review of skills, projects, and contact details.</p>
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
            <h1>Full Stack Developer building complete web experiences.</h1>
            <p>
              Junaid Irfan is a BS Software Engineering graduate building full-stack applications and seeking internship
              or junior opportunities while continuously learning through real-world projects.
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
              real project delivery: Auto Tech Management System, HireHub Job Portal, Task Manager Application, and
              Time-Off Microservice.
            </p>
            <p>He is positioning the portfolio for internship, junior developer, and freelance web work with clear project stories, recruiter-ready links, and a downloadable resume.</p>
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
            <p>That foundation now carries into portfolio projects built for real hiring, productivity, service, and operations workflows.</p>
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
            <p className="eyebrow">Full Stack Developer | MERN Stack Developer</p>
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
            Results-driven Full Stack Developer with hands-on experience building scalable web applications using the
            MERN stack. Skilled in developing responsive frontend interfaces and secure backend APIs with authentication,
            role-based access, and database integration. Passionate about creating real-world applications and
            continuously learning modern technologies.
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
          <h2>Projects</h2>
          <ResumeProject
            title="Auto Tech Management System"
            stack="React.js, vehicle service management, role-based dashboards, Vercel"
            bullets={[
              "React.js vehicle service management portal with service booking, mechanic assignment, invoices, PKR payments, feedback, and reports.",
              "Deployed on Vercel with live project and source repository available for review.",
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
              "Developed a MERN-based job portal with candidate/employer authentication and role-based access.",
              "Built job posting, job search, application tracking, and protected dashboards.",
            ]}
            links={[
              ["Live Demo", "https://lnkd.in/da95uY8H"],
              ["GitHub", "https://lnkd.in/dUQmbrYE"],
            ]}
          />
          <ResumeProject
            title="Portfolio Website"
            stack="React, JavaScript, Tailwind CSS, GitHub Pages"
            bullets={["Designed and developed a portfolio website showcasing projects, skills, resume, and contact information."]}
            links={[
              ["Live Portfolio", "https://ali-jun.github.io/Portfolio/"],
              ["GitHub", "https://github.com/Ali-Jun/Portfolio"],
            ]}
          />
          <ResumeProject
            title="Task Manager Application"
            stack="JavaScript, Bootstrap, MySQL"
            bullets={[
              "Developed a full-stack task management application with CRUD functionality and responsive UI.",
              "Implemented client-side validation and real-time UI updates.",
            ]}
            links={[
              ["Live Demo", "https://ali-jun.github.io/Task-Manager/"],
              ["GitHub", "https://github.com/Ali-Jun/Task-Manager"],
            ]}
          />
          <ResumeProject
            title="Time-Off Microservice"
            stack="Microservice Architecture, Git"
            bullets={["Implemented standalone leave/time-off microservice using REST principles."]}
            links={[["GitHub", "https://github.com/Ali-Jun/time-off-microservice"]]}
          />
        </section>

        <section>
          <h2>Core Strengths</h2>
          <p>Fast Learner, Team Collaboration, Problem Solving, Effective Communication, Adaptability, Attention to Detail.</p>
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
  const [status, setStatus] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("Please complete every field.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    const mailto = `mailto:junaidirfan810@gmail.com?subject=${subject}&body=${body}`;
    setStatus(mailto);
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h1>Let us build something useful.</h1>
            <p>Reach out for full stack web development work, portfolio feedback, internships, or project collaboration.</p>
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
            <p className="section-copy">The form prepares an email draft with your message so you can review it before sending.</p>
          </div>

          <form className="contact-form" onSubmit={submitForm}>
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
            <button className="button button-primary" type="submit">
              Prepare Message
            </button>
            <p className="form-status" role="status" aria-live="polite">
              {status.startsWith("mailto:") ? <a href={status}>Open email draft</a> : status}
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
  const sectionTarget = ["education", "skills", "projects"].includes(route) ? route : null;

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
