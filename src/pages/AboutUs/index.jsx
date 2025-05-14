import React from "react";
// import Header from '../../components/common/Header';
// import Footer from '../../components/common/Footer';
import HeroSection from "../../components/common/HeroSection";
import VisionMissionSection from "./VisionMissionSection";
import AchievementsSection from "./AchievementsSection";
import TestimonialsSection from "./TestimonialsSection";
import PartnersSection from "./PartnersSection";
import TeamSection from "./TeamSection";
import ClientsSection from "./ClientsSection";
import ContactSection from "../ContactUs/ContactSection";

const AboutUs = () => {
  return (
    <div className="bg-bg-dark min-h-screen">
      {/* <Header /> */}

      <main>
        <HeroSection title="About Us" subtitle="" url="/Looper-3.png" />

        <div className=" container mx-auto relative">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-16">
            <div className="md:w-1/2 bomb-8 md:mb-0">
              <img
                src="/images/Image (1).png"
                alt="Abstract Building"
                className="w-full max-w-xl"
              />
            </div>

            <div className="md:w-1/2">
              <VisionMissionSection />
            </div>
          </div>
        </div>

        <AchievementsSection />
        <TestimonialsSection />
        <PartnersSection />
        <TeamSection />
        <ClientsSection />
        <ContactSection />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default AboutUs;
