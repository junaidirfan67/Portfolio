import { mkdirSync, writeFileSync } from "node:fs";

const output = "assets/Junaid-Irfan-Resume.pdf";

const lines = [
  { text: "Junaid Irfan", size: 28, font: "F2", x: 54, y: 742 },
  { text: "Full Stack Developer | MERN Stack Developer", size: 13, font: "F1", x: 54, y: 719 },
  { text: "Email: junaidirfan810@gmail.com | GitHub: github.com/Ali-Jun", size: 10, font: "F1", x: 54, y: 696 },
  { text: "LinkedIn: linkedin.com/in/junaid-irfan-ba1027241", size: 10, font: "F1", x: 54, y: 680 },
  { text: "Profile", size: 14, font: "F2", x: 54, y: 654 },
  { text: "BS Software Engineering graduate building full-stack applications and seeking", size: 11, font: "F1", x: 54, y: 634 },
  { text: "internship or junior opportunities through real-world projects.", size: 11, font: "F1", x: 54, y: 618 },
  { text: "Skills", size: 14, font: "F2", x: 54, y: 582 },
  { text: "Frontend: React, JavaScript, Tailwind CSS, HTML, CSS, Bootstrap", size: 11, font: "F1", x: 54, y: 562 },
  { text: "Backend: Node.js, Express.js, PHP, REST APIs", size: 11, font: "F1", x: 54, y: 546 },
  { text: "Database: MongoDB, MySQL", size: 11, font: "F1", x: 54, y: 530 },
  { text: "Tools: Git, GitHub, Figma, VS Code, Vercel", size: 11, font: "F1", x: 54, y: 514 },
  { text: "AI Tools: Claude, ChatGPT, Codex, DeepSeek", size: 11, font: "F1", x: 54, y: 498 },
  { text: "Projects", size: 14, font: "F2", x: 54, y: 466 },
  { text: "HireHub Job Portal", size: 12, font: "F2", x: 54, y: 444 },
  { text: "Full stack hiring platform with listings, search, employer posts, and application flows.", size: 10.5, font: "F1", x: 54, y: 428 },
  { text: "Task Manager Application", size: 12, font: "F2", x: 54, y: 400 },
  { text: "Responsive productivity app for creating, filtering, and completing daily tasks.", size: 10.5, font: "F1", x: 54, y: 384 },
  { text: "Time-Off Microservice", size: 12, font: "F2", x: 54, y: 356 },
  { text: "Backend service for time-off requests, approvals, APIs, and database workflows.", size: 10.5, font: "F1", x: 54, y: 340 },
  { text: "Goals", size: 14, font: "F2", x: 54, y: 272 },
  { text: "Seeking internship and junior developer opportunities through real-world projects.", size: 11, font: "F1", x: 54, y: 252 },
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

mkdirSync("assets", { recursive: true });
writeFileSync(output, pdf);
console.log(output);
