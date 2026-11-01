import { HeroBanner } from "@/components/blocks/HeroBanner";
import { PropertyGrid } from "@/components/property/PropertyCard";
import { getPageHero, getProperties } from "@/lib/api";
import Link from "next/link";

export const metadata = { title: "Houses for sale Hendra" };

export default async function RentPage() {
  const [hero, listings] = await Promise.all([
    getPageHero("lease"),
    getProperties({ type: "Lease", status: "Available" }),
  ]);

  return (
    <>
      <HeroBanner
        heading="For lease"
        mux={hero.mux}
        image={hero.image}
        largeText
        heightClass="h-[48svh] md:h-[58svh]"
      />
      <section className="px-4 md:px-8 py-16 md:py-20 max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight">For lease</h2>
          <p className="text-sm text-muted">{listings.length} Property</p>
        </div>
        <PropertyGrid properties={listings} />
      </section>
      <section className="px-4 md:px-8 py-16 bg-mint/50 text-center">
        <h2 className="font-display text-3xl md:text-4xl tracking-tight">
          Looking for a Property Manager?
        </h2>
        <p className="mt-3 text-muted text-sm max-w-xl mx-auto">
          Expert property managers servicing Hendra, Ascot, Clayfield, Hamilton, Nundah,
          Northgate and surrounds.
        </p>
        <Link
          href="/manage"
          className="inline-block mt-8 border border-black px-8 py-3 text-sm tracking-wide hover:bg-sky hover:border-sky hover:text-white transition"
        >
          Find out more
        </Link>
      </section>
    </>
  );
}
