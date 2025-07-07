import React from "react";
import Hero from "../components/Hero";
import FeaturedSection from "../components/FeaturedSection";
import Banner from "../components/Banner";
import CustomerTestimonial from "../components/CustomerTestimonial";
import Newsletters from "../components/Newsletters";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <Banner />
      <CustomerTestimonial />
      <Newsletters />
    </>
  );
}
