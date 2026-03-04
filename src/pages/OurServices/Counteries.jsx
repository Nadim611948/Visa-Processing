import React from "react";

const countries = [
  {
    id: 1,
    name: "United States",
    image: "https://i.ibb.co.com/S4hBMTt7/pexels-sharefaith-491036-1202723.jpg",
  },
  {
    id: 2,
    name: "United Kingdom",
    image: "https://i.ibb.co.com/MkRRtc7q/pexels-ethanrwilkinson-5428705.jpg",
  },
  {
    id: 3,
    name: "Canada",
    image: "https://i.ibb.co.com/TN8gQj8/toronto-street-view.jpg",
  },
  {
    id: 4,
    name: "Australia",
    image: "https://i.ibb.co.com/dsCSnx6Y/flag-australia.jpg",
  },
  {
    id: 5,
    name: "Germany",
    image: "https://i.ibb.co.com/Ldv6wPSS/flag-germany.jpg",
  },
  {
    id: 6,
    name: "Malaysia",
    image: "https://i.ibb.co.com/DgKnh0v7/closeup-shot-waving-flag-malaysia-with-interesting-textures.jpg",
  },
];

const Countries = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        
        <h2 className="text-4xl font-bold mb-6">
          Popular Visa Destinations
        </h2>
        <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
          Explore top countries for study, business, and tourism. 
          Start your visa journey today with professional guidance.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {countries.map((country) => (
            <div
              key={country.id}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
                <h3 className="text-2xl font-semibold mb-4">
                  {country.name}
                </h3>

                <button
                  className="px-6 py-2 border-2 border-white rounded-md 
                             hover:bg-white hover:text-black 
                             transition duration-300 font-medium hover: cursor-pointer"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Countries;