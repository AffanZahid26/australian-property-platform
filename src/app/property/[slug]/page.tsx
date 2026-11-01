import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PropertyGrid } from "@/components/property/PropertyCard";
import {
  formatPrice,
  getPropertyBySlug,
  getRelatedProperties,
} from "@/lib/api";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  return { title: property?.title ?? "Property" };
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  if (!property) notFound();
  const related = await getRelatedProperties(slug);
  const gallery = (property.images?.filter(Boolean) as string[]) || [];
  if (property.image && !gallery.includes(property.image)) {
    gallery.unshift(property.image);
  }

  return (
    <>
      <section className="pt-20 md:pt-24">
        <div className="relative aspect-[16/10] md:aspect-[21/9] bg-primary overflow-hidden">
          {gallery[0] ? (
            <Image
              src={gallery[0]}
              alt={property.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          ) : null}
        </div>
      </section>

      <section className="px-4 md:px-8 py-12 md:py-16 max-w-[1200px] mx-auto grid md:grid-cols-[1.4fr_0.8fr] gap-12">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted mb-3">
            {property.marketingStatus === "Sold"
              ? "Sold"
              : property.type === "Lease"
                ? "For Lease"
                : "For Sale"}
          </p>
          <h1 className="font-display text-3xl md:text-5xl tracking-tight">
            {property.title}
          </h1>
          <p className="mt-4 text-lg">{formatPrice(property)}</p>
          <p className="mt-2 text-sm text-muted">
            {[
              property.beds ? `${property.beds} Bed` : null,
              property.baths ? `${property.baths} Bath` : null,
              property.cars ? `${property.cars} Car` : null,
              property.suburb,
            ]
              .filter(Boolean)
              .join(" · ")}
          </p>
          {property.headline ? (
            <h2 className="mt-10 font-display text-2xl tracking-tight">
              {property.headline}
            </h2>
          ) : null}
          {property.description ? (
            <p className="mt-4 text-muted leading-relaxed text-sm md:text-base whitespace-pre-line">
              {property.description}
            </p>
          ) : null}

          {gallery.length > 1 ? (
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
              {gallery.slice(1).map((src) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden bg-line">
                  <Image src={src} alt="" fill className="object-cover" sizes="33vw" />
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <aside className="border border-line p-6 h-fit sticky top-28">
          <h3 className="font-display text-2xl tracking-tight">Enquire</h3>
          <p className="text-sm text-muted mt-2 mb-6">
            Your next step is to get in contact with us.
          </p>
          <form
            className="space-y-4"
            action="#"
          >
            <input
              name="name"
              placeholder="First name"
              className="w-full border-b border-line py-2 outline-none"
            />
            <input
              name="email"
              placeholder="Email"
              className="w-full border-b border-line py-2 outline-none"
            />
            <input
              name="phone"
              placeholder="Phone"
              className="w-full border-b border-line py-2 outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="w-full border-b border-line py-2 outline-none"
              defaultValue={`I'm interested in ${property.title}`}
            />
            <button
              type="button"
              className="w-full bg-primary text-white py-3 text-sm tracking-wide hover:bg-primary-deep transition"
            >
              Send
            </button>
          </form>
          <Link href="/contact" className="block text-center text-sm mt-4 text-muted hover:text-primary">
            Or contact the office
          </Link>
        </aside>
      </section>

      <section className="px-4 md:px-8 pb-20 max-w-[1400px] mx-auto">
        <h2 className="font-display text-3xl tracking-tight mb-8">
          More properties
        </h2>
        <PropertyGrid properties={related} />
      </section>
    </>
  );
}
