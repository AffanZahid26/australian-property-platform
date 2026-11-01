import Link from "next/link";

export default function Page() {
  return (
    <section className="pt-28 px-4 md:px-8 pb-20 max-w-3xl mx-auto">
      <h1 className="font-display text-4xl tracking-tight">FAQ — Rental properties</h1>
      <p className="mt-6 text-muted text-sm leading-relaxed">
        Stub FAQ page for nav parity. Expand with mocked Q&A blocks as needed.
      </p>
      <Link href="/lease" className="inline-block mt-8 underline text-sm">
        Browse lease listings
      </Link>
    </section>
  );
}
