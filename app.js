/* ============================================================
   promptkami （提示词之神） — site config & logic
   ------------------------------------------------------------
   ★ EDIT PRICES HERE — this is the ONLY place prices live.
   - currency: ISO code for display ('USD', 'EUR', 'JPY' ...)
   - singlePrice / monthlyPrice: change these two numbers only.
     (Mapped from the owner's ¥6.9 single-pack / ¥10 monthly tiers.)
   - freePrice: keep at 0.
   - Stripe Payment Links are NOT here — they live in index.html
     as hrefs. Search index.html for "REPLACE_ME" to paste yours.
   ============================================================ */
const CONFIG = {
  currency: 'USD',
  freePrice: 0,
  singlePrice: 0.99,
  monthlyPrice: 4.99
};

/* Currency symbols for display. Add more as needed. */
const CURRENCY_SYMBOLS = {
  USD: '$', EUR: '€', GBP: '£', JPY: '¥', CNY: '¥', MXN: '$'
};

function formatPrice(value) {
  const symbol = CURRENCY_SYMBOLS[CONFIG.currency] || (CONFIG.currency + ' ');
  // Show 2 decimals for sub-dollar style pricing, none for round numbers.
  const num = Number.isInteger(value) ? value.toString() : value.toFixed(2);
  return symbol + num;
}

/* Render every price on the page from CONFIG — never hardcode. */
function renderPrices() {
  const map = {
    free: CONFIG.freePrice,
    single: CONFIG.singlePrice,
    monthly: CONFIG.monthlyPrice
  };
  document.querySelectorAll('[data-price]').forEach(el => {
    const key = el.getAttribute('data-price');
    if (key in map) el.textContent = formatPrice(map[key]);
  });
}

/* ---------------- language handling ---------------- */

/* Set (or create) a meta tag's content. Used to keep SEO tags in sync
   with the active language. */
function setMeta(attr, key, value) {
  if (!value) return;
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', value);
}

const LANG_ATTR = { en: 'en', zh: 'zh-CN', ja: 'ja', es: 'es-MX' };

function detectLang() {
  try {
    const saved = localStorage.getItem('pd_lang');
    if (saved && I18N[saved]) return saved;
  } catch (e) { /* storage unavailable — fall through */ }
  const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  if (nav.startsWith('zh')) return 'zh';
  if (nav.startsWith('ja')) return 'ja';
  if (nav.startsWith('es')) return 'es';
  return 'en'; // fallback
}

function applyLang(lang) {
  if (!I18N[lang]) lang = 'en';
  const dict = I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key in dict) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (key in dict) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (key in dict) el.setAttribute('aria-label', dict[key]);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (key in dict) el.setAttribute('placeholder', dict[key]);
  });
  document.documentElement.lang = LANG_ATTR[lang] || 'en';
  document.title = dict.meta_title || document.title;
  /* Keep SEO meta in sync with the active language. */
  setMeta('name', 'description', dict.meta_description);
  setMeta('property', 'og:title', dict.meta_title);
  setMeta('property', 'og:description', dict.meta_description);
  setMeta('name', 'twitter:title', dict.meta_title);
  setMeta('name', 'twitter:description', dict.meta_description);
  const switcher = document.getElementById('langSwitcher');
  if (switcher) switcher.value = lang;
  try { localStorage.setItem('pd_lang', lang); } catch (e) { /* ignore */ }
}

/* ---------------- free modal: email gate -> instant prompt ---------------- */

function currentDict() {
  try {
    const saved = localStorage.getItem('pd_lang');
    if (saved && I18N[saved]) return I18N[saved];
  } catch (e) { /* ignore */ }
  return I18N.en;
}

function initFreeModal() {
  const modal = document.getElementById('freeModal');
  const openBtn = document.getElementById('freeOpenBtn');
  const closeBtn = document.getElementById('freeModalClose');
  const stepEmail = document.getElementById('modalStepEmail');
  const stepPrompt = document.getElementById('modalStepPrompt');
  const copyBtn = document.getElementById('copyPromptBtn');
  if (!modal || !openBtn) return;

  function openModal() {
    stepEmail.hidden = false;
    stepPrompt.hidden = true;
    copyBtn.textContent = currentDict().modal_copy || 'Copy prompt';
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
  }
  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  const upsell = document.getElementById('modalUpsell');
  if (upsell) upsell.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });

  document.getElementById('freeModalForm').addEventListener('submit', async e => {
    e.preventDefault();
    const email = document.getElementById('freeModalEmail').value.trim();
    /* Fire-and-forget lead capture: every signup lands in the owner's
       Google Sheet (promptkami-leads). Never block the user on it —
       the prompt unlocks instantly either way. */
    try {
      const dropEl = document.querySelector('[data-i18n="drop_title"]');
      await fetch('https://script.google.com/macros/s/AKfycbzmGctc6MJSE8eARyc3aMQEmtqbqiITrBbqG0dofgm86tJqCkaiKCJzXEVIiBahq1xuaQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          email: email,
          drop: dropEl ? dropEl.textContent.trim() : '',
          lang: document.documentElement.lang || 'en'
        })
      });
    } catch (err) { /* lead endpoint down — prompt still unlocks */ }
    stepEmail.hidden = true;
    stepPrompt.hidden = false;
  });

  copyBtn.addEventListener('click', async () => {
    const text = document.getElementById('freePromptText').textContent;
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (_) { /* ignore */ }
      ta.remove();
    }
    copyBtn.textContent = currentDict().modal_copied || 'Copied!';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderPrices();
  applyLang(detectLang());
  const switcher = document.getElementById('langSwitcher');
  if (switcher) {
    switcher.addEventListener('change', e => applyLang(e.target.value));
  }
  initFreeModal();
});
