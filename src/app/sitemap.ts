import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zahi.pk";
  const routes = ["", "/try-on", "/plugins", "/widget", "/docs", "/pricing", "/models", "/about", "/contact"];
  return routes.map((r) => ({
    url: base + r,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.8,
  }));
}