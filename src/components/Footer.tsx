"use client";

import Link from "next/link";
import { useState, type CSSProperties, type FormEvent, type ReactNode } from "react";

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
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
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
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8.3v3h2.4v7h2.8z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.7 3H21l-7.3 8.3L22.2 21h-6.8l-5.3-6.2L4 21H.7l7.8-8.9L1.5 3h7l4.8 5.7L17.7 3zm-1.2 16h1.9L6.9 4.9H4.9L16.5 19z" />
      </svg>
    ),
  },
];

/*
  Light variant of the pill button, for dark backgrounds.
  These custom properties feed the .zahi-btn rules in globals.css.
*/
const lightPill = {
  "--btn-bg": "#EAF4F9",
  "--btn-fg": "#0B1216",
  "--btn-shadow": "0 16px 40px -18px rgba(111, 182, 221, 0.55)",
  "--btn-hover-bg": "#6FB6DD",
  "--btn-hover-fg": "#0B1216",
  "--btn-hover-shadow": "0 24px 50px -16px rgba(111, 182, 221, 0.75)",
  "--btn-icon-bg": "#0B1216",
  "--btn-icon-fg": "#ffffff",
  "--btn-icon-hover-bg": "#0B1216",
  "--btn-icon-hover-fg": "#6FB6DD",
} as CSSProperties;

const linkCls =
  "text-[14px] text-[#8FA6B1] transition-colors duration-200 hover:text-white";

/* Internal routes use next/link, everything else is a plain anchor */
function FooterLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 12L12 4M5.5 4H12V10.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Connect your backend here (Sanity, Formspree, a Next.js route handler)
    setSent(true);
  };

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/[0.08] bg-[#0E1A21]">
      {/* Soft glow behind the brand block */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-25%] left-1/2 h-[420px] w-[900px] max-w-[150vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(40,118,157,0.22),transparent)] blur-3xl" />
      </div>

      <div className="zahi-content relative pt-16 pb-8 lg:pt-20">
        {/* Brand and newsletter */}
        <div className="mx-auto flex max-w-[520px] flex-col items-center text-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[15px] font-bold text-[#0E1A21]">
            z.
          </span>
          <p className="mt-4 text-[28px] font-semibold leading-none tracking-[-0.03em] text-[#EAF4F9]">
            zahi
          </p>
          <p className="mt-3 max-w-[420px] text-[15px] leading-[1.6] text-[#8FA6B1]">
            Virtual try-on system for e-commerce stores and brands.
          </p>

          {sent ? (
            <div
              role="status"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/[0.06] py-3 pr-6 pl-4 ring-1 ring-white/[0.12]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6FB6DD]/15 text-[#6FB6DD]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path
                    d="M2.5 6.2L5 8.7L9.5 3.7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[14px] text-[#EAF4F9]">Thanks, you are on the list.</span>
            </div>
          ) : (
            <form
              onSubmit={submit}
              className="mt-8 flex w-full flex-col gap-3 min-[481px]:flex-row"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Join our newsletter"
                className="h-12 w-full min-w-0 rounded-full border border-white/[0.14] bg-white/[0.06] px-5 text-[16px] text-[#EAF4F9] outline-none transition-all duration-300 focus:border-[#6FB6DD] focus:bg-white/[0.09] focus:ring-4 focus:ring-[#6FB6DD]/15 min-[481px]:flex-1"
              />
              <button
                type="submit"
                className="zahi-btn zahi-btn-primary w-full shrink-0 min-[481px]:w-auto"
                style={lightPill}
              >
                Subscribe
                <span className="zahi-btn-icon" aria-hidden="true">
                  <ArrowUpRight />
                </span>
              </button>
            </form>
          )}
        </div>

        {/* Columns */}
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/[0.08] pt-12 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <p className="text-[14px] font-semibold text-[#EAF4F9]">Contact</p>

            <address className="mt-4 flex flex-col gap-2 text-[14px] leading-[1.6] not-italic text-[#8FA6B1]">
              <span>Singoor Chitral</span>
              <span>Chitral, KPK, Pakistan</span>
              <a
                href="mailto:hello@zahi.pk"
                className="transition-colors duration-200 hover:text-white"
              >
                hello@zahi.pk
              </a>
              <a
                href="tel:+923453944210"
                className="transition-colors duration-200 hover:text-white"
              >
                +92 345 394 4210
              </a>
            </address>

            <div className="mt-5 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.16] text-[#B9CCD6] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#6FB6DD] hover:bg-white/[0.06] hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[14px] font-semibold text-[#EAF4F9]">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <FooterLink href={l.href} className={linkCls}>
                      {l.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center">
          <p className="text-[13px] text-[#7D97A3]">
            © 2026 zahi. Made in Chitral, Pakistan.
          </p>
          <p className="inline-flex items-center gap-2 text-[13px] text-[#7D97A3]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4DA878]" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}