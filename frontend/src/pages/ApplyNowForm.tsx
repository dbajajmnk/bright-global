import React, { useState } from 'react';

const ApplyNowForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resume: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resume: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally you'd use FormData to send this to a backend or service
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
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-textPrimary mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-primary"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-textPrimary mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-primary"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-textPrimary mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-primary"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-medium text-textPrimary mb-1">Upload Resume (PDF, DOCX)</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded px-4 py-2 file:text-primary"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-textPrimary mb-1">Message</label>
            <textarea
              name="message"
              rows={4}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-primary"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-2 px-4 rounded hover:opacity-90 transition"
          >
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
};

export default ApplyNowForm;
