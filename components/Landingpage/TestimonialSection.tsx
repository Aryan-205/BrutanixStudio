// import React from 'react';

// const testimonials = [
//   {
//     quote: "Ethan's ability to translate complex business needs into a seamless digital experience is unmatched. Our conversion rate saw an immediate impact.",
//     author: "Sarah Jenkins",
//     role: "CEO at Bitwise",
//     icon: "✳"
//   },
//   {
//     quote: "A true partner in design. The attention to detail in the Webflow build made our brand feel premium and trustworthy from day one.",
//     author: "Marcus Thorne",
//     role: "Marketing Director, Everbridge",
//     icon: "✦"
//   }
// ];

// const TestimonialSection = () => {
//   return (
//     <section className="bg-[#F9F9F9] text-black px-6 md:px-12 py-24 md:py-40 border-t border-gray-100">
//       <div className="max-w-7xl mx-auto">
        
//         {/* --- Section Header --- */}
//         <div className="grid grid-cols-1 md:grid-cols-12 mb-16 md:mb-24">
//           <div className="md:col-start-5 md:col-span-8">
//             <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 block mb-4">
//               Feedback
//             </span>
//             <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
//               What they say<br />about the work
//             </h2>
//           </div>
//         </div>

//         {/* --- Testimonials Grid --- */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-32">
//           {testimonials.map((item, index) => (
//             <div 
//               key={index} 
//               className={`md:col-span-7 flex flex-col gap-6 md:gap-10 ${
//                 index % 2 !== 0 ? 'md:col-start-6' : 'md:col-start-4'
//               }`}
//             >
//               {/* Massive Quote Mark or Icon */}
//               <span className="text-4xl md:text-6xl opacity-20">{item.icon}</span>
              
//               <blockquote className="text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight">
//                 "{item.quote}"
//               </blockquote>

//               <div className="flex flex-col gap-1">
//                 <cite className="not-italic font-black uppercase text-sm md:text-base tracking-widest">
//                   {item.author}
//                 </cite>
//                 <span className="text-xs md:text-sm text-gray-500 uppercase font-bold tracking-tighter">
//                   {item.role}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;

import React from 'react';

const TestimonialSection = () => {
  return (
    <section className="bg-[#F6F6F6] text-[#1A1A1A] py-20 px-8 md:px-16 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Top Layout Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-32">
          
          {/* Label (Left) */}
          <div className="md:col-span-3">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">
              About / Testimonials
            </span>
            {/* Background Scribble Graphic could be an SVG here */}
          </div>

          {/* Testimonial 1 (Center) */}
          <div className="md:col-span-4 border-r border-gray-300 pr-8 md:pr-12">
            <blockquote className="text-3xl md:text-[2.6rem] font-bold leading-[1.05] tracking-tight uppercase mb-8">
              "Ethan translates complexity into elegant, high-converting digital experiences. Our visits are up 40%"
            </blockquote>
            <div className="flex flex-col">
              <cite className="not-italic text-[10px] font-bold tracking-widest uppercase">
                Sarah Jenkins, CEO at Bitwise
              </cite>
            </div>
          </div>

          {/* Testimonial 2 (Right) */}
          <div className="md:col-span-5 pl-0 md:pl-4">
            <blockquote className="text-3xl md:text-[2.6rem] font-bold leading-[1.05] tracking-tight uppercase mb-8 max-w-md">
              "A master of design and Webflow, Ethan built a brand that is beautiful and results-driven. He's one of a kind."
            </blockquote>
            <div className="flex flex-col">
              <cite className="not-italic text-[10px] font-bold tracking-widest uppercase">
                Marcus Thorne, Marketing Director, Everbridge
              </cite>
            </div>
          </div>
        </div>

        {/* --- Logo Marquee / Trusted By --- */}
        <div className="pt-20 border-t border-gray-200">
          <p className="text-center text-[9px] font-bold tracking-[0.2em] uppercase opacity-50 mb-12">
            Trusted by Innovators
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80 grayscale">
            {/* Replace with your actual SVG icons */}
            <div className="h-6 font-black text-xl italic tracking-tighter">FLUX</div>
            <div className="h-6 font-bold text-2xl lowercase tracking-tighter">yahoo!</div>
            <div className="h-6 font-black text-xl italic underline decoration-4">F3</div>
            <div className="h-6 font-medium text-xl tracking-tight">awwwards.</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;