import React from "react";

const features = [
  {
    id: 1,
    icon: "🌐",
    title: "Global Expertise",
    description: "We have extensive experience handling visas for multiple countries, ensuring a smooth and reliable process.",
  },
  {
    id: 2,
    icon: "🛡️",
    title: "Trusted & Certified",
    description: "Government-approved, IATA-accredited, and members of leading travel associations in Bangladesh.",
  },
  {
    id: 3,
    icon: "⚡",
    title: "Fast Processing",
    description: "Our streamlined process and expert guidance help you get your visa quickly and efficiently.",
  },
  {
    id: 4,
    icon: "🤝",
    title: "Personalized Support",
    description: "We provide one-on-one assistance, guiding you through documentation, submission, and follow-up.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We are committed to providing reliable, transparent, and professional visa services. Here’s why our clients trust us:
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-left">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;