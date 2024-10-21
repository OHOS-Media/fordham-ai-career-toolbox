import React from "react";

const Testimonial = ({ quote, text, name, title }) => (
  <div className="flex flex-col items-center text-center max-w-md mx-auto">
    <h3 className="text-2xl font-bold mb-6">&quot;{quote}&quot;</h3>
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
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
