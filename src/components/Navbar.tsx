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

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="m3 4.5 3 3 3-3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      <header className="fixed inset-x-0 top-0 z-[70] px-4 pt-4 sm:px-6 sm:pt-5">
        <div className="relative mx-auto flex h-[58px] w-full max-w-[1500px] items-center justify-between rounded-full border border-[#D5E6ED] bg-white/90 px-2.5 pl-5 shadow-[0_12px_40px_rgba(54,103,126,0.10)] backdrop-blur-xl sm:px-3 sm:pl-6">
          {/* Logo */}
          <a
            href="/"
            onClick={closeNavigation}
            className="relative z-[80] text-[21px] font-medium leading-none tracking-[-0.055em] text-[#111315]"
          >
            zahi<span className="text-[#28769D]">.</span>
          </a>

          {/* Desktop navigation */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const hasDropdown =
                Boolean(link.dropdown) && dropdownItems[link.label];

              const isActive =
                link.label === "Home" ||
                activeDropdown === link.label;

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
                    className={`group relative flex items-center gap-1.5 py-5 text-[10px] font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-[#28769D]"
                        : "text-[#718087] hover:text-[#111315]"
                    }`}
                  >
                    {link.label}

                    {hasDropdown && (
                      <ChevronIcon
                        open={activeDropdown === link.label}
                      />
                    )}

                    {link.label === "Home" && (
                      <span className="absolute bottom-[7px] left-0 h-[2px] w-full rounded-full bg-[#5C9FC2]" />
                    )}
                  </a>

                  {/* Dropdown */}
                  {hasDropdown &&
                    activeDropdown === link.label && (
                      <div className="absolute left-1/2 top-[55px] w-[210px] -translate-x-1/2 overflow-hidden rounded-[18px] border border-[#D5E6ED] bg-white p-2 shadow-[0_20px_55px_rgba(54,103,126,0.13)]">
                        {dropdownItems[link.label].map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={closeNavigation}
                            className="group flex items-center justify-between rounded-[12px] px-3.5 py-3 text-[10px] font-medium text-[#5F6D73] transition-colors duration-200 hover:bg-[#EDF8FD] hover:text-[#111315]"
                          >
                            <span>{item.label}</span>

                            <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                              <ArrowIcon />
                            </span>
                          </a>
                        ))}
                      </div>
                    )}
                </div>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="relative z-[80] ml-auto flex items-center gap-2">
            <a
              href="/login"
              onClick={closeNavigation}
              className="hidden h-10 items-center rounded-full border border-[#D5E6ED] px-5 text-[10px] font-medium text-[#5F6D73] transition-colors duration-200 hover:border-[#B8D3DF] hover:bg-[#F8FCFE] hover:text-[#111315] sm:flex"
            >
              Sign in
            </a>

            <a
              href="/try-on"
              onClick={closeNavigation}
              className="flex h-10 items-center gap-2 rounded-full px-5 text-[10px] font-semibold transition-transform duration-200 hover:scale-[0.98]"
              style={{
                color: "#ffffff",
                backgroundColor: "#111315",
              }}
            >
              <span
                style={{
                  color: "#ffffff",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                }}
              >
                Get started
              </span>

              <span
                style={{
                  color: "#ffffff",
                  display: "inline-flex",
                }}
              >
                <ArrowIcon />
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => {
              setOpen((value) => !value);
              setActiveDropdown(null);
            }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-[100] ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-[#D5E6ED] bg-[#F8FCFE] text-[#111315] transition-colors duration-200 hover:bg-[#EDF8FD] lg:hidden"
          >
            {open ? (
              <span className="text-[20px] font-light leading-none">
                ×
              </span>
            ) : (
              <span className="flex flex-col gap-[4px]">
                <span className="h-px w-4 bg-current" />
                <span className="h-px w-4 bg-current" />
              </span>
            )}
          </button>

          {/* Mobile scroll progress */}
          <div className="absolute -bottom-[38px] left-1/2 hidden -translate-x-1/2 items-center rounded-full border border-[#D5E6ED] bg-white/90 px-3 py-1.5 shadow-[0_8px_25px_rgba(54,103,126,0.08)] backdrop-blur-xl sm:flex lg:hidden">
            <span className="text-[9px] font-medium tabular-nums text-[#718087]">
              {progress}%
            </span>
          </div>
        </div>
      </header>

      <MenuOverlay
        open={open}
        onClose={() => setOpen(false)}
        dark={false}
      />
    </>
  );
}