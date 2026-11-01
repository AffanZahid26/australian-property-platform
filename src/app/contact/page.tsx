import { HeroBanner } from "@/components/blocks/HeroBanner";
import { ContactForm } from "@/components/blocks/Forms";
import { site } from "@/data/site";
import { getPageHero, getStaff } from "@/lib/api";
import Image from "next/image";

export const metadata = { title: "Contact" };

export default async function ContactPage() {
  const [hero, people] = await Promise.all([getPageHero("contact"), getStaff()]);

  return (
    <>
      <HeroBanner mux={hero.mux} image={hero.image} heightClass="h-[45svh] md:h-[55svh]" />
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-14">
        <div>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight">
            Thinking of buying, selling or leasing your property?
          </h1>
          <p className="mt-4 text-muted text-sm">
            Contact us today for honest and professional advice.
          </p>
          <div className="mt-10 space-y-2 text-sm">
            <p className="font-medium">Visit us</p>
            {site.address.map((l) => (
              <p key={l} className="text-muted">
                {l}
              </p>
            ))}
            <a href={site.phoneHref} className="block pt-4 hover:opacity-70">
              {site.phone}
            </a>
          </div>
        </div>
        <ContactForm />
      </section>
      <section className="px-4 md:px-8 pb-20 max-w-[1400px] mx-auto">
        <div className="flex gap-4 overflow-x-auto pb-2">
          {people.slice(0, 6).map((p) => (
            <div key={p.slug} className="min-w-[200px]">
              <div className="relative aspect-[4/5] bg-line overflow-hidden">
                {p.image ? (
                  <Image src={p.image} alt={p.name} fill className="object-cover" sizes="200px" />
                ) : null}
              </div>
              <p className="mt-3 font-display text-xl">{p.name}</p>
              <p className="text-xs text-muted">{p.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
