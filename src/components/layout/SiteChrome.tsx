"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { footerLinks, headerMenu, legalLinks, site } from "@/data/site";
import { MainLogo, MobileLogo } from "@/components/layout/Logo";

type MenuItem = (typeof headerMenu)[number];

function DesktopNavItem({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false);
  const hasChildren = "children" in item && !!item.children?.length;

  return (
    <li
      className="nav relative flex items-center h-full z-10 font-normal"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link href={item.href} className="hover:font-bold whitespace-nowrap px-1">
        <span>{item.label}</span>
      </Link>
      {hasChildren && open ? (
        <ul className="subnav absolute top-[72px] left-1/2 -translate-x-1/2 bg-[#001629]/95 backdrop-blur-sm px-[30px] py-[20px] flex flex-col gap-[20px] min-w-[200px]">
          {item.children!.map((c) => (
            <li key={c.href}>
              <Link href={c.href} className="hover:font-bold whitespace-nowrap text-sm">
                <span>{c.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const pathname = usePathname();
  const [menuPathname, setMenuPathname] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const menuOpen = menuPathname === pathname;
  const mid = Math.ceil(headerMenu.length / 2);
  const left = headerMenu.slice(0, mid);
  const right = headerMenu.slice(mid);

  useEffect(() => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = !transparent || scrollY > 100;

  let desktopNav =
    "header__nav hover:bg-primary fixed z-10 w-full text-white md:h-[82px] h-[60px] sm:block hidden transition-all duration-300 ease";
  desktopNav += solid ? " bg-primary" : " bg-transparent";
  if (menuOpen) desktopNav += " -translate-y-full";

  let mobileNav =
    "header__nav text-white sm:hidden flex justify-center fixed w-full h-[80px] z-[11] transition-all duration-300 ease";
  if (menuOpen) mobileNav += " pointer-events-none";
  if (scrollY > 100) mobileNav += " bg-primary";

  return (
    <>
      {/* Desktop */}
      <nav className={desktopNav}>
        <div className="logo lg:flex absolute left-1/2 transform -translate-x-1/2 top-[10px] md:top-[30px] z-20">
          <MainLogo />
        </div>
        <div className="nav__wrapper flex w-full justify-between h-full max-w-[1440px] mx-auto">
          <ul className="flex flex-wrap items-center ml-[74px] lg:gap-[60px] md:gap-[40px] gap-[20px] md:pt-0 pt-[30px]">
            {left.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </ul>
          <ul className="flex flex-wrap items-center mr-[74px] lg:gap-[60px] md:gap-[40px] gap-[20px] md:pt-0 pt-[30px]">
            {right.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile top bar */}
      <nav className={mobileNav}>
        <div
          className={`w-full h-20 flex justify-center fixed z-50 pointer-events-auto ${
            menuOpen || !transparent || scrollY > 100 ? "bg-primary" : ""
          }`}
        >
          <MobileLogo />
          <button
            type="button"
            aria-label={menuOpen ? "Close" : "Burger"}
            className="logo top-[30px] right-[20px] absolute"
            onClick={() =>
              setMenuPathname((current) => (current === pathname ? null : pathname))
            }
          >
            <Image
              src={menuOpen ? "/brand/close.svg" : "/brand/burger.svg"}
              alt={menuOpen ? "Close" : "Burger"}
              width={menuOpen ? 17 : 19}
              height={menuOpen ? 16 : 17}
            />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen drawer (slides from right) */}
      <div
        className={`w-full h-full text-white transition-transform duration-500 ease-in-out bg-primary fixed z-[10] top-0 right-0 transform-gpu sm:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="items-center px-8 pt-[140px] space-y-6">
          {headerMenu.map((item, t) => (
            <li
              key={item.label}
              className={`transition-opacity duration-500 ${
                menuOpen ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: menuOpen ? `${0.1 * t + 0.35}s` : undefined }}
            >
              <Link
                href={item.href}
                onClick={() => setMenuPathname(null)}
                className="font-display text-3xl tracking-tight"
              >
                {item.label}
              </Link>
              {"children" in item && item.children ? (
                <ul className="mt-3 space-y-2 text-soft/90 text-sm pl-1">
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} onClick={() => setMenuPathname(null)}>
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </div>

      {/* Spacer when header is solid (non-transparent pages) */}
      {!transparent ? <div className="h-[80px] sm:h-[82px]" /> : null}
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 py-14 md:py-20 grid md:grid-cols-[1.2fr_1fr_1fr] gap-12">
        <div>
          <div className="mb-8 w-[150px] overflow-hidden">
            <MainLogo className="!w-[150px]" />
          </div>
          <p className="text-soft text-sm max-w-sm leading-relaxed">{site.newsletterBlurb}</p>
          <form
            className="mt-6 flex gap-2 max-w-md"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed (demo — no backend).");
            }}
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="flex-1 bg-transparent border-b border-white/30 px-1 py-2 outline-none placeholder:text-soft"
            />
            <button type="submit" aria-label="Subscribe" className="p-2">
              <Image src="/brand/arrow.svg" alt="Arrow" width={22} height={22} className="invert" />
            </button>
          </form>
        </div>
        <div>
          <p className="text-soft text-xs uppercase tracking-[0.2em] mb-4">Visit</p>
          {site.address.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <a href={site.phoneHref} className="block mt-4 hover:opacity-70">
            {site.phone}
          </a>
        </div>
        <div>
          <p className="text-soft text-xs uppercase tracking-[0.2em] mb-4">Explore</p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:opacity-70">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4 mt-8">
            <a href={site.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Image src="/brand/linkedin.svg" alt="LinkedIn" width={20} height={20} className="invert" />
            </a>
            <a href={site.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Image src="/brand/instagram.svg" alt="Instagram" width={20} height={20} className="invert" />
            </a>
            <a href={site.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Image src="/brand/facebook.svg" alt="Facebook" width={20} height={20} className="invert" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 md:px-8 py-5 flex flex-col md:flex-row gap-3 justify-between text-xs text-soft max-w-[1400px] mx-auto">
        <p>
          © Copyright {new Date().getFullYear()}
          <br className="md:hidden" /> JT Allen Real Estate All rights reserved.
        </p>
        <div className="flex gap-4">
          {legalLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="text-center text-[11px] text-soft/70 pb-6">Site by CodeDrips</p>
    </footer>
  );
}
