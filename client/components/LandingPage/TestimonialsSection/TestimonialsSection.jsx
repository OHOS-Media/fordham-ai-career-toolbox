import React from "react";

const Testimonial = ({ quote, text, name, title }) => (
  <div className="flex flex-col items-center text-center">
    <h3 className="text-2xl font-bold mb-6"> `&quot;`{quote}`&quot;`</h3>
    <p className="text-sm mb-6 opacity-80">{text}</p>
    <p className="font-semibold">{name}</p>
    <p className="text-sm opacity-80">{title}</p>
  </div>
);

const TestimonialsSection = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="bg-primary w-full text-white py-40">
      {/* <h2 className="text-3xl sm:text-4xl font-bold text-center text-secondary mb-8 sm:mb-12">
      Testimonials
    </h2> */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
