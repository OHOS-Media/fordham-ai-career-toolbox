import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = ({ testimonials }) => {
  // If there are no testimonials, do not render the component
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="w-full text-fordham-white flex flex-col gap-[30px] md:gap-[60px] px-4 md:px-0">
      <h2 className="h3 text-center">User stories</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard {...testimonial} key={index} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
