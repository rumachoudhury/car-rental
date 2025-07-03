import React from "react";
import { assets } from "../assets/assets";

export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row md:items-start items-center justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-3 md:mx-auto rounded-2xl">
      <div className="text-white">
        <h2 className="text-3xl font-medium">Have a Premium Vehicle?</h2>
        <p className="mt-2">
          Earn passive income by renting it out through CarRental.
        </p>
        <p className="max-w-130">
          We manage insurance, user verification, and secure transactions for
          you.
        </p>

        <button className="px-6 py-2 bg-white hover:bg-slate-100 transition-all text-gray-500 rounded-lg text-sm mt-4 cursor-pointer">
          Car List
        </button>
      </div>

      <img
        src={assets.banner_car_image}
        alt="Banner image"
        className="max-h-45 mt-10"
      />
    </div>
  );
}
