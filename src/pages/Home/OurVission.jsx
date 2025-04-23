import React from "react";
import svg from "../../assets/Work.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const OurVision = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#vissionSection",
        start: "20% 60%",
        end: "20% 20%",
        scrub: 1,
      },
    });

    tl.from("#title2", {
      y: 200,
      opacity: 0,
      ease: "power2.out",
      duration: 1.5,
    }).from(
      "#img2",
      {
        y: 200,
        opacity: 0,
        ease: "power2.out",
        duration: 1.5,
      },
      "+=1"
    ); // This acts like a delay between the two animations
  }, []);

  return (
    <div
      id="vissionSection"
      className="flex flex-col-reverse lg:flex-row h-full  p-6 sm:p-10 lg:p-20 justify-center  "
    >
      {/* Right Content */}
      <div
        id="img2"
        className="w-full lg:w-1/2 p-10 lg:p-28 px-6 sm:px-16 lg:px-32"
      >
        <div className="bg-[#B269E3] w-full h-72 sm:h-96 lg:h-full relative rounded-[30px] flex justify-center items-center">
          <img
            src={svg}
            alt="Our Mission"
            className="absolute -top-24 sm:-top-32 lg:-top-56 w-52 sm:w-40 lg:w-auto"
          />
        </div>
      </div>
      {/* Left Content */}
      <div
        id="title2"
        className="w-full lg:w-1/2 p-4 sm:p-10 flex flex-col gap-6 justify-center"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
          OUR VISION
        </h1>
        <p className="text-base sm:text-xl lg:text-3xl">
          To be the ultimate digital powerhouse, where marketing and technology
          converge to shape the future of brands. We envision a world where
          businesses don't just adapt to digital trends but lead them with
          innovation, precision, and impact.
        </p>
        <p className="text-base sm:text-xl lg:text-3xl">
          Through Al-driven strategies, immersive digital experiences, and
          seamless IT solutions, we strive to transform into market leaders,
          ensuring they thrive in an ever-evolving digital landscape.
        </p>
      </div>
    </div>
  );
};

export default OurVision;
