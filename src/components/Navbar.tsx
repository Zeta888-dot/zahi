"use client";

import { useEffect, useState } from "react";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem("zahi-theme");
    setDark(savedTheme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("zahi-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(
        max > 0
          ? Math.min(100, Math.round((window.scrollY / max) * 100))
          : 0
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[70] px-5 pt-5 sm:px-7 sm:pt-6">
        <div className="relative mx-auto flex w-full max-w-[1560px] items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="relative z-[80] text-[21px] font-medium leading-none tracking-[-0.04em]"
          >
            zahi<span className="text-ember-orange">.</span>
          </a>

          {/* Right side */}
          <div className="relative z-[80] flex items-center gap-2">
            {/* Account */}
            <a
              href="/login"
              aria-label="Account"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-black text-canvas-white transition-transform duration-300 hover:scale-[0.96]"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5.5 20c.8-3.2 3-5 6.5-5s5.7 1.8 6.5 5" />
              </svg>
            </a>

            {/* Desktop CTA */}
            <a
              href="#start"
              className="hidden h-11 items-center rounded-full bg-ink-black px-5 text-[14px] font-medium text-canvas-white transition-transform duration-300 hover:scale-[0.98] sm:flex"
            >
              Get started
            </a>
          </div>

          {/* CENTERED MENU PILL */}
          <div
            className={`absolute left-1/2 top-0 z-[100] flex -translate-x-1/2 items-center rounded-full bg-ink-black text-canvas-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 ${
              open
                ? "h-11 pl-5 pr-2"
                : "h-11 pl-4 pr-2"
            }`}
          >
            {/* Menu / Close */}
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-full items-center gap-3 text-[14px] font-medium"
            >
              {open ? (
                <>
                  <span>Close</span>

                  <span className="text-[18px] font-light leading-none">
                    ×
                  </span>
                </>
              ) : (
                <>
                  <span className="flex flex-col gap-[4px]">
                    <span className="block h-[1px] w-[15px] bg-canvas-white" />
                    <span className="block h-[1px] w-[15px] bg-canvas-white" />
                  </span>

                  <span>Menu</span>
                </>
              )}
            </button>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={() => setDark((value) => !value)}
              aria-label="Toggle theme"
              className="ml-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-colors duration-300 hover:bg-white/10"
            >
              {dark ? (
                /* Sun */
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.42 1.42" />
                  <path d="m17.65 17.65 1.42 1.42" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m4.93 19.07 1.42-1.42" />
                  <path d="m17.65 6.35 1.42-1.42" />
                </svg>
              ) : (
                /* Moon */
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5a8.7 8.7 0 1 0 12 12Z" />
                </svg>
              )}
            </button>

            {/* Progress */}
            <span className="ml-1 flex h-8 min-w-[42px] items-center justify-center rounded-full bg-white/10 px-2.5 text-[11px] tabular-nums">
              {progress}%
            </span>
          </div>
        </div>
      </header>

      <MenuOverlay
        open={open}
        onClose={() => setOpen(false)}
        dark={dark}
      />
    </>
  );
}