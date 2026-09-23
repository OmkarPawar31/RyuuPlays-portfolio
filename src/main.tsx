import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// ── Global Scroll-Reveal Observer ──────────────────────────────────────
// Watches all .reveal / .reveal-left / .reveal-right elements and adds
// .reveal-in when they enter the viewport, triggering CSS transitions.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-in');
        revealObserver.unobserve(entry.target); // fire once
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
);

// Re-observe whenever the DOM changes (React renders new elements)
const domObserver = new MutationObserver(() => {
  document
    .querySelectorAll('.reveal:not(.reveal-in), .reveal-left:not(.reveal-in), .reveal-right:not(.reveal-in)')
    .forEach((el) => revealObserver.observe(el));
});

domObserver.observe(document.body, { childList: true, subtree: true });

// Initial pass after mount
setTimeout(() => {
  document
    .querySelectorAll('.reveal, .reveal-left, .reveal-right')
    .forEach((el) => revealObserver.observe(el));
}, 100);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
