// src/pages/Tour.tsx
import React from 'react';

const imageUrls = [
  '/tour-images/tour1.jpg',
  '/tour-images/tour2.jpg',
  '/tour-images/tour3.jpg',
  '/tour-images/tour4.jpg',
  '/tour-images/tour5.jpg'
];

const captions = [
  'Student Welcome Poster',
  'Bright Global Logo',
  'Explore Degrees Abroad',
  'Global Job Opportunities',
  'Student Testimonials'
];

const Tour = () => {
  return (
    <section className="px-6 md:px-20 py-10">
      <h2 className="text-3xl font-bold text-secondary mb-6">Training Location Tour</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {imageUrls.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl shadow-md">
            <img
              src={src}
              alt={captions[idx]}
              className="w-full h-auto object-cover transition-transform hover:scale-105 duration-300"
            />
            <p className="text-center mt-2 text-sm text-textSecondary">{captions[idx]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tour;
