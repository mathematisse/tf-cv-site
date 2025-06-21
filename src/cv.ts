// src/PDFRender.ts
import * as pdfjsLib from 'pdfjs-dist';
import workerUrl from 'pdfjs-dist/build/pdf.worker.mjs?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl;

export async function renderPDF(canvasId: string, pdfUrl: string) {
  const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
  const page = await pdf.getPage(1);

  const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
  const context = canvas.getContext('2d')!;

  const baseViewport = page.getViewport({ scale: 1 });
  const scale = window.innerWidth / baseViewport.width;
  const viewport = page.getViewport({ scale });

  canvas.width = viewport.width;
  canvas.height = viewport.height;

  await page.render({ canvasContext: context, viewport }).promise;
}




document.addEventListener('DOMContentLoaded', () => {
  renderPDF('pdf-canvas', '/tf-cv-site/ThaisMF.FR.pdf');
});
