import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPassport } from "react-icons/fa";

function Header() {

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
      isActive
        ? "text-white bg-black"
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
            className="menu menu-sm dropdown-content bg-white rounded-xl  mt-3 w-52 p-3 shadow-lg">
            {Links}
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-2">
        <Link to={"/"}>  <img className="w-18 h-18 rounded-[50%] " src="https://i.ibb.co.com/zThSD6TV/Whats-App-Image-2026-03-09-at-8-30-57-PM.jpg"></img></Link>
        </div>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3">
          {Links}
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end  gap-x-2">
        <NavLink to="/applicationForm">
         <button
        className="relative inline-block px-3 py-2 font-semibold text-black border-2 border-black rounded-md
                   overflow-hidden transition-colors duration-300
                   before:absolute before:inset-0 before:bg-black before:scale-y-0 before:origin-bottom
                   before:transition-transform before:duration-300 hover:before:scale-y-100
                   hover:text-white z-10 lg:text-lg md:text-xl text-[10px] hover: cursor-pointer"
      >
        <span className="relative z-20">Apply for Visa</span>
      </button>
        </NavLink>
        <NavLink to="/checkInfo">
         <button
        className="relative inline-block px-3 py-2 font-semibold text-black border-2 border-black rounded-md
                   overflow-hidden transition-colors duration-300
                   before:absolute before:inset-0 before:bg-black before:scale-y-0 before:origin-bottom
                   before:transition-transform before:duration-300 hover:before:scale-y-100
                   hover:text-white z-10 lg:text-lg  text-[10px] hover: cursor-pointer"
      >
        <span className="relative z-20">Check Info</span>
      </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;