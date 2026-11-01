import homeRaw from "./raw/jt-home.json";
import buyRaw from "./raw/jt-buy.json";
import aboutRaw from "./raw/jt-about.json";
import staffRaw from "./raw/staff.json";
import propertiesRaw from "./raw/properties.json";
import buyTestimonialsRaw from "./raw/buy-testimonials.json";

const whoWeAreText = `At JT Allen Real Estate, we don't just set the bar for success in Sydney's Eastern Suburbs - we consistently break records. Renowned for excellence in sales and property management, our dynamic team combines local market expertise with global reach. Thanks to our strategic partnerships with overseas agents, we attract international buyers and provide unparalleled exposure for our clients. This unique advantage allows us to deliver unmatched outcomes, maximising property potential for sellers, investors, and developers alike.

As a family-owned business, we prioritise personalised service, backed by an unwavering commitment to integrity, professionalism, and real results. Our innovative systems, strategic marketing, and seamless processes ensure that we consistently achieve top-tier outcomes for our clients. Whether it's buying, selling, or leasing, JT Allen Real Estate is synonymous with premium prices and exceptional service, both locally and abroad.

In today's competitive real estate market, having trusted professionals with deep local knowledge and global reach is critical. For investors, purchasers, developers, and homeowners, JT Allen Real Estate offers the expertise and confidence to navigate every step of your property journey. Partner with us to unlock your property's full potential.`;

export type HomeSlide = {
  heading: string | null;
  link: string | null;
  largeText: boolean;
  mediaHeight: number;
  imageDesktop: string | null;
  imageMobile: string | null;
  mux: string | null;
};

export type Property = {
  title: string;
  slug: string;
  type: "Sale" | "Lease" | string;
  marketingStatus: "Available" | "Sold" | string;
  displayPrice?: string | null;
  displayRent?: { period?: string; value?: string } | string | null;
  headline?: string | null;
  description?: string | null;
  beds?: string | number | null;
  baths?: string | number | null;
  cars?: string | number | null;
  suburb?: string | null;
  address?: string | null;
  image?: string | null;
  images?: (string | null)[];
};

export type StaffMember = {
  name: string;
  slug: string | null;
  role: string | null;
  email: string | null;
  phone: string | null;
  image: string | null;
  bio: string | null;
};

export type Testimonial = {
  testimonialAuthor: string;
  testimonialContent: string;
};

export const homeSlides = (homeRaw.contentBlocks[0].slides ??
  []) as HomeSlide[];

export const homeSeo = {
  heading: "Sydney's Eastern Suburbs Real Estate Specialists",
  content:
    "Sydney's Eastern Suburbs property market rewards those who know it intimately — and no one knows it better than JT Allen. As a boutique real estate agency based in Double Bay, we specialise in residential sales and property management across Double Bay, Rose Bay, Bellevue Hill, Vaucluse, Darling Point, Point Piper, Woollahra and Bondi. But what truly sets us apart isn't just our record sales results across the Eastern Suburbs — it's the way we achieve them. We're genuine, down-to-earth people who treat your home with the same care we'd give our own. No ego. No puffery. Just real market intelligence, honest advice, and an unwavering commitment to getting you the best possible outcome. Whether you're selling, buying, or investing in Sydney's Eastern Suburbs, JT Allen delivers results made real.",
};

export const pageHeroes = {
  buy: {
    heading: "Dreams made <span>real.</span>",
    mux: "202dZJWGRV01klgfKGuLbSQcQEq02I01XjbkVXF6LBMJAQA",
    image:
      (buyRaw.contentBlocks[0] as { imageDesktop?: string }).imageDesktop ??
      null,
    largeText: true,
  },
  lease: {
    heading: "Property goals made <span>real.</span>",
    mux: null as string | null,
    image:
      "https://cdn.sanity.io/images/j27udsf5/production/01db8b9246b414b94314ddf25829cab1df60de66-5671x3781.jpg",
    largeText: true,
  },
  sold: {
    heading: "Results made <span>real.</span>",
    mux: "JmNb2gF2QhSTWjsrYcV02ffpMzQg02JToXoQP4R3DvOdQ",
    image:
      "https://cdn.sanity.io/images/j27udsf5/production/5bf3d3d5d2e8df7ee6978336e0641ae2607cd14c-1280x720.png",
    largeText: true,
  },
  about: {
    heading: null as string | null,
    mux: (aboutRaw as { heroMux?: string }).heroMux ?? null,
    image: (aboutRaw as { heroImage?: string }).heroImage ?? null,
    largeText: true,
  },
  contact: {
    heading: null as string | null,
    mux: null as string | null,
    image:
      "https://cdn.sanity.io/images/j27udsf5/production/57cb6d0faadc2bdff1e480dfcf9a391d56b21664-1806x2364.jpg",
    largeText: false,
  },
  appraisal: {
    heading: null as string | null,
    mux: null as string | null,
    image:
      "https://cdn.sanity.io/images/j27udsf5/production/65c38880c10b43cd24936b2cd6c8357ef88d5bca-2000x1500.jpg",
    largeText: false,
  },
};

export const properties = propertiesRaw as Property[];

export const staff = staffRaw as StaffMember[];

export const aboutContent = {
  title: aboutRaw.title as string,
  whoWeAre: whoWeAreText,
  menus: (aboutRaw as { menus: { menuTitle: string; menuSlug: string; image: string }[] })
    .menus,
  testimonials: (aboutRaw as { testimonials: { contents: Testimonial[]; image?: string } })
    .testimonials.contents,
  testimonialImage: (aboutRaw as { testimonials: { image?: string } }).testimonials
    .image,
  motto:
    "Achieving record-breaking results - no matter where you are in your property journey. Unlock your property's potential today. Call us on 02 9362 8507.",
};

export const buyTestimonials = buyTestimonialsRaw as Testimonial[];
export const buyTestimonialImage =
  "https://cdn.sanity.io/images/j27udsf5/production/7c1b4bed9d9e18ad6474c9a699e78ba127be7cfa-1631x1080.png";

export const journalPosts = [
  {
    slug: "jt-allen-welcomes-ryan-rubinstein-to-the-fold",
    title: "JT Allen welcomes Ryan Rubinstein to the fold",
    excerpt:
      "JT Allen Real Estate is thrilled to announce the appointment of Ryan Rubinstein as Associate Director.",
    image:
      "https://cdn.sanity.io/images/j27udsf5/production/ea683c4b5a2e3c801220568a36915a020192a378-1000x1500.jpg",
  },
  {
    slug: "first-sale-of-the-decade-jt-allen-director-sells-historic-former-ford-showroom-for-more-than",
    title: "First sale of the decade: historic former Ford showroom",
    excerpt:
      "JT Allen Director sells iconic commercial site in a landmark Eastern Suburbs transaction.",
    image:
      "https://cdn.sanity.io/images/j27udsf5/production/3e7ac725a44de0770dbad2474b621f101c6563a6-2200x3012.jpg",
  },
  {
    slug: "iconic-bondi-site-owned-by-renowned-real-estate-agent-the-late-robert-sirtes-has-been-offered-to",
    title: "Iconic Bondi site offered to market",
    excerpt:
      "A landmark Bondi opportunity with deep local history comes to market through JT Allen.",
    image:
      "https://cdn.sanity.io/images/j27udsf5/production/79a1f37e43b48640ebf8269e81f7f51a2f699b7c-1920x1280.jpg",
  },
];
