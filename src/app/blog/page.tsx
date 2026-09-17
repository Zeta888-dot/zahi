import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default async function BlogPage() {
  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc){ title, slug, excerpt, publishedAt, cover }`
  );

  return (
    <main className="mx-auto max-w-[1280px] px-5 pt-40 pb-32">
      <p className="mb-3 text-[12px] font-medium">↑ Blog</p>
      <h1 className="text-[53px] leading-[0.94] tracking-[-0.03em] md:text-[80px]">
        Notes on
        <br />
        <span className="text-pewter">try-on commerce.</span>
      </h1>

      {posts.length === 0 ? (
        <p className="mt-16 text-[15px] text-pewter">First post coming soon. Add posts in Studio.</p>
      ) : (
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {posts.map((p: any) => (
            <Link key={p.slug.current} href={`/blog/${p.slug.current}`} className="group">
              {p.cover && (
                <div className="overflow-hidden rounded-[27px] bg-canvas-white dark:bg-coal-light">
                  <img
                    src={urlFor(p.cover).width(900).height(560).url()}
                    alt={p.title}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              )}
              <p className="mt-5 text-[12px] text-pewter">
                {new Date(p.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </p>
              <h2 className="mt-2 text-[27px] tracking-[-0.015em] group-hover:text-ember-orange">{p.title}</h2>
              <p className="mt-2 text-[14px] text-pewter">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}