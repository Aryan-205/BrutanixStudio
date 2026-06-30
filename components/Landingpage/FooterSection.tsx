import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="w-full">
      <div className="relative h-[clamp(280px,42vw,540px)] overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/footer-bg.png"
            alt=""
            fill
            sizes="100vw"
            className="scale-[1.15] object-cover blur-[10px] saturate-125"
          />
          <div className="absolute inset-0 bg-[#6d28d9]/50" />
          <div className="absolute inset-0 bg-linear-to-b from-[#7c3aed]/30 via-[#6d28d9]/45 to-[#4c1d95]/65" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-between px-4 pt-6 sm:pt-8 md:pt-10">
          <h2
            className="w-full select-none text-center text-[clamp(3.5rem,13.5vw,11.5rem)] font-bold uppercase leading-[0.82] tracking-[-0.035em] text-white"
            aria-label="InvisiEdge"
          >
            INVISIEDGE
          </h2>

          <p className="pb-7 text-sm font-normal lowercase tracking-wide text-white sm:pb-9 sm:text-[15px]">
            www.invisiedge.com
          </p>
        </div>
      </div>

      <div className="h-3 bg-[#111111] sm:h-4" aria-hidden />
    </footer>
  );
}
