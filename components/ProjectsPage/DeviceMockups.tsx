"use client";

import Image from "next/image";

type MockupProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/** MacBook frame: lid + bezel + camera, sitting on a tapered aluminium base. */
export function MacBookMockup({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 56rem, 92vw",
  className = "",
}: MockupProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="relative rounded-t-[14px] bg-[#1d1d1f] p-[1.4%] pb-[2%] shadow-[0_40px_80px_-32px_rgba(7,44,85,0.45)] ring-1 ring-black/10 md:rounded-t-[18px]">
        <span className="absolute left-1/2 top-[0.5%] h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-white/30" />

        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[5px] bg-black md:rounded-[7px]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top"
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10" />
        </div>
      </div>

      {/* Base — slightly wider than the lid, with the notch you grip to open it */}
      <div className="relative left-1/2 h-[10px] w-[106%] -translate-x-1/2 rounded-b-[10px] bg-gradient-to-b from-[#cfd2d7] via-[#b0b4ba] to-[#8d9197] shadow-[0_20px_30px_-18px_rgba(7,44,85,0.55)] md:h-[13px] md:rounded-b-[12px]">
        <span className="absolute left-1/2 top-0 h-[5px] w-[13%] -translate-x-1/2 rounded-b-[6px] bg-[#7f838a]" />
      </div>
    </div>
  );
}

/** Lightweight browser chrome for secondary screens. */
export function BrowserMockup({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 768px) 32rem, 92vw",
  className = "",
}: MockupProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-black/5 bg-white shadow-[0_24px_56px_-28px_rgba(7,44,85,0.3)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-neutral-100 bg-neutral-50 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-neutral-300" />
        <span className="h-2 w-2 rounded-full bg-neutral-300" />
        <span className="h-2 w-2 rounded-full bg-neutral-300" />
      </div>

      <div className="relative aspect-[16/10] w-full bg-neutral-100">
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
