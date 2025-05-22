// src/pages/ApplyNowForm.tsx
import React, { useState } from 'react';

const ApplyNowForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send data to your backend or email handler
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-primary mb-4 text-center">Apply Now</h2>

      {submitted ? (
        <p className="text-green-600 text-center text-lg">Thank you! Your application has been submitted.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows={4}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-primary-dark"
          >
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
};

export default ApplyNowForm;
