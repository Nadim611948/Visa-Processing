import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-20 grid md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <Link to={"/"}>  <img className="w-18 h-18 rounded-[50%] " src="https://i.ibb.co.com/zThSD6TV/Whats-App-Image-2026-03-09-at-8-30-57-PM.jpg"></img></Link>
          <p className="text-sm leading-6 mb-4">
            Trusted and government-certified visa processing agency providing
            reliable student, tourist, and business visa solutions worldwide.
            We ensure smooth documentation and fast processing.
          </p>

          <div className="flex gap-4 mt-4">
            <a href="#" className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition duration-300">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Student Visa</li>
            <li className="hover:text-white cursor-pointer">Business Visa</li>
            <li className="hover:text-white cursor-pointer">Tourist Visa</li>
            <li className="hover:text-white cursor-pointer">Work Permit</li>
            <li className="hover:text-white cursor-pointer">Visa Consultation</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Apply Now</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Info
          </h3>
          <ul className="space-y-2 text-sm">
            <li>RTS Company Melbourne Australia</li>
            <li>Phone: +61480832625 (imo)</li>
            <li>
              PLC Construction Company Canada
            </li>
            <li>Phone: +18254639191 (imo)</li>
            <li>Email: info@gamil.com</li>
            <li>Office Hours: Sat - Thu (9:00 AM - 6:00 PM)</li>
          </ul>
        </div>
      </div>

    
    </footer>
  );
};

export default Footer;