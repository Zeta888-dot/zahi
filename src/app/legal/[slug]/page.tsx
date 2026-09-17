const docs: Record<string, { title: string; body: string[] }> = {
  privacy: {
    title: "Privacy Policy",
    body: [
      "We collect only what we need to run the service: your email, store URL, and the product images you submit for try-ons.",
      "Submitted images are used solely to generate your try-on assets and are never shared or used to train models.",
      "You can request deletion of your data at any time by emailing privacy@zahi.pk.",
    ],
  },
  terms: {
    title: "Terms of Service",
    body: [
      "zahi generates virtual try-on assets from images you own or have rights to use. You are responsible for the source images.",
      "All generated assets belong to you and may be used across any sales or marketing channel.",
      "We reserve the right to suspend accounts that misuse the service or violate applicable laws.",
    ],
  },
  cookies: {
    title: "Cookie Policy",
    body: [
      "We use a single local preference (theme) stored in your browser. It never leaves your device.",
      "Analytics cookies may be set once we launch publicly, with your consent where required.",
    ],
  },
};

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = docs[slug];
  if (!doc) return <main className="px-5 pt-40">Not found</main>;

  return (
    <main className="mx-auto max-w-[720px] px-5 pt-40 pb-32">
      <p className="mb-3 text-[12px] font-medium">↑ Legal</p>
      <h1 className="text-[43px] leading-[1.05] tracking-[-0.015em] md:text-[53px]">{doc.title}</h1>
      <div className="mt-8 flex flex-col gap-5">
        {doc.body.map((p) => (
          <p key={p} className="text-[16px] leading-[1.6] text-pewter">{p}</p>
        ))}
      </div>
    </main>
  );
}