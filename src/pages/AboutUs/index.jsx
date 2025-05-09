import React from 'react';
// import Header from '../../components/common/Header';
// import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import VisionMissionSection from './VisionMissionSection';
import AchievementsSection from './AchievementsSection';
import TestimonialsSection from './TestimonialsSection';
import PartnersSection from './PartnersSection';
import TeamSection from './TeamSection';
import ClientsSection from './ClientsSection';
import ContactSection from './ContactSection';

const AboutUs = () => {
  return (
    <div className="bg-bg-dark min-h-screen">
      {/* <Header /> */}
      
      <main>
        <HeroSection 
          title="About Us" subtitle="About Us – Home" 
        />
        
        <div className="relative">
          <div className="absolute left-1/4 top-20 z-0">
            <img src="/images/img_abstractgeometricseamlesspatterns2zqt82d.png" alt="Geometric Pattern" className="w-40 h-40" />
          </div>  
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-16">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/images/img_image.png" alt="Abstract Building" className="w-full max-w-xl" />
            </div>
            
            <div className="md:w-1/2">
              <VisionMissionSection />
            </div>
          </div>
          
          <div className="absolute right-16 bottom-20 z-0">
            <img src="/images/img_abstractgeometricseamlesspatterns2zqt82c.png" alt="Geometric Pattern" className="w-32 h-32" />
          </div>
          
          <div className="absolute left-16 bottom-40 z-0">
            <img src="/images/img_abstractgeometricseamlesspatterns2zqt82e.png" alt="Geometric Pattern" className="w-44 h-44" />
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