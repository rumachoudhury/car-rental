// import React from "react";
// import NavbarOwner from "../../components/owner/NavbarOwner";
// import SideBar from "../../components/owner/SideBar";

// import { Outlet } from "react-router-dom";

// function Layout() {
//   return (
//     <div className="flex flex-col">
//       <NavbarOwner />

//       <div className="flex">
//         <SideBar />
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default Layout;

// ------------------
import React from "react";
import NavbarOwner from "../../components/owner/NavbarOwner";
import SideBar from "../../components/owner/SideBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarOwner />

      <div className="flex flex-1">
        <SideBar />

        {/* Wrap Outlet to allow it to expand */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
