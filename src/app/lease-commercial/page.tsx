import Link from "next/link";

export default function Page() {
  return (
    <section className="pt-28 px-4 md:px-8 pb-20 max-w-3xl mx-auto">
      <h1 className="font-display text-4xl tracking-tight">Commercial lease</h1>
      <p className="mt-6 text-muted">Stub page — residential lease listings are fully mocked on /lease.</p>
      <Link href="/lease" className="inline-block mt-8 underline text-sm">
        View residential lease
      </Link>
    </section>
  );
}
