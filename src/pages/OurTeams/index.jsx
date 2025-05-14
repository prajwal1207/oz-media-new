import HeroSection from "../../components/common/HeroSection";
import TeamSection from "../../../public/TeamSection";
import FaqSection from "../Home/FaqSection";

const OurTeamsPage = () => {
  return (
    <div>
      <HeroSection title="Our Team" url="/Looper-4.png" />
      <TeamSection />

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
      <section className="p-4 md:p-20 relative z-10">
        <img
          src="/images/img_abstractgeometricseamlesspatterns2zqt82d_1.png"
          alt=""
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                 opacity-15 pointer-events-none -z-10 w-full max-w-3xl object-contain"
        />

        <FaqSection />
      </section>
    </div>
  );
};

export default OurTeamsPage;
