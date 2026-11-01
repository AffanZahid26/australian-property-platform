import { HeroBanner } from "@/components/blocks/HeroBanner";
import { Testimonials } from "@/components/blocks/Testimonials";
import { PropertyGrid } from "@/components/property/PropertyCard";
import { aboutContent, buyTestimonialImage } from "@/data/content";
import { getPageHero, getProperties } from "@/lib/api";

export const metadata = { title: "Property Sold" };

export default async function SoldPage() {
  const [hero, listings] = await Promise.all([
    getPageHero("sold"),
    getProperties({ status: "Sold" }),
  ]);

  return (
    <>
      <HeroBanner
        heading={hero.heading}
        mux={hero.mux}
        image={hero.image}
        largeText={hero.largeText}
      />
      <Testimonials
        items={aboutContent.testimonials}
        image={aboutContent.testimonialImage || buyTestimonialImage}
      />
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-[1400px] mx-auto">
        <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-10">
          Recent sales
        </h2>
        <PropertyGrid properties={listings} />
      </section>
    </>
  );
}
