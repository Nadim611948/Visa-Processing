import React from "react";

const services = [
  {
    id: 1,
    title: "Student Visa",
    image: "https://i.ibb.co.com/b5mLFwZ2/pexels-max-fischer-5211478.jpg", // replace with your own image
    description:
      "We help students secure visas for top universities worldwide. Our experts guide you through every step—from documentation to submission—to ensure a smooth process.",
  },
  {
    id: 2,
    title: "Business Visa",
    image: "https://i.ibb.co.com/hF7KzYvk/pexels-fauxels-3184291.jpg",
    description:
      "Expand your business globally with ease. Our professional team assists with all documentation, compliance, and application processes for corporate and business visas.",
  },
  {
    id: 3,
    title: "Tourist Visa",
    image: "https://i.ibb.co.com/LzvfYP2Q/pexels-pixabay-460672.jpg",
    description:
      "Plan your perfect trip abroad with confidence. We provide complete guidance and hassle-free processing for tourist visas to multiple countries.",
  },
  {
    id: 4,
    title: "Work Permit",
    image: "https://i.ibb.co.com/F4jqrGt4/male-engineer-sitting-workplace-with-architectural-plan-table.jpg",
    description:
      "Expert support for overseas employment visas including employer sponsorship, documentation, and embassy submission.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide professional visa assistance for students, business professionals, and travelers worldwide. Your journey abroad starts here.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
               <button
  className="relative inline-block px-6 py-2 font-medium text-black border-2 border-black rounded-md 
             overflow-hidden transition-colors duration-300
             before:absolute before:inset-0 before:bg-black before:scale-y-0 before:origin-bottom 
             before:transition-transform before:duration-300 hover:before:scale-y-100 
             hover:text-white z-10 hover:cursor-pointer"
>
  <span className="relative z-20">Read More</span>
</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;