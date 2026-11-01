import Link from "next/link";
import { SellLeadSection } from "@/components/blocks/VineLead";

export const metadata = { title: "Sell" };

export default function SellPage() {
  return (
    <>
      <section className="px-4 md:px-8 pt-10 md:pt-16 pb-8 max-w-[960px] mx-auto text-center">
        <h1 className="font-display text-4xl md:text-5xl tracking-tight">
          Sell your home in Hendra, Ascot & Clayfield
        </h1>
        <Link
          href="#appraisal"
          className="inline-block mt-6 bg-sky text-white px-6 py-3 text-sm tracking-wide hover:bg-primary-deep transition"
        >
          Request Your Free Appraisal
        </Link>
        <h2 className="mt-14 font-display text-2xl md:text-3xl tracking-tight">
          Your neighbours sold it through Vine
        </h2>
        <p className="mt-3 text-muted text-sm md:text-base max-w-2xl mx-auto">
          Independent advice, proven results, and premium marketing for Brisbane’s
          inner north.
        </p>
      </section>

      <div id="appraisal">
        <SellLeadSection />
      </div>

      <section className="px-4 md:px-8 py-16 md:py-20 max-w-[1100px] mx-auto">
        <p className="text-center text-muted text-sm md:text-base mb-12 max-w-3xl mx-auto">
          Strategic sales, premium presentation & local expertise across Hendra,
          Ascot, Clayfield, Hamilton, Nundah, Northgate & surrounds.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Local and independent.",
              body: "We focus on Hendra and Brisbane’s inner north — not everywhere. No franchise targets, no pressure. Just honest advice about your property.",
            },
            {
              title: "Proven results.",
              body: "275 five-star reviews. Consistent results in the streets and suburbs we know best. Your neighbours chose Vine for a reason.",
            },
            {
              title: "Personal, start to settlement.",
              body: "You deal directly with your agent — not a support team. We handle pricing, presentation, marketing, negotiations, and paperwork.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-2xl tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
