import React from "react";
import bg from "../../assets/elements/header-bg1.png";
import bg2 from "../../assets/elements/header-imgbg-1.png";
import ball from "../../assets/elements/lite-icons1.svg";
import ponga from "../../assets/elements/sound-icons1.svg";
import gola from "../../assets/elements/Ellipse-120.png";
import Button from "../../components/Buttons";
import laptop from "../../assets/aeroland.png";
import bgs from '../../../public/BG_BLACK.jpg'



const Banner = () => {
  return (
    <section
      className="relative flex items-center justify-center h-screen pt-20 overflow-hidden"
      data-scroll
      data-scroll-speed="1"
    >
      {/* Background */}
      <img
        src={bgs}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Animated Icons */}
      <img
        src={ball}
        alt=""
        className="absolute bottom-20 left-20 animate-bounce -z-10"
      />
      <img
        src={ponga}
        alt=""
        className="absolute top-40 left-20 animate-bounce -z-10"
      />
      <img src={gola} alt="" className="absolute top-72 animate-bounce z-10" />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[90vw] px-4 lg:px-0 h-full text-white font-bold gap-8">
        {/* Left Content */}
        <div className="flex-1 space-y-4 text-left md:text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-4xl leading-tight">
            Innovate Inspire Impact
          </h1>
          <p className="text-4xl sm:text-4xl lg:text-6xl">
            Marketing That Moves, <br />
            Technology That Builds, <br /> All Under One Roof.
          </p>
          <div className="flex  sm:flex-row gap-2 mt-2">
            <Button label="Explore" />
            <Button label="Get In Touch" variant="outlined" />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center items-end lg:items-end relative">
          <img
            src={bg2}
            alt="Background Shape"
            className="absolute max-w-[80%] lg:max-w-[90%] xl:max-w-full"
          />
          <img
            src={laptop}
            alt="Laptop"
            className="relative max-w-[80%] lg:max-w-[90%] xl:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
