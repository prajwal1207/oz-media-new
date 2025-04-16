import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import AnimatedToggleIcon from "../../components/AmimatedToggleIcon";

const faqs = [
  {
    question: "What does OZ Media actually do?",
    answer:
      "We’re a hybrid digital agency that blends strategic marketing with custom IT development. From brand campaigns to mobile apps, we help businesses grow creatively and scale technically — all under one roof.",
  },
  {
    question:
      "Can I hire you for just one service — like marketing or development?",
    answer:
      " Yes. You can work with us for just digital marketing, just development, or go all in with a full-stack solution. We’re flexible and custom-built to fit your needs.",
  },
  {
    question: "How do we start working together?",
    answer:
      "Easy. Just fill out our contact form, drop us a message, or schedule a quick discovery call. We’ll understand your goals, suggest a solution, and take it from there.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mx-auto px-4 py-10">
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-gray-300 rounded-xl overflow-hidden shadow-sm transition duration-300  "
            >
              <button
                className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition "
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-left text-3xl md:text-4xl text-gray-800 font-medium ">
                  {faq.question}
                </span>

                {/* Icon with rotation animation */}
                <div
                  className={`transition-transform duration-300 ease-in-out transform${
                    isOpen
                      ? "rotate-180 text-red-500"
                      : "rotate-0 text-gray-500"
                  } text-3xl`}
                >
                  <AnimatedToggleIcon isOpen={isOpen} size="text-3xl" />
                </div>
              </button>

              <div
                className={`transition-max-height duration-300 ease-in-out px-5 text-gray-700 text-3xl overflow-hidden bg-white/70 ${
                  isOpen ? "max-h-40 py-4" : "max-h-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqSection;
