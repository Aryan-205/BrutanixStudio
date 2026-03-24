import React from 'react';

const HeroSection = () => {
  return (
    // changed px-6 to responsive padding
    <div className="min-h-screen bg-[#F9F9F9] text-black font-sans selection:bg-black selection:text-white px-4 md:px-12 py-6 flex flex-col justify-between relative overflow-x-hidden">
      
      {/* --- Navigation --- */}
      <nav className="flex justify-between items-center w-full max-w-7xl mx-auto">
        <div className="flex items-center">
          <div className="font-black italic text-xl md:text-2xl tracking-tighter leading-none border-b-[3px] md:border-b-4 border-black">
            Brutanix Studio
          </div>
        </div>
        
        {/* Hidden on mobile, flex on desktop */}
        <div className="hidden md:flex items-center gap-8 font-medium text-xs lg:text-sm">
          <a href="#" className="hover:opacity-60 transition-opacity">HOME</a>
          <a href="#" className="hover:opacity-60 transition-opacity">WORK</a>
          <a href="#" className="hover:opacity-60 transition-opacity">CONTACT</a>
          <button className="bg-[#1A1A1A] text-white px-6 py-3 rounded-md hover:bg-black transition-colors uppercase tracking-wider text-xs font-bold">
            Schedule a Call
          </button>
        </div>

        {/* Mobile Menu Toggle (Simplified) */}
        <div className="md:hidden font-bold text-xs tracking-widest uppercase">
          Menu
        </div>
      </nav>

      {/* --- Main Headline Section --- */}
      <main className="grow flex flex-col justify-center max-w-7xl mx-auto w-full py-12 md:py-20">
        <div className="relative flex flex-col md:block">
          {/* Responsive Text: 
              - text-6xl for mobile 
              - text-[10vw] for desktop 
          */}
          <h1 className="text-6xl sm:text-7xl md:text-[10vw] leading-[0.85] font-bold uppercase tracking-tighter">
            Stunning<br />
            Brands<br />
            & Digital<br />
            Experiences
          </h1>
          
          {/* Responsive Positioning: 
              - Relative/Static on mobile (stacks below)
              - Absolute on desktop (floats right)
          */}
          <div className="mt-8 md:mt-0 md:absolute md:bottom-20 lg:bottom-32 md:right-2 max-w-xs md:text-right md:left-[60%] lg:left-[55%]">
            <p className="text-lg md:text-xl lg:text-2xl font-bold leading-tight uppercase">
              Freelancer<br />
              Digital Designer<br />
              Webflow Expert
            </p>
          </div>
        </div>
      </main>

      {/* --- Footer / Social Proof --- */}
      <footer className="w-full max-w-7xl mx-auto pb-4 md:pb-8">
        <p className="text-center text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold mb-6 md:mb-8 text-gray-500">
          Work Seen On
        </p>
        <div className="grid grid-cols-2 md:flex md:justify-between items-center gap-6 md:gap-8 opacity-40 grayscale">
            <span className="text-center md:text-left text-lg md:text-xl font-black">FLUX</span>
            <span className="text-center md:text-left text-lg md:text-xl font-bold italic">yahoo!</span>
            <span className="text-center md:text-left text-lg md:text-xl font-black italic underline">F3</span>
            <span className="text-center md:text-left text-lg md:text-xl font-medium tracking-tighter">awwwards.</span>
        </div>
      </footer>

      {/* --- Honors Tab --- */}
      {/* Hidden on small mobile screens to prevent overlap */}
      <div className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white px-1.5 md:px-2 py-4 md:py-6 flex-col items-center gap-3 md:gap-4 cursor-pointer">
         <span className="font-bold text-lg md:text-xl">W.</span>
         <div className="[writing-mode:vertical-lr] rotate-180 text-[8px] md:text-[10px] uppercase font-bold tracking-widest pt-2 md:pt-4 border-t border-gray-700">
            Honors
         </div>
      </div>

    </div>
  );
};

export default HeroSection;