export const metadata = { title: "Tenant Resources" };

export default function TenantResourcesPage() {
  return (
    <section className="px-4 md:px-8 py-14 md:py-20 max-w-3xl mx-auto">
      <h1 className="font-display text-4xl md:text-5xl tracking-tight">
        Tenant Resources
      </h1>
      <h2 className="mt-10 text-xl font-medium">
        Emergency Repairs – What Tenants Need to Know
      </h2>
      <p className="mt-4 text-muted text-sm leading-relaxed">
        Under Queensland’s Residential Tenancies and Rooming Accommodation Act 2008,
        repairs fall into emergency and routine categories. If an emergency repair is
        needed, contact the emergency repair person listed on your tenancy agreement.
      </p>
      <ul className="mt-6 space-y-2 text-sm text-muted list-disc pl-5">
        <li>Burst water service or serious leak</li>
        <li>Blocked or broken toilet</li>
        <li>Gas leak or dangerous electrical fault</li>
        <li>Failure of essential hot water, cooking or heating</li>
      </ul>
      <p className="mt-8 text-sm">
        For full details visit the{" "}
        <a
          href="https://www.rta.qld.gov.au/"
          className="text-sky underline"
          target="_blank"
          rel="noreferrer"
        >
          Residential Tenancies Authority (RTA)
        </a>
        .
      </p>
      <a
        href="#"
        className="inline-block mt-10 bg-sky text-white px-6 py-3 text-sm tracking-wide"
      >
        Access Your Tenant Portal HERE
      </a>
    </section>
  );
}
