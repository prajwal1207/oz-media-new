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
        <HeroSection title="About Us" subtitle="" url="/Topology-1 (1).png" />

        <div className=" container mx-auto relative">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-16">
            <div className="md:w-1/3 bomb-8 md:mb-0">
              <img
                src="/8.png"
                alt="Abstract Building"
                className="w-full max-w-8xl"
              />
            </div>

            <div className="md:w-2/3">
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
