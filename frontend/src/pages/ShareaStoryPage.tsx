import React, { useState } from 'react';

const ShareAStoryPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'client',
    story: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ideally submit to a backend or 3rd-party form API
    alert('Thank you for sharing your story with TechLambda!');
    setFormData({ name: '', email: '', role: 'client', story: '' });
  };

  return (
    <section className="px-6 md:px-20 py-12 bg-background text-textPrimary min-h-screen">
      <h1 className="text-4xl font-bold text-secondary mb-8">Share Your Story</h1>
      <p className="text-lg text-textSecondary mb-10 max-w-2xl">
        Whether you're a client or expert, we want to hear your experience with TechLambda. Share something memorable, inspiring, or impactful — your story could motivate others!
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-lg max-w-3xl w-full"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="role">
            I am a:
          </label>
          <select
            name="role"
            id="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="client">Client</option>
            <option value="expert">Expert</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1" htmlFor="story">
            Your Story
          </label>
          <textarea
            name="story"
            id="story"
            required
            rows={6}
            value={formData.story}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-primary text-white font-semibold px-6 py-3 rounded hover:opacity-90"
        >
          Submit Story
        </button>
      </form>
    </section>
  );
};

export default ShareAStoryPage;
