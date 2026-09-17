const stores = ["Khaadi", "Sana Safinaz", "Gul Ahmed", "Daraz Mall", "ASOS", "Myntra"];

export default function TrustedBy() {
  return (
    <section className="border-y border-ash py-10 dark:border-coal-light">
      <p className="mb-6 text-center text-[12px] text-steel dark:text-pewter">Trusted by teams at</p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {stores.map((s) => (
          <span key={s} className="text-[17px] tracking-[-0.009em] text-pewter">{s}</span>
        ))}
      </div>
    </section>
  );
}