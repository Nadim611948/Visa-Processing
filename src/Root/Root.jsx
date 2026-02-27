import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      {/* Header/Navbar */}
      <Header/>
      <Outlet />   {/* 👈 Required for child routes */}
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Root;