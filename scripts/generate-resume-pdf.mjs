import { dirname } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const outputs = ["assets/Junaid-Irfan-Resume.pdf", "public/assets/Junaid-Irfan-Resume.pdf"];

const lines = [
  { text: "Junaid Irfan", size: 26, font: "F2", x: 54, y: 742 },
  { text: "Full Stack Developer | MERN Stack Developer | Freelance Web Developer", size: 12.2, font: "F1", x: 54, y: 720 },
  { text: "Phone: 0320-6304078 | Email: junaidirfan810@gmail.com", size: 9.3, font: "F1", x: 54, y: 704 },
  { text: "LinkedIn: linkedin.com/in/junaid-irfan-ba1027241 | GitHub: github.com/Ali-Jun", size: 9.3, font: "F1", x: 54, y: 691 },
  { text: "Portfolio: https://ali-jun.github.io/Portfolio/", size: 9.3, font: "F1", x: 54, y: 678 },
  { text: "Professional Summary", size: 13, font: "F2", x: 54, y: 652 },
  { text: "Full Stack Developer focused on MERN apps, responsive React interfaces, dashboards, and freelance projects.", size: 9.2, font: "F1", x: 54, y: 634 },
  { text: "Worked on 30+ projects across role-based dashboards, booking flows, job portals, marketplace portfolios,", size: 9.2, font: "F1", x: 54, y: 622 },
  { text: "REST API concepts, databases, client-ready UI, live demos, GitHub repositories, and deployment workflows.", size: 9.2, font: "F1", x: 54, y: 610 },
  { text: "Technical Skills", size: 13, font: "F2", x: 54, y: 586 },
  { text: "Frontend: HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Bootstrap", size: 9, font: "F1", x: 54, y: 568 },
  { text: "Backend: Node.js, Express.js, REST APIs | Database: MongoDB, MySQL", size: 9, font: "F1", x: 54, y: 556 },
  { text: "Auth/Tools: JWT, bcrypt.js, Git, GitHub, Figma, VS Code, Vercel", size: 9, font: "F1", x: 54, y: 544 },
  { text: "AI Workflow: Claude, ChatGPT, Codex, DeepSeek", size: 9, font: "F1", x: 54, y: 532 },
  { text: "Freelance Services", size: 13, font: "F2", x: 54, y: 508 },
  { text: "Upwork/Fiverr portfolio websites, personal brand sites, responsive landing pages, and contact form setup.", size: 8.9, font: "F1", x: 54, y: 490 },
  { text: "Admin panels, booking flows, tables, forms, React features, API integration, CRUD workflows, and bug fixes.", size: 8.9, font: "F1", x: 54, y: 478 },
  { text: "Clean UI, mobile polish, deployment support, and client-ready handoff for fixed-scope marketplace projects.", size: 8.9, font: "F1", x: 54, y: 466 },
  { text: "Project-Based Experience", size: 13, font: "F2", x: 54, y: 442 },
  { text: "Full Stack Developer - Portfolio & Freelance Project Work | Current", size: 9.5, font: "F2", x: 54, y: 424 },
  { text: "- Worked on 30+ projects and built selected React portfolio, dashboard, job portal, and service management apps.", size: 8.7, font: "F1", x: 64, y: 412 },
  { text: "- Designed responsive UI sections, project galleries, contact forms, and client/recruiter-facing flows.", size: 8.7, font: "F1", x: 64, y: 400 },
  { text: "- Practiced React, Node.js, Express.js, REST APIs, MongoDB/MySQL, GitHub, and Vercel workflows.", size: 8.7, font: "F1", x: 64, y: 388 },
  { text: "Projects", size: 13, font: "F2", x: 54, y: 364 },
  { text: "Auto Tech Management System | React.js, role-based dashboards, Vercel", size: 9.4, font: "F2", x: 54, y: 346 },
  { text: "- Vehicle service portal with booking, mechanic assignment, invoices, PKR payments, feedback, and reports.", size: 8.3, font: "F1", x: 64, y: 334 },
  { text: "Live: autotechmanagementsystem.vercel.app | Code: github.com/Ali-Jun/AutoTechmanagementsystem", size: 8, font: "F1", x: 64, y: 322 },
  { text: "HireHub Job Portal | React, Node.js, Express, MongoDB, JWT", size: 9.4, font: "F2", x: 54, y: 304 },
  { text: "- MERN job portal concept with candidate/employer auth, job search, applications, and protected dashboards.", size: 8.3, font: "F1", x: 64, y: 292 },
  { text: "Live: lnkd.in/da95uY8H | Code: lnkd.in/dUQmbrYE", size: 8.3, font: "F1", x: 64, y: 280 },
  { text: "Professional Portfolio Website | React, Vite, responsive CSS, Vercel, GitHub Pages", size: 9.4, font: "F2", x: 54, y: 262 },
  { text: "- Animated marketplace portfolio with case studies, resume download, skills banner, and working contact form.", size: 8.3, font: "F1", x: 64, y: 250 },
  { text: "Live: junaid-portfolio-two-phi.vercel.app | Code: github.com/Ali-Jun/Portfolio", size: 8.3, font: "F1", x: 64, y: 238 },
  { text: "Education", size: 13, font: "F2", x: 54, y: 214 },
  { text: "BS Software Engineering, Lahore Leads University", size: 9.4, font: "F2", x: 54, y: 196 },
  { text: "Coursework: Data Structures & Algorithms, Database Systems, Software Engineering, Web Technologies, UI/UX", size: 8.3, font: "F1", x: 54, y: 184 },
  { text: "Core Strengths", size: 13, font: "F2", x: 54, y: 158 },
  { text: "Client Communication, Fast Learning, Problem Solving, Team Collaboration, Scope Clarity, Adaptability, Detail", size: 8.8, font: "F1", x: 54, y: 140 },
];

function escapePdfText(value) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

const content = [
  "0.08 0.13 0.11 rg",
  "54 666 504 1.2 re f",
  "0.06 0.48 0.38 rg",
  "54 665 170 3 re f",
  "0 0 0 rg",
  ...lines.map((line) => `BT /${line.font} ${line.size} Tf ${line.x} ${line.y} Td (${escapePdfText(line.text)}) Tj ET`),
].join("\n");

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  `<< /Length ${Buffer.byteLength(content, "utf8")} >>\nstream\n${content}\nendstream`,
];

let pdf = "%PDF-1.4\n";
const offsets = [0];

objects.forEach((object, index) => {
  offsets.push(Buffer.byteLength(pdf, "utf8"));
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
});

const xrefOffset = Buffer.byteLength(pdf, "utf8");
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
for (let index = 1; index < offsets.length; index += 1) {
  pdf += `${String(offsets[index]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

outputs.forEach((output) => {
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, pdf);
});
console.log(outputs.join("\n"));
