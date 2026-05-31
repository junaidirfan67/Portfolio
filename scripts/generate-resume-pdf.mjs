import { dirname } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const outputs = ["assets/Junaid-Irfan-Resume.pdf", "public/assets/Junaid-Irfan-Resume.pdf"];

const lines = [
  { text: "Junaid Irfan", size: 26, font: "F2", x: 54, y: 742 },
  { text: "Full Stack Developer | MERN Stack Developer", size: 12.5, font: "F1", x: 54, y: 720 },
  { text: "Phone: 0320-6304078 | Email: junaidirfan810@gmail.com", size: 9.3, font: "F1", x: 54, y: 704 },
  { text: "LinkedIn: linkedin.com/in/junaid-irfan-ba1027241 | GitHub: github.com/Ali-Jun", size: 9.3, font: "F1", x: 54, y: 691 },
  { text: "Portfolio: https://ali-jun.github.io/Portfolio/", size: 9.3, font: "F1", x: 54, y: 678 },
  { text: "Professional Summary", size: 13, font: "F2", x: 54, y: 650 },
  { text: "Results-driven Full Stack Developer with hands-on experience building scalable MERN web applications.", size: 9.7, font: "F1", x: 54, y: 632 },
  { text: "Skilled in responsive frontend interfaces and secure backend APIs with authentication, roles, and databases.", size: 9.7, font: "F1", x: 54, y: 620 },
  { text: "Passionate about creating real-world applications and continuously learning modern technologies.", size: 9.7, font: "F1", x: 54, y: 608 },
  { text: "Technical Skills", size: 13, font: "F2", x: 54, y: 584 },
  { text: "Frontend: HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Bootstrap", size: 9.5, font: "F1", x: 54, y: 566 },
  { text: "Backend: Node.js, Express.js, REST APIs | Database: MongoDB, MySQL", size: 9.5, font: "F1", x: 54, y: 554 },
  { text: "Authentication: JWT, bcrypt.js | Tools: Git, GitHub, Figma, VS Code, Vercel", size: 9.5, font: "F1", x: 54, y: 542 },
  { text: "Projects", size: 13, font: "F2", x: 54, y: 518 },
  { text: "Auto Tech Management System | React.js, role-based dashboards, Vercel", size: 9.8, font: "F2", x: 54, y: 500 },
  { text: "- Vehicle service portal with booking, mechanic assignment, invoices, PKR payments, feedback, and reports.", size: 8.9, font: "F1", x: 64, y: 488 },
  { text: "Live: https://autotechmanagementsystem.vercel.app | GitHub: github.com/Ali-Jun/AutoTechmanagementsystem", size: 8.5, font: "F1", x: 64, y: 476 },
  { text: "HireHub Job Portal | React, Node.js, Express, MongoDB, JWT", size: 9.8, font: "F2", x: 54, y: 456 },
  { text: "- MERN job portal with candidate/employer authentication, job search, applications, and protected dashboards.", size: 8.9, font: "F1", x: 64, y: 444 },
  { text: "Live: https://lnkd.in/da95uY8H | GitHub: https://lnkd.in/dUQmbrYE", size: 8.9, font: "F1", x: 64, y: 432 },
  { text: "Portfolio Website | React, JavaScript, Tailwind CSS, GitHub Pages", size: 9.8, font: "F2", x: 54, y: 412 },
  { text: "- Portfolio website showcasing projects, skills, resume, and contact information.", size: 8.9, font: "F1", x: 64, y: 400 },
  { text: "Live: https://ali-jun.github.io/Portfolio/ | GitHub: github.com/Ali-Jun/Portfolio", size: 8.9, font: "F1", x: 64, y: 388 },
  { text: "Task Manager Application | JavaScript, Bootstrap, MySQL", size: 9.8, font: "F2", x: 54, y: 368 },
  { text: "- Full-stack task management app with CRUD functionality, validation, responsive UI, and real-time updates.", size: 8.9, font: "F1", x: 64, y: 356 },
  { text: "Live: https://ali-jun.github.io/Task-Manager/ | GitHub: github.com/Ali-Jun/Task-Manager", size: 8.9, font: "F1", x: 64, y: 344 },
  { text: "Time-Off Microservice | Microservice Architecture, Git", size: 9.8, font: "F2", x: 54, y: 324 },
  { text: "- Standalone leave/time-off microservice using REST principles.", size: 8.9, font: "F1", x: 64, y: 312 },
  { text: "GitHub: github.com/Ali-Jun/time-off-microservice", size: 8.9, font: "F1", x: 64, y: 300 },
  { text: "Education", size: 13, font: "F2", x: 54, y: 272 },
  { text: "BS Software Engineering, Lahore Leads University", size: 9.8, font: "F2", x: 54, y: 254 },
  { text: "Relevant Coursework: Data Structures & Algorithms, Database Systems, Software Engineering Principles,", size: 8.9, font: "F1", x: 54, y: 242 },
  { text: "Web Technologies, UI/UX Design", size: 8.9, font: "F1", x: 54, y: 230 },
  { text: "Core Strengths", size: 13, font: "F2", x: 54, y: 204 },
  { text: "Fast Learner, Team Collaboration, Problem Solving, Effective Communication, Adaptability, Attention to Detail", size: 9, font: "F1", x: 54, y: 186 },
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
