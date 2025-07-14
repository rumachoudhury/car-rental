import React from "react";

import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

function NavbarOwner() {
  const { user } = useAppContext(); //useAppContext is a custom hook created using React's Context API.
  return (
    <div className="flex items-center justify-between px-6 md:px-10 py-1 text-gray-500 border-b border-borderColor relative transition-all">
      <Link to="/">
        {/* <img src={assets.logo} alt="" className="h-7" /> */}
        <img src="/logo4.png" alt="" className="h-20" />
      </Link>
      <p>Welcome, {user?.name || "Owner"}</p>
    </div>
  );
}

export default NavbarOwner;
