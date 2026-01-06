# Cloudflare Deployment Setup

## ✅ Correct Setup for Cloudflare Pages

Your React/Vite portfolio should be deployed to **Cloudflare Pages**, not Workers.

### In Cloudflare Dashboard:

1. **Go to:** Workers & Pages → **Pages** (not Workers)
2. **Click:** "Create application" → "Pages" → "Connect to Git"
3. **Select:** Your repository (`srivatsadavuluriiii/Portfolio`)

### Build Settings:

- **Framework preset:** `Vite` (or `None`)
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/` (leave empty if repo root)
- **Deploy command:** Leave **EMPTY** (Pages handles this automatically)

### ❌ Do NOT Use:

- ❌ Deploy command: `npx wrangler deploy` (this is for Workers)
- ❌ Workers setup (use Pages instead)

---

## Why Pages Instead of Workers?

- **Pages:** Designed for static sites (React, Vue, etc.)
- **Workers:** For serverless functions and API endpoints
- **Your site:** Static React app → Use **Pages**

---

## Alternative: Manual Deploy with Wrangler CLI

If you want to deploy manually using Wrangler CLI:

```bash
# Install Wrangler (if not installed)
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build your site
npm run build

# Deploy to Pages
wrangler pages deploy dist --project-name=portfolio
```

---

## Configuration Files

- ✅ `wrangler.toml` - Optional for Pages (mainly for Workers)
- ✅ `.cloudflare-pages.json` - Optional (Pages uses dashboard settings)
- ✅ `package.json` - Has deploy script for manual deployment

---

## Quick Deploy Steps

1. **Push to GitHub** (already done ✅)
2. **Go to Cloudflare Dashboard**
3. **Create Pages project**
4. **Connect GitHub repo**
5. **Set build settings** (see above)
6. **Deploy!**

Your site will be live at: `portfolio.pages.dev`

---

## Troubleshooting

### Build fails:
- Check Node version (Cloudflare uses Node 18+)
- Ensure `npm run build` works locally
- Check build logs in Cloudflare dashboard

### Routes return 404:
- Ensure `_redirects` file is in `dist` folder after build
- Or configure redirects in Pages dashboard:
  - Settings → Functions → Redirects
  - Add: `/*` → `/index.html` (Status: 200)

### Assets not loading:
- Check `vite.config.ts` base path
- Ensure assets are in `dist` folder after build

