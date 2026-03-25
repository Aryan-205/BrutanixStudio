import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react'; // Optional: npm install lucide-react

const steps = [
  {
    number: "Step 1",
    title: "Create",
    description: "Welcome Studio gives you all the tools you need to create and host virtual experiences that look awesome and put your brand centerstage.",
    image: "/images/hiw1.jpg", // Optimized image
    gradient: "from-purple-400 to-orange-300"
  },
  {
    number: "Step 2",
    title: "Engage",
    description: "Cut through the yawns, grab your audience's attention, and turn passive attendees into active participants.",
    image: "/images/hiw2.jpg",
    gradient: "from-red-400 to-purple-400"
  },
  {
    number: "Step 3",
    title: "Analyze",
    description: "Track the success of your events with deep insights and analytics measured across the entire attendee experience.",
    image: "/images/hiw3.jpg",
    gradient: "from-orange-400 to-rose-400"
  }
];

const HowItWorks = () => {
  return (
    <section className="bg-[#F9F9F9] text-black px-6 md:px-12 py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-start">
          <h2 className="text-6xl md:text-[100px] font-medium leading-[0.9] tracking-tight">
            How it<br />works
          </h2>
          <div className="flex flex-col gap-6 md:pt-4">
            <p className="text-lg md:text-xl text-gray-700 max-w-md leading-relaxed">
              Manage your experience from start to finish, from integrations to registration and from interactive stage elements to post-event data, it's all here.
            </p>
            <button className="bg-[#6366F1] text-white px-8 py-3 rounded-full font-medium w-fit hover:bg-[#4F46E5] transition-colors cursor-pointer">
              Learn more
            </button>
          </div>
        </div>

        {/* --- Steps --- */}
        <div className="flex flex-col border-t border-gray-100">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-16 md:py-20 border-b border-gray-100 items-center group cursor-pointer"
            >
              {/* Text side */}
              <div className="md:col-span-4 flex flex-col gap-2">
                <span className="text-sm font-medium text-gray-500">{step.number}</span>
                <h3 className="text-4xl md:text-5xl font-semibold flex items-center gap-2 transition-colors">
                  {step.title} <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>

              {/* Image side - The "Pill" container */}
              <div className="md:col-span-8 relative">
                <div className={`relative aspect-21/9 md:aspect-3/1 rounded-full overflow-hidden bg-linear-to-r ${step.gradient} p-1`}>
                  <div className="w-full h-full rounded-full overflow-hidden bg-white/10 backdrop-blur-sm relative">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      // sizes="(min-width: 768px) 60vw, 95vw"
                      className="w-full h-full object-cover scale-95 rounded-2xl md:rounded-3xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;