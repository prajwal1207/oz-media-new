import React from "react";
import { socialIcons } from "../../../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About OZ Media Planet</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
              sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link to="/team" className="hover:text-white transition">Our Team</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/services/social-media" className="hover:text-white transition">Social Media Marketing</Link></li>
              <li><Link to="/services/digital" className="hover:text-white transition">Digital Marketing</Link></li>
              <li><Link to="/services/it" className="hover:text-white transition">IT Services</Link></li>
            </ul>
          </div>

          {/* Oz Internationals */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Oz Internationals</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/oz" className="hover:text-white transition">Oz</Link></li>
              <li><Link to="/oz/digital" className="hover:text-white transition">Digital Marketing</Link></li>
              <li><Link to="/oz/it" className="hover:text-white transition">IT Services</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center md:justify-end gap-5">
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
                className="w-6 h-6 filter brightness-75 hover:brightness-125 transition duration-300"
              />
            </a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
          &copy; {new Date().getFullYear()} OZ Media Planet. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
