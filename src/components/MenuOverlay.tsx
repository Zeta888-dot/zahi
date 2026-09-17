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
const company = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Contact", href: "/contact" },
];

export default function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={`fixed inset-0 z-40 flex justify-center bg-ink-black/20 px-5 backdrop-blur-sm transition-opacity duration-500 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}>
      <div className={`mt-4 flex h-[calc(100dvh-32px)] w-[280px] flex-col overflow-y-auto rounded-[27px] bg-ash p-6 pt-24 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] dark:bg-coal-light sm:w-[320px] ${open ? "translate-y-0 scale-100" : "-translate-y-6 scale-[0.98]"}`}>
        <p className="mb-2 text-[11px] text-steel dark:text-pewter">Menu</p>
        {menu.map((i) => (
          <a key={i.label} href={i.href} onClick={onClose} className="py-1.5 text-[20px] font-medium tracking-[-0.01em] hover:text-ember-orange">
            {i.label}
          </a>
        ))}
        <div className="my-5 h-px bg-steel/40 dark:bg-canvas-white/15" />
        <p className="mb-2 text-[11px] text-steel dark:text-pewter">Other</p>
        {other.map((i) => (
  <a key={i.label} href={i.href} onClick={onClose} className="py-1 text-[13px] font-medium hover:text-ember-orange">{i.label}</a>
))}
<div className="my-5 h-px bg-steel/40 dark:bg-canvas-white/15" />
<p className="mb-2 text-[11px] text-steel dark:text-pewter">Company</p>
{company.map((i) => (
  <a key={i.label} href={i.href} onClick={onClose} className="py-1 text-[13px] font-medium hover:text-ember-orange">
    {i.label}
  </a>
))}
        <div className="mt-auto pt-6">
          <p className="mb-2 text-[11px] text-steel dark:text-pewter">Social media</p>
          <a href="#" onClick={onClose} className="text-[13px] font-medium">Instagram</a>
          <div className="mt-6 flex items-center gap-2">
            <a href="#start" onClick={onClose} className="flex-1 rounded-full bg-ink-black py-3 text-center text-[14px] font-medium text-canvas-white">
              Get started
            </a>
            <a href="/login" onClick={onClose} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink-black text-[15px] text-canvas-white">→</a>
          </div>
        </div>
      </div>
    </div>
  );
}