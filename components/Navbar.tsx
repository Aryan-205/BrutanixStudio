"use client";

import React from "react";
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
    `relative py-1 text-sm font-medium transition-colors duration-300 ${
      active 
        ? "text-black font-semibold" 
        : "text-[#555] hover:text-black"
    }`;

  const navLinks = [
    { label: "About us", href: "/about", active: isAbout },
    { label: "Project", href: sectionHref("work"), active: false },
    { label: "Services", href: sectionHref("services"), active: false },
    { label: "Blogs", href: sectionHref("work"), active: false },
  ];

  return (
    <motion.nav
      className="absolute top-4 left-1/2 max-w-3xl w-full z-50 flex items-center justify-between gap-4 rounded-full border border-gray-200 bg-white/75 px-2 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-lg md:px-2"
      initial={animated && !reduce ? { opacity: 0, y: -24, x: "-50%" } : { x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 0.6, ease: easePremium }}
    >
      <Link
        href="/"
        className="flex h-8 w-8 ml-2 shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105"
        aria-label="Home"
      >
        <div className="w-full h-full [&_svg]:w-full [&_svg]:h-full flex items-center justify-center">
          <BrandLogo />
        </div>
      </Link>

      <div className="hidden items-center gap-6 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={linkClass(link.active)}
          >
            {link.label}
            {link.active && (
              <motion.span
                layoutId="nav-underline"
                className="absolute bottom-0 left-0 h-[2px] w-full bg-[#ff6b2c]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>

      <Link
        href={isAbout ? "#contact" : "/about#contact"}
        className="rounded-full bg-linear-to-b from-[#8932ff] to-[#9873ff] px-5 py-2 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(255,107,44,0.2)] transition-all duration-300 hover:bg-[#f35f1f] hover:shadow-[0_6px_20px_rgba(255,107,44,0.35)] hover:scale-[1.03] active:scale-95"
      >
        Book a call
      </Link>
    </motion.nav>
  );
}
