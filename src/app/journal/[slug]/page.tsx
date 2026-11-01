import { journalPosts } from "@/data/content";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export default async function JournalArticle({ params }: Props) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="pt-28 px-4 md:px-8 pb-20 max-w-3xl mx-auto">
      <Link href="/journal" className="text-sm text-muted hover:text-primary">
        ← Journal
      </Link>
      <h1 className="mt-6 font-display text-4xl md:text-5xl tracking-tight">
        {post.title}
      </h1>
      <p className="mt-4 text-muted">{post.excerpt}</p>
      <div className="relative aspect-[16/10] mt-10 overflow-hidden bg-line">
        <Image src={post.image} alt="" fill className="object-cover" sizes="800px" />
      </div>
      <p className="mt-10 text-muted leading-relaxed">
        This is a local frontend replica article body. Content is mocked to look like it
        arrives from the CMS — no live backend is connected.
      </p>
    </article>
  );
}
