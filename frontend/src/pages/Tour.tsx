// src/pages/Tour.tsx
import React from 'react';

const imageUrls = [
  'https://images.unsplash.com/photo-1579154203451-c21f2b4c4c18?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1578496479763-7bdc2b74f234?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1597764699514-b99fbe8c5346?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1588776814546-7c99cc1f034b?auto=format&fit=crop&w=800&q=80'
];

const Tour = () => {
  return (
    <section className="px-6 md:px-20 py-10">
      <h2 className="text-3xl font-bold text-secondary mb-6">Training Location Tour</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {imageUrls.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl shadow-md">
            <img src={src} alt={`Training Image ${idx + 1}`} className="w-full h-auto object-cover transition-transform hover:scale-105 duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tour;
