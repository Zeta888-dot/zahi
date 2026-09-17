"use client";

import { useEffect, useState } from "react";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setDark(localStorage.getItem("zahi-theme") === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("zahi-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.round((window.scrollY / max) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 pt-5">
        <a href="/" className="text-[20px] font-medium tracking-[-0.01em]">
          zahi<span className="text-ember-orange">.</span>
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="absolute left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full bg-ink-black py-2 pl-5 pr-2 text-[14px] text-canvas-white"
        >
          {open ? (
            "✕ Close"
          ) : (
            <span className="flex flex-col gap-1.5">
              <span className="h-px w-4 bg-canvas-white" />
              <span className="h-px w-4 bg-canvas-white" />
            </span>
          )}
          {!open && "Menu"}
          <span
            onClick={(e) => {
              e.stopPropagation();
              setDark(!dark);
            }}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-canvas-white/30 text-[12px]"
          >
            {dark ? "☀" : "☾"}
          </span>
          <span className="rounded-full bg-canvas-white/15 px-2.5 py-1 text-[11px]">
            {progress}%
          </span>
        </button>
        <a
          href="#start"
          className="hidden rounded-full bg-ink-black px-5 py-3 text-[14px] font-medium text-canvas-white sm:block"
        >
          Get started
        </a>
      </header>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}