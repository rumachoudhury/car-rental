import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { assets, menuLinks } from "../assets/assets";

function Navbar({ setShowLogin }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <div
      className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-2 text-gray-600 border-b border-borderColor relative transition-all ${
        location.pathname === "/" && "bg-light"
      }`}
    >
      <Link to="/">
        <img src="/logo4.png" alt="logo" className="h-18 w-50 rounded-full" />
      </Link>

      <div
        className={`max-sm:fixed max-sm:h-screen maxsm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${
          location.pathname === "/" ? "bg-light" : "bg-white"
        } ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
      >
        {menuLinks.map((link, index) => (
          <Link key={index} to={link.to}>
            {link.name}
          </Link>
        ))}

        <div className="hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56">
          <input
            type="text"
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            placeholder="Search Your Product"
          />
          <img src={assets.search_icon} alt="search" />
        </div>

        <div className="flex max-sm:flex-col items-start sm:items-center gap-6">
          <button onClick={() => navigate("/owner")} className="cursor-pointer">
            Dashboard
          </button>
          <button
            onClick={() => setShowLogin(true)}
            className="cursor-pointer lg:px-8 sm:px-4 lg:py-2  bg-primary text-gray-700 hover:bg-primary-dull hover:text-white transition-all rounded-lg"
          >
            Login
          </button>
        </div>
      </div>

      <button
        className="sm:hidden cursor-pointer"
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        <img src={open ? assets.close_icon : assets.menu_icon} alt="menue" />
      </button>
    </div>
  );
}

export default Navbar;
