import React, { useState } from "react";
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
      "Yes. You can work with us for just digital marketing, just development, or go all in with a full-stack solution. We’re flexible and custom-built to fit your needs.",
  },
  {
    question: "How do we start working together?",
    answer:
      "Easy. Just fill out our contact form, drop us a message, or schedule a quick discovery call. We’ll understand your goals, suggest a solution, and take it from there.",
  },
  {
    question: "What makes you different from other agencies?",
    answer:
      "Most agencies specialize in one thing. We bring creative strategy and smart technology together — so your brand looks amazing and runs flawlessly.",
  },
  {
    question: "What tech stack and marketing tools do you specialize in?",
    answer:
      "We build on React, Vue, Laravel, Node.js, and cloud platforms like AWS & Azure. On the marketing side, we rock Google Ads, Meta Ads, HubSpot, SEO tools, and data analytics suites. If it moves pixels or processes data, we know it.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className=" text-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto space-y-6">
        <p className="text-[#fd4360] text-2xl font-bold text-center">FAQ</p>
        <h2 className="text-3xl md:text-6xl font-bold text-center mb-10">
          Got Questions? We’ve Got{" "}
          <span className="text-[#fd4360]"> Real Answers.</span>
        </h2>

        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border  font-Montserrat  border-[#fd4360]  overflow-hidden transition duration-300"
            >
              <button
                className="w-full flex gap-6 items-center p-6 bg-gray-500/25 hover:bg-[#1a1a1a] transition"
                onClick={() => toggleFAQ(index)}
              >
                   <div
                  className={`transition-transform duration-300 transform ${
                    isOpen ? "rotate-180 text-[#fd4360]" : "rotate-0 text-white"
                  }`}
                >
                  <AnimatedToggleIcon isOpen={isOpen} size="text-3xl" />
                </div>
                <span className="text-left text-lg md:text-xl font-semibold text-[#fd4360]">
                  {faq.question}
                </span>
             
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden bg-white/5 text-lg md:text-xl text-]]] px-6 ${
                  isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
