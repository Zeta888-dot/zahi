"use client";

import { useState } from "react";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Try-On", href: "/try-on" },
      { label: "Plugins", href: "/plugins" },
      { label: "Widget", href: "/widget" },
      { label: "Models", href: "/models" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "API Docs", href: "/docs" },
      { label: "Compare", href: "/compare" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Use cases", href: "/use-cases" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const socials = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8.3v3h2.4v7h2.8z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.7 3H21l-7.3 8.3L22.2 21h-6.8l-5.3-6.2L4 21H.7l7.8-8.9L1.5 3h7l4.8 5.7L17.7 3zm-1.2 16h1.9L6.9 4.9H4.9L16.5 19z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer style={{ background: "#0E1A21" }}>
      <div className="zahi-content" style={{ paddingBlock: 56 }}>
        {/* Centered brand */}
        <div className="flex flex-col items-center text-center">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ background: "#ffffff", color: "#0E1A21", fontSize: 14, fontWeight: 700 }}
          >
            z.
          </span>
          <p className="mt-4" style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.03em", color: "#EAF4F9" }}>
            zahi
          </p>
          <p className="mt-1.5" style={{ fontSize: 12, color: "#7E97A3" }}>
            Virtual Try-on system tool for e-commerce stores and brands.
          </p>

          {/* Newsletter */}
          {sent ? (
            <p className="mt-6" style={{ fontSize: 12, color: "#6FB6DD" }}>
              Thanks you! you're on the list.
            </p>
          ) : (
            <form
              className="mt-6 flex w-full max-w-[400px] gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSent(true);
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Join our newsletter"
                className="min-w-0 flex-1 rounded-full"
                style={{
                  padding: "11px 16px",
                  fontSize: 12,
                  background: "#ffffff",
                  color: "#111315",
                  border: "none",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                className="shrink-0 rounded-full"
                style={{
                  padding: "11px 18px",
                  fontSize: 11,
                  fontWeight: 600,
                  background: "#28769D",
                  color: "#ffffff",
                }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Columns */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Contact */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#EAF4F9" }}>Contact</p>
            <div className="mt-3 flex flex-col gap-1" style={{ fontSize: 11, lineHeight: 1.7, color: "#8FA6B1" }}>
              <span>Singoor Chitral</span>
              <span>Chitral, KPK, Pakistan</span>
              <a href="mailto:hello@zahi.pk" style={{ color: "#8FA6B1" }}>hello@zahi.pk</a>
              <a href="tel:+923453944210" style={{ color: "#8FA6B1" }}>+92 345 394 4210</a>
            </div>
            <div className="mt-4 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="flex h-8 w-8 items-center justify-center rounded-full"
                  style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#B9CCD6" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p style={{ fontSize: 12, fontWeight: 600, color: "#EAF4F9" }}>{col.title}</p>
              <div className="mt-3 flex flex-col gap-1.5">
                {col.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    style={{ fontSize: 11, color: "#8FA6B1", transition: "color 200ms ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#8FA6B1")}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 flex flex-wrap items-center justify-between gap-3 pt-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p style={{ fontSize: 10, color: "#6E8894" }}>
            © 2026 zahi · Made in Chitral, Pakistan
          </p>
          <p style={{ fontSize: 10, color: "#6E8894" }}>
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}