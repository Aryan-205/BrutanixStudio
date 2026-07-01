"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import BrandLogo from "./BrandLogo";
import { easePremium } from "@/components/motion/presets";

type NavbarProps = {
  animated?: boolean;
};

export default function Navbar({ animated = false }: NavbarProps) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";

  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  const linkClass = (active: boolean) =>
    active ? "text-black" : "text-[#444] hover:text-black";

  return (
    <motion.nav
      className="relative z-50 mx-auto flex w-full max-w-4xl items-center justify-between gap-4 rounded-full border border-[#ececec] bg-white/90 px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md md:px-4"
      initial={animated && !reduce ? { opacity: 0, y: -16 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easePremium }}
    >
      <Link
        href="/"
        className="flex h-4 w-4 items-center gap-2"
        aria-label="Home"
      >
        <BrandLogo />
      </Link>

      <div className="hidden items-center gap-6 text-sm font-medium md:flex">
        <Link href={sectionHref("work")} className={linkClass(false)}>
          Cases
        </Link>
        <Link href={sectionHref("hero")} className={linkClass(false)}>
          Service
        </Link>
        <Link href={sectionHref("work")} className={linkClass(false)}>
          Blog
        </Link>
        <Link href="/about" className={linkClass(isAbout)}>
          About us
        </Link>
      </div>

      <Link
        href={isAbout ? "#contact" : sectionHref("about")}
        className="rounded-full bg-[#ff6b2c] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#f35f1f] md:px-5"
      >
        Contact
      </Link>
    </motion.nav>
  );
}
