import React, { useEffect, useState } from "react";
import { assets, dummyCarData } from "../../assets/assets";
import Title from "../../components/owner/Title";

export default function ManageCars() {
  const currency = import.meta.env.VITE_CURRENCY;
  const [car, setCar] = useState([]);

  const fetchOwnerCars = async () => {
    setCar(dummyCarData);
  };

  useEffect(() => {
    fetchOwnerCars();
  }, []);

  return (
    <div className="px-4 pt-10 md:px-10 w-full">
      <Title
        title="Manage Cars"
        subTitle="View, update, or remove your listed cars from the system."
      />

      <div className="max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6">
        <table className="w-full border-collapse text-left text-sm text-gray-600">
          <thead className="text-gray-500">
            <tr>
              <th className="p-3 font-medium">Car</th>
              <th className="p-3 font-medium max-md:hidden">Category</th>
              <th className="p-3 font-medium">Price</th>
              <th className="p-3 font-medium max-md:hidden">Status</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {car.map((car, index) => (
              <tr key={index} className="border-t border-borderColor">
                <td className="p-3 items-center gap-3">
                  <img
                    src={car.image}
                    alt=""
                    className="h-12 w-12 aspect-square rounded-md object-cover"
                  />

                  <div className="max-md:hidden">
                    <p className="font-medium">
                      {car.brand} {car.model}
                    </p>

                    <p className="text-xs text-gray-500">
                      {car.seating_capacity} . {car.transmission}
                    </p>
                  </div>
                </td>

                <td className="p-3 max-md:hidden">{car.category}</td>
                <td className="p-3 max-md:hidden">
                  {currency}
                  {car.pricePerDay}/day
                </td>

                <td className="p-3 max-md:hidden">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      car.isAvaliable
                        ? "bg-green-100 text-green-500"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {car.isAvaliable ? "Available" : "unavailable"}
                  </span>
                </td>

                <td className="flex items-center p-3">
                  {/* <img
                    src={
                      car.isAvailable ? assets.eye_close_icon : assets.eye_icon
                    }
                    alt=""
                    className="cursor-pointer"
                  /> */}
                  <img
                    src={
                      car.isAvailable ? assets.eye_icon : assets.eye_close_icon
                    }
                    alt=""
                    className="cursor-pointer"
                  />

                  <img src={assets.delete_icon} alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
