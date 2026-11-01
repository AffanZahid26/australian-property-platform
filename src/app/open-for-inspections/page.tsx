import Link from "next/link";

function Stub({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section className="pt-28 px-4 md:px-8 pb-20 max-w-3xl mx-auto">
      <h1 className="font-display text-4xl md:text-5xl tracking-tight">{title}</h1>
      <p className="mt-6 text-muted">{body}</p>
      <Link href="/" className="inline-block mt-10 text-sm underline">
        Back home
      </Link>
    </section>
  );
}

export default function OpenForInspectionsPage() {
  return (
    <Stub
      title="Open for inspections"
      body="Inspection list UI stub — listings would load from the CRM/API in production. Mock data is wired on Buy / Lease / Sold."
    />
  );
}
