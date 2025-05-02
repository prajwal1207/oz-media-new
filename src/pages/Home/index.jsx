import { useRef } from "react";
import gsap from "gsap";
import img1 from "../../assets/images/two-paperplane.png";
import img2 from "../../assets/images/single-paperplane.png";
import plane from "../../assets/Svg/download.svg";
import styles from "./style.module.css";
import cover from "../../../src/assets/Group.png";
import arrow from "../../../src/assets/Group53.png";
import grid from "../../assets/grid.png";
import svg from "../../assets/image.png";

import left from "../../assets/elements/cta-bg1.png";
import right from "../../assets/elements/cta-bg2.png";

import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import TagSection from "./TagSection";
import FaqSection from "./FaqSection";
import TestimonialsSection from "./TestimonialsSection";
import { useGSAP } from "@gsap/react";
import OurMission from "./OurMission";
import OurVision from "./OurVission";
import Banner from "./Banner";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const planeRef = useRef(null);
  const planeRef2 = useRef(null);

  useGSAP(() => {
    const screenWidth = window.innerWidth;

    const path = [
      { x: 0, y: 0 },
      { x: 200, y: 200 },
      { x: screenWidth / 3, y: -200 },
      { x: (2 * screenWidth) / 3, y: 200 },
      { x: screenWidth, y: 0 },
    ];
    const path2 = [
      { x: screenWidth, y: 0 },
      { x: screenWidth / 3, y: -200 },
      { x: 200, y: 200 },
      { x: 0, y: 0 },
      { x: -200, y: -200 },
      { x: -screenWidth / 3, y: 100 },
      { x: -(2 * screenWidth) / 3, y: -200 },
      { x: -screenWidth, y: -10 },
    ];

    gsap.to(planeRef2.current, {
      motionPath: {
        path: path2,
        curviness: 1.5,
        autoRotate: true,
      },
      ease: "none",
      scrollTrigger: {
        trigger: "#planeSec",
        start: "center bottom",
        end: "top top",
        scrub: true,
        markers: true,
      },
    });

    gsap.to(planeRef.current, {
      motionPath: {
        path,
        curviness: 1.5,
        autoRotate: true,
      },
      ease: "none",
      scrollTrigger: {
        trigger: "#planeSec",
        start: "center bottom",
        end: "top top",
        scrub: true,
      },
    });
  }, []);

  return (
    <main className="overflow-hidden">
      <Banner />

      <section
        id="planeSec"
        className="bg-red-300 min-h-screen relative flex items-center justify-center overflow-visible"
      >
        <img
          id="planeSvg"
          ref={planeRef}
          src={plane}
          alt="plane"
          className="h-32 md:h-64 w-auto rotate-12 -left-40 md:-left-60 absolute top-0"
        />

        <div className="absolute z-10 container px-4 sm:px-6 md:px-20 py-10 text-left flex flex-col gap-6 md:gap-10 font-bold">
          <h1 className="text-purple text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight">
            Next-Level Innovation, <br className="hidden sm:block" />
            Next-Level Impact
          </h1>

          <p className="text-base sm:text-lg md:text-2xl lg:text-4xl font-normal">
            Oz Media Planet is a powerhouse where cutting-edge technology meets
            high-impact digital marketing. We are not just a service provider—we
            are creators, disruptors, and growth accelerators. With expertise in
            digital marketing and IT development, we engineer brands tFhat
            dominate and build technology that scales. From crafting powerful
            marketing campaigns to developing next-gen software solutions, our
            goal is simple—to transform businesses into industry leaders.
          </p>
        </div>

        <img
          ref={planeRef2}
          src={plane}
          alt="plane"
          className="h-24 sm:h-32 md:h-48 w-auto bottom-0 right-0 absolute rotate-[200deg]"
        />
      </section>
      <section className="h-screen">
        <OurMission />
      </section>
      <section className="h-screen">
        <OurVision />
      </section>

      <section className="h-screen p-4 md:p-20">
        <TagSection />
      </section>
      <section className="max-h-screen flex flex-col justify-center items-center font-bold px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center text-center sm:text-left p-4">
          <img
            src={arrow}
            alt="Arrow icon"
            className="rotate-12 w-10 sm:w-14 md:w-16 lg:w-20"
          />
          <h1 className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl py-14">
            OUR VALUES
          </h1>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <img
            src={cover}
            alt="Cover Image"
            className="w-full h-auto object-cover rounded-md "
          />
        </div>
      </section>

      <section className="relative h-screen  bg-cover bg-center bg-no-repeat  py-20 px-4 sm:px-8 lg:px-16 ">
        <img
          src={grid} // Replace with your image path
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="  ">
          <div className="flex  text-center justify-center gap-10">
            <h1 className="text-8xl font-bold bg-gradient-to-r from-[#FA3594] to-[#941F58] bg-clip-text text-transparent ">
              Why Choose Us
            </h1>
            <img src={svg} alt="" />
          </div>
          <p className=" text-3xl px-60 py-10">
            At Oz Media Planet, we don't just follow trends—we create them. We
            are a powerhouse of Digital Marketing and Information Technology
            Development, blending strategy, creativity, and innovation to
            transform businesses into industry leaders.
          </p>
        </div>
      </section>

      <section
        className={`min-h-screen  my-20  p-4 lg:p-20 bg-yellow ${styles.container} `}
      >
        <div className="  w-full h-full rounded-[100px] ">
          <h2 className=" text-3xl lg:text-6xl text-white font-bold text-center mb-8">
            They Came. We Coded. They Cheered.
          </h2>
          <TestimonialsSection />
        </div>
      </section>
    
      <section className=" min-h-screen relative ">
        <img src={img1} alt="" />
        <div className="p-4 md:p-20">
          <h2 className="text-4xl md:text-6xl text-teal font-bold text-center mb-8">
            Got Questions? We’ve Got Real Answers.
          </h2>
          <FaqSection />
        </div>

        <div className="absolute w-full bottom-0 -z-10">
          <img src={img2} alt="" className="" />
        </div>
      </section>
      {/* <section className="h-[30vh] mt-20 bg-[#4E2FDA] relative flex justify-center items-center flex-col ">
        <img src={left} alt="" className="absolute top-0 right-0" />
        <img src={right} alt="" className="absolute bottom-0 left-0" />

        <h1 className="text-4xl  max-w-4xl font-bold text-white/80  text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        </h1>
        <p className="text-2xl max-w-4xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          odit ducimus optio ipsum similique nisi, officia modi totam illo
          necessitatibus aliquid omnis et, iure vitae facilis dolorem nostrum
          doloremque ea?
        </p>
      </section> */}
    </main>
  );
};

export default HomePage;
