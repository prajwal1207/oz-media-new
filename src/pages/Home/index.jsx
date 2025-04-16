import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import img1 from "../../assets/images/two-paperplane.png";
import img2 from "../../assets/images/single-paperplane.png";

import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import TagSection from "./TagSection";
import FaqSection from "./FaqSection";
import TestimonialsSection from "./TestimonialsSection";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const scrollRef = useRef(null);

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   });

  //   return () => {
  //     if (scroll) scroll.destroy();
  //   };
  // }, []);

  return (
    <main ref={scrollRef}>
      <section
        className="bg-teal h-screen pt-20 "
        data-scroll
        data-scroll-speed="1"
      >
        <h1 className="text-black text-4xl p-10">Speed 1</h1>
      </section>
      <section
        className="bg-red-300 h-screen "
        data-scroll
        data-scroll-speed="2"
      ></section>
      <TagSection />
      <div className=" h-screen relative">
        <img src={img1} alt="" />
        <div className="p-20">
          <h2 className="text-6xl text-teal font-bold text-center mb-8">
            Got Questions? We’ve Got Real Answers.
          </h2>
          <FaqSection />
        </div>
        <div className="">
          <img src={img2} alt="" className="absolute bottom-0 -z-10" />
        </div>
      </div>
      <div className="h-screen">
        <TestimonialsSection />
      </div>
    </main>
  );
};

export default HomePage;
