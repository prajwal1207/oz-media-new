import React from "react";
import Card from "../../components/common/Card";
import Button from "../../components/ui/Button";

const VisionMissionSection = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-bg-dark">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-[#fd4360] font-montserrat font-bold text-xl mb-2">
            About Us
          </h2>
          <h3 className="text-white font-montserrat font-bold text-5xl mb-6">
            We love what we do
          </h3>
          <p className="text-white font-roboto leading-7 max-w-2xl">
            Quisque venenatis vestibulum consequat. Vivamus ac urna nulla. Duis
            sit amet consectetur nisi, eget elementum nunc. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Our Vision"
            description="At Oz Media, our vision is to empower brands with innovative digital strategies and seamless IT solutions that drive real business growth. We aim to be the catalyst for your brand's success by blending creativity, technology, and data-driven insights to craft impactful digital experiences."
            className="relative"
            icon="/images/img_lineiconsbundlexubzu9k_1_1.png"
          />

          <Card
            title="Our Mission"
            description="Our mission is to help businesses amplify their online presence, streamline operations, and achieve measurable success through tailored marketing campaigns and advanced IT services. We believe in building meaningful connections between brands and their audience, ensuring consistent growth and long-term value."
            className="relative"
            icon="/images/img_lineiconsbundlexubzu9k_1_4.png"
        
          />
        </div>

        <div className="mt-8 flex justify-start">
          <Button
            type="primiray"
            className="border-2 border-[#fd4360] rounded-lg text-white  font-bold py-4 px-8 flex items-center"
          >
            Read More
            <img
              src="/images/img_plus.svg"
              alt="Plus"
              className="ml-2 w-2 h-2"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
