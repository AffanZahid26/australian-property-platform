"use client";

import Image from "next/image";
import Link from "next/link";
import type { StaffMember } from "@/data/content";

export function TeamGrid({ people }: { people: StaffMember[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {people.map((p) => (
        <Link
          key={p.slug || p.name}
          href={p.slug ? `/about#${p.slug}` : "/about"}
          className="group"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-line">
            {p.image ? (
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width:768px) 100vw, 33vw"
              />
            ) : null}
          </div>
          <div className="pt-4">
            <h3 className="font-display text-2xl tracking-tight">{p.name}</h3>
            <p className="text-sm text-muted mt-1">{p.role}</p>
            {p.phone ? (
              <a href={`tel:${p.phone.replace(/\s/g, "")}`} className="block text-sm mt-2 hover:opacity-70">
                {p.phone}
              </a>
            ) : null}
            {p.email ? (
              <a href={`mailto:${p.email}`} className="block text-sm text-muted hover:text-primary">
                {p.email}
              </a>
            ) : null}
          </div>
        </Link>
      ))}
    </div>
  );
}

export function MenuSlider({
  menus,
}: {
  menus: { menuTitle: string; menuSlug: string; image: string }[];
}) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
      {menus.map((m) => {
        const href = m.menuSlug.startsWith("/") ? m.menuSlug : `/${m.menuSlug}`;
        return (
          <Link
            key={m.menuTitle}
            href={href}
            className="relative min-w-[240px] md:min-w-[300px] aspect-[3/4] snap-start overflow-hidden group"
          >
            <Image
              src={m.image}
              alt={m.menuTitle}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="300px"
            />
            <div className="absolute inset-0 bg-primary/35" />
            <span className="absolute bottom-6 left-5 font-display text-3xl text-white tracking-tight">
              {m.menuTitle}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
