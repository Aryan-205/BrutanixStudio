"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import BrandLogo from "./BrandLogo";
import { easePremium } from "@/components/motion/presets";
import { Menu, X } from "lucide-react";

type NavbarProps = {
  animated?: boolean;
};

export default function Navbar({ animated = false }: NavbarProps) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);

  const isAbout = pathname === "/about";
  const isContact = pathname === "/contact-us";
  const isProjects = pathname === "/projects";
  const isServices = pathname === "/services";
  const isBlogs = pathname === "/blogs";

  const linkClass = (active: boolean) =>
    `relative py-1 text-sm font-medium tracking-[-0.02em] transition-colors duration-300 ${
      active ? "text-neutral-900 font-semibold" : "text-neutral-500 hover:text-neutral-900"
    }`;

  const navLinks = [
    { label: "About us", href: "/about", active: isAbout },
    { label: "Contact us", href: "/contact-us", active: isContact },
    { label: "Project", href: "/projects", active: isProjects },
    { label: "Services", href: "/services", active: isServices },
    { label: "Blogs", href: "/blogs", active: isBlogs },
  ];

  return (
    <motion.nav
      className={`fixed top-4 left-1/2 max-w-3xl w-[calc(100%-2rem)] z-50 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-black/[0.06] bg-white/90 px-4 py-3 md:px-2 md:py-2 shadow-[0_8px_32px_rgba(82,16,248,0.06)] backdrop-blur-xl transition-all duration-300 ${
        isOpen ? "rounded-3xl" : "rounded-full"
      }`}
      initial={
        animated && !reduce ? { opacity: 0, y: -24, x: "-50%" } : { x: "-50%" }
      }
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 0.6, ease: easePremium }}
    >
      <div className="flex w-full items-center justify-between md:w-auto">
        <Link
          href="/"
          className="flex h-8 w-8 ml-2 shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105"
          aria-label="Home"
        >
          <div className="w-full h-full [&_svg]:w-full [&_svg]:h-full flex items-center justify-center">
            <BrandLogo />
          </div>
        </Link>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/contact-us"
            className="rounded-full bg-brand-purple px-4 py-1.5 text-xs font-semibold text-white shadow-[0_4px_16px_rgba(82,16,248,0.25)] transition-all hover:bg-[#4210d0] hover:scale-[1.03] active:scale-95"
          >
            Book call
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation Links */}
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
                className="absolute bottom-0 left-0 h-[2px] w-full bg-brand-purple"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="flex flex-col gap-4 py-2 px-2 md:hidden w-full border-t border-gray-100 mt-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm py-1 font-medium tracking-[-0.02em] transition-colors ${
                link.active
                  ? "text-brand-purple font-semibold"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Desktop CTA */}
      <Link
        href="/contact-us"
        className="hidden md:block rounded-full bg-brand-purple px-5 py-2 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(82,16,248,0.25)] transition-all duration-300 hover:bg-[#4210d0] hover:shadow-[0_6px_24px_rgba(82,16,248,0.35)] hover:scale-[1.03] active:scale-95"
      >
        Book a call
      </Link>
    </motion.nav>
  );
}
