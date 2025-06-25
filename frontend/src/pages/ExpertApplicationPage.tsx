import React, { useState } from 'react';

const ExpertApplicationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    specialization: '',
    budget: '',
    profile: '',
    address: '',
    experience: '',
    availability: '',
  });

  const [resume, setResume] = useState<File | null>(null);
  const [syllabus, setSyllabus] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'resume' | 'syllabus') => {
    const file = e.target.files?.[0] || null;
    type === 'resume' ? setResume(file) : setSyllabus(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call or Firebase)
    console.log({ ...formData, resume, syllabus });
    alert('Application submitted successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded mt-10 mb-20">
      <h1 className="text-2xl font-bold mb-6 text-primary">Apply as an Expert</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            className="border p-3 rounded w-full"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="border p-3 rounded w-full"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="border p-3 rounded w-full"
            onChange={handleChange}
          />
          <input
            type="text"
            name="specialization"
            placeholder="Your Specialization"
            required
            className="border p-3 rounded w-full"
            onChange={handleChange}
          />
          <input
            type="text"
            name="budget"
            placeholder="Expected Budget (per hour/project)"
            required
            className="border p-3 rounded w-full"
            onChange={handleChange}
          />
          <input
            type="text"
            name="availability"
            placeholder="Available Hours (e.g., Weekdays 6-9PM)"
            required
            className="border p-3 rounded w-full"
            onChange={handleChange}
          />
        </div>

        <textarea
          name="address"
          placeholder="Full Address"
          rows={2}
          required
          className="border p-3 rounded w-full"
          onChange={handleChange}
        />

        <textarea
          name="experience"
          placeholder="Work Experience (years, projects, companies, etc.)"
          rows={3}
          required
          className="border p-3 rounded w-full"
          onChange={handleChange}
        />

        <textarea
          name="profile"
          placeholder="Tell us about yourself (Bio/Profile)"
          rows={3}
          required
          className="border p-3 rounded w-full"
          onChange={handleChange}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Upload Resume (PDF/DOC)</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              required
              onChange={(e) => handleFileChange(e, 'resume')}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Upload Course Syllabus (PDF/ZIP)</label>
            <input
              type="file"
              accept=".pdf,.zip"
              required
              onChange={(e) => handleFileChange(e, 'syllabus')}
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ExpertApplicationPage;
