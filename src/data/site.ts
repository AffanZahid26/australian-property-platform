export const site = {
  name: "JT Allen",
  phone: "02 9362 8507",
  phoneHref: "tel:0293628507",
  address: ["418 New South Head Rd,", "Double Bay, 2028"],
  email: "reception@jtallen.com.au",
  socials: {
    linkedin: "https://au.linkedin.com/company/jt-allen-real-estate",
    instagram: "https://www.instagram.com/jtallenrealestate",
    facebook: "https://www.facebook.com/JTAllenRealEstate/",
  },
  newsletterBlurb:
    "Get the latest property listings, sales insights and expert tips delivered straight to your inbox.",
} as const;

/** Live Sanity headerMenu (split left/right around logo) */
export const headerMenu = [
  {
    label: "Sell",
    href: "/sold",
    children: [
      { label: "Recent Sales", href: "/sold" },
      { label: "Request an Appraisal", href: "/appraisal" },
    ],
  },
  {
    label: "Buy",
    href: "/buy",
    children: [
      { label: "Residential", href: "/buy" },
      { label: "Open for inspections", href: "/open-for-inspections" },
      { label: "Property finance partner", href: "/property-finance-partner" },
    ],
  },
  {
    label: "Rent",
    href: "/lease",
    children: [
      { label: "Residential", href: "/lease" },
      { label: "Commercial", href: "/lease-commercial" },
      { label: "Open for inspections", href: "/rent-open-for-inspections" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our people", href: "/about" },
      { label: "Careers", href: "/careers" },
    ],
  },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Buy", href: "/buy" },
  { label: "Inspections", href: "/open-for-inspections" },
  { label: "Journal", href: "/journal" },
  { label: "Lease", href: "/lease" },
  { label: "Sold", href: "/sold" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/frequently-asked-questions-rental-properties" },
] as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and conditions", href: "/terms-and-conditions" },
] as const;
