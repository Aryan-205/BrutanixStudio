import React from "react";

export default function Prototype() {
  return (
    <div className="w-full h-[200vh] bg-black flex items-center justify-center relative">
      {/* half background image */}
      <img
        src="/prototype/Container.png"
        alt="Prototype"
        className="w-full h-screen object-cover sticky top-0 z-10"
      />

      {/* background grid */}
      <div className="w-full h-full flex items-center justify-between z-0">
        <div className="w-1/3 h-full grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div
              key={item}
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src={`/prototype/media${item}.png`}
                alt="Prototype"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="w-1/3 h-full flex items-center justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div
              key={item}
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src={`/prototype/media${item}.png`}
                alt="Prototype"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
