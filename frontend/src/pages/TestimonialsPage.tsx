// src/pages/TestimonialsPage.tsx
import React from 'react';
import TestimonialsSlider from '../components/TestimonialsSlider';

const TestimonialsPage = () => {
  return (
    <section className="px-6 md:px-20 py-12 bg-background text-black min-h-screen">
      <h1 className="text-4xl font-bold text-center text-secondary mb-10">
        What Our Clients Say
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <TestimonialsSlider />
      </div>
    </section>
  );
};

export default TestimonialsPage;
