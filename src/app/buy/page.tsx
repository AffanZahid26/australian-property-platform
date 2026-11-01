import { HeroBanner } from "@/components/blocks/HeroBanner";
import { Testimonials } from "@/components/blocks/Testimonials";
import { PropertyGrid } from "@/components/property/PropertyCard";
import { buyTestimonialImage } from "@/data/content";
import { getBuyTestimonials, getPageHero, getProperties } from "@/lib/api";

export const metadata = { title: "Buy Residential" };

export default async function BuyPage() {
  const [hero, listings, testimonials] = await Promise.all([
    getPageHero("buy"),
    getProperties({ type: "Sale", status: "Available" }),
    getBuyTestimonials(),
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
          <h2 className="font-display text-3xl md:text-4xl tracking-tight">For sale</h2>
          <p className="text-sm text-muted">{listings.length} properties</p>
        </div>
        <PropertyGrid properties={listings} />
      </section>
      <Testimonials items={testimonials} image={buyTestimonialImage} />
    </>
  );
}
