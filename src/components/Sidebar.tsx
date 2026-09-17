const items = [
  { label: 'AI Virtual Try-On', href: '#try-on' },
  { label: 'Shopify & WooCommerce', href: '#plugins' },
  { label: 'Embeddable Widget', href: '#widget' },
  { label: 'Developer API', href: '#api' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-32 hidden h-fit w-[240px] shrink-0 border-r border-ash pr-10 dark:border-coal-light md:block">
      <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-steel dark:text-pewter">
        What you can do
      </p>
      <nav className="flex flex-col gap-1">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group flex items-center gap-3 rounded-md py-2 text-[13px] text-ink-black/75 transition-colors duration-200 hover:text-ember-orange dark:text-canvas-white/70"
          >
            <span className="h-[3px] w-[3px] shrink-0 rounded-full bg-ink-black/30 transition-colors duration-200 group-hover:bg-ember-orange dark:bg-canvas-white/30" />
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
