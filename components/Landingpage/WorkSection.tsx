import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: "HOUSTON EXPONENTIAL",
    description: "A new digital HUB for houston's biggest startup ecosystem.",
    image: "/images/Image1.jpg",
    reverse: false,
  },
  {
    title: "NAMI ML",
    description: "A brand new digital identity and website for the subscription App service that focuses on happy subscribers.",
    image: "/images/Image2.jpg",
    reverse: true,
  },
  {
    title: "THIN REEL",
    description: "How we turned a local studio into one of the biggest video agencies in the south of the UK.",
    image: "/images/Image3.jpg",
    reverse: false,
  },
];

const WorkSection = () => {
  return (
    <section className="bg-[#F9F9F9] text-black px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content - Always first on mobile */}
            <div className={`flex flex-col gap-4 ${project.reverse ? 'md:order-2 md:pl-20' : 'md:pr-20'}`}>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
                {project.title}
              </h3>
              <p className="text-gray-600 max-w-sm leading-relaxed text-sm md:text-base">
                {project.description}
              </p>
            </div>

            {/* Image Content - Uses grayscale filter to match design */}
            <div className={`relative aspect-video w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out ${project.reverse ? 'md:order-1' : ''}`}>
              <div className="bg-gray-200 w-full h-full relative">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;