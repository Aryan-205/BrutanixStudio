import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: "SACRÉ ARMAND",
    tags: ["copywriting", "stratégie éditoriale", "brand content"],
    image: "/images/project1.jpg",
    icon: "✳",
  },
  {
    title: "SMOTEO",
    tags: ["stratégie de marque", "copywriting", "design"],
    image: "/images/project2.jpg",
    icon: "■",
  },
  {
    title: "NIIR",
    tags: ["communication", "stratégie de marque", "stratégie éditoriale"],
    image: "/images/project3.jpg",
    icon: "✦",
  },
  {
    title: "YOKITUP",
    tags: ["stratégie éditoriale", "stratégie de marque", "design", "copywriting", "brand content"],
    image: "/images/project4.jpg",
    icon: "✹",
  },
];

const PortfolioGrid = () => {
  return (
    <section className="bg-[#F9F9F9] text-[#1A1A1A] px-6 md:px-12 py-20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="relative">
            <span className="italic text-gray-400 text-lg md:text-xl block mb-2 ml-1">Work</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-none uppercase">
              Creating<br />
              Love Brands
            </h2>
            {/* Background Decorative Circle (Optional) */}
            <div className="absolute -left-10 -top-10 w-32 h-32 border border-gray-100 rounded-full -z-10 hidden md:block" />
          </div>
          
          <button className="px-8 py-3 border border-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
            Nous Contacter
          </button>
        </div>

        {/* --- Project Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image Container with Paper Texture Effect Mockup */}
              <div className="relative aspect-4/3 overflow-hidden bg-gray-100 mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay to simulate the plastic/crumpled texture from your image */}
                <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
              </div>

              {/* Project Info */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{project.icon}</span>
                <h3 className="font-black text-lg tracking-tight uppercase">
                  {project.title}
                </h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="bg-[#2D2D2D] text-white text-[10px] px-3 py-1 uppercase font-bold tracking-tight"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;