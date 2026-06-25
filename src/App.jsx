import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

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

const skillLinks = new Map([
  ["React", "https://react.dev/"],
  ["Vite", "https://vite.dev/"],
  ["Three.js", "https://threejs.org/"],
  ["JavaScript", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
  ["Tailwind CSS", "https://tailwindcss.com/"],
  ["Bootstrap", "https://getbootstrap.com/"],
  ["Node.js", "https://nodejs.org/"],
  ["Express.js", "https://expressjs.com/"],
  ["MongoDB", "https://www.mongodb.com/"],
  ["MySQL", "https://www.mysql.com/"],
  ["JWT", "https://jwt.io/"],
  ["REST APIs", "https://developer.mozilla.org/en-US/docs/Glossary/REST"],
  ["GitHub", "https://github.com/"],
  ["Vercel", "https://vercel.com/"],
  ["Claude", "https://claude.ai/"],
  ["ChatGPT", "https://chatgpt.com/"],
  ["Codex", "https://platform.openai.com/docs/codex/overview"],
  ["DeepSeek", "https://www.deepseek.com/"],
]);

const skillLogos = [
  ["React", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"],
  ["Vite", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"],
  ["Three.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg"],
  ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"],
  ["Tailwind CSS", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"],
  ["Bootstrap", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"],
  ["Node.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"],
  ["Express.js", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"],
  ["MongoDB", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"],
  ["MySQL", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"],
  ["GitHub", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"],
  ["Vercel", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vercel.svg"],
  ["ChatGPT", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg"],
  ["Claude", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/anthropic.svg"],
  ["DeepSeek", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/deepseek.svg"],
];

const stats = [
  ["30+", "Projects worked on"],
  ["4", "Live flagship demos"],
  ["MERN", "Primary stack"],
  ["AI", "Assisted delivery"],
];

const projects = [
  {
    title: "Modern Animated MERN E-Commerce Store",
    tag: "Premium marketplace build",
    summary:
      "A men’s fashion e-commerce platform with animated storefront, catalog, cart, checkout, user dashboard, and a full admin control center.",
    role:
      "Designed and developed the frontend, responsive flows, admin screens, backend API structure, authentication plan, demo data, screenshots, and Vercel deployment.",
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Vercel"],
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
    stack: ["React", "JavaScript", "Role Dashboards", "PKR Payments", "Vercel"],
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
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Authentication"],
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
    stack: ["React", "JavaScript", "Dashboard UI", "Local Workflow"],
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

const experienceItems = [
  {
    title: "Full Stack Developer - Project-Based Experience",
    organization: "Working portfolio projects",
    bullets: [
      "Worked on 30+ academic, practice, and client-style projects with selected apps prepared as live demos for jobs, internships, Upwork, and Fiverr.",
      "Built modern React interfaces, dashboard layouts, forms, project galleries, authentication-ready flows, and deployment-ready web apps.",
      "Delivered working projects including Modern Store E-Commerce, Auto Tech Management System, HireHub Job Portal, Task Manager, and microservices practice work.",
    ],
  },
  {
    title: "Internship-Ready Software Engineering Practice",
    organization: "BS Software Engineering foundation",
    bullets: [
      "Applied software engineering coursework across data structures, databases, UI/UX, web technologies, and full stack project planning.",
      "Created recruiter-friendly project stories with screenshots, live links, source links, resume details, and clear feature breakdowns.",
    ],
  },
];

const resumeProjects = projects.map((project) => ({
  title: project.title,
  stack: project.stack.join(", "),
  bullets: [project.summary, project.features[0]],
  links: [
    ["Live Demo", project.live],
    ...(project.source ? [["Source Code", project.source]] : []),
  ],
}));

function externalAttrs(href) {
  return href.startsWith("mailto:") || href.startsWith("tel:")
    ? {}
    : { target: "_blank", rel: "noreferrer" };
}

function useHashRoute() {
  const readRoute = () => window.location.hash.replace(/^#\/?/, "") || "home";
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(readRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

function useTheme() {
  const readTheme = () => {
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
      { threshold: 0.12 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [route]);
}

function ThreeHeroScene({ theme }) {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    let renderer;
    let frameId = 0;
    const cleanups = [];

    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      camera.position.set(0, 0.35, 7.5);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      renderer.setClearColor(0x000000, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.domElement.setAttribute("data-three-scene", "portfolio-hero");
      host.replaceChildren(renderer.domElement);

      const palette =
        theme === "light"
          ? { primary: 0x0ea5e9, secondary: 0x14b8a6, warm: 0xf59e0b, wire: 0x1d4ed8 }
          : { primary: 0x38bdf8, secondary: 0x2dd4bf, warm: 0xfbbf24, wire: 0x93c5fd };

      scene.add(new THREE.AmbientLight(0xffffff, theme === "light" ? 1.6 : 0.7));

      const keyLight = new THREE.PointLight(palette.primary, 5.2, 20);
      keyLight.position.set(-4, 4, 5);
      scene.add(keyLight);

      const fillLight = new THREE.PointLight(palette.secondary, 3.4, 18);
      fillLight.position.set(4, -2, 4);
      scene.add(fillLight);

      const core = new THREE.Mesh(
        new THREE.TorusKnotGeometry(1.12, 0.28, 170, 22),
        new THREE.MeshStandardMaterial({
          color: palette.primary,
          metalness: 0.58,
          roughness: 0.24,
          emissive: palette.primary,
          emissiveIntensity: theme === "light" ? 0.14 : 0.28,
        })
      );
      core.position.set(1.2, 0.04, 0);
      scene.add(core);

      const wire = new THREE.Mesh(
        new THREE.IcosahedronGeometry(2.2, 1),
        new THREE.MeshBasicMaterial({
          color: palette.wire,
          wireframe: true,
          transparent: true,
          opacity: theme === "light" ? 0.24 : 0.36,
        })
      );
      wire.position.copy(core.position);
      scene.add(wire);

      const orbit = new THREE.Group();
      const panelGeometry = new THREE.PlaneGeometry(0.94, 0.46);
      for (let index = 0; index < 9; index += 1) {
        const material = new THREE.MeshBasicMaterial({
          color: index % 3 === 0 ? palette.warm : index % 2 === 0 ? palette.secondary : palette.primary,
          transparent: true,
          opacity: theme === "light" ? 0.24 : 0.34,
          side: THREE.DoubleSide,
        });
        const panel = new THREE.Mesh(panelGeometry, material);
        const angle = (index / 9) * Math.PI * 2;
        panel.position.set(Math.cos(angle) * 3.25, Math.sin(angle * 1.7) * 1.05, Math.sin(angle) * 1.4);
        panel.rotation.set(Math.sin(angle) * 0.45, angle, Math.cos(angle) * 0.18);
        orbit.add(panel);
      }
      scene.add(orbit);

      const particleCount = 320;
      const particlePositions = new Float32Array(particleCount * 3);
      for (let index = 0; index < particleCount; index += 1) {
        particlePositions[index * 3] = (Math.random() - 0.5) * 12;
        particlePositions[index * 3 + 1] = (Math.random() - 0.5) * 6.8;
        particlePositions[index * 3 + 2] = (Math.random() - 0.5) * 6.2;
      }
      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
      const particles = new THREE.Points(
        particleGeometry,
        new THREE.PointsMaterial({
          color: palette.secondary,
          size: 0.026,
          transparent: true,
          opacity: theme === "light" ? 0.38 : 0.58,
        })
      );
      scene.add(particles);

      const grid = new THREE.GridHelper(9, 28, palette.secondary, palette.primary);
      grid.position.set(0, -2.35, 0);
      grid.material.transparent = true;
      grid.material.opacity = theme === "light" ? 0.16 : 0.2;
      scene.add(grid);

      const disposeObject = (object) => {
        object.traverse((child) => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            const materials = Array.isArray(child.material) ? child.material : [child.material];
            materials.forEach((material) => material.dispose());
          }
        });
      };
      cleanups.push(() => {
        disposeObject(scene);
        renderer.dispose();
      });

      const resize = () => {
        const { clientWidth, clientHeight } = host;
        const width = Math.max(1, clientWidth);
        const height = Math.max(1, clientHeight);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
        renderer.setSize(width, height, false);
      };

      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(host);
      window.addEventListener("resize", resize, { passive: true });
      cleanups.push(() => {
        resizeObserver.disconnect();
        window.removeEventListener("resize", resize);
      });
      resize();

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const clock = new THREE.Clock();

      const animate = () => {
        const time = clock.getElapsedTime();
        core.rotation.x = time * 0.28;
        core.rotation.y = time * 0.44;
        wire.rotation.y = -time * 0.18;
        wire.rotation.z = time * 0.08;
        orbit.rotation.y = time * 0.2;
        orbit.rotation.x = Math.sin(time * 0.35) * 0.08;
        particles.rotation.y = time * 0.035;
        particles.rotation.x = Math.sin(time * 0.22) * 0.025;
        camera.position.x = Math.sin(time * 0.18) * 0.24;
        camera.position.y = 0.35 + Math.cos(time * 0.2) * 0.11;
        camera.lookAt(0.65, 0, 0);
        renderer.render(scene, camera);
        frameId = window.requestAnimationFrame(animate);
      };

      if (reducedMotion) {
        renderer.render(scene, camera);
      } else {
        animate();
      }
    } catch (error) {
      host.classList.add("is-webgl-fallback");
      host.replaceChildren();
    }

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      cleanups.forEach((cleanup) => cleanup());
      if (renderer?.domElement?.parentElement) renderer.domElement.parentElement.removeChild(renderer.domElement);
    };
  }, [theme]);

  return (
    <div className="hero-3d" ref={hostRef} aria-hidden="true">
      <div className="hero-3d-fallback" />
    </div>
  );
}

function Header({ route, theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const sectionRoutes = ["home", "experience", "projects", "services", "skills"];
  const homeActive = sectionRoutes.includes(route);
  const navItems = [
    ["Home", "#/home", homeActive && route === "home"],
    ["Experience", "#/experience", route === "experience"],
    ["Projects", "#/projects", route === "projects"],
    ["Services", "#/services", route === "services"],
    ["Skills", "#/skills", route === "skills"],
    ["Contact", "#/contact", route === "contact"],
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
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <span aria-hidden="true" />
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

function Hero() {
  return (
    <section className="hero" id="home">
      <ThreeHeroScene theme={document.documentElement.dataset.theme || "dark"} />
      <div className="hero-noise" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy-block" data-reveal>
          <p className="eyebrow">Building Modern & AI-Driven Applications</p>
          <h1>Full Stack Developer for business-ready web apps, dashboards, and freelance delivery.</h1>
          <p>
            I build React and MERN applications with clean UI, responsive layouts, dashboard workflows, API-ready
            structure, and deployment polish for jobs, internships, Upwork, and Fiverr clients.
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

        <aside className="hero-profile" data-reveal>
          <img src={asset("images/junaid-profile.png")} alt="Junaid Irfan" />
          <div>
            <span>Available for junior roles and freelance work</span>
            <strong>MERN Stack Developer</strong>
          </div>
        </aside>
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

function SkillLogo({ label, src }) {
  const href = skillLinks.get(label);
  return (
    <a className="skill-logo-card" href={href} target="_blank" rel="noreferrer" aria-label={`Open ${label} website`}>
      <img src={src} alt="" loading="lazy" />
      <span>{label}</span>
    </a>
  );
}

function SkillsBanner() {
  const logos = [...skillLogos, ...skillLogos];
  return (
    <section className="skills-banner" aria-label="Technology logos">
      <div className="skill-marquee">
        <div className="skill-track">
          {logos.map(([label, src], index) => (
            <SkillLogo label={label} src={src} key={`${label}-${index}`} />
          ))}
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
        <h2>Working projects presented like real client work.</h2>
        <p>
          The portfolio focuses on proof: live demos, product screenshots, clean descriptions, and practical full stack
          workflows that matter for hiring managers and freelance clients.
        </p>
      </div>

      <div className="container timeline">
        {experienceItems.map((item) => (
          <article className="timeline-item" key={item.title}>
            <div className="timeline-dot" aria-hidden="true" />
            <div>
              <p>{item.organization}</p>
              <h3>{item.title}</h3>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectMedia({ project }) {
  return (
    <div className="project-media">
      <figure className="project-cover">
        <img src={asset(project.cover)} alt={`${project.title} screenshot`} loading="lazy" />
      </figure>
      {project.screens.length ? (
        <div className="screen-strip" aria-label={`${project.title} screenshots`}>
          {project.screens.map(([label, image]) => (
            <figure key={label}>
              <img src={asset(image)} alt={`${project.title} ${label} screen`} loading="lazy" />
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function ProjectCard({ project, featured }) {
  return (
    <article className={`project-card ${featured ? "is-featured" : ""}`} data-reveal>
      <ProjectMedia project={project} />
      <div className="project-content">
        <p className="project-tag">{project.tag}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-role">
          <span>My Role</span>
          <strong>{project.role}</strong>
        </div>
        <ul className="feature-list">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        {project.credential ? <p className="credential">{project.credential}</p> : null}
        <div className="chip-list">
          {project.stack.map((skill) => (
            <a href={skillLinks.get(skill) || "#/skills"} target={skillLinks.has(skill) ? "_blank" : undefined} rel={skillLinks.has(skill) ? "noreferrer" : undefined} key={skill}>
              {skill}
            </a>
          ))}
        </div>
        <div className="project-links">
          <a href={project.live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
          {project.source ? (
            <a href={project.source} target="_blank" rel="noreferrer">
              Source Code
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ProjectsSection() {
  return (
    <section className="section band" id="projects">
      <div className="container section-heading" data-reveal>
        <p className="eyebrow">Projects</p>
        <h2>Project presentation for jobs, Upwork, and Fiverr.</h2>
        <p>
          Each case study shows what was built, the business problem it solves, screenshots, links, and the stack used.
        </p>
      </div>

      <div className="container projects-grid">
        {projects.map((project, index) => (
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
          <p className="eyebrow">Services</p>
          <h2>Clear freelance offers without extra noise.</h2>
          <p>
            I can help with focused web projects, dashboard screens, bug fixes, MERN features, portfolio sites, and
            deployment-ready React work.
          </p>
          <div className="service-actions">
            <a className="button button-primary" href="#/contact">
              Start a Project
            </a>
            <a className="button button-ghost" href="#/projects">
              See Proof
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

function SkillsSection() {
  const groups = [
    ["Frontend", ["React", "Vite", "Three.js", "JavaScript", "Tailwind CSS", "Bootstrap"]],
    ["Backend", ["Node.js", "Express.js", "REST APIs", "JWT"]],
    ["Database", ["MongoDB", "MySQL"]],
    ["Tools & AI", ["GitHub", "Vercel", "Claude", "ChatGPT", "Codex", "DeepSeek"]],
  ];

  return (
    <section className="section band" id="skills" data-reveal>
      <div className="container section-heading">
        <p className="eyebrow">Skills</p>
        <h2>MERN stack, modern UI, and AI-assisted workflow.</h2>
        <p>Every skill chip links to its official website so clients and recruiters can quickly understand the tools.</p>
      </div>
      <div className="container skills-grid">
        {groups.map(([title, skills]) => (
          <article className="skill-group" key={title}>
            <h3>{title}</h3>
            <div className="chip-list">
              {skills.map((skill) => (
                <a href={skillLinks.get(skill)} target="_blank" rel="noreferrer" key={skill}>
                  {skill}
                </a>
              ))}
            </div>
          </article>
        ))}
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
        </div>
        <p>
          Lahore Leads University. Coursework included Data Structures & Algorithms, Database Systems, Software
          Engineering Principles, Web Technologies, and UI/UX Design.
        </p>
      </div>
    </section>
  );
}

function ContactPreview() {
  return (
    <section className="section contact-preview" data-reveal>
      <div className="container contact-preview-card">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Need a React, MERN, dashboard, or portfolio project?</h2>
          <p>
            Send a short message with the project type, pages, features, deadline, and links. I will reply by email.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button button-primary" href="#/contact">
            Send Message
          </a>
          <a className="button button-ghost" href="mailto:junaidirfan810@gmail.com">
            Email Directly
          </a>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <SkillsBanner />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <SkillsSection />
      <EducationSection />
      <ContactPreview />
    </main>
  );
}

function ResumePage() {
  return (
    <main className="resume-shell">
      <div className="resume-actions-top">
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
            <p>Full Stack Developer | MERN Stack Developer | AI-Driven Applications</p>
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
          </address>
        </header>

        <section>
          <h2>Professional Summary</h2>
          <p>
            Full Stack Developer focused on modern and AI-driven applications, responsive React interfaces, MERN web
            apps, dashboards, admin panels, and deployment-ready freelance work. Worked on 30+ projects with selected
            live demos prepared for jobs, internships, LinkedIn, Upwork, and Fiverr.
          </p>
        </section>

        <section>
          <h2>Technical Skills</h2>
          <div className="resume-columns">
            <p><strong>Frontend:</strong> React.js, Vite, Three.js, JavaScript, Tailwind CSS, Bootstrap, HTML5, CSS3</p>
            <p><strong>Backend:</strong> Node.js, Express.js, REST APIs, JWT, bcrypt.js</p>
            <p><strong>Database:</strong> MongoDB, MySQL</p>
            <p><strong>Tools:</strong> GitHub, Vercel, Figma, VS Code, Claude, ChatGPT, Codex, DeepSeek</p>
          </div>
        </section>

        <section>
          <h2>Experience</h2>
          {experienceItems.map((item) => (
            <div className="resume-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.organization}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Projects</h2>
          {resumeProjects.map((project) => (
            <ResumeProject project={project} key={project.title} />
          ))}
        </section>

        <section>
          <h2>Education</h2>
          <div className="resume-item">
            <h3>BS Software Engineering</h3>
            <p>Lahore Leads University</p>
            <p>
              Relevant coursework: Data Structures & Algorithms, Database Systems, Software Engineering Principles, Web
              Technologies, UI/UX Design.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}

function ResumeProject({ project }) {
  return (
    <div className="resume-item">
      <h3>{project.title}</h3>
      <p>
        <strong>Stack:</strong> {project.stack}
      </p>
      <ul>
        {project.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <p>
        {project.links.map(([label, href], index) => (
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
  const [sending, setSending] = useState(false);

  const submitForm = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const honey = String(formData.get("_honey") || "").trim();

    if (!name || !email || !message) {
      setStatus({ type: "error", text: "Please complete name, email, and message." });
      return;
    }

    if (honey) {
      setStatus({ type: "success", text: "Thanks, your message has been sent." });
      form.reset();
      return;
    }

    setSending(true);
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
        throw new Error(result.message || "Message failed");
      }

      setStatus({ type: "success", text: "Thanks, your message has been sent to Junaid's email." });
      form.reset();
    } catch (error) {
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
      <section className="page-hero">
        <ThreeHeroScene theme={document.documentElement.dataset.theme || "dark"} />
        <div className="container page-hero-grid">
          <div data-reveal>
            <p className="eyebrow">Contact</p>
            <h1>Let’s build a clean web project.</h1>
            <p>
              Reach out for junior developer opportunities, internships, Upwork jobs, Fiverr work, dashboards, React
              apps, MERN features, and portfolio websites.
            </p>
          </div>
          <div className="contact-link-grid" data-reveal>
            {contactLinks.map((link) => (
              <a className={`contact-link-card ${link.tone}`} href={link.href} key={link.label} {...externalAttrs(link.href)}>
                <span>
                  <img src={link.icon} alt="" loading="lazy" />
                </span>
                <strong>{link.label}</strong>
                <small>{link.value}</small>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Message</p>
            <h2>Send project details.</h2>
            <p>
              Write the project type, required pages or features, deadline, and any reference links. The form sends the
              message directly to email.
            </p>
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
      <div className="container footer-grid">
        <p>Copyright {new Date().getFullYear()} Junaid Irfan. Full Stack Developer.</p>
        <div>
          {contactLinks.map((link) => (
            <a href={link.href} key={link.label} {...externalAttrs(link.href)}>
              {link.label}
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
  const routeType = route === "contact" || route === "resume" ? route : "home";
  const sectionTarget = ["experience", "projects", "services", "skills"].includes(route) ? route : null;

  useReveal(route);

  useEffect(() => {
    const updateHeader = () => document.querySelector("[data-header]")?.classList.toggle("is-scrolled", window.scrollY > 8);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    document.body.dataset.page = routeType;
    document.body.classList.toggle("resume-page", routeType === "resume");
    document.title =
      routeType === "resume"
        ? "Resume | Junaid Irfan"
        : routeType === "contact"
          ? "Contact | Junaid Irfan"
          : "Junaid Irfan | 3D Full Stack Developer Portfolio";

    window.setTimeout(() => {
      if (sectionTarget) {
        document.getElementById(sectionTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 60);
  }, [routeType, sectionTarget]);

  const page = useMemo(() => {
    if (routeType === "resume") return <ResumePage />;
    if (routeType === "contact") return <ContactPage />;
    return <HomePage />;
  }, [routeType]);

  return (
    <>
      <Header route={route} theme={theme} setTheme={setTheme} />
      {page}
      <Footer page={routeType} />
    </>
  );
}
