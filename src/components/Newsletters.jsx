import React from "react";

export default function Newsletters() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 max-md:px-4 md:my-10 sm:my-3 mb-40 bg-[#F5F7FF] p-10 sm:mx-10 lg:mx-35 rounded-xl">
      <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Deal!</h1>
      <p className="md:text-lg text-gray-500/70 pb-8">
        Subscribe to get the latest offers, new arrivals, and exclusive
        discounts
      </p>
      <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
        <input
          className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          type="text"
          placeholder="Enter your email id"
          required
        />
        <button
          type="submit"
          className="md:px-12 px-8 h-full text-white bg-primary-dull hover:bg-blue-400 transition-all cursor-pointer rounded-md rounded-l-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
