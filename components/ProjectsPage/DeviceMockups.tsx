"use client";

import Image from "next/image";

type BrowserMockupProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/** Lightweight browser chrome for project screens. */
export function BrowserMockup({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 768px) 32rem, 92vw",
  className = "",
}: BrowserMockupProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_24px_56px_-28px_rgba(7,44,85,0.3)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-neutral-200 bg-neutral-50 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-red-300" />
        <span className="h-2 w-2 rounded-full bg-yellow-300" />
        <span className="h-2 w-2 rounded-full bg-green-300" />
      </div>

      <div className="relative aspect-16/10 w-full bg-neutral-100">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
