import React from "react";
import { FaPassport, FaFileAlt, FaUniversity, FaMoneyCheckAlt, FaShieldAlt, FaPlaneDeparture } from "react-icons/fa";

const Requirements = () => {
  const documents = [
    {
      id: 1,
      icon: <FaPassport size={30} />,
      title: "Valid Passport",
      description: "Passport must be valid for at least 6 months from your intended travel date.",
    },
    {
      id: 2,
      icon: <FaFileAlt size={30} />,
      title: "Passport Size Photos",
      description: "Recent passport-size photographs meeting embassy requirements.",
    },
    {
      id: 3,
      icon: <FaUniversity size={30} />,
      title: "Bank Statement",
      description: "Proof of financial stability for the last 6 months.",
    },
    {
      id: 4,
      icon: <FaMoneyCheckAlt size={30} />,
      title: "Visa Application Form",
      description: "Properly filled and signed visa application form.",
    },
    {
      id: 5,
      icon: <FaShieldAlt size={30} />,
      title: "Travel Insurance",
      description: "Valid travel insurance covering your entire stay.",
    },
    {
      id: 6,
      icon: <FaPlaneDeparture size={30} />,
      title: "Flight & Accommodation Details",
      description: "Confirmed flight booking and hotel reservation details.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        
        <h2 className="text-4xl font-bold mb-6">
          Required Documents for Visa Application
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-14">
          To ensure a smooth visa approval process, please prepare the following 
          essential documents before submitting your application.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-primary mb-4 flex justify-center">
                {doc.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {doc.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {doc.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Requirements;