import type { APIRoute } from "astro";
import { projects } from "../content/portfolio";

export const prerender = true;

const paths = [
  "/",
  "/work/",
  "/contact/",
  "/resume/",
  ...projects.map(({ slug }) => `/work/${slug}/`),
];

const escapeXml = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

export const GET: APIRoute = ({ site }) => {
  if (!site) return new Response("Astro site URL is not configured", { status: 500 });

  const entries = paths
    .map((path) => `  <url><loc>${escapeXml(new URL(path, site).href)}</loc></url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
