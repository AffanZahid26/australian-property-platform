import {
  aboutContent,
  buyTestimonials,
  homeSeo,
  homeSlides,
  journalPosts,
  pageHeroes,
  properties,
  staff,
  type Property,
  type StaffMember,
} from "@/data/content";

/** Fake network latency so the UI feels like a real backend. */
async function delay(ms = 180) {
  await new Promise((r) => setTimeout(r, ms));
}

export async function getHomePage() {
  await delay();
  return {
    slides: homeSlides,
    seo: homeSeo,
    transHeader: true,
  };
}

export async function getPageHero(key: keyof typeof pageHeroes) {
  await delay(80);
  return pageHeroes[key];
}

export async function getProperties(filter?: {
  type?: "Sale" | "Lease";
  status?: "Available" | "Sold";
}) {
  await delay();
  let list = [...properties];
  if (filter?.type) list = list.filter((p) => p.type === filter.type);
  if (filter?.status)
    list = list.filter((p) => p.marketingStatus === filter.status);
  return list;
}

export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  await delay();
  return properties.find((p) => p.slug === slug) ?? null;
}

export async function getRelatedProperties(slug: string, limit = 3) {
  await delay(60);
  return properties.filter((p) => p.slug !== slug).slice(0, limit);
}

export async function getStaff(): Promise<StaffMember[]> {
  await delay();
  return staff.filter((s) => s.image);
}

export async function getStaffBySlug(slug: string) {
  await delay();
  return staff.find((s) => s.slug === slug) ?? null;
}

export async function getAboutPage() {
  await delay();
  return aboutContent;
}

export async function getBuyTestimonials() {
  await delay(60);
  return buyTestimonials;
}

export async function getJournalPosts() {
  await delay();
  return journalPosts;
}

export function formatRent(p: Property) {
  const rent = p.displayRent;
  if (!rent) return p.displayPrice ?? "";
  if (typeof rent === "string") return rent;
  const value = rent.value ?? "";
  if (!value) return p.displayPrice ?? "";
  if (value.toLowerCase().includes("week") || !rent.period) return value;
  return `${value}/${rent.period}`;
}

export function formatPrice(p: Property) {
  if (p.type === "Lease") return formatRent(p);
  return p.displayPrice || "Contact agent";
}
