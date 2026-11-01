"use client";

import { useState } from "react";
import Image from "next/image";
import type { Testimonial } from "@/data/content";

export function Testimonials({
  items,
  image,
}: {
  items: Testimonial[];
  image?: string | null;
}) {
  const [i, setI] = useState(0);
  const item = items[i];
  if (!item) return null;

  return (
    <section className="bg-primary text-white">
      <div className="grid md:grid-cols-2 min-h-[520px]">
        <div className="relative min-h-[280px] md:min-h-full">
          {image ? (
            <Image src={image} alt="" fill className="object-cover" sizes="50vw" />
          ) : (
            <div className="absolute inset-0 bg-primary-deep" />
          )}
        </div>
        <div className="flex flex-col justify-center px-6 md:px-12 py-14">
          <p className="font-display text-2xl md:text-3xl leading-snug tracking-tight">
            {item.testimonialContent}
          </p>
          <p className="mt-8 text-soft text-sm tracking-wide">
            {item.testimonialAuthor}
          </p>
          <div className="mt-10 flex gap-3">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-[2px] transition-all ${
                  idx === i ? "w-10 bg-white" : "w-6 bg-white/35"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
