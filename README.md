# Sudarshan More — Portfolio

A professional, single-page portfolio for a **Java & Spring Boot Developer** available for
freelance work. Built with **React + TypeScript + Vite + Tailwind CSS + Lucide** and designed to
deploy to **GitHub Pages**.

- Fully responsive (mobile-first), light/dark theme, accessible, SEO-ready.
- All editable content lives in `src/data/` — you rarely need to touch the components.

---

## 1. Project structure

```
SudarshanMDev.github.io/
├── index.html                 # <head>: title, meta description, Open Graph, fonts, JSON-LD
├── package.json
├── vite.config.ts             # base path for GitHub Pages
├── tailwind.config.js         # <-- change ACCENT COLOR + fonts here
├── postcss.config.js
├── tsconfig*.json
├── .github/workflows/deploy.yml   # auto-deploy to GitHub Pages
├── public/
│   ├── favicon.svg
│   └── .nojekyll              # tells GitHub Pages not to run Jekyll
└── src/
    ├── main.tsx               # app entry
    ├── App.tsx                # section order
    ├── index.css              # base styles + theme
    ├── data/                  # ★ EDIT YOUR CONTENT HERE
    │   ├── site.ts            #   name, role, tagline, CONTACT placeholders
    │   ├── navigation.ts      #   navbar links
    │   ├── skills.ts          #   skills grouped by category
    │   ├── services.ts        #   freelance services
    │   ├── projects.ts        #   the two featured projects
    │   ├── experience.ts      #   work history
    │   └── approach.ts        #   "why work with me" points
    ├── hooks/                 # useTheme, useReveal
    ├── components/            # Navbar, Footer, Button, ProjectCard, etc.
    └── sections/              # Hero, About, Skills, Services, Projects, Approach, Experience, Contact
```

---

## 2. Commands

Requires **Node.js 18+** (Node 20 recommended).

```bash
# Install dependencies (run once)
npm install

# Start the dev server (hot reload) → http://localhost:5173
npm run dev

# Type-check + build for production → outputs to /dist
npm run build

# Preview the production build locally
npm run preview
```

---

## 3. Deploying to GitHub Pages

This repo is `SudarshanMDev.github.io`, so the site is served at
**https://sudarshanmdev.github.io/**.

### Recommended: automatic deploy (GitHub Actions)

Already configured in `.github/workflows/deploy.yml`. One-time setup:

1. Push this project to the `main` branch of your repo.
2. On GitHub: **Settings → Pages → Build and deployment → Source → "GitHub Actions"**.
3. Every push to `main` now builds and deploys automatically (watch the **Actions** tab).

### Alternative: manual deploy with the `gh-pages` branch

```bash
npm run deploy
```

This builds and pushes `/dist` to a `gh-pages` branch. Then set
**Settings → Pages → Source → "Deploy from a branch" → `gh-pages` / root**.

> If you ever move this into a normal project repo (not `username.github.io`),
> change `base` in `vite.config.ts` to `'/your-repo-name/'`.

---

## 4. Where to replace placeholders with your real info

Search the project for `[` to find every placeholder. The important ones:

| What | File | Placeholder |
|------|------|-------------|
| Email | `src/data/site.ts` | `[YOUR EMAIL]` |
| LinkedIn | `src/data/site.ts` | `[YOUR LINKEDIN]` |
| Location | `src/data/site.ts` | `[YOUR LOCATION]` |
| Company & dates | `src/data/experience.ts` | `[YOUR CURRENT COMPANY]`, `[START YEAR]` |
| Project names & descriptions | `src/data/projects.ts` | `[PROJECT 1 NAME]`, `[PLACEHOLDER …]` |
| Social preview image URL | `index.html` | `og-image.png` (add a real 1200×630 image to `public/`) |

Contact rows for email / LinkedIn / location **hide or show automatically**: as long as a value
still starts with `[`, the site treats it as empty and shows a gentle "add this" hint instead of a
broken link. GitHub is already set correctly.

---

## 5. Adding / updating projects

Open `src/data/projects.ts`. Each project is one object in the `projects` array:

```ts
{
  name: 'Inventory API',
  kind: 'Monolithic Application',        // small tag shown on the card
  description: 'Short, client-facing summary of what it does.',
  technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
  keyFeatures: ['JWT auth', 'REST API', 'Dockerized'],
  links: {
    github: 'https://github.com/SudarshanMDev/your-repo',
    architecture: 'https://github.com/.../blob/main/README.md#architecture',
    demo: '',            // leave empty ('') to hide the demo button
  },
  published: true,       // false shows an "In progress" badge
}
```

- **Add a project:** copy an existing object, edit the fields — it renders automatically.
- **Hide a link/button:** set it to `''` (empty string). Live demos are optional.
- When a project is finished, set `published: true` to remove the "In progress" badge.

---

## 6. Changing colors / theme

**Accent color** (one place controls the whole site):
Open `tailwind.config.js` → `theme.extend.colors.accent`. Replace the emerald values with any
color scale. The easiest way is to copy the values of a built-in Tailwind color
(`blue`, `indigo`, `sky`, `violet`, `amber`, …) from
<https://tailwindcss.com/docs/customizing-colors>. Also update `theme-color` and the OG
`theme-color` hex in `index.html` if you want the browser UI color to match.

**Fonts:** change the `<link>` in `index.html` and the `fontFamily` in `tailwind.config.js`.

**Default light/dark:** the site follows the visitor's system preference and remembers their
choice (toggle in the navbar). The initial theme logic lives in the inline script in `index.html`.

---

## 7. Changing text / content

- **Name, role, hero tagline, availability badge, contact:** `src/data/site.ts`
- **Navbar items:** `src/data/navigation.ts` (each `href` must match a section `id`)
- **Skills:** `src/data/skills.ts`
- **Services:** `src/data/services.ts` (`icon` = a [Lucide icon](https://lucide.dev/icons) name;
  if you use a new icon, also add it to the `iconMap` in `src/sections/Services.tsx`)
- **Experience:** `src/data/experience.ts`
- **Why work with me:** `src/data/approach.ts`
- **Section order:** `src/App.tsx`
- **Longer About paragraphs:** `src/sections/About.tsx`

---

## 8. Notes

- Keep everything factual — placeholders exist so you never have to invent details.
- Built as a static site: no backend, database, or paid services required.
```
Built with React, TypeScript, Vite, Tailwind CSS, and Lucide React.
```
