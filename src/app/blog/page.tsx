import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default async function BlogPage() {
  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc){ title, slug, excerpt, publishedAt, cover }`
  );

  const featured = posts[0];
  const remaining = posts.slice(1);

  return (
    <main className="min-h-[100svh] bg-paper text-ink-black dark:bg-coal dark:text-canvas-white">
      <div className="mx-auto max-w-[1560px] px-5 py-28 sm:px-7 sm:py-32 lg:px-10 lg:py-40">
        {/* Header */}
        <section className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange">
              Zahi journal
            </p>

            <p className="mt-8 max-w-[250px] text-[12px] leading-[1.7] text-pewter">
              Ideas, experiments, and practical notes on AI-powered fashion
              commerce.
            </p>
          </div>

          <div>
            <h1 className="max-w-[1050px] text-[58px] font-medium leading-[0.88] tracking-[-0.055em] sm:text-[82px] lg:text-[118px]">
              Notes on
              <br />
              <span className="text-pewter">try-on commerce.</span>
            </h1>
          </div>
        </section>

        {/* Featured */}
        {featured ? (
          <section className="mt-24 border-t border-black/10 pt-8 dark:border-white/10 sm:mt-32">
            <div className="mb-8 flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pewter">
                Latest
              </p>

              <span className="text-[10px] uppercase tracking-[0.12em] text-pewter">
                01 / {posts.length.toString().padStart(2, "0")}
              </span>
            </div>

            <Link
              href={`/blog/${featured.slug.current}`}
              className="group grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12"
            >
              {featured.cover ? (
                <div className="overflow-hidden rounded-[28px] bg-ash dark:bg-coal-light">
                  <img
                    src={urlFor(featured.cover)
                      .width(1400)
                      .height(850)
                      .url()}
                    alt={featured.title}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                </div>
              ) : (
                <div className="flex aspect-[16/10] items-end rounded-[28px] bg-ink-black p-8 text-white sm:p-12">
                  <span className="text-[12px] uppercase tracking-[0.12em] text-ember-orange">
                    zahi.
                  </span>
                </div>
              )}

              <div className="flex flex-col justify-end pb-2">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.12em] text-pewter">
                  <span>
                    {new Date(featured.publishedAt).toLocaleDateString(
                      "en-GB",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-ember-orange" />

                  <span>Featured</span>
                </div>

                <h2 className="mt-6 text-[39px] font-medium leading-[0.98] tracking-[-0.04em] transition-colors duration-300 group-hover:text-ember-orange sm:text-[52px]">
                  {featured.title}
                </h2>

                {featured.excerpt && (
                  <p className="mt-5 max-w-[470px] text-[15px] leading-[1.65] text-pewter sm:text-[16px]">
                    {featured.excerpt}
                  </p>
                )}

                <div className="mt-8 text-[10px] font-medium uppercase tracking-[0.12em]">
                  Read article
                </div>
              </div>
            </Link>
          </section>
        ) : (
          <section className="mt-24 border-t border-black/10 pt-8 dark:border-white/10">
            <div className="rounded-[28px] bg-ink-black p-8 text-white sm:p-12 lg:p-16">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange">
                Coming soon
              </p>

              <h2 className="mt-6 max-w-[800px] text-[43px] font-medium leading-[0.95] tracking-[-0.04em] sm:text-[62px]">
                The first note is still being written.
              </h2>

              <p className="mt-6 max-w-[500px] text-[15px] leading-[1.7] text-white/55">
                Add your first post in Sanity Studio and it will appear here
                automatically.
              </p>

              <Link
                href="/"
                className="mt-8 inline-flex rounded-full bg-ember-orange px-6 py-3.5 text-[11px] font-medium text-ink-black transition-transform duration-300 hover:-translate-y-0.5"
              >
                Back to zahi
              </Link>
            </div>
          </section>
        )}

        {/* Article grid */}
        {remaining.length > 0 && (
          <section className="mt-24 border-t border-black/10 pt-8 dark:border-white/10 sm:mt-32">
            <div className="mb-10 flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pewter">
                More from zahi
              </p>

              <span className="text-[10px] uppercase tracking-[0.12em] text-pewter">
                {remaining.length.toString().padStart(2, "0")} articles
              </span>
            </div>

            <div className="grid gap-x-6 gap-y-16 md:grid-cols-2">
              {remaining.map((post: any, index: number) => (
                <Link
                  key={post.slug.current}
                  href={`/blog/${post.slug.current}`}
                  className="group"
                >
                  {post.cover ? (
                    <div className="overflow-hidden rounded-[24px] bg-ash dark:bg-coal-light">
                      <img
                        src={urlFor(post.cover)
                          .width(1000)
                          .height(625)
                          .url()}
                        alt={post.title}
                        className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[16/10] items-end rounded-[24px] bg-ash p-6 dark:bg-coal-light">
                      <span className="text-[10px] uppercase tracking-[0.12em] text-pewter">
                        zahi / {String(index + 2).padStart(2, "0")}
                      </span>
                    </div>
                  )}

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <p className="text-[10px] uppercase tracking-[0.1em] text-pewter">
                      {new Date(post.publishedAt).toLocaleDateString(
                        "en-GB",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </p>

                    <span className="text-[10px] uppercase tracking-[0.1em] text-pewter transition-colors group-hover:text-ember-orange">
                      Read
                    </span>
                  </div>

                  <h2 className="mt-3 text-[28px] font-medium leading-[1.05] tracking-[-0.025em] transition-colors duration-300 group-hover:text-ember-orange sm:text-[34px]">
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p className="mt-3 max-w-[500px] text-[14px] leading-[1.65] text-pewter">
                      {post.excerpt}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="mt-28 border-t border-black/10 pt-10 dark:border-white/10 sm:mt-36">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ember-orange">
                Explore zahi
              </p>

              <h2 className="mt-5 max-w-[720px] text-[42px] font-medium leading-[0.98] tracking-[-0.04em] sm:text-[58px]">
                Turn your catalog into something shoppers can try.
              </h2>
            </div>

            <Link
              href="/#start"
              className="w-fit rounded-full bg-ink-black px-7 py-4 text-[11px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-ink-black"
            >
              Get started
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}