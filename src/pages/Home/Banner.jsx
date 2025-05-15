import React from "react";
import bg2 from "../../assets/elements/header-imgbg-1.png";
import laptop from "../../assets/aeroland.png";
import Button from "../../components/Buttons";

const Banner = () => {
  return (
    <section
      className="relative flex items-center justify-center h-screen pt-20 overflow-hidden"
      data-scroll
      data-scroll-speed="1"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-20"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/WhatsApp Video 2025-05-15 at 13.16.26_e46bad95.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[90vw] px-4 lg:px-0 h-full text-white gap-8 ">
        <div className="flex-1 flex flex-col justify-center space-y-6 text-left md:text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl leading-tight font-[800] ">
            Innovate <span className="text-[#fd4360]"> Inspire</span> <br />{" "}
            Impact
          </h1>
          <p  className="font-display text-4xl" >
            Marketing That Moves, Technology <br /> That Builds, All Under One Roof.
          </p>
          <p  className="font-display text-xl " >
            We are OZ Media — a hybrid digital force blending high-impact <br />
            marketing with high-performance development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
