import React, { useState } from "react";

// 1. Map passwords to specific PDF filenames
// Ensure these files are placed in your 'public' folder (e.g., public/pdfs/user1.pdf)
const userPdfs = [
  { password: "A11289578", name: "Redwan Ahmad", fileName: "/public/MD Mezanur Rahaman Australia Lmi.pdf" },
  { password: "user456", name: "Sara Islam", fileName: "/pdfs/sara_visa.pdf" },
  { password: "user789", name: "Mohammad Ali", fileName: "/pdfs/ali_visa.pdf" },
  { password: "user321", name: "Fatima Zahra", fileName: "/pdfs/fatima_visa.pdf" },
  { password: "user654", name: "Anik Rahman", fileName: "/pdfs/anik_visa.pdf" },
];

const PdfStatusCheck = () => {
  const [password, setPassword] = useState("");
  const [activePdf, setActivePdf] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = userPdfs.find((u) => u.password === password);

    if (found) {
      setActivePdf(found);
    } else {
      alert("Invalid Password. Access Denied.");
    }
  };

  const handleLogout = () => {
    setActivePdf(null);
    setPassword("");
  };

  return (
    <section className="min-h-screen bg-gray-200 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-4xl">
        
        {!activePdf ? (
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-3xl font-bold mb-2">Visa Document Portal</h1>
            <p className="text-gray-500 mb-8">Enter your secure password to view your PDF document.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="password"
                placeholder="Enter Document Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Access My File
              </button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col h-[80vh]">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-bold">{activePdf.name}'s Document</h2>
                <p className="text-sm text-gray-500 font-mono">{activePdf.fileName}</p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Close & Logout
              </button>
            </div>

            {/* PDF Viewer Container */}
            <div className="flex-grow border-2 border-gray-100 rounded-lg overflow-hidden">
              <iframe
                src={activePdf.fileName}
                title="User PDF"
                className="w-full h-full"
                frameBorder="0"
              >
                <p>Your browser does not support iframes. 
                   <a href={activePdf.fileName}>Download PDF instead.</a>
                </p>
              </iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PdfStatusCheck;