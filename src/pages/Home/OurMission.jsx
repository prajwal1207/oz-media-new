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
    <div
      id="missionSection"
      className="flex flex-col lg:flex-row h-full  p-6 sm:p-10 lg:p-20 justify-center "
    >
      {/* Left Content */}
      <div
        id="title"
        className="w-full lg:w-1/2 p-4 sm:p-10 flex flex-col gap-6 justify-center"
      >
        <h2 className="text-[#fd4360] font-bold text-xl mb-4">OUR MISSION</h2>
        <h3 className="text-white font-bold text-5xl">
          Shaping the Future of Digital Innovation and Growth.
        </h3>
        <p className="text-base sm:text-xl lg:text-3xl">
          To redefine the digital world by blending creativity, technology, and
          strategy into seamless brand experiences. We don't just market—we
          create, innovate, and build digital ecosystems that engage, inspire,
          and convert.
        </p>
        <p className="text-base sm:text-xl lg:text-3xl">
          Every project is an opportunity to push boundaries and set new
          industry standards.
        </p>
        <img
          src="/images/img_abstractgeometricseamlesspatterns2zqt82e_2.png"
          alt="Abstract Pattern"
          className="w-[255px] h-[33px]"
        />
      </div>

      {/* Right Content */}
      <div
        id="img"
        className="w-full lg:w-1/2 p-10 lg:p-28 px-6 sm:px-16 lg:px-32"
      >
        <div className="bg-[#FFC502] w-full h-72 sm:h-96 lg:h-full relative rounded-[30px] flex justify-center items-center">
          <img
            src={svg}
            alt="Our Mission"
            className="absolute -top-24 sm:-top-32 lg:-top-56 w-52 sm:w-40 lg:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
