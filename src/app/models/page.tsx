import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default async function ModelsPage() {
  const models = await client.fetch(
    `*[_type == "model"] | order(_createdAt asc){ name, category, look, photo }`
  );

  return (
    <main className="mx-auto max-w-[1280px] px-5 pt-40 pb-32">
      <p className="mb-3 text-[12px] font-medium">↑ Models</p>
      <h1 className="text-[53px] leading-[0.94] tracking-[-0.03em] md:text-[80px]">
        Every body,
        <br />
        <span className="text-pewter">every look.</span>
      </h1>
      <p className="mt-6 max-w-[560px] text-[17px] text-pewter">
        The base library grows every week. Need your own fits? Custom models
        train on your catalog in under a day.
      </p>

      <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
        {models.map((m: any) => (
          <div key={m.name} className="group">
            <div className="overflow-hidden rounded-[20px] bg-canvas-white dark:bg-coal-light">
              <img
                src={urlFor(m.photo).width(600).height(800).url()}
                alt={m.name}
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <p className="mt-3 text-[14px] font-medium">{m.name}</p>
            <p className="text-[12px] text-pewter">{m.category} · {m.look}</p>
          </div>
        ))}
        {models.length === 0 &&
          [0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i}>
              <div className="aspect-[3/4] animate-pulse rounded-[20px] bg-canvas-white dark:bg-coal-light" />
              <p className="mt-3 text-[14px] font-medium text-pewter">Model {i + 1}</p>
              <p className="text-[12px] text-pewter">Add in Studio</p>
            </div>
          ))}
      </div>

      <div className="mt-24 flex flex-wrap items-center justify-between gap-6 rounded-[27px] bg-ink-black p-10 text-canvas-white">
        <p className="text-[27px] tracking-[-0.015em]">Train a custom model on your fits.</p>
        <Link href="/#start" className="rounded-full bg-ember-orange px-6 py-3 text-[14px] font-medium text-ink-black">
          Request access
        </Link>
      </div>
    </main>
  );
}