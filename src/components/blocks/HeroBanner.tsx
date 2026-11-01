"use client";

import { useEffect, useRef, useState } from "react";
import { MediaBackground } from "@/components/ui/MediaBackground";

type Props = {
  heading?: string | null;
  mux?: string | null;
  image?: string | null;
  largeText?: boolean;
  heightClass?: string;
};

/** Matches JT Allen hero heading scroll shrink (bounding-rect based). */
export function HeroBanner({
  heading,
  mux,
  image,
  largeText = true,
  heightClass = "h-[70svh] md:h-[85svh]",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [compact, setCompact] = useState(false);
  const [shifted, setShifted] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const { top, bottom } = el.getBoundingClientRect();
      const mid = window.innerHeight / 2;
      const fromTop = top - mid;
      const fromBottom = bottom - mid;
      // Port of live: l<-200 && a>200 ? A(!largeText) : ...
      if (fromTop < -200 && fromBottom > 200) {
        setCompact(!!largeText);
        setShifted(true);
      } else if (fromTop >= 200) {
        setCompact(false);
        setShifted(false);
      } else if (fromBottom <= 200) {
        setCompact(false);
        setShifted(false);
      } else {
        setCompact(false);
        setShifted(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [largeText]);

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden bg-primary text-white ${heightClass}`}
    >
      <div
        className="absolute inset-0 will-change-transform transition-transform duration-300 ease-out"
        style={{ transform: shifted ? "translate3d(0, 8%, 0) scale(1.04)" : "none" }}
      >
        <MediaBackground mux={mux} image={image} priority active />
      </div>
      {heading ? (
        <div className="relative z-10 flex h-full items-end justify-center px-4 md:px-8 pb-[75px]">
          <h1
            className={`hero-heading font-display font-medium text-center tracking-[-0.6px] transition-all duration-1000 ease-in-out delay-300 [&_span]:italic [&_span]:font-normal ${
              largeText
                ? compact
                  ? "text-2xl 2xl:text-6xl translate-x-full translate-y-1/2 max-w-[50%]"
                  : "text-5xl 2xl:text-6xl"
                : shifted
                  ? "text-xl md:text-4xl -translate-y-[10px] transition-all duration-300 ease-in-out max-w-[50%]"
                  : "text-xl md:text-4xl"
            }`}
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        </div>
      ) : null}
    </section>
  );
}
