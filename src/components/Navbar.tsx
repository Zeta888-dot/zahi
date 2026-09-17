"use client";

import { useEffect, useState } from "react";
import MenuOverlay from "./MenuOverlay";

type NavItem = {
  label: string;
  href: string;
  dropdown?: boolean;
};

const navLinks: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "#widget",
    dropdown: true,
  },
  {
    label: "Integrations",
    href: "#plugins",
    dropdown: true,
  },
  {
    label: "API",
    href: "/docs",
    dropdown: true,
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Resources",
    href: "#resources",
    dropdown: true,
  },
];

const dropdownItems: Record<string, { label: string; href: string }[]> = {
  Products: [
    { label: "Try On", href: "/try-on" },
    { label: "Studio", href: "/studio" },
    { label: "Widget", href: "/widget" },
    { label: "Models", href: "/models" },
    { label: "Use cases", href: "/use-cases" },
  ],
  Integrations: [
    { label: "Plugins", href: "/plugins" },
    { label: "Compare", href: "/compare" },
  ],
  API: [
    { label: "Documentation", href: "/docs" },
    { label: "API", href: "#api" },
  ],
  Resources: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Legal", href: "/legal" },
  ],
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dark, setDark] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem("zahi-theme");

    if (savedTheme) {
      setDark(savedTheme === "dark");
    } else {
      setDark(true);
    }
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (!target.closest("[data-navbar-dropdown]")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const closeNavigation = () => {
    setOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[70] px-5 pt-5 sm:px-7 sm:pt-6">
        <div className="relative mx-auto flex h-[56px] w-full max-w-[1560px] items-center justify-between rounded-full border border-white/[0.07] bg-[#070707]/85 px-2.5 pl-5 shadow-[0_15px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-3 sm:pl-6">
          <a
            href="/"
            onClick={closeNavigation}
            className="relative z-[80] text-[22px] font-medium leading-none tracking-[-0.055em] text-white"
          >
            zahi<span className="text-[#ff6900]">.</span>
          </a>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
            {navLinks.map((link, index) => {
              const hasDropdown =
                Boolean(link.dropdown) && dropdownItems[link.label];

              return (
                <div
                  key={link.label}
                  className="relative"
                  data-navbar-dropdown
                >
                  <a
                    href={link.href}
                    onClick={(event) => {
                      if (hasDropdown) {
                        event.preventDefault();

                        setActiveDropdown((current) =>
                          current === link.label ? null : link.label
                        );
                      } else {
                        closeNavigation();
                      }
                    }}
                    className={`group relative flex items-center gap-1.5 py-5 text-[11px] font-medium transition-colors ${
                      index === 0
                        ? "text-[#ff6900]"
                        : "text-white/45 hover:text-white"
                    }`}
                  >
                    {link.label}

                    {hasDropdown && (
                      <svg
                        viewBox="0 0 12 12"
                        fill="none"
                        className={`h-3 w-3 text-current transition-transform duration-200 ${
                          activeDropdown === link.label
                            ? "rotate-180"
                            : ""
                        }`}
                        aria-hidden="true"
                      >
                        <path
                          d="m3 4.5 3 3 3-3"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}

                    {index === 0 && (
                      <span className="absolute bottom-[7px] left-0 h-[2px] w-full rounded-full bg-[#ff6900]" />
                    )}
                  </a>

                  {hasDropdown &&
                    activeDropdown === link.label && (
                      <div className="absolute left-1/2 top-[52px] w-[210px] -translate-x-1/2 rounded-[20px] border border-white/[0.08] bg-[#0b0b0b]/95 p-2 shadow-[0_25px_70px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
                        {dropdownItems[link.label].map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={closeNavigation}
                            className="group flex items-center justify-between rounded-[14px] px-3.5 py-3 text-[11px] text-white/55 transition-colors hover:bg-white/[0.05] hover:text-white"
                          >
                            <span>{item.label}</span>

                            <svg
                              viewBox="0 0 20 20"
                              fill="none"
                              className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                              aria-hidden="true"
                            >
                              <path
                                d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        ))}
                      </div>
                    )}
                </div>
              );
            })}
          </nav>

          <div className="relative z-[80] ml-auto flex items-center gap-2">
            <a
              href="/login"
              onClick={closeNavigation}
              className="hidden h-10 items-center rounded-full border border-white/[0.12] px-5 text-[11px] font-medium text-white/70 transition-colors hover:border-white/25 hover:text-white sm:flex"
            >
              Sign in
            </a>

            <a
              href="/try-on"
              onClick={closeNavigation}
              className="flex h-10 items-center gap-2 rounded-full bg-[#ff6900] px-5 text-[10px] font-semibold text-black transition-transform duration-300 hover:scale-[0.98] hover:brightness-105"
            >
              <span>Get started</span>

              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path
                  d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <button
            type="button"
            onClick={() => {
              setOpen((value) => !value);
              setActiveDropdown(null);
            }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-[100] ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.03] text-white lg:hidden"
          >
            {open ? (
              <span className="text-[20px] font-light leading-none">
                ×
              </span>
            ) : (
              <span className="flex flex-col gap-[4px]">
                <span className="h-px w-4 bg-white" />
                <span className="h-px w-4 bg-white" />
              </span>
            )}
          </button>

          <div className="absolute -bottom-[48px] left-1/2 hidden -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/[0.07] bg-[#101010]/90 p-1 backdrop-blur-xl sm:flex lg:hidden">
            <button
              type="button"
              onClick={() => setDark((value) => !value)}
              aria-label="Toggle theme"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-white/55 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {dark ? (
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

            <span className="flex h-8 min-w-[42px] items-center justify-center rounded-full bg-white/[0.07] px-2.5 text-[10px] tabular-nums text-white/45">
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