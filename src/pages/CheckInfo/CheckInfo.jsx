import React, { useState } from "react";

// 1. Expanded User Data (5 Users)
const users = [
  { id: 1, password: "user123", name: "REDWAN AHMAD CHOWDHURY", visaType: "Student Visa", country: "Canada", status: "Processing", date: "10 Feb 2026" },
  { id: 2, password: "user456", name: "SARA ISLAM", visaType: "Work Permit Visa", country: "Australia", status: "Approved", date: "22 Jan 2026" },
  { id: 3, password: "user789", name: "MOHAMMAD ALI", visaType: "Tourist Visa", country: "USA", status: "Pending", date: "05 Mar 2026" },
  { id: 4, password: "user321", name: "FATIMA ZAHRA", visaType: "Business Visa", country: "Germany", status: "Approved", date: "15 Dec 2025" },
  { id: 5, password: "user654", name: "ANIK RAHMAN", visaType: "Student Visa", country: "UK", status: "Rejected", date: "01 Feb 2026" },
];

const CheckInfo = () => {
  const [password, setPassword] = useState("");
  const [loggedUser, setLoggedUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 2. Search for user based ONLY on password
    const foundUser = users.find((user) => user.password === password);

    if (foundUser) {
      setLoggedUser(foundUser);
    } else {
      alert("Invalid Password. Please try again.");
    }
  };

  const handleLogout = () => {
    setLoggedUser(null);
    setPassword("");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-10">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-2xl">
        
        {!loggedUser ? (
          <>
            <h1 className="text-3xl font-bold text-center mb-4">Check Application Status</h1>
            <p className="text-gray-600 text-center mb-8">
              Please enter your unique password to access your application details.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-black outline-none transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition duration-300"
              >
                View My Status
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Applicant Information</h2>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                loggedUser.status === "Approved" ? "bg-green-100 text-green-700" : 
                loggedUser.status === "Rejected" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
              }`}>
                {loggedUser.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p className="text-xs uppercase text-gray-400 font-bold">Full Name</p>
                <p className="text-lg font-medium">{loggedUser.name}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-400 font-bold">Visa Type</p>
                <p className="text-lg font-medium">{loggedUser.visaType}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-400 font-bold">Destination Country</p>
                <p className="text-lg font-medium">{loggedUser.country}</p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-400 font-bold">Submission Date</p>
                <p className="text-lg font-medium">{loggedUser.date}</p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="mt-10 w-full py-2 border-2 border-black text-black font-bold rounded-md hover:bg-black hover:text-white transition duration-300"
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default CheckInfo;