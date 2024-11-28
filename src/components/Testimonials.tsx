import React from "react";

const testimonials = [
  {
    content:
      "This course completely transformed how I work. I'm now 5x more productive thanks to the AI techniques I learned.",
    author: "Sarah Chen",
    role: "Product Manager at TechCorp",
  },
  {
    content:
      "The practical examples and hands-on exercises made it easy to implement AI in my daily workflow immediately.",
    author: "Michael Rodriguez",
    role: "Marketing Director",
  },
  {
    content:
      "IntelliForge's course gave me the confidence to lead AI initiatives in my company. Absolutely worth it!",
    author: "James Wilson",
    role: "Operations Manager",
  },
];

export function Testimonials() {
  return (
    <div
      className="py-24 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800"
      id="testimonials"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 text-[#FFE612]">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by Industry Leaders
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="rounded-2xl bg-white p-10 shadow-md ring-1 ring-gray-200"
            >
              <blockquote className="text-gray-900">
                <p>{`"${testimonial.content}"`}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </figcaption>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
