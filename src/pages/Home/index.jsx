import { useRef } from "react";
import gsap from "gsap";
import img1 from "../../assets/images/two-paperplane.png";
import img2 from "../../assets/images/single-paperplane.png";
import plane from "../../assets/Svg/download.svg";
import cover from "../../../src/assets/Group.png";
import arrow from "../../../src/assets/Group53.png";
import grid from "../../assets/grid.png";

import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import TagSection from "./TagSection";
import FaqSection from "./FaqSection";
import { useGSAP } from "@gsap/react";
import OurMission from "./OurMission";
import OurVision from "./OurVission";
import Banner from "./Banner";
import TestimonialsCarouselSec from "./TestimonialsSec";
import ClientsSection from "./Brands";

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
        // markers: true,
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

  const testimonials = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      quote: "This is an amazing product!",
      name: "John Doe",
      designation: "CEO, Company A",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      quote: "Fantastic service and support.",
      name: "Jane Smith",
      designation: "CTO, Company B",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      quote: "Highly recommended for everyone.",
      name: "Michael Johnson",
      designation: "Manager, Company C",
    },
  ];

  return (
    <main className="overflow-hidden mb-20">
      <Banner />
      <section
        id="planeSec"
        className="bg-red-300 min-h-screen relative flex items-center justify-center overflow-visible"
      >
        {/* Top Plane */}
        <img
          id="planeSvg"
          ref={planeRef}
          src={plane}
          alt="plane"
          className="h-20 sm:h-32 md:h-48 lg:h-64 w-auto rotate-12 absolute -left-20 sm:-left-32 md:-left-60 top-0 z-0"
        />

        {/* Content in Normal Flow */}
        <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20 py-10 flex flex-col gap-6 md:gap-10 font-bold text-left">
          <h1 className="text-[#fd4360] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-montserrat">
            Next-Level Innovation, <br className="hidden sm:block" />
            Next-Level Impact
          </h1>

          <p className="text-white/80 text-base sm:text-lg md:text-2xl lg:text-3xl font-normal font-display leading-relaxed">
            Oz Media Planet is a powerhouse where cutting-edge technology meets
            high-impact digital marketing. We are not just a service provider—we
            are creators, disruptors, and growth accelerators. With expertise in
            digital marketing and IT development, we engineer brands that
            dominate and build technology that scales.
          </p>
        </div>

        {/* Bottom Plane */}
        <img
          ref={planeRef2}
          src={plane}
          alt="plane"
          className="h-16 sm:h-24 md:h-36 lg:h-48 w-auto absolute bottom-0 right-0 rotate-[200deg] z-0"
        />
      </section>

      <section className="min-h-screen ">
        <OurMission />
      </section>
      <section className="min-h-screen ">
        <OurVision />
      </section>

      <section className="h-screen p-4 md:p-20 ">
        <TagSection />
      </section>
      <section className="min-h-screen container mx-auto  px-4 sm:px-6 lg:px-8 py-20 ">
        {/* Header */}
        <div className=" ">
          <h2 className="text-[#fd4360] font-bold text-xl mb-4">Our Values</h2>
          <h3 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-snug sm:leading-tight md:leading-tight">
            Driven by integrity. <br /> Powered by innovation. <br /> Focused on
            impact.
          </h3>

          <img
            src={arrow}
            alt="Arrow icon"
            className="rotate-12 w-10 sm:w-14 md:w-12 lg:w-16"
          />
        </div>

        {/* Image Section */}``
        <div className=" mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <img
            src={cover}
            alt="Cover Image"
            className="mx-w-[700px] h-auto object-cover rounded-md "
          />
        </div>
      </section>

      <section className="relative h-[70vh] bg-cover bg-center bg-no-repeat  py-20 px-4 sm:px-8 lg:px-16 flex items-center justify-center overflow-hidden">
        <img
          src={grid} // Replace with your image path
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="">
          <div className="flex text-center justify-center gap-10">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-[#FA3594] to-[#fd4360] bg-clip-text text-transparent">
              Why Choose Us
            </h1>
          </div>
          <p className="text-2xl max-w-7xl px-auto py-6 text-center text-white">
            At Oz Media Planet, we don't just follow trends—we create them. We
            are a powerhouse of Digital Marketing and Information Technology
            Development, blending strategy, creativity, and innovation to
            transform businesses into industry leaders.
          </p>
        </div>
      </section>
      <section>
        <ClientsSection />
      </section>
      <section className=" h-screen flex justify-center items-center ">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-[#fd4360] font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4">
              Testimonials
            </h2>
            <h3 className="text-white font-bold text-2xl sm:text-3xl md:text-5xl leading-tight text-center sm:text-left">
              DON’T TAKE OUR WORD FOR IT
            </h3>
          </div>
          <TestimonialsCarouselSec />
        </div>
      </section>
      <section className="min-h-screen relative z-0 overflow-hidden my-14">
        <div className="absolute w-full  z-0">
          <img
            src={img1}
            alt=""
            className="w-full  object-cover pointer-events-none"
          />
        </div>

        <div className="p-4 md:p-20 relative z-10">
          {/* Centered Background Pattern Image */}
          <img
            src="/images/img_abstractgeometricseamlesspatterns2zqt82d_1.png"
            alt=""
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                 opacity-15 pointer-events-none -z-10 w-full max-w-3xl object-contain"
          />

          {/* FAQ Section */}
          <FaqSection />
        </div>

        {/* Bottom aligned image */}
        <div className="absolute w-full bottom-0 z-0">
          <img
            src={img2}
            alt=""
            className="w-full  object-cover pointer-events-none"
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
