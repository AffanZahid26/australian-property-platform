import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/data/content";
import { formatPrice } from "@/lib/api";

export function PropertyCard({ property }: { property: Property }) {
  const img = property.image || property.images?.[0];
  return (
    <Link
      href={`/property/${property.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-line">
        {img ? (
          <Image
            src={img}
            alt={property.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        ) : null}
        <div className="absolute left-3 top-3 bg-white/95 text-primary text-[11px] uppercase tracking-wider px-2 py-1">
          {property.marketingStatus === "Sold"
            ? "Sold"
            : property.type === "Lease"
              ? "For Lease"
              : "For Sale"}
        </div>
      </div>
      <div className="pt-4 space-y-1">
        <p className="font-display text-xl tracking-tight leading-snug">
          {property.title}
        </p>
        <p className="text-sm text-muted">{formatPrice(property)}</p>
        <p className="text-xs text-muted tracking-wide">
          {[
            property.beds ? `${property.beds} Bed` : null,
            property.baths ? `${property.baths} Bath` : null,
            property.cars ? `${property.cars} Car` : null,
          ]
            .filter(Boolean)
            .join(" · ")}
        </p>
      </div>
    </Link>
  );
}

export function PropertyGrid({ properties }: { properties: Property[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((p) => (
        <PropertyCard key={p.slug} property={p} />
      ))}
    </div>
  );
}
