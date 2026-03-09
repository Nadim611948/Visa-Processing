import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about visa processing? Our team is ready to assist you with professional guidance and reliable support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <div className="lg:mt-16 mt-6 lg:ml-10 lg:space-y-10 space-y-2">

            {/* Address Card */}
            <div className="flex items-start gap-5 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-primary/10 p-4 rounded-full text-primary text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Office Address</h3>
                <p className="text-gray-600">
                  RTS Company Melbourne Australia

                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start gap-5 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-primary/10 p-4 rounded-full text-primary text-xl">
                <FaClock />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                <p className="text-gray-600">
                  Sunday – Thursday: 9:00 AM – 6:00 PM
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-primary/10 p-4 rounded-full text-primary text-xl">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                <p className="text-gray-600">
                  support@visaprocessing.com
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a className="bg-white shadow-md p-3 rounded-full hover:bg-primary hover:text-white transition duration-300 hover: cursor-pointer">
                  <FaFacebookF />
                </a>
                <a className="bg-white shadow-md p-3 rounded-full hover:bg-primary hover:text-white transition duration-300 hover: cursor-pointer">
                  <FaTwitter />
                </a>
                <a className="bg-white shadow-md p-3 rounded-full hover:bg-primary hover:text-white transition duration-300 hover: cursor-pointer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <form className="grid gap-3">

              <div>
                <label className="block mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter subject"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="relative inline-block px-8 py-4 font-semibold text-black border-2 border-black rounded-lg
                           overflow-hidden transition-colors duration-300
                           before:absolute before:inset-0 before:bg-black before:scale-y-0 before:origin-bottom
                           before:transition-transform before:duration-300 hover:before:scale-y-100
                           hover:text-white z-10 text-lg"
              >
                <span className="relative z-20">Send Message</span>
              </button>

            </form>
          </div>
        </div>

        {/* GOOGLE MAP */}
        <div className="mt-20 h-96 rounded-2xl overflow-hidden shadow-xl">
          <iframe
            title="office-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.905458988634!2d90.39204111498166!3d23.81033238458862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b6bce246d1%3A0x77c2b8c7c5a4dfd2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1617388459864!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;