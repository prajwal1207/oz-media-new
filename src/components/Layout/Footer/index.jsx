import React from "react";
import { socialIcons } from "../../../assets";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts = [
  { text: "Your idea", color: "text-red-500" },
  { text: "Your business", color: "text-green-500" },
  { text: "Your vision", color: "text-blue-500" },
];

const Footer = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[index].text;

    if (typingIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 100); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      // Wait before switching to next word
      const wait = setTimeout(() => {
        setTypingIndex(0);
        setDisplayText("");
        setIndex((prev) => (prev + 1) % texts.length);
      }, 1500); // Pause before next word
      return () => clearTimeout(wait);
    }
  }, [typingIndex, index]);

  return (
    <>
      <section className="h-[20vh] container mx-auto relative flex justify-between items-center  ">
        <div className="">
          <h1 className="text-5xl font-bold text-white ">Let’s talk about</h1>
          <motion.p
            className={`text-4xl font-bold ${texts[index].color}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </motion.p>
        </div>
        <button class="border-2 rounded-[40px] border-[#fd4360] text-white px-20 py-4 text-lg hover:bg-[#fd4360] hover:text-white transition-all duration-300">
          Sign Up
        </button>
      </section>

      <div className="container mx-auto w-full h-[1px] bg-[#fd4360] my-10" />

      <footer className=" text-white container mx-auto relative ">
        <img
          src="/images/img_abstractgeometricseamlesspatterns2zqt82c_2.png"
          alt=""
          className="absolute h-96 left-80 pointer-events-none -z-10"
        />
        <div className="mx-auto bg-transparent">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 ">
            {/* About Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-[#fd4360]">
                About OZ Media Planet
              </h3>
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
                sodales in volutpat ullamcorper amet adipiscing fermentum.
              </p>
              {/* Social Icons */}
              <div className="mt-10 flex justify-center md:justify-start gap-5">
                {Object.values(socialIcons).map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Social icon ${index + 1}`}
                  >
                    <img
                      src={icon}
                      alt={`social-icon-${index}`}
                      className="w-6 h-6 filter brightness-65 hover:brightness-125 transition duration-300 "
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-lg text-gray-400">
                <li>
                  <Link to="/about" className="hover:text-white transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="hover:text-white transition">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">Services</h3>
              <ul className="space-y-2 text-lg text-gray-400">
                <li>
                  <Link
                    to="/services/social-media"
                    className="hover:text-white transition"
                  >
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/digital"
                    className="hover:text-white transition"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/it"
                    className="hover:text-white transition"
                  >
                    IT Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Oz Internationals */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">Oz Internationals</h3>
              <ul className="space-y-2 text-lg text-gray-400">
                <li>
                  <Link to="/oz" className="hover:text-white transition">
                    Oz
                  </Link>
                </li>
                <li>
                  <Link
                    to="/oz/digital"
                    className="hover:text-white transition"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/oz/it" className="hover:text-white transition">
                    IT Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="container mx-auto w-full h-[1px] bg-[#fd4360] my-10" /> */}

          {/* Footer Bottom */}
          {/* <div className="mt-10 text-center text-sm text-gray-500  pt-6 ">
            &copy; {new Date().getFullYear()} OZ Media Planet. All rights
            reserved.
          </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
