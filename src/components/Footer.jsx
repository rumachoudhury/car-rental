import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-20 py-4 md:py-8 lg:py-10 sm:mt-2 md:mt-14 lg:mt-40  "
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col lg:flex-row gap-10 justify-between mt-6"
      >
        {/* Left: Logo + Description + Social Icons */}
        <div className="max-w-xl">
          <Link to="/">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-20 w-auto cursor-pointer"
              src="/logo-image.jpeg"
              alt="StayVenture logo"
            />
          </Link>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-sm text-gray-900 leading-relaxed"
          >
            StayVenture offers luxury car rentals with premium service, seamless
            booking, and exceptional customer care. Discover the road in style
            with us.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center lg:justify-start items-center gap-4 mt-6"
          >
            {/* Social Icons */}
            <a href="#" aria-label="Twitter">
              <svg
                className="w-5 h-5 text-blue-600"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.167 2.5a9.1 9.1 0 0 1-2.617 1.275 3.733 3.733 0 0 0-6.55 2.5v.833a8.88 8.88 0 0 1-7.5-3.775s-3.333 7.5 4.167 10.833a9.7 9.7 0 0 1-5.834 1.667C8.333 20 17.5 15.833 17.5 6.25q0-.35-.067-.692A6.43 6.43 0 0 0 19.167 2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a href="#" aria-label="GitHub">
              <svg
                className="w-5 h-5 text-blue-600"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15.833c-4.167 1.25-4.167-2.084-5.833-2.5m11.666 5v-3.225a2.8 2.8 0 0 0-.783-2.175c2.616-.292 5.366-1.283 5.366-5.833a4.53 4.53 0 0 0-1.25-3.125 4.22 4.22 0 0 0-.075-3.142s-.983-.292-3.258 1.233a11.15 11.15 0 0 0-5.833 0C5.225.541 4.242.833 4.242.833a4.22 4.22 0 0 0-.075 3.142 4.53 4.53 0 0 0-1.25 3.15c0 4.516 2.75 5.508 5.366 5.833a2.8 2.8 0 0 0-.783 2.15v3.225"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a href="#" aria-label="LinkedIn">
              <svg
                className="w-5 h-5 text-blue-600"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.333 6.667a5 5 0 0 1 5 5V17.5H15v-5.833a1.667 1.667 0 0 0-3.334 0V17.5H8.333v-5.833a5 5 0 0 1 5-5M5 7.5H1.667v10H5zM3.333 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-between w-1/2 gap-8"
        >
          <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:items-start gap-10 lg:gap-24 px-6 sm:px-10 md:px-16 lg:px-0 mb-14">
            {/* COMPANY */}
            <div className="text-center lg:text-left">
              <h2 className="font-semibold text-black mb-4">COMPANY</h2>
              <ul className="text-sm text-gray-900 space-y-2">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Browse Cars</a>
                </li>
                <li>
                  <a href="#">Car List</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="text-center lg:text-left">
              <h2 className="font-semibold text-black mb-4">RESOURCES</h2>
              <ul className="text-sm text-gray-900 space-y-2">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Insurance</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="text-center lg:text-left">
              <h2 className="font-semibold text-black mb-4">CONTACT</h2>
              <ul className="text-sm text-gray-900 space-y-2">
                <li>StayVenture NY Office</li>
                <li>789 Madison Avenue</li>
                <li>New York, NY 10065</li>
                <li> +1 (212) 456-7890</li>
                <li>contact@stayventure.com</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="border-t border-gray-300 pt-4 mt-8 text-center text-xs md:text-sm text-gray-500"
      >
        © 2025 Brand. All rights reserved.
      </motion.p>
    </motion.footer>
  );
}

export default Footer;
