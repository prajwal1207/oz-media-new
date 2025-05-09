import React from "react";

const HeroSection = ({ title, subtitle, url }) => {
  return (
    <div className="relative h-[200px] md:h-[600px] overflow-hidden bg-[#36363633] ">
      {/* Background image */}
      <img
        src={url}
        alt="Background"
        className="absolute inset-0 w-full  h-full object-contain z-0   animate-spin-slow "
      />

      {/* Overlay and content */}
      <div className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center px-4 md:px-16">
        <div className="text-center">
          <h1 className="font-montserrat leading-tight font-bold text-5xl mb-4 bg-gradient-to-b from-[#FFFFFF] to-[#2b2a2a] bg-clip-text text-transparent">
            {title}
          </h1>

          <p className="text-white font-roboto text-base">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
