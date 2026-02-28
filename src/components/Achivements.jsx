import React, { useEffect, useState } from "react";

const statsData = [
  { id: 1, title: "Visas Processed", count: 1200 },
  { id: 2, title: "Happy Clients", count: 950 },
  { id: 3, title: "Years of Experience", count: 10 },
  { id: 4, title: "Countries Served", count: 25 },
];

const Achivements = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((c, i) => (c < statsData[i].count ? c + Math.ceil(statsData[i].count / 100) : statsData[i].count))
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-4xl font-bold mb-8">Our Achievements</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {statsData.map((stat, i) => (
            <div key={stat.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-4xl font-bold text-primary mb-2">{counts[i]}</h3>
              <p className="text-gray-600">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achivements;