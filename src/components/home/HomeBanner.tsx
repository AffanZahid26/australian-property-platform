"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { HomeSlide } from "@/data/content";
import { MediaBackground } from "@/components/ui/MediaBackground";

/**
 * Full-viewport slides with native CSS scroll-snap.
 * No overflow:hidden / preventDefault — page cannot get stuck.
 */
export function HomeBanner({ slides }: { slides: HomeSlide[] }) {
  const [index, setIndex] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollSnapType;
    html.style.scrollSnapType = "y mandatory";
    html.style.scrollBehavior = "smooth";

    return () => {
      html.style.scrollSnapType = prev;
      html.style.scrollBehavior = "";
      // safety: never leave body locked
      html.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    // Clear any leftover lock from older banner implementation
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting && entry.intersectionRatio >= 0.5) {
            setIndex(i);
          }
        },
        { threshold: [0.5, 0.65] }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [slides.length]);

  const scrollTo = (i: number) => {
    sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative bg-primary text-white">
      {slides.map((s, i) => {
        const href = s.link ? `/${s.link.replace(/^\//, "")}` : undefined;
        return (
          <section
            key={i}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
            className="relative h-[100svh] w-full overflow-hidden snap-start snap-always"
          >
            <div className="absolute inset-0">
              <MediaBackground
                mux={s.mux}
                image={s.imageDesktop || s.imageMobile}
                priority={i === 0}
                active={i === index}
              />
              <div className="absolute inset-0 bg-primary/20 pointer-events-none" />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-end items-center pb-[150px] sm:pb-[75px] px-4 text-center pointer-events-none">
              {s.heading ? (
                href ? (
                  <Link href={href} className="pointer-events-auto">
                    <h1 className="font-display font-medium tracking-[-0.6px] text-4xl md:text-5xl 2xl:text-6xl">
                      {s.heading}
                    </h1>
                  </Link>
                ) : (
                  <h1 className="font-display font-medium tracking-[-0.6px] text-4xl md:text-5xl 2xl:text-6xl">
                    {s.heading}
                  </h1>
                )
              ) : null}
            </div>

            {i === 0 ? (
              <button
                type="button"
                aria-label="Scroll to next"
                className="absolute bottom-[20px] left-1/2 z-20 -translate-x-1/2"
                onClick={() => scrollTo(1)}
              >
                <svg width="12" height="52" viewBox="0 0 12 52" fill="none" aria-hidden>
                  <path d="M6 0V44M6 44L1 39M6 44L11 39" stroke="white" strokeWidth="1.2" />
                </svg>
              </button>
            ) : null}
          </section>
        );
      })}

      <div className="fixed right-4 md:right-8 top-1/2 z-30 -translate-y-1/2 flex flex-col gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`w-[2px] transition-all duration-500 ${
              i === index ? "h-10 bg-white" : "h-5 bg-white/35"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
