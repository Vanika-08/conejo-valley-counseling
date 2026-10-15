# Dr. Maya Reynolds: Clone & Redesign

Homepage clone of Conejo Valley Family Counseling, plus a redesign for Dr. Maya Reynolds with a new theme, rewritten copy and an "Our Office" section.

## Tech stack

- Next.js (App Router)
- Tailwind CSS v4
- TypeScript

## Pages

| Route | Page |
| --- | --- |
| `/` | Landing page linking to both versions |
| `/clone` | Homepage clone |
| `/redesign` | Dr. Maya Reynolds redesign |

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

- `app/globals.css` holds the theme: color tokens, type scale, fonts and base styles.
- `components/clone/` contains the cloned homepage.
- `components/maya/` contains the redesign and its content (`content.ts`).

## Deploy

Push to GitHub and import the repo on Vercel. No extra configuration is needed.
