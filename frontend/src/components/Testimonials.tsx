import React from 'react';

interface Testimonial {
  message: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    message: "Highly professional, excellent attitude with integrity and ethics. Highly recommended.",
    date: "February 22, 2024",
  },
  {
    message: "Best teacher I ever had! Very creative and interactive teaching. Totally recommend. Thanks Techlambda!",
    date: "April 8, 2023",
  },
  {
    message: "They helped me gain confidence in Flutter and even helped land an internship. Thank you, Techlambda!",
    date: "February 14, 2023",
  },
  {
    message: "Great explainer, patient and understanding. They did an amazing job.",
    date: "February 13, 2023",
  },
  {
    message: "Very positive, helpful, and always encouraging. Highly recommended for learning!",
    date: "February 8, 2023",
  },
  // Add more as needed
];

const Testimonials: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-100">
          <p className="text-textSecondary italic mb-3">"{t.message}"</p>
          <p className="text-sm text-gray-500 text-right">– {t.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
