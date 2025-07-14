import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets.js";
import { motion } from "framer-motion";

// testimonials data
const testimonials = [
  {
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    image: assets.testimonial_image_1,
    testimonial:
      "I've used many rental services, but none matched the smooth and premium experience I had with CarRental.",
  },
  {
    name: "Liam Thompson",
    location: "Austin, Texas",
    image: assets.testimonial_image_2,
    testimonial:
      "Booking was fast, the car was spotless, and customer support was super friendly. Highly recommended!",
  },
  {
    name: "Aisha Khan",
    location: "Dubai, UAE",
    image: assets.testimonial_image_1,
    testimonial:
      "I loved how convenient everything was. The entire rental process was seamless from start to finish.",
  },
];

export default function CustomerTestimonial() {
  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
      <Title
        title={"What Our Customers Say"}
        subTitle={
          "Discover why discerning travelers choose StayVenture for their luxury accommodations around the world."
        }
        showUnderline={true}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {testimonials.map((testimonial, index) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:translate-y-1 transition-all duration-500"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className=" text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img key={index} src={assets.star_icon} alt="" />
                ))}
            </div>

            <p className="text-gray-500 max-w-90 mt-4 font-light">
              "{testimonial.testimonial}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
