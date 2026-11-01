import Link from "next/link";

export default function Page() {
  return (
    <section className="pt-28 px-4 md:px-8 pb-20 max-w-3xl mx-auto">
      <h1 className="font-display text-4xl tracking-tight">Careers</h1>
      <p className="mt-6 text-muted">
        Join the JT Allen team. This careers form is mocked locally — submit shows a demo alert.
      </p>
      <Link href="/contact" className="inline-block mt-8 underline text-sm">
        Contact us
      </Link>
    </section>
  );
}
