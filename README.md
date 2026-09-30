# promptkami （提示词之神） — Static Prompt-Pack Store

A complete static website (pure HTML/CSS/JS, no backend, no build step) for
selling AI prompt packs. Works by opening `index.html` directly or on any
static host. Ready for **GitHub Pages**.

**Files**

| File | Purpose |
|---|---|
| `index.html` | All page structure, copy hooks (`data-i18n`), Stripe link placeholders |
| `styles.css` | Dark tech styling, responsive layout |
| `i18n.js` | All UI copy in 4 languages (English / 简体中文 / 日本語 / Español MX) |
| `app.js` | `CONFIG` (prices), language detection/switcher, price rendering |

---

## Deploy to GitHub Pages (5 steps)

1. **Create a repo** on GitHub (e.g. `promptkami`), set it to Public.
2. **Upload all site files** (`index.html`, `styles.css`, `i18n.js`, `app.js`, `sitemap.xml`, `robots.txt`)
   to the repo root — via web upload or:
   ```bash
   git init && git add . && git commit -m "launch"
   git branch -M main
   git remote add origin https://github.com/YOURNAME/promptkami.git
   git push -u origin main
   ```
3. **Enable Pages**: repo → *Settings* → *Pages* → *Deploy from a branch* →
   branch `main`, folder `/ (root)` → Save.
4. **Wait ~1 minute**, then open `https://YOURNAME.github.io/promptkami/`.
5. **Custom domain (optional)**: Pages → *Custom domain* → enter your domain,
   then add the DNS records GitHub shows you.

## Where to paste your Stripe Payment Links

In `index.html`, search for **`REPLACE_ME`** — there are 6 buy buttons:

- `https://buy.stripe.com/REPLACE_ME_SINGLE` → single-pack link (drop section,
  3 archive cards, Single Pack tier)
- `https://buy.stripe.com/REPLACE_ME_MONTHLY` → monthly recurring link

Create them at **Stripe Dashboard → Payment Links → Create payment link**
(use *Recurring* for the monthly one). Paste the real URLs over the
placeholders. The `<!-- TODO -->` comments mark every spot.

The **Free** tier button is a `mailto:` placeholder — point it at your file
host, email-signup form, or download URL.

## Where to change prices

**`app.js` → `CONFIG` object at the top.** Change only these:

```js
const CONFIG = {
  currency: 'USD',   // display currency
  freePrice: 0,
  singlePrice: 0.99, // ← your single-pack price
  monthlyPrice: 1.49 // ← your monthly price
};
```

Every price on the page renders from `CONFIG` — nothing is hardcoded in HTML.

## Where to edit translations

**`i18n.js`** — one `I18N` dictionary with four blocks: `en`, `zh`, `ja`,
`es`. Edit the text after the colon. **Keep keys identical** across all four
languages; never rename or delete a key or that language's UI will fall back
to blank. HTML uses `data-i18n="key"` attributes — add a new key to all four
blocks, then reference it the same way.

## Brand

The brand is **promptkami** （提示词之神）, already applied across all files.

## Notes

- Preview images are CSS gradient placeholders (`.preview-a` … `.preview-d`
  in `styles.css`). Swap any `<div class="preview …">` for a real
  `<img src="…">` when you have effect artwork.
- Language auto-detects from the visitor's browser on first visit
  (fallback: English) and remembers the choice in `localStorage`.
- Payments are handled entirely by Stripe — this site collects no card data.
