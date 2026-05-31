# Junaid Irfan Portfolio

A recruiter-friendly portfolio built with React, Vite, CSS, and JavaScript.

Live site: https://ali-jun.github.io/Portfolio/

## Files

- `src/App.jsx` - React portfolio app with Home, About, Resume, and Contact views
- `src/main.jsx` - React entry point
- `index.html` - Vite app shell
- `about.html`, `contact.html`, `resume.html` - compatibility redirects to the React routes
- `style.css` - responsive light/dark theme
- `public/` - assets copied into the production build
- `docs/` - production build served by GitHub Pages
- `images/developer-workspace.png` - generated hero image
- `images/junaid-profile.png` - profile photo used in the hero
- `images/hirehub-project.png` - HireHub project screenshot
- `images/task-manager-project.png` - Task Manager project screenshot
- `assets/Junaid-Irfan-Resume.pdf` - generated resume PDF
- `scripts/generate-resume-pdf.mjs` - regenerates the resume PDF in `assets/` and `public/assets/`

The homepage includes an icon-only moving skills banner using high-quality Devicon and Simple Icons SVGs for MERN, full stack tools, and AI tools: MongoDB, Express, React, Node.js, HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap, PHP, MySQL, Git, GitHub, Figma, VS Code, Vercel, Claude, ChatGPT, Codex, and DeepSeek.

The navbar logo uses Junaid's profile photo. Light mode uses a blue theme, and dark mode uses a deep dark-blue theme.

Skill icons and matching skill chips link to their official websites or documentation.

Current profile links:

- GitHub: `https://github.com/Ali-Jun`
- LinkedIn: `https://www.linkedin.com/in/junaid-irfan-ba1027241`

Featured projects: Auto Tech Management System, HireHub Job Portal, Task Manager Application, and Time-Off Microservice.

## Development

Install dependencies and run the React dev server:

```bash
npm install
npm run dev
```

Build for GitHub Pages:

```bash
npm run build
```

The live site is deployed from `main/docs` on GitHub Pages.
