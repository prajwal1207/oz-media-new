import React from "react";

const logos = [
  { type: "label", name: "TEXTFLOWS" },
  { src: "/logos/databites.svg", alt: "dataBites" },
  { src: "/logos/marketsavy.svg", alt: "MarketSavy" },
  { src: "/logos/epicdev.svg", alt: "EpicDev" },
  { src: "/logos/bestbank.svg", alt: "BestBank" },
];

const PartnersMarquee = () => {
  const scrollingLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="bg-black py-6 overflow-hidden relative">
    {/* Left Blur Overlay */}
    <div className="pointer-events-none absolute top-0 left-0 w-16 h-full z-10 backdrop-blur-sm">
      <div className="w-full h-full bg-gradient-to-r from-black via-black/30 to-transparent"></div>
    </div>
  
    {/* Right Blur Overlay */}
    <div className="pointer-events-none absolute top-0 right-0 w-16 h-full z-10 backdrop-blur-sm">
      <div className="w-full h-full bg-gradient-to-l from-black via-black/30 to-transparent"></div>
    </div>
  
    {/* Marquee Content */}
    <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-4">
      {scrollingLogos.map((logo, index) =>
        logo.type === "label" ? (
          <div
            key={index}
            className="flex flex-col items-center text-white shrink-0"
          >
            <span className="bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded mb-1">
              Logotype
            </span>
            <span className="border-2 border-purple-600 text-white font-bold text-sm px-2 py-1">
              {logo.name}
            </span>
          </div>
        ) : (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-10 shrink-0"
          />
        )
      )}
    </div>
  </div>
  
  );
};

export default PartnersMarquee;
