import React from "react";

const gridItems = [1, 2, 3, 4, 5, 6];

function ImageGrid({ side }: { side: "left" | "right" }) {
  return (
    <div className="hidden md:grid w-2/5 h-full grid-cols-2 gap-4">
      {gridItems.map((item) => (
        <div
          key={`${side}-${item}`}
          className={`${side == "left" ? "-ml-12" : "ml-12"} mt-8 w-full h-full flex items-center justify-center`}
        >
          <img
            src="/prototype/media.png"
            alt="Prototype"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function Prototype() {
  return (
    <section className="relative w-full bg-[#080909]">
      <div className="relative h-[200vh] w-full">
        {/* Scrolls with the section, sits behind the sticky layer */}
        <div className="absolute inset-0 z-0 flex items-center justify-between">
          <ImageGrid side="left" />
          <ImageGrid side="right" />
        </div>

        {/* Sticky pins to the viewport top while the 200vh wrapper scrolls */}
        <div className="sticky top-0 z-10 flex h-screen w-full items-center justify-center overflow-hidden px-4 md:px-0">
          {/* Wrapper matches Container.png's aspect ratio so the video can be
              positioned as a % of the phone image and stay locked to the screen */}
          <div className="relative aspect-[1920/940] w-full md:h-full md:w-auto">
            <img
              src="/prototype/Container.png"
              alt="Prototype"
              className="h-full w-full object-cover"
            />
            {/* Video clipped to the phone's screen area (measured off Container.png) */}
            <video
              src="/handVideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute object-cover"
              style={{
                top: "6.4%",
                left: "41.3%",
                width: "18%",
                height: "80%",
                borderRadius: "11% / 5%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
