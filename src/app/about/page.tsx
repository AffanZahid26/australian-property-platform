import { HeroBanner } from "@/components/blocks/HeroBanner";
import { MenuSlider, TeamGrid } from "@/components/blocks/Team";
import { Testimonials } from "@/components/blocks/Testimonials";
import { buyTestimonialImage } from "@/data/content";
import { getAboutPage, getPageHero, getStaff } from "@/lib/api";

export const metadata = { title: "Our People" };

export default async function AboutPage() {
  const [hero, about, people] = await Promise.all([
    getPageHero("about"),
    getAboutPage(),
    getStaff(),
  ]);

  return (
    <>
      <HeroBanner
        heading={hero.heading}
        mux={hero.mux}
        image={hero.image}
        largeText
        heightClass="h-[60svh] md:h-[75svh]"
      />
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-3xl mx-auto">
        <h2 className="font-display text-3xl md:text-5xl tracking-tight">Who we are</h2>
        <div className="mt-8 space-y-6 text-muted leading-relaxed text-sm md:text-base whitespace-pre-line">
          {about.whoWeAre}
        </div>
      </section>
      <section className="px-4 md:px-8 pb-20 max-w-[1400px] mx-auto">
        <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-10">Our Experts</h2>
        <TeamGrid people={people} />
      </section>
      <Testimonials
        items={about.testimonials}
        image={about.testimonialImage || buyTestimonialImage}
      />
      <section className="px-4 md:px-8 py-16 md:py-24 bg-primary text-white text-center">
        <p className="font-display text-2xl md:text-4xl tracking-tight max-w-4xl mx-auto leading-snug">
          {about.motto}
        </p>
      </section>
      <section className="px-4 md:px-8 py-16 md:py-20 max-w-[1400px] mx-auto">
        <MenuSlider menus={about.menus} />
      </section>
    </>
  );
}
