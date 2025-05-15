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
    );
  }, []);

  return (
    <section
      id="vissionSection"
      className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-4 sm:px-10 lg:px-20 py-10"
    >
      {/* Right Image Section */}
      <div
        id="img2"
        className="w-full lg:w-1/2 flex justify-center items-center p-10"
      >
        {/* <div className="bg-[#B269E3] w-full max-w-md sm:max-w-lg lg:max-w-full aspect-[4/3] rounded-3xl flex justify-center items-center relative"> */}
        <img src="/Group 44227.png" alt="Our Mission" className="h-full" />
        {/* </div> */}
      </div>

      {/* Left Text Content */}
      <div
        id="title2"
        className="w-full lg:w-1/2 flex flex-col gap-6 justify-center text-center lg:text-left"
      >
        <h2 className="text-[#fd4360] font-bold text-lg sm:text-xl">
          OUR VISION
        </h2>
        <h3 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Empowering Brands to Lead the Future of Digital Innovation
        </h3>

        <p className="text-base sm:text-lg lg:text-xl text-white/80  font-display">
          To be the ultimate digital powerhouse, where marketing and technology
          converge to shape the future of brands. We envision a world where
          businesses don't just adapt to digital trends but lead them with
          innovation, precision, and impact.
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-white/80">
          Through AI-driven strategies, immersive digital experiences, and
          seamless IT solutions, we strive to transform businesses into market
          leaders, ensuring they thrive in an ever-evolving digital landscape.
        </p>
        <img
          src="/images/img_abstractgeometricseamlesspatterns2zqt82e_2.png"
          alt="Abstract Pattern"
          className="mx-auto lg:mx-0 w-40 sm:w-52"
        />
      </div>
    </section>
  );
};

export default OurVision;
