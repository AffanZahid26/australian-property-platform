import Image from "next/image";
import Link from "next/link";
import { getJournalPosts } from "@/lib/api";

export const metadata = { title: "Journal" };

export default async function JournalPage() {
  const posts = await getJournalPosts();

  return (
    <section className="pt-28 px-4 md:px-8 pb-20 max-w-[1200px] mx-auto">
      <h1 className="font-display text-4xl md:text-6xl tracking-tight mb-12">
        Journal
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((p) => (
          <Link key={p.slug} href={`/journal/${p.slug}`} className="group">
            <div className="relative aspect-[3/4] overflow-hidden bg-line">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="33vw"
              />
            </div>
            <h2 className="mt-4 font-display text-2xl tracking-tight leading-snug">
              {p.title}
            </h2>
            <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
