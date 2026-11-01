"use client";

import { useEffect, useState } from "react";
import { Lottie } from "lottie-react";
import loaderAnim from "../../../public/brand/loader.json";

/**
 * Matches JT Allen intro loader from _app:
 * - fixed full-screen bg-[#001629]
 * - centered JT Lottie
 * - at 300ms: scale-[20] translate-x-[150px] over 3.5s
 * - at 3800ms: fade/hide overlay
 * - click dismisses early
 *
 * Initial markup must match SSR + first client paint (no window branch)
 * or Next.js reports a hydration issue on every page.
 */
export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [zooming, setZooming] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";

    const zoomTimer = window.setTimeout(() => setZooming(true), 300);
    const hideTimer = window.setTimeout(() => setVisible(false), 3800);
    return () => {
      window.clearTimeout(zoomTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  const overlayClass = [
    "fixed inset-0 z-[13] h-full w-full bg-[#001629] transition-all duration-[0.5s] transform-gpu",
    !visible ? "invisible pointer-events-none opacity-0" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const innerClass = [
    "flex h-full w-full items-center justify-center transition-all duration-[3.5s] transform-gpu",
    zooming ? "translate-x-[150px] scale-[20]" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={overlayClass}
      onClick={() => setVisible(false)}
      aria-hidden={!visible}
      role="presentation"
    >
      <div
        className={innerClass}
        style={{ transitionTimingFunction: "cubic-bezier(1, 0.04, 1, 0.04)" }}
      >
        <div className="h-[min(42vw,220px)] w-[min(42vw,220px)]">
          <Lottie src={loaderAnim} loop autoplay className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}
