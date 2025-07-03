import React from "react";
import Title from "./Title";

// Star component
// const Star = ({ filled }) => (
//   <svg
//     width="16"
//     height="15"
//     viewBox="0 0 16 15"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M7.05 0.93C7.35 0 8.65 0 8.95 0.93L10.02 4.22C10.15 4.63 10.54 4.91 10.97 4.91H14.43C15.4 4.91 15.8 6.15 15.02 6.72L12.22 8.75C11.87 9.01 11.72 9.46 11.86 9.87L12.93 13.16C13.23 14.08 12.17 14.85 11.39 14.28L8.59 12.25C8.24 11.99 7.76 11.99 7.41 12.25L4.61 14.28C3.83 14.85 2.77 14.08 3.07 13.16L4.14 9.87C4.28 9.46 4.13 9.01 3.78 8.75L0.98 6.72C0.2 6.15 0.6 4.91 1.57 4.91H5.03C5.46 4.91 5.85 4.63 5.98 4.22L7.05 0.93Z"
//       fill={filled ? "#5044E5" : "#E5E7EB"}
//     />
//   </svg>
// );

// Dummy testimonials data
const testimonials = [
  {
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    image: asserts.testimonial_image_1,
    testimonial:
      "I've used many rental services, but none matched the smooth and premium experience I had with CarRental.",
  },
  {
    name: "Liam Johnson",
    address: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    rating: 4,
    review:
      "I’m truly impressed by the quality and consistency. The entire process was smooth, and the results exceeded all expectations. Thank you!",
  },
  {
    name: "Sophia Lee",
    location: "Seoul, South Korea",
    image:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",
    rating: 5,
    review:
      "Fantastic experience! From start to finish, the team was professional, responsive, and genuinely cared about delivering great results.",
  },
];

export default function CustomerTestimonial() {
  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
      {/* <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-[40px] font-bold">
          Customer Testimonials
        </h1>
        <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-[696px]">
          Hear what our users say about us. We're always looking for ways to
          improve. If you have a positive experience with us, leave a review.
        </p>
      </div> */}
      <Title
        title={"What Our Customers Say"}
        subTitle={
          "Discover why discerning travelers choose StayVenture for their luxury accommodations around the world."
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-xl shadow max-w-xs"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="font-playfair text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.address}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Star key={index} filled={testimonial.rating > index} />
                ))}
            </div>

            <p className="text-gray-500 max-w-90 mt-4">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
