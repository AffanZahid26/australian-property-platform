import Link from "next/link";
import { ManageLeadSection } from "@/components/blocks/VineLead";
import { PropertyGrid } from "@/components/property/PropertyCard";
import { getProperties } from "@/lib/api";

export const metadata = { title: "Manage" };

export default async function ManagePage() {
  const listings = await getProperties({ type: "Lease", status: "Available" });

  return (
    <>
      <section className="px-4 md:px-8 pt-10 md:pt-16 pb-8 max-w-[960px] mx-auto text-center">
        <h1 className="font-display text-4xl md:text-5xl tracking-tight">
          Property management in Hendra & surrounding suburbs
        </h1>
        <Link
          href="#appraisal"
          className="inline-block mt-6 bg-sky text-white px-6 py-3 text-sm tracking-wide hover:bg-primary-deep transition"
        >
          Request a rental appraisal
        </Link>
        <h2 className="mt-14 font-display text-2xl md:text-3xl tracking-tight">
          Your neighbours leased it through Vine
        </h2>
        <p className="mt-3 text-muted text-sm md:text-base max-w-2xl mx-auto">
          Proactive leasing, clear communication and transparent fees across Hendra,
          Ascot, Clayfield, Hamilton, Nundah & Northgate.
        </p>
      </section>

      <div id="appraisal">
        <ManageLeadSection />
      </div>

      <section className="px-4 md:px-8 py-16 md:py-20 max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="font-display text-3xl tracking-tight">Recent results</h2>
          <p className="text-sm text-muted">{listings.length} Properties</p>
        </div>
        <PropertyGrid properties={listings} />
      </section>
    </>
  );
}
