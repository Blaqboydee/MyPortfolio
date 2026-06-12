# myportfolio — Adeoluwa Adegoke's portfolio site

Vite + React + TypeScript + Tailwind SPA, deployed on Vercel. Blog backed by
Supabase (auth + posts). CV download rendered with @react-pdf/renderer.

## How content works

- `src/data/portfolio.ts` is the **single source of truth** for site content
  (hero, about, skills, projects, experience, education). Components in
  `src/components/` (Projects.tsx, Stack.tsx, Hero.tsx, About.tsx, CV.tsx …)
  render from it.
- `PORTFOLIO_DATA.md` (repo root) is the human/AI-readable mirror of that
  content — **keep it in sync** whenever `portfolio.ts` changes.
- The site has **two regional variants** (NG / UK) toggled in the navbar:
  location, phone, about blurb, experience, and which CV PDF downloads differ
  per region. Shared identity is identical. Check both variants when editing.

## Mobile / APK releases

Two projects ship as native Android apps (Capacitor), with APKs on GitHub
releases. Project entries carry an optional `apk` field rendered as a
download link in `Projects.tsx`:

- **Arena**: https://github.com/Blaqboydee/Arena-Frontend/releases/latest
  (client repo `Blaqboydee/Arena-Frontend`; README has a demo GIF and
  screenshots in `docs/` reusable for visuals)
- **Spendly**: https://github.com/Blaqboydee/Spendly/releases/latest
