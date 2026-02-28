import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-6 lg:px-20">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            About Our Company
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            We are a certified and government-approved travel and visa processing agency 
            committed to delivering reliable, transparent, and professional services 
            for both individual and corporate clients.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Description */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Trusted & Accredited Travel Partner
            </h3>

            <p className="text-gray-600 mb-6">
              Our agency operates under full authorization from the Bangladesh Government 
              and maintains active memberships with leading national and international 
              travel organizations. With strong global alliances and a growing corporate 
              client base, we ensure smooth and secure travel experiences.
            </p>

            <p className="text-gray-600">
              We proudly support international travelers with complete visa assistance, 
              documentation guidance, flight booking, and secure credit card payment options.
            </p>
          </div>

          {/* Right Side - Certifications List */}
          <div className="bg-base-200 p-8 rounded-xl shadow-lg">
            <ul className="space-y-4 text-gray-700">

              <li>
                ✔ Certified Travel Agency of Bangladesh Government – 
                Ministry of Civil Aviation & Tourism (Reg. No. 0006663)
              </li>

              <li>
                ✔ IATA Accredited Agent (Code: 42337654)
              </li>

              <li>
                ✔ Member of Association of Travel Agents of Bangladesh (ATAB) 
                – Reg. No. 13889
              </li>

              <li>
                ✔ Member of Tour Operators Association of Bangladesh (TOAB) 
                – Membership No. 479
              </li>

              <li>
                ✔ Member of Bangladesh Outbound Tour Operators Forum (BOTOF)
              </li>

              <li>
                ✔ Active international agency alliances
              </li>

              <li>
                ✔ Growing corporate client network
              </li>

              <li>
                ✔ Secure Credit Card Payment Accepted
              </li>

            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;