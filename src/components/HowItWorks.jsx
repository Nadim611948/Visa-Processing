import React from "react";

const steps = [
  {
    id: 1,
    icon: "📝",
    title: "Consultation & Documentation",
    description:
      "We guide you on all required documents and provide personalized consultation to start your visa application smoothly.",
  },
  {
    id: 2,
    icon: "📤",
    title: "Application Submission",
    description:
      "Our team ensures your application is correctly filled and submitted to the relevant authorities for faster processing.",
  },
  {
    id: 3,
    icon: "⏳",
    title: "Visa Processing & Updates",
    description:
      "Stay informed with real-time updates on your visa status. We handle all follow-ups to ensure a smooth approval process.",
  },
  {
    id: 4,
    icon: "✈️",
    title: "Approval & Travel",
    description:
      "Once approved, we provide guidance for travel planning and ensure you’re ready for your journey abroad.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our step-by-step visa process ensures transparency and peace of mind for all our clients.
        </p>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-left"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;