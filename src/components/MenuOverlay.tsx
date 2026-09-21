"use client";

import Link from "next/link";
import { useEffect, useRef, type CSSProperties } from "react";

const menu = [
  { label: "Virtual Try-On", href: "/try-on" },
  { label: "Plugins", href: "/plugins" },
  { label: "Widget", href: "/widget" },
  { label: "API Docs", href: "/docs" },
  { label: "Pricing", href: "/pricing" },
];

const other = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Cookie Policy", href: "/legal/cookies" },
];

const social = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "X", href: "#" },
];

const labelCls = "text-[11px] font-semibold uppercase tracking-[0.14em]";

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

const ghostOnDark = {
  "--btn-bg": "rgba(255, 255, 255, 0.06)",
  "--btn-fg": "#EAF4F9",
  "--btn-border": "rgba(255, 255, 255, 0.16)",
  "--btn-shadow": "none",
  "--btn-hover-bg": "rgba(255, 255, 255, 0.1)",
  "--btn-hover-fg": "#ffffff",
  "--btn-hover-border": "#6FB6DD",
  "--btn-hover-shadow": "0 20px 40px -18px rgba(111, 182, 221, 0.4)",
} as CSSProperties;

const signInLight: CSSProperties = { justifyContent: "center" };
const signInDark: CSSProperties = { ...ghostOnDark, justifyContent: "center" };

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

export default function MenuOverlay({
  open,
  onClose,
  dark = false,
}: {
  open: boolean;
  onClose: () => void;
  dark?: boolean;
}) {
  const closeRef = useRef(onClose);

  useEffect(() => {
    closeRef.current = onClose;
  });

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeRef.current();
    };

    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleResize = (event: MediaQueryListEvent) => {
      if (event.matches) closeRef.current();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleResize);
    };
  }, [open]);

  const t = dark
    ? {
        card: "bg-[#0E1A21] text-[#EAF4F9] ring-1 ring-white/10",
        label: "text-white/45",
        main: "text-[#EAF4F9] hover:text-[#6FB6DD]",
        sub: "text-white/70 hover:text-[#6FB6DD]",
        divider: "bg-white/10",
        border: "border-white/10",
      }
    : {
        card: "bg-white text-[#111315] ring-1 ring-black/[0.06]",
        label: "text-[#718087]",
        main: "text-[#111315] hover:text-[#28769D]",
        sub: "text-[#46535A] hover:text-[#28769D]",
        divider: "bg-[#E2EEF3]",
        border: "border-[#E2EEF3]",
      };

  return (
    <div
      className={`fixed inset-0 z-[50] transition-[opacity,visibility] duration-500 lg:hidden ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-[#111315]/20 backdrop-blur-[3px]"
      />

      <div
        className={`absolute top-[14px] left-1/2 flex h-[calc(100dvh-28px)] w-[calc(100%-58px)] max-w-[340px] -translate-x-1/2 flex-col overflow-hidden rounded-[28px] shadow-[0_30px_80px_-20px_rgba(17,19,21,0.35)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:top-[16px] sm:h-auto sm:max-h-[calc(100dvh-32px)] sm:w-[320px] ${t.card} ${
          open ? "translate-y-0 scale-100" : "-translate-y-5 scale-[0.97]"
        }`}
      >
        <div className="h-[82px] shrink-0" />

        <div className="min-h-0 flex-1 overflow-y-auto px-6 pt-3 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <p className={`mb-2 ${labelCls} ${t.label}`}>Menu</p>
          <nav aria-label="Main" className="flex flex-col">
            {menu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`py-2 text-[20px] font-medium leading-[1.2] tracking-[-0.03em] transition-colors duration-200 ${t.main}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={`my-6 h-px w-full ${t.divider}`} />

          <p className={`mb-2 ${labelCls} ${t.label}`}>Other</p>
          <nav aria-label="Legal" className="flex flex-col">
            {other.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`py-1.5 text-[14px] font-medium leading-[1.3] transition-colors duration-200 ${t.sub}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <p className={`mt-6 mb-2 ${labelCls} ${t.label}`}>Social media</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`py-1.5 text-[14px] font-medium transition-colors duration-200 ${t.sub}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className={`flex shrink-0 flex-col gap-3 border-t px-6 pt-5 pb-6 ${t.border}`}>
          <Link
            href="/#start"
            onClick={onClose}
            className="zahi-btn zahi-btn-primary zahi-btn-block"
            style={dark ? lightPill : undefined}
          >
            Get started
            <span className="zahi-btn-icon" aria-hidden="true">
              <ArrowUpRight />
            </span>
          </Link>

          <Link
            href="/login"
            onClick={onClose}
            className="zahi-btn zahi-btn-secondary zahi-btn-block"
            style={dark ? signInDark : signInLight}
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}