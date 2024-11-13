import React from "react";

const Testimonial = ({ quote, text, name, title }) => (
  <div className="flex flex-col items-center text-left max-w-md mx-auto bg-white/5 p-6 rounded-lg h-full">
    <h3 className="text-2xl font-bold mb-6">&quot;{quote}&quot;</h3>
    <p className="text-sm mb-6 opacity-80">{text}</p>
    <p className="font-semibold mb-1">{name}</p>
    <p className="text-sm opacity-80">{title}</p>
  </div>
);

const TestimonialsSection = ({ testimonials }) => {
  // If there are no testimonials, do not render the component
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="w-full text-white pt-1 pb-20 z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">User stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-stretch text-center bg-white/5 rounded-lg" >
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;