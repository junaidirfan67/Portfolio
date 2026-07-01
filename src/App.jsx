import React, { useEffect, useMemo, useState } from "react";
import profileImg from "../images/junaid-profile.png";
import modernStoreImg from "../images/modern-store-home.png";
import autoTechImg from "../images/autotech-admin-dashboard.png";
import hireHubImg from "../images/hirehub-project.png";
import taskManagerImg from "../images/task-manager-project.png";

const githubUrl = "https://github.com/junaidirfan67";
const repositoriesUrl = "https://github.com/junaidirfan67?tab=repositories";
const linkedInUrl = "https://www.linkedin.com/in/junaid-irfan-ba1027241";
const emailUrl = "mailto:junaidirfan810@gmail.com";
const resumeUrl = `${import.meta.env.BASE_URL}assets/Junaid-Irfan-Resume.pdf`;

const brandIcons = {
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express: "https://cdn.simpleicons.org/express/111827",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  github: "https://cdn.simpleicons.org/github/181717",
  linkedin: "https://cdn.simpleicons.org/linkedin/0A66C2",
  gmail: "https://cdn.simpleicons.org/gmail/EA4335",
  vercel: "https://cdn.simpleicons.org/vercel/111827",
  openai: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg",
  claude: "https://cdn.simpleicons.org/anthropic/111827",
  deepseek: "https://cdn.simpleicons.org/deepseek/2563EB"
};

const socialIcons = {
  github: brandIcons.github,
  linkedin: brandIcons.linkedin,
  gmail: brandIcons.gmail
};

const navItems = [
  { route: "about", label: "About" },
  { route: "skills", label: "Skills" },
  { route: "projects", label: "Projects" },
  { route: "experience", label: "Experience" },
  { route: "education", label: "Education" }
];

const techItems = [
  { label: "React", href: "https://react.dev/", icon: brandIcons.react },
  { label: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: brandIcons.javascript },
  { label: "Tailwind", href: "https://tailwindcss.com/", icon: brandIcons.tailwind },
  { label: "Node.js", href: "https://nodejs.org/", icon: brandIcons.node },
  { label: "Express", href: "https://expressjs.com/", icon: brandIcons.express },
  { label: "MongoDB", href: "https://www.mongodb.com/", icon: brandIcons.mongodb },
  { label: "REST APIs", href: "https://developer.mozilla.org/en-US/docs/Glossary/REST", textIcon: "API" },
  { label: "Vercel", href: "https://vercel.com/", icon: brandIcons.vercel },
  { label: "OpenAI", href: "https://openai.com/", icon: brandIcons.openai },
  { label: "Claude", href: "https://www.anthropic.com/claude", icon: brandIcons.claude },
  { label: "Codex", href: "https://openai.com/codex/", icon: brandIcons.openai },
  { label: "DeepSeek", href: "https://www.deepseek.com/", icon: brandIcons.deepseek }
];

const skills = [
  {
    title: "Frontend",
    tags: [
      { label: "React.js", type: "frontend", icon: brandIcons.react },
      { label: "JavaScript", type: "frontend", icon: brandIcons.javascript },
      { label: "HTML5", type: "frontend", icon: brandIcons.html },
      { label: "CSS3", type: "frontend", icon: brandIcons.css },
      { label: "Tailwind", type: "frontend", icon: brandIcons.tailwind }
    ]
  },
  {
    title: "Backend",
    tags: [
      { label: "Node.js", icon: brandIcons.node },
      { label: "Express.js", icon: brandIcons.express },
      { label: "REST APIs", textIcon: "API" },
      { label: "JWT", textIcon: "JWT" }
    ]
  },
  {
    title: "Database & Tools",
    tags: [
      { label: "MongoDB", icon: brandIcons.mongodb },
      { label: "MySQL", icon: brandIcons.mysql },
      { label: "Git", icon: brandIcons.git },
      { label: "GitHub", icon: brandIcons.github },
      { label: "Vercel", icon: brandIcons.vercel }
    ]
  }
];

const aiSkills = {
  title: "AI + Tools",
  tags: [
    { label: "OpenAI API", type: "ai", icon: brandIcons.openai },
    { label: "Claude API", type: "ai", icon: brandIcons.claude },
    { label: "Codex", type: "ai", icon: brandIcons.openai },
    { label: "DeepSeek", type: "ai", icon: brandIcons.deepseek },
    { label: "GitHub", icon: brandIcons.github }
  ]
};

const projects = [
  {
    title: "Modern Animated MERN E-Commerce Store",
    badge: "MERN",
    badgeClass: "mern",
    image: modernStoreImg,
    imageAlt: "Modern Store e-commerce homepage screenshot",
    live: "https://modern-store-e-commerce-client.vercel.app",
    code: "https://github.com/Ali-Jun/ModernStore-e-commerce",
    description: "Built to help a menswear store manage shopping and operations from one place: React storefront with cart, checkout, JWT-based auth, and an admin dashboard for products, stock, orders, discounts, banners, and profit tracking. I structured reusable product/order data so customer browsing and admin workflows stay clear on desktop and mobile.",
    metrics: ["162 product demo catalog", "JWT-based auth flow", "Reusable product/order data"],
    tags: [
      { label: "React", type: "frontend", icon: brandIcons.react },
      { label: "Node.js", icon: brandIcons.node },
      { label: "MongoDB", icon: brandIcons.mongodb }
    ]
  },
  {
    title: "Auto Tech Management System",
    badge: "Role-based",
    badgeClass: "role",
    image: autoTechImg,
    imageAlt: "Auto Tech admin dashboard screenshot",
    live: "https://autotechmanagementsystem.vercel.app",
    code: "https://github.com/junaidirfan67/AutoTechmanagementsystem",
    description: "Built for garage service teams that need customers, admins, and mechanics working from separate views. The role-based React portal handles service booking, mechanic assignment, invoice generation, PKR payments, feedback, and reports, replacing scattered manual tracking with one clear workflow.",
    metrics: ["Admin/customer roles", "PKR invoice handling", "Mechanic assignment flow"],
    tags: [
      { label: "React", type: "frontend", icon: brandIcons.react },
      { label: "Dashboards", textIcon: "DB" },
      { label: "Vercel", icon: brandIcons.vercel }
    ]
  },
  {
    title: "HireHub Job Portal",
    badge: "MERN",
    badgeClass: "mern",
    image: hireHubImg,
    imageAlt: "HireHub project screenshot",
    live: "https://lnkd.in/da95uY8H",
    code: "https://github.com/junaidirfan67/hirehub",
    description: "MERN job portal concept with a polished landing page, job search, location filtering, featured roles, hiring team data, candidate/employer flows, and responsive UI for a talent workspace.",
    metrics: ["3+ open roles demo", "Employer pipeline UI", "Responsive landing"],
    tags: [
      { label: "React", type: "frontend", icon: brandIcons.react },
      { label: "Node.js", icon: brandIcons.node },
      { label: "MongoDB", icon: brandIcons.mongodb }
    ]
  },
  {
    title: "Task Manager",
    badge: "Full Stack",
    badgeClass: "full",
    image: taskManagerImg,
    imageAlt: "Task Manager dashboard screenshot",
    live: "https://lnkd.in/dnVkPFCK",
    code: "https://github.com/Ali-Jun/Task-Manager",
    description: "Productivity dashboard with task creation, status views, priority filters, progress tracking, task counters, board controls, and a clean admin-style layout for daily task management.",
    metrics: ["4 status views", "Priority mix", "Dashboard UI"],
    tags: [
      { label: "React", type: "frontend", icon: brandIcons.react },
      { label: "JavaScript", type: "frontend", icon: brandIcons.javascript },
      { label: "Dashboard UI", textIcon: "UI" }
    ]
  }
];

const experienceRows = [
  {
    year: "2026-now",
    active: true,
    role: "Full Stack AI Engineering Fellow",
    company: "DevWeekends",
    desc: "Currently enrolled in Full Stack AI Engineering, integrating OpenAI and Claude APIs into full-stack applications while practicing React, Node.js, Express APIs, and Data Structures & Algorithms."
  },
  {
    year: "2024-now",
    role: "Full Stack Developer - Project-Based Experience",
    company: "Working portfolio projects",
    desc: "Built multiple academic, practice, and client-style projects, including e-commerce stores, dashboards, job portals, service-management systems, and deployment-ready web apps."
  },
  {
    year: "2020-2025",
    role: "BS Software Engineering",
    company: "Lahore Leads University",
    desc: "Studied Data Structures & Algorithms, Database Systems, Web Technologies, Software Engineering Principles, and UI/UX Design."
  }
];

const educationCards = [
  {
    title: "BS Software Engineering",
    org: "Lahore Leads University",
    text: "Core software foundation with programming, database systems, software engineering, web technologies, UI/UX, and project development."
  },
  {
    title: "Full Stack AI Engineering",
    org: "DevWeekends - Current",
    text: "Currently enrolled and building stronger full-stack AI skills with React, Node.js, APIs, production workflows, and practical AI features such as dashboard summary generation."
  },
  {
    title: "Project-Based Learning",
    org: "Working project portfolio",
    text: "Applied learning through dashboards, e-commerce stores, service systems, job portals, responsive portfolios, deployment, and client-style workflows with visible live demos."
  }
];

const pageMeta = {
  home: {
    title: "Junaid Irfan | Full Stack MERN Developer",
    description: "Junaid Irfan is a Lahore-based MERN stack developer building deployed full-stack apps, dashboards, e-commerce stores, and AI-assisted web products."
  },
  about: {
    title: "About | Junaid Irfan",
    description: "The story, learning path, and direction of Junaid Irfan, a Lahore-based MERN stack developer."
  },
  skills: { title: "Skills | Junaid Irfan", description: "Tool and technology stack for Junaid Irfan." },
  projects: { title: "Projects | Junaid Irfan", description: "Live MERN, React, dashboard, e-commerce, and service management projects by Junaid Irfan." },
  experience: { title: "Experience | Junaid Irfan", description: "Experience and current fellowship for Junaid Irfan." },
  education: { title: "Education | Junaid Irfan", description: "Education and current learning path for Junaid Irfan, Full Stack MERN Developer." }
};

function normalizeRoute() {
  const fileName = window.location.pathname.split("/").pop() || "index.html";
  const clean = fileName.replace(".html", "");
  if (!clean || clean === "index") return "home";
  return ["about", "skills", "projects", "experience", "education"].includes(clean) ? clean : "home";
}

function routeHref(route) {
  return route === "home" ? "index.html" : `${route}.html`;
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("junaid-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("junaid-theme", theme);
    } catch {
      // The app still works if browser storage is unavailable.
    }
  }, [theme]);

  return [theme, () => setTheme((current) => (current === "dark" ? "light" : "dark"))];
}

function useReveal(route) {
  useEffect(() => {
    const items = document.querySelectorAll("section:not(.hero-section), .project-card, .card, .timeline-row, .contact-card");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    items.forEach((item) => {
      item.classList.remove("is-visible");
      item.classList.add("reveal");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [route]);
}

function useDocumentMeta(route) {
  useEffect(() => {
    const meta = pageMeta[route] || pageMeta.home;
    document.title = meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", meta.description);
  }, [route]);
}

function IconMark({ icon, textIcon, className = "" }) {
  if (!icon && !textIcon) return null;

  return (
    <span className={`icon-mark ${className}`} aria-hidden="true">
      {icon ? <img src={icon} alt="" loading="lazy" decoding="async" /> : <span>{textIcon}</span>}
    </span>
  );
}

function IconLink({ className, href, icon, children, download }) {
  const external = href.startsWith("http");
  return (
    <a className={className} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} download={download}>
      <IconMark icon={icon} />
      {children}
    </a>
  );
}

function Tag({ tag }) {
  return (
    <span className={`tag${tag.type ? ` ${tag.type}` : ""}`}>
      <IconMark icon={tag.icon} textIcon={tag.textIcon} />
      {tag.label}
    </span>
  );
}

function SkillCard({ skill }) {
  return (
    <article className="card">
      <h3>{skill.title}</h3>
      <div className="tags">{skill.tags.map((tag) => <Tag key={tag.label} tag={tag} />)}</div>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card has-thumb">
      <a className="project-thumb" href={project.live} target="_blank" rel="noreferrer">
        <img src={project.image} alt={project.imageAlt} />
      </a>
      <div className="project-main">
        <span className={`badge ${project.badgeClass}`}>{project.badge}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="metric-row">{project.metrics.map((metric) => <span key={metric}>{metric}</span>)}</div>
        <div className="tags">{project.tags.map((tag) => <Tag key={tag.label} tag={tag} />)}</div>
      </div>
      <div className="project-actions">
        <a className="mini-button" href={project.live} target="_blank" rel="noreferrer">Live</a>
        <a className="mini-button" href={project.code} target="_blank" rel="noreferrer">Code</a>
      </div>
    </article>
  );
}

function Header({ route, onNavigate, theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [route]);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a className="logo" href="index.html" onClick={(event) => onNavigate(event, "home")}>
          <img src={profileImg} alt="Junaid Irfan" />Junaid <span>Irfan</span>
        </a>
        <nav className={`nav-links${isOpen ? " is-open" : ""}`} aria-label="Primary navigation" data-nav-links>
          {navItems.map((item) => (
            <a
              key={item.route}
              href={routeHref(item.route)}
              className={route === item.route ? "is-active" : undefined}
              onClick={(event) => onNavigate(event, item.route)}
              data-nav-link
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="talk-button" href="mailto:junaidirfan810@gmail.com?subject=Portfolio%20Opportunity%20for%20Junaid">Let's talk</a>
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} aria-pressed={theme === "dark"}>
          {theme === "dark" ? "Light" : "Dark"}
        </button>
        <button className="menu-button" type="button" aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>
          Menu
        </button>
      </div>
    </header>
  );
}

function Hero({ onNavigate }) {
  return (
    <section className="hero-section" id="about">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">Full Stack MERN Developer</p>
            <h1><span>Junaid</span> Irfan</h1>
            <p className="subtitle">Building clean MERN apps that actually ship<span className="cursor" aria-hidden="true" /></p>
            <p className="availability">Based in Lahore, Pakistan - Open to remote junior roles and freelance projects</p>
            <p className="bio">
              I'm a <strong>MERN stack developer</strong> who ships <strong>full-stack apps with clean UI and real deployments</strong>, not just tutorials. I build React dashboards, role-based portals, e-commerce workflows, REST APIs, and practical AI features such as dashboard summary generation.
            </p>
            <div className="actions">
              <a className="button button-primary" href="projects.html" onClick={(event) => onNavigate(event, "projects")}>View Projects</a>
              <a className="button button-secondary" href={resumeUrl} download>Download Resume PDF</a>
            </div>
            <div className="socials">
              <IconLink className="social-pill" href={githubUrl} icon={socialIcons.github}>GitHub</IconLink>
              <IconLink className="social-pill" href={linkedInUrl} icon={socialIcons.linkedin}>LinkedIn</IconLink>
              <IconLink className="social-pill" href={emailUrl} icon={socialIcons.gmail}>Gmail</IconLink>
            </div>
            <div className="hero-stats" aria-label="Portfolio highlights">
              <span><strong>4</strong> Featured Projects</span>
              <span><strong>MERN</strong> Stack</span>
              <span><strong>AI</strong> Assisted</span>
            </div>
          </div>
          <aside className="profile-card" aria-label="Junaid Irfan profile photo">
            <div className="profile-glow" aria-hidden="true" />
            <img src={profileImg} alt="Junaid Irfan" />
            <p>Software Engineer</p>
          </aside>
        </div>
        <TechSlider />
      </div>
    </section>
  );
}

function TechSlider() {
  const loopItems = useMemo(() => [...techItems, ...techItems], []);
  return (
    <div className="tech-slider" aria-label="Technology focus">
      <div className="tech-track">
        {loopItems.map((item, index) => (
          <a className="tech-item" href={item.href} target="_blank" rel="noreferrer" key={`${item.label}-${index}`}>
            <IconMark icon={item.icon} textIcon={item.textIcon} className="tech-logo" />
            <span className="tech-label">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function SkillsSection({ page = false }) {
  const cards = page ? [skills[0], skills[1], aiSkills] : skills;
  return (
    <section id="skills">
      <div className="wrap">
        <p className="section-label">Skills</p>
        <h2 className="section-heading">{page ? "Tool and technology stack." : "Focused stack for real web products."}</h2>
        <div className="skills-grid">{cards.map((skill) => <SkillCard skill={skill} key={skill.title} />)}</div>
      </div>
    </section>
  );
}

function ProjectsSection({ compact = false }) {
  const shownProjects = compact ? projects.slice(0, 2) : projects;
  return (
    <section id="projects">
      <div className="wrap">
        <p className="section-label">Projects</p>
        <h2 className="section-heading">{compact ? "Selected work with live deployments." : "Visual proof, live links, and outcomes."}</h2>
        {shownProjects.map((project) => <ProjectCard project={project} key={project.title} />)}
        <div className="more-projects">
          <span>More repositories and practice work available on GitHub</span>
          <a href={repositoriesUrl} target="_blank" rel="noreferrer">View all &rarr;</a>
        </div>
      </div>
    </section>
  );
}

function EducationCards() {
  return (
    <div className="education-grid">
      {educationCards.map((card) => (
        <article className="education-card" key={card.title}>
          <h3>{card.title}</h3>
          <p><strong>{card.org}</strong><br />{card.text}</p>
        </article>
      ))}
    </div>
  );
}

function EducationPreview() {
  return (
    <section id="education">
      <div className="wrap">
        <p className="section-label">Education</p>
        <h2 className="section-heading">Formal software foundation plus current AI engineering growth.</h2>
        <EducationCards />
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience">
      <div className="wrap">
        <p className="section-label">Experience</p>
        <h2 className="section-heading">Current fellowship and project delivery.</h2>
        {experienceRows.slice(0, 2).map((item) => <TimelineRow item={item} key={`${item.year}-${item.role}`} />)}
      </div>
    </section>
  );
}

function TimelineRow({ item }) {
  return (
    <div className="timeline-row">
      <div className="timeline-year">{item.year}</div>
      <div>
        {item.active ? <span className="active-pill">Active</span> : null}
        <div className="timeline-role">{item.role}</div>
        <div className="timeline-company">{item.company}</div>
        <p className="timeline-desc">{item.desc}</p>
      </div>
    </div>
  );
}

function StrengthsSection() {
  const strengths = ["Client Communication", "Fast Learning", "Problem Solving", "Team Collaboration", "Scope Clarity", "Adaptability"];
  return (
    <section id="strengths">
      <div className="wrap">
        <p className="section-label">Strengths</p>
        <h2 className="section-heading">Reliable habits for junior roles and client work.</h2>
        <div className="strengths">{strengths.map((strength) => <span className="chip" key={strength}>{strength}</span>)}</div>
      </div>
    </section>
  );
}

function ContactCard({ aboutPage = false }) {
  return (
    <div className="contact-card">
      <div className="avatar"><img src={profileImg} alt="Junaid Irfan" /></div>
      <h2>{aboutPage ? "Available for junior roles and freelance work." : "Let's build something clean and useful."}</h2>
      <p>{aboutPage ? "Send project details, required pages, features, and timeline." : "Based in Lahore, Pakistan - open to junior Full Stack, React, MERN, dashboard, portfolio, and freelance web projects."}</p>
      <a className="email" href={emailUrl}>junaidirfan810@gmail.com</a>
      <div className="contact-chips">
        <IconLink className="contact-chip" href={emailUrl} icon={socialIcons.gmail}>Gmail</IconLink>
        {aboutPage ? <a className="contact-chip" href={resumeUrl} download>Resume PDF</a> : null}
        <IconLink className="contact-chip" href={linkedInUrl} icon={socialIcons.linkedin}>LinkedIn</IconLink>
        <IconLink className="contact-chip" href={githubUrl} icon={socialIcons.github}>GitHub</IconLink>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section id="contact">
      <div className="wrap"><ContactCard /></div>
    </section>
  );
}

function HomePage({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <SkillsSection />
      <ProjectsSection compact />
      <EducationPreview />
      <ExperienceSection />
      <StrengthsSection />
      <ContactSection />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <section>
        <div className="wrap">
          <p className="hero-eyebrow">About</p>
          <h1><span>Why</span> I build</h1>
          <p className="availability">Based in Lahore, Pakistan - Open to remote junior roles and freelance projects</p>
          <p className="bio">I build because I like turning a messy idea into a working product someone can actually use. My strongest direction is <strong>MERN stack development</strong>: clean React interfaces, dashboards, forms, auth-ready flows, APIs, databases, and real deployment.</p>
          <p className="bio">I am currently enrolled in <strong>Full Stack AI Engineering at DevWeekends</strong>, where I am improving my backend thinking, Data Structures &amp; Algorithms, and practical AI application workflows such as dashboard summary generation.</p>
        </div>
      </section>
      <section>
        <div className="wrap">
          <p className="section-label">Story</p>
          <h2 className="section-heading">Where I am headed.</h2>
          <div className="story-grid">
            <article className="story-card"><h3>What I build</h3><p>Portfolio websites, dashboards, e-commerce flows, booking systems, job portals, admin panels, and responsive pages that feel clear on mobile and desktop.</p></article>
            <article className="story-card"><h3>What I am learning</h3><p>Better API design, role-based app structure, MongoDB data modeling, authentication, clean UI details, and AI features that support real user workflows.</p></article>
            <article className="story-card"><h3>My direction</h3><p>I am preparing for junior full stack roles and freelance projects where reliability, communication, and shipped work matter more than just listing technologies.</p></article>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <p className="section-label">Contact</p>
          <ContactCard aboutPage />
        </div>
      </section>
    </>
  );
}

function ProjectsPage() {
  return <ProjectsSection />;
}

function SkillsPage() {
  return <SkillsSection page />;
}

function ExperiencePage() {
  return (
    <section>
      <div className="wrap">
        <p className="section-label">Experience</p>
        <h2 className="section-heading">Current fellowship and project delivery.</h2>
        {experienceRows.map((item) => <TimelineRow item={item} key={`${item.year}-${item.role}`} />)}
      </div>
    </section>
  );
}

function EducationPage() {
  return (
    <>
      <section>
        <div className="wrap">
          <p className="section-label">Education</p>
          <h1><span>Education</span> &amp; Learning</h1>
          <p className="availability">Software Engineering foundation - Current Full Stack AI Engineering growth</p>
          <p className="bio">My education combines formal software engineering study with current practical AI engineering training and project-based delivery.</p>
        </div>
      </section>
      <section>
        <div className="wrap">
          <p className="section-label">Learning Path</p>
          <h2 className="section-heading">What I am studying and applying.</h2>
          <EducationCards />
        </div>
      </section>
    </>
  );
}

function App() {
  const [route, setRoute] = useState(normalizeRoute);
  const [theme, toggleTheme] = useTheme();
  useReveal(route);
  useDocumentMeta(route);

  useEffect(() => {
    const onPopState = () => setRoute(normalizeRoute());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (event, nextRoute) => {
    event.preventDefault();
    if (nextRoute === route) return;
    window.history.pushState({}, "", routeHref(nextRoute));
    setRoute(nextRoute);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const page = {
    home: <HomePage onNavigate={navigate} />,
    about: <AboutPage />,
    skills: <SkillsPage />,
    projects: <ProjectsPage />,
    experience: <ExperiencePage />,
    education: <EducationPage />
  }[route] || <HomePage onNavigate={navigate} />;

  return (
    <>
      <Header route={route} onNavigate={navigate} theme={theme} toggleTheme={toggleTheme} />
      <main>{page}</main>
      <footer>Built by <span>Junaid Irfan</span> - Full Stack MERN Developer.</footer>
    </>
  );
}

export default App;


