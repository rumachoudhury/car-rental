import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row md:items-start items-center justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-3 md:mx-auto rounded-2xl"
    >
      <div className="text-white">
        {/* <h2 className="text-3xl font-medium">Have a Premium Vehicle?</h2> */}
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-medium"
        >
          Have a Premium Vehicle?
        </motion.h2>
        <p className="mt-2">
          Earn passive income by renting it out through CarRental.
        </p>
        <p className="max-w-130">
          We manage insurance, user verification, and secure transactions for
          you.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-white hover:bg-slate-100 transition-all text-blue-500 rounded-lg text-sm mt-4 cursor-pointer"
        >
          Car List
        </motion.button>
      </div>

      <motion.img
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        src={assets.banner_car_image}
        alt="Banner image"
        className="max-h-45 mt-10"
      />
    </motion.div>
  );
}
