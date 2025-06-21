import { marked } from 'marked';
import type { Poi } from './loadPois';

let overlay: HTMLDivElement | null = null;
let card: HTMLDivElement | null = null;

export function initPoiCard() {
  overlay = document.createElement('div');
  overlay.id = 'poi-card-overlay';
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      hidePoiCard();
    }
  });

  card = document.createElement('div');
  card.id = 'poi-card';

  overlay.appendChild(card);
  document.body.appendChild(overlay);
}

export function showPoiCard(poi: Poi) {
  if (!overlay || !card) {
    initPoiCard();
  }
  if (!overlay || !card) return;
  let content = '';
  if (poi.details) {
    content = marked.parse(poi.details);
  } else if (poi.description) {
    content = `<p>${poi.description}</p>`;
  }

  const html = `
    <h2>${poi.name}</h2>
    ${content}
  `;

  card.innerHTML = '';
  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Close';
  closeBtn.className = 'close-btn';
  closeBtn.addEventListener('click', hidePoiCard);
  card.appendChild(closeBtn);
  card.insertAdjacentHTML('beforeend', html);

  overlay.style.display = 'flex';
}

export function hidePoiCard() {
  if (overlay) {
    overlay.style.display = 'none';
  }
}
