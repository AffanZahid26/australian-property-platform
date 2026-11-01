import { HeroBanner } from "@/components/blocks/HeroBanner";
import { Testimonials } from "@/components/blocks/Testimonials";
import { PropertyGrid } from "@/components/property/PropertyCard";
import { buyTestimonials, buyTestimonialImage } from "@/data/content";
import { getPageHero, getProperties } from "@/lib/api";
import Link from "next/link";

export const metadata = { title: "Property Lease" };

export default async function LeasePage() {
  const [hero, listings] = await Promise.all([
    getPageHero("lease"),
    getProperties({ type: "Lease", status: "Available" }),
  ]);

  return (
    <>
      <HeroBanner
        heading={hero.heading}
        mux={hero.mux}
        image={hero.image}
        largeText={hero.largeText}
      />
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight">For lease</h2>
          <p className="text-sm text-muted">{listings.length} properties</p>
        </div>
        <PropertyGrid properties={listings} />
      </section>
      <section className="px-4 md:px-8 py-20 bg-line/40 text-center">
        <h2 className="font-display text-3xl md:text-5xl tracking-tight">
          Looking for a Property Manager?
        </h2>
        <p className="mt-4 text-muted max-w-xl mx-auto text-sm">
          Expert property managers servicing Sydney’s Eastern Suburbs.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-8 border border-primary px-8 py-3 text-sm tracking-wide hover:bg-primary hover:text-white transition"
        >
          Find out more
        </Link>
      </section>
      <Testimonials items={buyTestimonials} image={buyTestimonialImage} />
    </>
  );
}
