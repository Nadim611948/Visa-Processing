import React, { useState } from "react";

// 1. Map passwords to specific PDF filenames
const userPdfs = [
  {
    password: "A11289578",
    name: "MD Mezanur Rahaman",
    photo:
      "https://i.ibb.co.com/HTkCvPnZ/Whats-App-Image-2026-03-09-at-7-33-11-PM.jpg",
    status: "Approved",
    docs: [
      {
        id: 1,
        label: "Australia LMI",
        path: "/MD Mezanur Rahaman Australia Lmi.pdf",
      },
      {
        id: 2,
        label: "Job Letter",
        path: "/Australia job leter-8-kaz ok (1).pdf",
      },
      {
        id: 3,
        label: "Work Permit",
        path: "/MD MEZANUR RAHAMAN Australia work permity-3 kaz ok.pdf",
      },
      {
        id: 4,
        label: "Application Latter",
        path: "/APPLICATION  LETTER MD MEZANUR RAHAMAN.pdf",
      },
    ],
  },
   {
    password: "A20500760",
    name: "MD Joynal ",
    status: "Approved",
    photo:
      "https://i.ibb.co.com/pvQXYj8p/Whats-App-Image-2026-03-08-at-9-53-17-PM.jpg",
    docs: [
      { id: 1, label: "Australia LMI", path: "/MD JOYNAL AUSTRALIA LMI.pdf" },
      {
        id: 2,
        label: "Job Letter",
        path: "/Australia job offer letter md joynal.pdf",
      },
      {
        id: 3,
        label: "Work Permit",
        path: "/MD JOYNAL Australia work permity-3 kaz ok.pdf",
      },
      {
        id: 4,
        label: "Application Latter",
        path: "/APPLICATION  LETTER MD JOYNAL .pdf",
      },
    ],
  },
  {
    password: "A05156287",
    name: "MD Saniul Ahmed",
    status: "Approved",
    photo:
      "https://i.ibb.co.com/s9ss0jyP/Whats-App-Image-2026-03-09-at-8-46-07-PM.jpg",
    docs: [
      { id: 1, label: "Australia LMI", path: "/AUSTRALIA LMI MD SANIUL AHAMED.pdf" },
      {
        id: 2,
        label: "Job Letter",
        path: "/MD SANIUL AHAMED JOB OFFER LETAR.pdf",
      },
      {
        id: 3,
        label: "Work Permit",
        path: "/MD SANIUL AHMED Australia work permity-3 kaz ok-1.pdf",
      },
      {
        id: 4,
        label: "Application Latter",
        path: "/Application australia for a MD SANIUL AHMED Work 1(Provisional) Visa SALAUDDIN.pdf",
      },
    ],
  },
  // Add 4 more user objects here following the same structure
];

const CheckInfo = () => {
  const [password, setPassword] = useState("");
  const [activeUser, setActiveUser] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = userPdfs.find((u) => u.password === password);
    if (found) {
      setActiveUser(found);
    } else {
      alert("Invalid Password. Access Denied.");
    }
  };

  const handleLogout = () => {
    setActiveUser(null);
    setSelectedFile(null);
    setPassword("");
  };

  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-5xl transition-all">
        {!activeUser ? (
          <div className="p-12 max-w-md mx-auto text-center">
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
             <img className="border border-black rounded-[50%]" src="https://i.ibb.co.com/zThSD6TV/Whats-App-Image-2026-03-09-at-8-30-57-PM.jpg"></img>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-800 mb-2">
              RTS Company Limited
            </h1>
            <p className="text-slate-500 mb-8">
              Enter your unique credential to access your visa documents.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="password"
                placeholder="Document Password"
                className="w-full px-5 py-4 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-lg transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95 hover:cursor-pointer"
              >
                Unlock Files
              </button>
            </form>
          </div>
        ) : (
          <div className="p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
              <div className="flex gap-4">
                <div>
                  <img
                    className="w-20 h-22 rounded-[50%] border border-b-amber-100"
                    src={activeUser.photo}
                    alt=""
                  />
                </div>
                <div className="mt-6">
                  <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest">
                    Welcome Back
                  </h2>
                  <h1 className="text-3xl font-black text-slate-800">
                    {activeUser.name}
                  </h1>
                  <h3>
                    {" "}
                    Status:{" "}
                    <span
                      className={
                        activeUser.status?.toLowerCase() === "approved"
                          ? "text-green-500"
                          : "text-amber-500"
                      }
                    >
                      {" "}
                      {activeUser.status}
                    </span>
                  </h3>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-5 py-2.5 bg-rose-50 text-rose-600 font-bold rounded-lg hover:cursor-pointer hover:bg-rose-100 transition"
              >
                <span>Logout</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeUser.docs.map((doc) => (
                <div
                  key={doc.id}
                  className="group relative bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-red-500 group-hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-700 mb-1">{doc.label}</h3>
                  <p className="text-xs text-slate-400 mb-6 uppercase tracking-tighter">
                    Official PDF Document
                  </p>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedFile(doc.path)}
                      className="flex-1 bg-white border border-slate-200 text-slate-600 py-2 rounded-lg text-sm font-bold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
                    >
                      View
                    </button>
                    <a
                      href={doc.path}
                      download
                      className="px-3 py-2 bg-slate-200 text-slate-600 rounded-lg hover:bg-slate-300 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
              
            </div>
            <div className="flex gap-6 mt-10">
              <h3 className="text-xl font-bold mt-2">-- Processing --</h3>
                <button className="btn btn-info">Visa</button>
                <button className="btn btn-primary">Plain Ticket</button>
              </div>

            {/* Fullscreen PDF Modal Overlay */}
            {selectedFile && (
              <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-50 p-4 md:p-10 flex flex-col">
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => setSelectedFile(null)}
                    className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full font-bold transition"
                  >
                    Close Preview
                  </button>
                </div>
                <div className="flex-grow bg-white rounded-2xl overflow-hidden">
                  <iframe
                    src={selectedFile}
                    className="w-full h-full"
                    title="PDF Preview"
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CheckInfo;
