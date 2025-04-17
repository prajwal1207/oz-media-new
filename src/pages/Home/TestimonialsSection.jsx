import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { SiComma } from "react-icons/si";
import user from "../../assets/images/1.jpg";
import user1 from "../../assets/images/2.jpg";
import user2 from "../../assets/images/3.jpg";

const UserCard = ({ username, avatar, className = "" }) => {
  return (
    <span
      className={`bg-white h-20 max-w-60 rounded-[200px] p-2 px-4 flex items-center gap-2  ${className}`}
    >
      <img
        src={avatar}
        alt={username}
        className="rounded-full border-2 h-16 w-16 object-cover"
      />
      <p className="text-xl font-bold text-blue">@{username}</p>
    </span>
  );
};

const ComicTestimonialBox = ({ description }) => {
  return (
    <div className="relative bg-white text-gray-800 p-10 rounded-xl shadow-lg max-w-full  min-h-[300px] md:min-h-[500px]">
      {/* Opening quote */}
      <div className="flex">
        <SiComma className="text-gray-300 mb-4  rotate-180 text-[2rem]  md:text-[5rem]" />
        <SiComma className="text-gray-300 mb-4  rotate-180 text-[2rem] md:text-[5rem] " />
      </div>

      {/* Testimonial text */}
      <p className="text-3xl lg:text-4xl text-gray-800 font-bold leading-relaxed">
        {description}
      </p>

      {/* Closing quote */}
      <div className="flex justify-end">
        <SiComma className="text-gray-300  translate-y-4 text-[2rem]  md:text-[5rem] " />
        <SiComma className="text-gray-300  translate-y-4 text-[2rem]  md:text-[5rem]" />
      </div>

      {/* Comic-style tail */}
      <div className="absolute -bottom-4 left-10 w-10 h-10 bg-white rotate-45 shadow-lg"></div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const testimonials = [
    {
      user: user,
      name: "harry",
      text: "This service changed my life!",
    },
    {
      user: user1,
      name: "emma",
      text: "Absolutely fantastic experience!",
    },
    {
      user: user2,
      name: "liam",
      text: "Highly recommended to everyone!",
    },
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center ">
      <div className="w-full flex flex-col-reverse lg:flex-row ">
        <div className="w-full lg:w-2/3 flex flex-col text-center p-2 lg:p-10 gap-10 z-10">
          <ComicTestimonialBox description={testimonials[index].text} />

          <UserCard
            username={testimonials[index].name}
            avatar={testimonials[index].user}
          />
        </div>

        <div className="w-full lg:w-1/3 flex justify-center flex-col font-bold z-10">
          <h2 className="text-left text-5xl lg:text-8xl text-blue">
            DON’T TAKE
          </h2>
          <h2 className="text-4xl lg:text-6xl">OUR WORD FOR IT​</h2>
          <p className="text-3xl lg:text-4xl text-white">
            Read what our customers have to say:
          </p>
          <span className="w-full p-6 flex justify-end">
            <button
              onClick={nextTestimonial}
              className="h-20 w-20 rounded-full hover:bg-white bg-blue flex text-white hover:text-blue justify-center items-center"
            >
              <FaArrowRight size="30px" />
            </button>
          </span>
        </div>
      </div>
      <div></div>
    </section>
  );
};
export default TestimonialsSection;
