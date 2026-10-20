# Saurabh Dohaiya — Portfolio

An Astro static portfolio inspired by the Prism template on 21st.dev. The site is designed for recruiters and engineering teams, with case studies for platform work and a full-stack project.

## Local development

Requires Node.js 22.22 or later and pnpm 12.14.0.

```bash
pnpm install
pnpm dev
```

Create the production build with `pnpm build`, preview it with `pnpm preview`, and run Astro's diagnostics with `pnpm check`.

## Content

Portfolio copy, experience, project details, skill groups, and profile links live in `src/content/portfolio.ts`. Astro pages render static HTML. Small framework-neutral React components are kept under `src/components/react/` so they can also be reused by a future Next.js app; the production site itself runs on Astro.

The source resume is published at `public/resume.pdf`. The `/resume/` page provides a web summary and a download link.

## Routes

- `/` — portfolio landing page
- `/work/` — selected project index
- `/work/featurelab/`, `/work/horus/`, `/work/zesty/` — project case studies
- `/resume/` and `/resume.pdf` — resume page and download
- `/contact/` — contact information
- `/services` — permanent redirect to the contact section

## Deployment

The canonical site URL is configured in `astro.config.mjs` as `https://saurabh-dohaiya-portfolio-ujio.vercel.app`. Keep the existing Vercel project and alias when switching its detected framework to Astro. Use a preview deployment to confirm the build and routes before promoting any production deployment.
