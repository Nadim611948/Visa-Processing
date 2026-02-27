import React from "react";
import { NavLink } from "react-router-dom";
import { FaPassport } from "react-icons/fa";

function Header() {

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
      isActive
        ? "text-white bg-blue-600"
        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
    }`;

  const Links = (
    <>
      <li>
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className={navLinkClass}>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white shadow-md px-6">
      
      {/* Left Side */}
      <div className="navbar-start">
        
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-xl z-10 mt-3 w-52 p-3 shadow-lg">
            {Links}
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaPassport className="text-3xl text-[#8494FF]" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            VisaProcessing
          </span>
        </div>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3">
          {Links}
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end">
        <NavLink to="/apply">
          <button className="btn bg-[#8494FF] hover:bg-[#5567da]  text-white rounded-xl px-6 border-none">
            Apply Now
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;