import React from "react";
import ServiceCards from "./ServiceCards";
import HeroSection from "../../components/common/HeroSection";
import PartnersMarquee from "../../components/Marque";
import BlogSection from "./BlogSection";

const MarketingServicesPage = () => {
  return (
    <div className="my-28">
      <HeroSection
        title="Digital Marketing"
        subtitle=""
        url="/Rotate Anti (1).png"
      />
      <section className="container  mx-auto py-10">
        <PartnersMarquee />
      </section>
      <section className="py-16 bg-[#000000]">
        <div className="container mx-auto px-4">
          <div className="mb-12  ">
            <h2 className="text-[#fd4360] font-bold text-2xl mb-4">
              Digital Marketing
            </h2>
            <h3 className="text-white font-bold text-5xl mb-6 flex items-center flex-wrap gap-2">
              Transforming Digital Marketing with <br />
              Strategy & Creativity
              <img
                src="/images/icon_shapes_37.svg"
                alt=""
                className="mx-6 animate-bounce inline-block"
              />
            </h3>
            <p className="text-white text-xl">
              Digital success isn’t just about being seen—it’s about making an
              impact. OZ Media Planet crafts powerful <br /> marketing
              strategies that drive engagement, growth, and results. From SEO
              and content to social media <br /> and ads, we turn brands into
              industry leaders.{" "}
            </p>
          </div>
          <ServiceCards />
        </div>
      </section>
      <section className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 py-10">
        <div className="w-full md:w-1/2">
          <img
            src="/Group 32951.png"
            alt="Digital Marketing"
            className="w-full h-[650px] object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <h2 className="text-[#fd4360] font-bold text-2xl mb-2">
            Digital Marketing
          </h2>

          <h3 className="text-white font-bold text-4xl md:text-5xl mb-4">
            Transforming Digital Marketing with Strategy & Creativity
          </h3>

          <p className="text-white text-base md:text-xl leading-relaxed">
            Digital success isn’t just about being seen—it’s about making an
            impact. OZ Media Planet crafts powerful marketing strategies that
            drive engagement, growth, and results. From SEO and content to
            social media and ads, we turn brands into industry leaders.
          </p>

          <div className="bg-[#fd4360] p-6 md:p-10 text-white text-lg md:text-2xl font-bold rounded-tr-2xl rounded-bl-2xl shadow-lg">
            Hit us up — and let’s turn your social media into a growth engine.
          </div>
        </div>
      </section>
      <section class="relative w-full h-[600px] overflow-hidden text-white flex items-center justify-center px-6">
        <img
          src="/Dark Image BG.png"
          alt="Background"
          class="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        <div class="relative z-20 max-w-7xl text-center">
          <h1 class="text-5xl font-bold mb-6">
            Partner with a Digital Marketing Agency Focused on Driving Growth.
          </h1>
          <p class="text-lg mb-8">
            Join forces with a professional digital marketing agency that
            understands your unique goals. From strategy to execution, we craft
            innovative solutions that elevate your brand, engage your audience,
            and drive sustainable growth. Let us help you achieve measurable
            success in today's dynamic digital environment.
          </p>
          <button class="border-2 border-[#fd4360] text-[#fd4360] px-6 py-3 rounded-md hover:bg-[#fd4360] hover:text-white transition-all duration-300">
            Consult Our Expert +
          </button>
        </div>
      </section>
      <BlogSection />
    </div>
  );
};

export default MarketingServicesPage;
