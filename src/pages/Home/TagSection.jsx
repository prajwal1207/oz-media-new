import React from "react";
import Flower3Icon from "../../assets/icons/flower3.svg";
import Flower1Icon from "../../assets/icons/flower.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// import MotionPathPlugin from "gsap/MotionPathPlugin";

const TagSection = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    // Text Animations
    const animateText = (id, yOffset = 100, duration = 1) => {
      tl.from(
        id,
        {
          y: yOffset,
          opacity: 0,
          ease: "power2.out",
          duration,
          scrollTrigger: {
            trigger: "#tagLineSection",
            start: "20% 60%",
            end: "20% 20%",
            scrub: 1,
          },
        },
        "-=0.6"
      );
    };

    animateText("#text1", 200, 1.2);
    animateText("#text2", 200, 1.2);

    // Element Animations (Star and Flower)
    const animateElement = (id, xOffset, rotate = "360deg", duration = 1) => {
      tl.from(
        id,
        {
          x: xOffset,
          opacity: 0,
          ease: "power2.out",
          duration,
          rotate,
          scrollTrigger: {
            trigger: "#tagLineSection",
            start: "20% 60%",
            end: "20% 20%",
            scrub: 1,
          },
        },
        "-=0.6"
      );
    };

    animateElement("#star", 900);
    animateElement("#flower", -900);
  }, []);

  return (
    <section
      id="tagLineSection"
      className="bg-blue-300 h-full w-full overflow-hidden"
      data-scroll
      data-scroll-speed="3"
    >
      <div className="h-full flex justify-center items-center rounded-[50px] text-center flex-col bg-teal relative">
        <img
          id="star"
          src={Flower3Icon}
          className="h-20 md:h-44  absolute  top-[20%] right-[20%]  md:top-30 md:right-40"
        />
        <h1
          id="text1"
          className="text-white  text-4xl md:text-7xl font-bold leading-[1.2]"
        >
          Let's automate the boring. <br />
          And amplify the bold.
        </h1>
        <h1f
          id="text2"
          className="text-green-300 font-bold text-2xl md:text-4xl mt-6"
        >
          That's the Oz Media way.
        </h1f>
        <img
          id="flower"
          src={Flower1Icon}
          className=" h-20 md:h-44 absolute bottom-40 left-72"
        />
      </div>
    </section>
  );
};

export default TagSection;
