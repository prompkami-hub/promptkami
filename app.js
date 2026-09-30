/* ============================================================
   PROMPTDROP — site config & logic
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
  monthlyPrice: 1.49
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
  document.documentElement.lang = LANG_ATTR[lang] || 'en';
  document.title = dict.meta_title || document.title;
  const switcher = document.getElementById('langSwitcher');
  if (switcher) switcher.value = lang;
  try { localStorage.setItem('pd_lang', lang); } catch (e) { /* ignore */ }
}

/* ---------------- init ---------------- */

document.addEventListener('DOMContentLoaded', () => {
  renderPrices();
  applyLang(detectLang());
  const switcher = document.getElementById('langSwitcher');
  if (switcher) {
    switcher.addEventListener('change', e => applyLang(e.target.value));
  }
});
