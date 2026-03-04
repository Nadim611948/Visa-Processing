import React, { useState } from "react";

const users = [
  {
    id: 1,
    applicationId: "APP1001",
    password: "user123",
    name: "REDWAN AHMAD CHOWDHURY",
    visaType: "Student Visa",
    country: "Canada",
    status: "Processing",
    date: "10 Feb 2026",
  },
  {
    id: 2,
    applicationId: "APP1002",
    password: "user456",
    name: "SARA ISLAM",
    visaType: "Work Permit Visa",
    country: "Australia",
    status: "Approved",
    date: "22 Jan 2026",
  },
];

const adminCredentials = {
  username: "admin",
  password: "admin123",
};

const UserInfoCheck = () => {
  const [applicationId, setApplicationId] = useState("");
  const [password, setPassword] = useState("");
  const [loggedUser, setLoggedUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check Admin Login
    if (
      applicationId === adminCredentials.username &&
      password === adminCredentials.password
    ) {
      setIsAdmin(true);
      setLoggedUser(null);
      return;
    }

    // Check User Login
    const foundUser = users.find(
      (user) =>
        user.applicationId === applicationId &&
        user.password === password
    );

    if (foundUser) {
      setLoggedUser(foundUser);
      setIsAdmin(false);
    } else {
      alert("Invalid Application ID or Password");
    }
  };

  const handleLogout = () => {
    setLoggedUser(null);
    setIsAdmin(false);
    setApplicationId("");
    setPassword("");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-3xl">

        {!loggedUser && !isAdmin ? (
          <>
            <h1 className="text-3xl font-bold text-center mb-4">
              Check Application Status
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Enter your Application ID and Password to view your visa details.
              Admin can login using admin credentials.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Application ID (or admin)"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-black outline-none"
                value={applicationId}
                onChange={(e) => setApplicationId(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-black outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
              >
                Login
              </button>
            </form>
          </>
        ) : loggedUser ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Applicant Information
            </h2>

            <div className="space-y-3 text-gray-700">
              <p><strong>Name:</strong> {loggedUser.name}</p>
              <p><strong>Application ID:</strong> {loggedUser.applicationId}</p>
              <p><strong>Visa Type:</strong> {loggedUser.visaType}</p>
              <p><strong>Country:</strong> {loggedUser.country}</p>
              <p><strong>Status:</strong> {loggedUser.status}</p>
              <p><strong>Submission Date:</strong> {loggedUser.date}</p>
            </div>

            <button
              onClick={handleLogout}
              className="mt-8 px-6 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition"
            >
              Logout
            </button>
          </>
        ) : isAdmin ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Admin Panel - All Applications
            </h2>

            <div className="space-y-6">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="border p-5 rounded-lg shadow-sm"
                >
                  <p><strong>Name:</strong> {user.name}</p>
                  <p><strong>Application ID:</strong> {user.applicationId}</p>
                  <p><strong>Visa Type:</strong> {user.visaType}</p>
                  <p><strong>Country:</strong> {user.country}</p>
                  <p><strong>Status:</strong> {user.status}</p>
                </div>
              ))}
            </div>

            <button
              onClick={handleLogout}
              className="mt-8 px-6 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition"
            >
              Logout
            </button>
          </>
        ) : null  }
      </div>
    </section>
  );
};

export default UserInfoCheck;