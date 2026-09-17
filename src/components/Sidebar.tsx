const items = [
  { label: "AI Virtual Try-On", href: "#try-on" },
  { label: "Shopify & WooCommerce", href: "#plugins" },
  { label: "Embeddable Widget", href: "#widget" },
  { label: "Developer API", href: "#api" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-32 hidden h-fit w-[220px] shrink-0 border-r border-ash pr-8 dark:border-coal-light md:block">
      <p className="mb-4 text-[11px] text-steel dark:text-pewter">What you can do</p>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <a key={item.label} href={item.href} className="text-[13px] text-ink-black hover:text-ember-orange dark:text-canvas-white">
            {item.label}
          </a>
        ))}
      </div>
    </aside>
  );
}