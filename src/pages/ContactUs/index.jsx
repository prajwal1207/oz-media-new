import HeroSection from "../../components/common/HeroSection";
import ContactSection from "./ContactSection";

const ContactUsPage = () => {
  return (
    <div>
      <HeroSection title="Contact Us" subtitle="" url="/Looper-1.png" />

      <section className="py-16 bg-[#000000]">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-[#fd4360] font-bold text-2xl mb-4">
              Digital Marketing & IT Solutions
            </h2>
            <h3 className="text-white font-bold text-5xl mb-6 flex items-center flex-wrap gap-2">
              Fueling Your Brand's Digital Growth
              <img
                src="/images/icon_shapes_37.svg"
                alt="Shape Icon"
                className="mx-6 animate-bounce inline-block"
              />
            </h3>
            <p className="text-white text-xl">
              At <strong className="text-[#fd4360]">OZ Media</strong>, we
              specialize in driving business success through
              <strong className="text-[#fd4360]">
                {" "}
                impactful digital marketing strategies
              </strong>{" "}
              and{" "}
              <strong className="text-[#fd4360]">tailored IT solutions</strong>.
              From enhancing your{" "}
              <strong className="text-[#fd4360]">online visibility</strong> with
              social media marketing, SEO, and paid advertising to streamlining
              operations with
              <strong className="text-[#fd4360]">end-to-end IT services</strong>
              , we are your trusted partner in digital transformation.
              <br />
              <br />
              Our expert team focuses on delivering measurable results, ensuring
              your brand not only stands out but also achieves{" "}
              <strong className="text-[#fd4360]">sustainable growth</strong> in
              a competitive landscape. Whether you're a startup or an
              established enterprise, OZ Media crafts{" "}
              <strong className="text-[#fd4360]">custom strategies</strong> that
              align with your business goals and resonate with your audience.
              <br />
              <br />
              Let’s collaborate to turn your vision into a thriving digital
              presence that drives real business impact.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto w-full h-[1px] bg-[#fd4360] my-10" />

      <ContactSection />
    </div>
  );
};

export default ContactUsPage;
