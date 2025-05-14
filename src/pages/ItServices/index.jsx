import HeroSection from "../../components/common/HeroSection";
import BlogSection from "../Marketing/BlogSection";
import TechServices from "./TechServies";

const blogPosts = [
  {
    id: 1,
    title: "🤖 AI Agents: From Co-Pilot to Autopilot",
    date: "May 7, 2025",
    comments: "No Comments",
    excerpt:
      "Explore how AI agents are evolving from basic co-pilots to autonomous systems capable of executing complex tasks with minimal human input.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    link: "https://www.ft.com/content/3e862e23-6e2c-4670-a68c-e204379fe01f",
  },
  {
    id: 2,
    title: "🌐 Big Tech's AI-Powered Message: Do More with Less",
    date: "May 12, 2025",
    comments: "No Comments",
    excerpt:
      "Discover how major tech companies are leveraging AI to optimize operations and increase productivity with leaner teams.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    link: "https://www.businessinsider.com/bi-today-big-tech-ai-do-more-with-less-2025-5",
  },
  {
    id: 3,
    title: "🧠 Living Intelligence: The Next Frontier in AI",
    date: "April 30, 2025",
    comments: "No Comments",
    excerpt:
      "Delve into the concept of Living Intelligence, where AI, biotechnology, and advanced sensors converge to create adaptive systems.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    link: "https://en.wikipedia.org/wiki/Living_Intelligence",
  },
];

const ItServicesPage = () => {
  return (
    <div className="">
      <HeroSection title="IT Services" subtitle="" url="/Rotate Anti (1).png" />
     
      <section className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 py-10">
        <div className="w-full md:w-1/2">
          <img
            src="/Group 32952.png"
            alt="Digital Marketing"
            className="w-full h-[650px] object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <h2 className="text-[#fd4360] font-bold text-2xl mb-2">
            IT SERVICES
          </h2>

          <h3 className="text-white font-bold text-4xl md:text-5xl mb-4">
            Smarter IT, Better Business
          </h3>

          <p className="text-white text-base md:text-xl leading-relaxed">
            Don’t just chase vanity metrics — let your brand grow where it truly
            counts. At Your Oz media, we turn clicks into conversions, followers
            into customers, and campaigns into measurable success..
          </p>

          <p className="text-white text-base md:text-xl leading-relaxed">
            Our expertise ensures seamless integration, robust security, and
            scalable systems to meet your evolving needs
          </p>

          <div className="bg-[#fd4360] p-6 md:p-10 text-white text-lg md:text-2xl font-bold rounded-tr-2xl rounded-bl-2xl shadow-lg">
            Empowering Growth with Innovative IT Solutions Transforming
            Challenges
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#000000]">
        <div className="container mx-auto px-4">
          <div className="mb-12  ">
            <h2 className="text-[#fd4360] font-bold text-2xl mb-4">
              Software Development
            </h2>
            <h3 className="text-white font-bold text-5xl mb-6 flex items-center flex-wrap gap-2">
              Empowering Digital Excellence
              <img
                src="/images/icon_shapes_37.svg"
                alt=""
                className="mx-6 animate-bounce inline-block"
              />
            </h3>
            <p className="text-white text-xl">
              At OZ Media Planet, we build more than just software — we create
              tailored digital solutions that empower businesses to innovate and
              grow. Our expert team transforms your ideas into powerful,
              scalable applications designed to streamline operations, enhance
              user experience, and drive business success. From custom web and
              mobile applications to enterprise-grade software and cutting-edge
              technologies, we deliver solutions that are robust, secure, and
              future-ready. With a focus on quality, performance, and
              innovation, we ensure your digital products stand out in a
              competitive market. Partner with us to turn your vision into
              high-performing software that fuels your business transformation.
            </p>
          </div>
          <TechServices />
        </div>
        <BlogSection blogPosts={blogPosts} />
      </section>
    </div>
  );
};

export default ItServicesPage;
