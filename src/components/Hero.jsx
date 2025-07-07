import React, { useState } from "react";
import { assets, cityList } from "../assets/assets";

export default function Hero() {
  const [pickupLocation, setPickupLocation] = useState("");
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-14 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-center">
      {/* <h1 className="text-3xl md:text-5xl font-semibold sm:mt-30 lg:mt-10">
        Turn Heads with Our Luxury Car Rentals
      </h1> */}
      <h1 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-sky-400 to-gray-400 bg-clip-text text-transparent">
        Turn Heads with Our Luxury Car Rentals
      </h1>
      <form className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8">
          <div className="flex flex-col items-start gap-2">
            {/* Pickup Location Dropdown */}
            <select
              required
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            >
              <option value="">Rental Pickup Spot</option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <p className="px-1 text-sm text-gray-500">
              {pickupLocation ? pickupLocation : "Select your location"}
            </p>
          </div>
          {/* other div */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="pickup-date">Pick-up Date</label>
            <input
              type="date"
              id="pickup-date"
              min={new Date().toISOString().split("T")[0]}
              className="text-sm text-gray-500"
              required
            />
          </div>
          {/* another div */}
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="return-date">Return Date</label>
            <input
              type="date"
              id="return-date"
              className="text-sm text-gray-500"
              required
            />
          </div>
        </div>

        <button className="flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4  bg-primary-dull hover:bg-blue-500 text-white hover:text-white rounded-full cursor-pointer">
          <img
            src={assets.search_icon}
            alt="search"
            className="brightness-300"
          />
          Search
        </button>
      </form>
      {/* <img src={assets.main_car} alt="" className="max-h-74" /> */}
      <img
        src={assets.group_car}
        alt="Blue Car"
        className="max-h-96 w-[80%] rounded-xl"
      />
    </div>
  );
}
