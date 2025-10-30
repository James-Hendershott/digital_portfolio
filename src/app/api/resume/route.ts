
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
export const runtime = "nodejs";

import PDFDocument from "pdfkit";
import { resumeData } from "../../../lib/resume";

function addSection(doc: any, heading: string) {
  doc.moveDown(0.6);
  doc.font("Helvetica-Bold").fontSize(12).fillColor("#111").text(heading.toUpperCase());
  doc.moveDown(0.25);
}

function bulletList(doc: any, items: string[]) {
  const bulletIndent = 14;
  const textIndent = 20;
  items.forEach((line) => {
    doc.font("Helvetica").fontSize(10).text("•", { continued: true, indent: bulletIndent });
    doc.text(" " + line, { indent: textIndent });
  });
}

export async function GET() {
  const doc = new PDFDocument({ size: "LETTER", margin: 54 });
  const chunks: Buffer[] = [];

  doc.on("data", (c: Buffer) => chunks.push(Buffer.from(c)));
  const done = new Promise<Buffer>((resolve) => {
    doc.on("end", () => resolve(Buffer.concat(chunks)));
  });

  const r = resumeData;

  // Header
  doc
    .font("Helvetica-Bold").fontSize(20).fillColor("#000").text(r.name)
    .moveDown(0.25)
    .font("Helvetica").fontSize(12).fillColor("#333").text(`${r.title} · ${r.location}`);

  // Contact line
  const contactParts = [r.github ? `GitHub: ${r.github}` : undefined, r.linkedin ? `LinkedIn: ${r.linkedin}` : undefined, r.website ? `Website: ${r.website}` : undefined].filter(Boolean) as string[];
  if (contactParts.length) {
    doc.moveDown(0.2).fontSize(10).fillColor("#555").text(contactParts.join("  |  "));
  }

  // Summary
  addSection(doc, "Summary");
  bulletList(doc, r.summary);

  // Skills
  addSection(doc, "Skills");
  doc
    .font("Helvetica-Bold").fontSize(10).fillColor("#000").text("Languages: ", { continued: true })
    .font("Helvetica").text(r.skills.languages.join(", "));
  doc
    .font("Helvetica-Bold").text("Frameworks: ", { continued: true })
    .font("Helvetica").text(r.skills.frameworks.join(", "));
  doc
    .font("Helvetica-Bold").text("Backend: ", { continued: true })
    .font("Helvetica").text(r.skills.backend.join(", "));
  doc
    .font("Helvetica-Bold").text("DevOps: ", { continued: true })
    .font("Helvetica").text(r.skills.devops.join(", "));
  doc
    .font("Helvetica-Bold").text("Tools: ", { continued: true })
    .font("Helvetica").text(r.skills.tools.join(", "));

  // Experience
  addSection(doc, "Experience");
  r.experience.forEach((exp) => {
    doc
      .font("Helvetica-Bold").fontSize(11).fillColor("#000").text(`${exp.title} — ${exp.company}`)
      .font("Helvetica").fontSize(10).fillColor("#666").text(`${exp.location ?? ""} ${exp.location ? " · " : ""}${exp.start} – ${exp.end}`);
    bulletList(doc, exp.bullets);
    doc.moveDown(0.3);
  });

  // Projects
  addSection(doc, "Projects");
  r.projects.forEach((p) => {
    const line = p.link ? `${p.name} (${p.tech.join(", ")}) — ${p.link}` : `${p.name} (${p.tech.join(", ")})`;
    doc.font("Helvetica-Bold").fontSize(10).fillColor("#000").text(line);
    bulletList(doc, p.bullets);
    doc.moveDown(0.2);
  });

  // Education
  addSection(doc, "Education");
  r.education.forEach((ed) => {
    doc.font("Helvetica-Bold").fontSize(10).text(`${ed.school}`);
    doc.font("Helvetica").fontSize(10).fillColor("#666").text(ed.degree);
    if (ed.bullets && ed.bullets.length) bulletList(doc, ed.bullets);
    doc.moveDown(0.2);
  });

  doc.end();
  const pdf = await done;
  const ab: ArrayBuffer = new Uint8Array(pdf).buffer;

  return new NextResponse(ab, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=James_Hendershott_Resume.pdf",
      "Cache-Control": "no-store",
    },
  });
}
