/**
 * Lehrstart Schweiz: Interaktionen
 * - Mobile Navigation
 * - Karussell-Pfeile
 * - Newsletter-Formular (Validierung, noch ohne Anbindung)
 * - Dossier-Checkliste mit Speicherung im Browser
 * - Prompts kopieren
 * - Aktuelles Jahr im Footer
 */
(function () {
  'use strict';

  // ---------- Mobile Navigation ----------
  const toggle = document.querySelector('.js-nav-toggle');
  const nav = document.getElementById('hauptnavigation');

  if (toggle && nav) {
    const close = () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    };

    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) close();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        close();
        toggle.focus();
      }
    });
  }

  // ---------- Karussell-Pfeile ----------
  document.querySelectorAll('.js-scroll').forEach((button) => {
    button.addEventListener('click', () => {
      const list = document.getElementById(button.dataset.target);
      if (!list) return;
      const item = list.querySelector('li');
      const step = item ? item.getBoundingClientRect().width + 18 : 280;
      list.scrollBy({ left: step * Number(button.dataset.dir), behavior: 'smooth' });
    });
  });

  // ---------- Newsletter ----------
  // TODO: Formular mit dem gewählten Newsletter-Tool verbinden.
  document.querySelectorAll('.js-newsletter').forEach((form) => {
    const input = form.querySelector('input[type="email"]');
    const status = form.querySelector('.newsletter__status');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      status.classList.remove('is-error', 'is-success');

      if (!input.value.trim() || !input.checkValidity()) {
        status.textContent = 'Bitte gib eine gültige E-Mail-Adresse ein.';
        status.classList.add('is-error');
        input.focus();
        return;
      }

      status.textContent = 'Danke! Das Formular ist noch nicht mit einem Newsletter-Tool verbunden.';
      status.classList.add('is-success');
      form.reset();
    });
  });

  // ---------- Dossier-Checkliste ----------
  const STORAGE_KEY = 'lehrstart-dossier-checkliste';
  const checks = document.querySelectorAll('.js-check');

  if (checks.length) {
    let saved = [];
    try {
      saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (error) {
      saved = [];
    }

    checks.forEach((box, index) => {
      box.checked = Boolean(saved[index]);
      box.addEventListener('change', () => {
        const state = Array.from(checks, (item) => item.checked);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (error) {
          /* Speichern nicht möglich, z.B. im privaten Modus */
        }
      });
    });
  }

  // ---------- Prompts kopieren ----------
  document.querySelectorAll('.js-copy').forEach((button) => {
    button.addEventListener('click', async () => {
      const text = button.parentElement.querySelector('code').textContent;
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = 'Kopiert';
      } catch (error) {
        button.textContent = 'Bitte manuell kopieren';
      }
      setTimeout(() => { button.textContent = 'Kopieren'; }, 2000);
    });
  });

  // ---------- Jahr im Footer ----------
  document.querySelectorAll('.js-year').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
