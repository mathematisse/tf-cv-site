import { marked } from 'marked';
import type { Poi } from './loadPois';

let overlay: HTMLDivElement | null = null;
let card: HTMLDivElement | null = null;

export function initPoiCard() {
  overlay = document.createElement('div');
  overlay.id = 'poi-card-overlay';
  Object.assign(overlay.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.5)',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '1000',
  } as CSSStyleDeclaration);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      hidePoiCard();
    }
  });

  card = document.createElement('div');
  card.id = 'poi-card';
  Object.assign(card.style, {
    background: 'white',
    maxWidth: '600px',
    maxHeight: '80vh',
    overflowY: 'auto',
    padding: '1rem',
  } as CSSStyleDeclaration);

  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Close';
  closeBtn.style.float = 'right';
  closeBtn.addEventListener('click', hidePoiCard);
  card.appendChild(closeBtn);

  overlay.appendChild(card);
  document.body.appendChild(overlay);
}

export function showPoiCard(poi: Poi) {
  if (!overlay || !card) {
    initPoiCard();
  }
  if (!overlay || !card) return;
  const html = `
    <h2>${poi.name}</h2>
    ${poi.details ? marked.parse(poi.details) : ''}
  `;
  card.innerHTML = '<button style="float:right">Close</button>' + html;
  const close = card.querySelector('button');
  close?.addEventListener('click', hidePoiCard);
  overlay.style.display = 'flex';
}

export function hidePoiCard() {
  if (overlay) {
    overlay.style.display = 'none';
  }
}
