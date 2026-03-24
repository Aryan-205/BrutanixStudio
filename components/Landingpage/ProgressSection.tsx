import React from 'react';

const stats = [
  {
    value: "+87%",
    label: "increased attendee engagement",
    company: "at Bitwise",
  },
  {
    value: "$1.7M",
    label: "pipeline generated",
    company: "at Everbridge",
  },
  {
    value: "58%",
    label: "attendee conversion rate",
    company: "at Interfolio",
  },
];

const ProgressSection = () => {
  return (
    <section className="bg-[#F9F9F9] text-black px-6 md:px-12 py-24 md:py-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* --- Left Side: Bold Typography with Inline Pill --- */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-7xl md:text-8xl lg:text-[140px] font-medium leading-[0.9] tracking-tight flex flex-wrap items-center gap-x-4">
            Drive
            <span className="inline-block w-[140px] h-[70px] md:w-[220px] md:h-[110px] bg-[#E9F5A3] rounded-full overflow-hidden relative translate-y-2 md:translate-y-4">
              {/* This is the pill-shaped image inside the text */}
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" 
                alt="Revenue graph"
                className="w-full h-full object-cover p-2 rounded-full"
              />
            </span>
            Revenue
          </h2>
        </div>

        {/* --- Right Side: Stats List --- */}
        <div className="flex flex-col">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`py-8 md:py-12 flex flex-col gap-1 ${
                index !== 0 ? 'border-t border-gray-100' : ''
              }`}
            >
              <span className="text-5xl md:text-7xl font-medium tracking-tight">
                {stat.value}
              </span>
              <p className="text-lg md:text-xl font-medium mt-2 leading-tight">
                {stat.label}
              </p>
              <span className="text-sm md:text-base text-gray-400">
                {stat.company}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProgressSection;