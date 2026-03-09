import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div
      className="hero  relative"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/JbqThhZ/american-visa-document.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="hero-overlay lg:h-125 bg-opacity-60"></div>

      {/* Content */}
      <div className="hero-content text-center text-white relative z-10">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-4xl md:text-6xl font-bold leading-tight">
            Your Trusted Partner for <br />
            <span className="text-sky-500">Fast & Reliable Visa Processing</span>
          </h1>

          <p className="mb-8 text-lg md:text-xl text-gray-200">
            We provide professional visa consultation and document assistance 
            to help you travel, study, or work abroad with confidence. 
            Transparent process. Expert guidance. Guaranteed support.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link to={"/applicationForm"} className="btn btn-primary px-8">
              Apply Now
            </Link>

            <button className="btn btn-outline btn-info px-8 text-white  hover:text-black">
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;