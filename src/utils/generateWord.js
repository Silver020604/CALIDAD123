import {
  Document,
  Packer,
  Paragraph,
  HeadingLevel,
  ImageRun
} from "docx";

import { saveAs } from "file-saver";

const MAX_WIDTH = 400;

async function getDimensions(blob) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () =>
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = reject;
    img.src = URL.createObjectURL(blob);
  });
}

function scaledSize(dimensions) {
  const scale = MAX_WIDTH / dimensions.width;
  return {
    width: MAX_WIDTH,
    height: Math.round(dimensions.height * scale)
  };
}

async function getReferenceImageRun(questionId) {
  const src = `${import.meta.env.BASE_URL}references/${questionId}.png`;

  try {
    const response = await fetch(src);
    if (!response.ok) return null;

    const blob = await response.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const dimensions = await getDimensions(blob);

    return new ImageRun({
      data: arrayBuffer,
      transformation: scaledSize(dimensions)
    });
  } catch (err) {
    console.warn(`No se pudo cargar la imagen de referencia ${questionId}:`, err);
    return null;
  }
}

async function getEvidenceImageRun(file) {
  if (!file) return null;

  try {
    const arrayBuffer = await file.arrayBuffer();
    const dimensions = await getDimensions(file);

    return new ImageRun({
      data: arrayBuffer,
      transformation: scaledSize(dimensions)
    });
  } catch (err) {
    console.warn("No se pudo cargar la foto de evidencia:", err);
    return null;
  }
}

export async function generateWord(
  auditor,
  area,
  questions,
  answers,
  comments,
  images
) {
  const content = [];

  content.push(
    new Paragraph({
      text: "GALLEY FINAL INSPECTION",
      heading: HeadingLevel.TITLE
    })
  );

  content.push(new Paragraph(`Auditor: ${auditor}`));
  content.push(new Paragraph(`Area: ${area}`));
  content.push(new Paragraph(" "));

  for (const q of questions) {
    content.push(
      new Paragraph({
        text: `${q.id}. ${q.es}`,
        heading: HeadingLevel.HEADING_2
      })
    );

    content.push(new Paragraph(`English: ${q.en}`));
    content.push(new Paragraph(`Result: ${answers[q.id] || "NO ANSWER"}`));
    content.push(new Paragraph(`Comment: ${comments[q.id] || ""}`));

    const referenceRun = await getReferenceImageRun(q.id);
    if (referenceRun) {
      content.push(new Paragraph(" "));
      content.push(new Paragraph("Reference (Acceptable):"));
      content.push(new Paragraph({ children: [referenceRun] }));
    }

    if (answers[q.id] === "REJECTED") {
      const evidenceRun = await getEvidenceImageRun(images?.[q.id]);
      if (evidenceRun) {
        content.push(new Paragraph(" "));
        content.push(new Paragraph("Evidence photo:"));
        content.push(new Paragraph({ children: [evidenceRun] }));
      }
    }

    content.push(new Paragraph(" "));
  }

  const doc = new Document({
    sections: [
      {
        children: content
      }
    ]
  });

  const blob = await Packer.toBlob(doc);

  saveAs(blob, "GalleyInspection.docx");
}