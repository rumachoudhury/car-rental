// import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";

import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import { MyBookings } from "./pages/MyBookings";
import Footer from "./components/Footer";
import Layout from "./pages/owner/Layout";
import Dashboard from "./pages/owner/Dashboard";
import AddCar from "./pages/owner/AddCar";
import ManageCars from "./pages/owner/ManageCars";
import ManageBookings from "./pages/owner/ManageBookings";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext";

export default function App() {
  // const [showLogin, setShowLogin] = useState(false);
  const { showLogin } = useAppContext();
  const isOwnerPath = useLocation().pathname.startsWith("/owner");
  return (
    <>
      <Toaster />
      {/* Only show the <Login /> component if showLogin is true, and show on every page because it's outside the <Routes> */}
      {showLogin && <Login />}

      {/* Only show Navbar if NOT on an /owner route */}
      {!isOwnerPath && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBookings />} />

        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="manage-cars" element={<ManageCars />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
        </Route>
      </Routes>
      {!isOwnerPath && <Footer />}
    </>
  );
}
