import React from "react";
import Countries from "./Counteries";
import { Link } from "react-router-dom";
import Requirements from "./Requirements";

const OurServices = () => {
  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative py-28"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/ccFq4Ybd/visa-application-form-tablet.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative container mx-auto px-6 lg:px-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Our Services
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Apply Visa To Your Dream Country With Expert Help!
            <span className="block mt-3 font-semibold text-white">
              Ensure Your Visa Success With Professional Guidance & Trusted
              Support.
            </span>
          </p>

          <div className="mt-12">
            <Link to={"/applicationForm"}>
              <button
                className="relative px-10 py-4 border-2 border-white text-white font-semibold rounded-md
                     overflow-hidden transition-all duration-300
                     before:absolute before:inset-0 before:bg-white
                     before:scale-y-0 before:origin-bottom
                     before:transition-transform before:duration-300
                     hover:before:scale-y-100 hover:text-black hover: cursor-pointer"
              >
                <span className="relative z-10">Start Your Application</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Countries />

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            Visa Categories We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Student Visa */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-8">
              <img
                src="https://i.ibb.co.com/b5mLFwZ2/pexels-max-fischer-5211478.jpg"
                alt="Student Visa"
                className="w-full h-48 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4">Student Visa</h3>
              <p className="text-gray-600 mb-6">
                Pursue your academic dreams abroad with our complete student
                visa assistance. We guide you through admission processing,
                documentation, interview preparation, and visa submission.
              </p>
              <button
                className="px-6 py-2 border-2 border-black text-black font-medium rounded-md
                                 hover:bg-black hover: cursor-pointer hover:text-white transition duration-300"
              >
                Learn More
              </button>
            </div>

            {/* Business Visa */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-8">
              <img
                src="https://i.ibb.co.com/hF7KzYvk/pexels-fauxels-3184291.jpg"
                alt="Business Visa"
                className="w-full h-48 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4">Business Visa</h3>
              <p className="text-gray-600 mb-6">
                Expand your business globally with our professional business
                visa services. We ensure smooth documentation, invitation letter
                verification, and fast-track processing.
              </p>
              <button
                className="px-6 py-2 border-2 border-black text-black font-medium rounded-md
                                 hover:bg-black hover: cursor-pointer hover:text-white transition duration-300"
              >
                Learn More
              </button>
            </div>

            {/* Tourist Visa */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-8">
              <img
                src="https://i.ibb.co.com/LzvfYP2Q/pexels-pixabay-460672.jpg"
                alt="Tourist Visa"
                className="w-full h-48 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4">Tourist Visa</h3>
              <p className="text-gray-600 mb-6">
                Explore the world with confidence. Our tourist visa service
                helps you prepare travel documents, hotel bookings, travel
                insurance, and complete visa submission hassle-free.
              </p>
              <button
                className="px-6 py-2 border-2 border-black text-black font-medium rounded-md
                                 hover:bg-black hover: cursor-pointer hover:text-white transition duration-300"
              >
                Learn More
              </button>
            </div>

             {/* Work Permit Visa */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6">
            <img
              src="https://i.ibb.co.com/F4jqrGt4/male-engineer-sitting-workplace-with-architectural-plan-table.jpg"
              alt="Work Permit Visa"
              className="w-full h-48 object-cover rounded-md mb-5"
            />
            <h3 className="text-xl font-semibold mb-3">Work Permit Visa</h3>
            <p className="text-gray-600 text-sm mb-5">
              Expert support for overseas employment visas including employer
              sponsorship, documentation, and embassy submission.
            </p>
            <Link to="/work-permit-visa">
              <button className="px-5 py-2 border-2 border-black text-black rounded-md
                                 hover:bg-black hover:text-white hover:cursor-pointer transition duration-300">
                Read More
              </button>
            </Link>
          </div>
          </div>
        </div>
      </section>

      <Requirements/>
    </div>
  );
};

export default OurServices;
