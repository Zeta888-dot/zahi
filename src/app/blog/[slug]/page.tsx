import Link from "next/link";
import { PortableText } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{ title, publishedAt, cover, body }`,
    { slug }
  );

  if (!post) return <main className="px-5 pt-40">Post not found</main>;

  return (
    <main className="mx-auto max-w-[720px] px-5 pt-40 pb-32">
      <Link href="/blog" className="text-[12px] text-pewter hover:text-ember-orange">← Blog</Link>
      <h1 className="mt-6 text-[43px] leading-[1.05] tracking-[-0.015em] md:text-[53px]">{post.title}</h1>
      <p className="mt-4 text-[13px] text-pewter">
        {new Date(post.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
      </p>
      {post.cover && (
        <img
          src={urlFor(post.cover).width(1200).height(675).url()}
          alt={post.title}
          className="mt-10 aspect-[16/9] w-full rounded-[27px] object-cover"
        />
      )}
      <div className="mt-10 flex flex-col gap-5 text-[17px] leading-[1.7] text-pewter">
        <PortableText value={post.body} />
      </div>
    </main>
  );
}