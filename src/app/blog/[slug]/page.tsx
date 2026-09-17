import Link from "next/link";
import { PortableText } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      cover,
      body,
      excerpt
    }`,
    { slug }
  );

  if (!post) {
    return (
      <main className="min-h-[100svh] bg-paper text-ink-black dark:bg-coal dark:text-canvas-white">
        <div className="mx-auto flex min-h-[100svh] max-w-[1560px] flex-col justify-between px-5 py-7 sm:px-7 sm:py-9 lg:px-10">
          <Link
            href="/"
            className="w-fit text-[22px] font-medium tracking-[-0.055em]"
          >
            zahi<span className="text-ember-orange">.</span>
          </Link>

          <section className="py-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange">
              404 / Journal
            </p>

            <h1 className="mt-7 max-w-[850px] text-[58px] font-medium leading-[0.9] tracking-[-0.055em] sm:text-[82px] lg:text-[110px]">
              This article
              <br />
              <span className="text-pewter">does not exist.</span>
            </h1>

            <Link
              href="/blog"
              className="mt-9 inline-flex rounded-full bg-ink-black px-6 py-3.5 text-[11px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-ink-black"
            >
              Back to journal
            </Link>
          </section>

          <div className="border-t border-black/10 pt-5 text-[10px] text-pewter dark:border-white/10">
            AI-powered virtual try-on
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[100svh] bg-paper text-ink-black dark:bg-coal dark:text-canvas-white">
      <article className="mx-auto max-w-[1560px] px-5 py-28 sm:px-7 sm:py-32 lg:px-10 lg:py-40">
        {/* Article header */}
        <header className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <Link
              href="/blog"
              className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange transition-colors hover:text-ink-black dark:hover:text-white"
            >
              Zahi journal
            </Link>

            <div className="mt-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.1em] text-pewter">
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>

              <span className="h-1 w-1 rounded-full bg-ember-orange" />

              <span>Article</span>
            </div>
          </div>

          <div>
            <h1 className="max-w-[1050px] text-[58px] font-medium leading-[0.88] tracking-[-0.055em] sm:text-[82px] lg:text-[112px]">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="mt-8 max-w-[650px] text-[16px] leading-[1.7] text-pewter sm:text-[18px]">
                {post.excerpt}
              </p>
            )}
          </div>
        </header>

        {/* Cover */}
        {post.cover && (
          <div className="mt-20 overflow-hidden rounded-[28px] bg-ash dark:bg-coal-light sm:mt-28">
            <img
              src={urlFor(post.cover).width(1800).height(1050).url()}
              alt={post.title}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <aside className="hidden lg:block">
            <div className="sticky top-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pewter">
                In this article
              </p>

              <div className="mt-5 h-px w-10 bg-ember-orange" />

              <p className="mt-5 max-w-[200px] text-[12px] leading-[1.7] text-pewter">
                Notes from zahi on the future of AI-powered fashion commerce.
              </p>
            </div>
          </aside>

          <div className="max-w-[760px]">
            <div className="prose prose-lg max-w-none text-[17px] leading-[1.8] text-pewter prose-headings:font-medium prose-headings:tracking-[-0.03em] prose-headings:text-ink-black prose-a:text-ember-orange prose-strong:text-ink-black dark:prose-headings:text-white dark:prose-strong:text-white">
              <PortableText value={post.body} />
            </div>
          </div>
        </div>

        {/* Footer navigation */}
        <div className="mt-24 border-t border-black/10 pt-8 dark:border-white/10 sm:mt-32">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/blog"
              className="group flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.1em]"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                Back
              </span>
              <span className="text-ember-orange">/</span>
              Journal
            </Link>

            <Link
              href="/#start"
              className="w-fit rounded-full bg-ink-black px-6 py-3.5 text-[11px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-ink-black"
            >
              Try zahi
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}