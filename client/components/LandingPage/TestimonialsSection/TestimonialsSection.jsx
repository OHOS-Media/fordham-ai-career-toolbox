import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = ({ testimonials }) => {
  // If there are no testimonials, do not render the component
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="w-full text-fordham-white flex flex-col">
      <h2 className="h5 md:h3 font-bold text-center text-white mb-6 md:mb-[60px]">User stories</h2>
      <div className="flex flex-row overflow-x-scroll gap-4 scrollbar-hidden w-full">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard {...testimonial} key={index} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
