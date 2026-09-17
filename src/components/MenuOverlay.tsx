"use client";

import { useEffect } from "react";

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

export default function MenuOverlay({
  open,
  onClose,
  dark,
}: {
  open: boolean;
  onClose: () => void;
  dark: boolean;
}) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[50] transition-opacity duration-500 ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-black/5 backdrop-blur-[2px] dark:bg-black/20"
      />

      {/* MENU CARD */}
      <div
        className={`absolute left-1/2 top-[14px] flex h-[calc(100dvh-28px)] w-[calc(100%-58px)] max-w-[320px] -translate-x-1/2 flex-col overflow-hidden rounded-[27px] shadow-[0_24px_70px_rgba(0,0,0,0.14)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:top-[16px] sm:h-[520px] sm:w-[274px] ${
          dark
            ? "bg-[#292929] text-white"
            : "bg-[#F1F0EC] text-[#111111]"
        } ${
          open
            ? "translate-y-0 scale-100"
            : "-translate-y-5 scale-[0.97]"
        }`}
      >
        {/*
          Empty top area intentionally left underneath
          the centered navbar pill.
        */}
        <div className="h-[82px] shrink-0" />

        {/* Content */}
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-6 pb-6 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* Menu */}
          <div>
            <p
              className={`mb-3 text-[11px] font-medium ${
                dark ? "text-white/40" : "text-black/40"
              }`}
            >
              Menu
            </p>

            <nav className="flex flex-col">
              {menu.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={`py-[5px] text-[19px] font-medium leading-[1.18] tracking-[-0.035em] transition-colors duration-200 ${
                    dark
                      ? "hover:text-ember-orange"
                      : "hover:text-ember-orange"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Divider */}
          <div
            className={`my-6 h-px w-full shrink-0 ${
              dark ? "bg-white/10" : "bg-black/10"
            }`}
          />

          {/* Other */}
          <div>
            <p
              className={`mb-3 text-[11px] font-medium ${
                dark ? "text-white/40" : "text-black/40"
              }`}
            >
              Other
            </p>

            <nav className="flex flex-col">
              {other.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className={`py-[3px] text-[13px] font-medium leading-[1.3] transition-colors duration-200 ${
                    dark
                      ? "text-white/80 hover:text-ember-orange"
                      : "text-black/75 hover:text-ember-orange"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="mt-7">
            <p
              className={`mb-3 text-[11px] font-medium ${
                dark ? "text-white/40" : "text-black/40"
              }`}
            >
              Social media
            </p>

            <a
              href="#"
              onClick={onClose}
              className={`text-[13px] font-medium transition-colors duration-200 hover:text-ember-orange ${
                dark ? "text-white/80" : "text-black/75"
              }`}
            >
              Instagram
            </a>
          </div>

          {/* Bottom CTA */}
          <div className="mt-auto pt-8">
            <a
              href="#start"
              onClick={onClose}
              className={`flex h-11 w-full items-center justify-center rounded-full text-[13px] font-medium transition-all duration-300 hover:scale-[0.98] ${
                dark
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}