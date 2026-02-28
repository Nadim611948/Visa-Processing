import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: "https://i.ibb.co.com/hRMGKYyp/pexels-stefanstefancik-91227.jpg",
    text: "Amazing visa processing service! Everything was smooth, fast, and professional. Highly recommended.",
  },
  {
    id: 2,
    name: "Sara Khan",
    image: "https://i.ibb.co.com/hRMGKYyp/pexels-stefanstefancik-91227.jpg",
    text: "They helped me get my student visa without any stress. Friendly staff and quick response.",
  },
  {
    id: 3,
    name: "Michael Smith",
    image: "https://i.ibb.co.com/hRMGKYyp/pexels-stefanstefancik-91227.jpg",
    text: "Professional, reliable, and transparent. Made my tourist visa process super easy.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Guests Say</h2>

        <div className="relative max-w-3xl mx-auto flex items-center justify-between bg-white p-6 rounded-xl shadow-md">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="text-2xl font-bold text-gray-400 hover:text-black transition-colors hover: cursor-pointer"
          >
            &#10094;
          </button>

          {/* Testimonial Content */}
          <div className="flex items-center gap-6">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="text-gray-700 mb-2 italic">
                "{testimonials[current].text}"
              </p>
              <p className="font-semibold text-gray-900">
                {testimonials[current].name}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="text-2xl font-bold text-gray-400 hover:text-black transition-colors hover: cursor-pointer"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;