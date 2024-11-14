import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = ({ testimonials }) => {
  // If there are no testimonials, do not render the component
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="w-full text-fordham-white flex flex-col gap-[60px]">
      <h2 className="h3 text-center">User stories</h2>
      <div className="flex flex-row justify-center items-center gap-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard {...testimonial} key={index} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
