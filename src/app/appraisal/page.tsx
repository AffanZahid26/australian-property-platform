import { HeroBanner } from "@/components/blocks/HeroBanner";
import { AppraisalForm } from "@/components/blocks/Forms";
import { getPageHero, getStaff } from "@/lib/api";
import Image from "next/image";

export const metadata = { title: "Request an Appraisal" };

export default async function AppraisalPage() {
  const [hero, people] = await Promise.all([
    getPageHero("appraisal"),
    getStaff(),
  ]);

  return (
    <>
      <HeroBanner
        mux={hero.mux}
        image={hero.image}
        heightClass="h-[45svh] md:h-[55svh]"
      />
      <section className="px-4 md:px-8 py-16 max-w-3xl mx-auto text-center">
        <h1 className="font-display text-3xl md:text-5xl tracking-tight">
          Unlock your property’s <em>true value</em> with a Professional Appraisal
        </h1>
        <p className="mt-6 text-muted text-sm md:text-base">
          Ready to discover your home’s <em>value?</em>
        </p>
      </section>
      <section className="px-4 md:px-8 pb-20 max-w-xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-2">
          Want to know the <em>real</em> value of your property?
        </h2>
        <p className="text-sm text-muted mb-8">
          Discover what your property is worth with a complimentary appraisal from JT
          Allen Real Estate.
        </p>
        <AppraisalForm />
      </section>
      <section className="px-4 md:px-8 pb-20 max-w-[1400px] mx-auto">
        <div className="flex gap-4 overflow-x-auto">
          {people.slice(0, 5).map((p) => (
            <div key={p.slug} className="min-w-[180px]">
              <div className="relative aspect-[4/5] bg-line overflow-hidden">
                {p.image ? (
                  <Image src={p.image} alt={p.name} fill className="object-cover" sizes="180px" />
                ) : null}
              </div>
              <p className="mt-3 font-display text-lg">{p.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
