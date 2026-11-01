import { HomeBanner } from "@/components/home/HomeBanner";
import { getHomePage } from "@/lib/api";

export default async function HomePage() {
  const page = await getHomePage();

  return (
    <>
      <HomeBanner slides={page.slides} />
      <section
        className="px-4 md:px-8 py-20 md:py-28 max-w-4xl mx-auto text-center anim-fade-up snap-start min-h-[60svh] flex flex-col justify-center"
      >
        <h2 className="font-display text-3xl md:text-5xl tracking-tight text-primary">
          {page.seo.heading}
        </h2>
        <p className="mt-8 text-muted leading-relaxed text-sm md:text-base">
          {page.seo.content}
        </p>
      </section>
    </>
  );
}
