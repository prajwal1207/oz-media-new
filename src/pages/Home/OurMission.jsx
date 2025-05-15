import React from "react";
import svg from "../../assets/Group 12.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const OurMission = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#title", {
      y: 200,
      opacity: 0,
      ease: "power2.out",
      duration: 1.5,
      scrollTrigger: {
        trigger: "#missionSection",
        start: "20% 60%",
        end: "20% 20%",
        scrub: 1,
      },
    });

    tl.from("#img", {
      y: 200,
      opacity: 0,
      ease: "power2.out",
      duration: 1.5,
      scrollTrigger: {
        trigger: "#missionSection",
        start: "20% 60%",
        end: "20% 20%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      id="missionSection"
      className="flex flex-col lg:flex-row items-center justify-center gap-10 px-4 sm:px-10 lg:px-20 py-10"
    >
      {/* Left Content */}
      <div
        id="title"
        className="w-full lg:w-1/2 flex flex-col gap-6 justify-center text-center lg:text-left"
      >
        <h2 className="text-[#fd4360] font-bold text-lg sm:text-xl">
          OUR MISSION
        </h2>
        <h3 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Shaping the Future of Digital Innovation and Growth.
        </h3>
        <p className="text-base sm:text-lg lg:text-xl text-white/80">
          To redefine the digital world by blending creativity, technology, and
          strategy into seamless brand experiences. We don't just market—we
          create, innovate, and build digital ecosystems that engage, inspire,
          and convert.
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-white/80">
          Every project is an opportunity to push boundaries and set new
          industry standards.
        </p>
        <img
          src="/images/img_abstractgeometricseamlesspatterns2zqt82e_2.png"
          alt="Abstract Pattern"
          className="mx-auto lg:mx-0 w-40 sm:w-52"
        />
      </div>

      {/* Right Image Content */}
      <div
        id="img"
        className="w-full lg:w-1/2 flex justify-center items-center p-10"
      >
        <img
          src="/Group 44228.png"
          alt="Our Mission"
          className="h-full"
        />
      </div>
    </section>
  );
};

export default OurMission;
