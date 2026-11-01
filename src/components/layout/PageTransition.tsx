"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Soft route transition — does not block scroll / pointer. */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }, [pathname]);

  return (
    <div key={pathname} className="page-enter flex-1 flex flex-col min-h-screen">
      {children}
    </div>
  );
}
