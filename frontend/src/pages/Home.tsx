import React from 'react';
import HeroSlider from '../components/HeroSlider';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="px-6 md:px-20 py-10 space-y-12">
      {/* Hero Section */}
      <HeroSlider />

      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          Welcome to Techlambda
        </h1>
        <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto">
          Your All-in-One Technology & Academic Solutions Partner
        </p>
        <p className="text-base md:text-lg text-textSecondary mt-2">
          From innovative tech solutions to academic support, Techlambda is your go-to hub for everything digital, educational, and transformational.
        </p>
        <p className="text-base md:text-lg text-textSecondary mt-2 font-semibold">
          🔧 Tech Services. 💡 Academic Support. ✅ All in One Place.
        </p>
      </div>

      {/* Tech Services */}
      <div className="bg-surface p-6 md:p-10 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-secondary mb-4">🌐 Our Tech Services</h2>
        <p className="text-textSecondary mb-4">
          Helping businesses thrive with smart, scalable tech:
        </p>
        <ul className="list-disc list-inside text-textPrimary space-y-2">
          <li>Web & Mobile App Development</li>
          <li>Custom Software Solutions</li>
          <li>UI/UX Design</li>
          <li>Cloud & DevOps</li>
          <li>AI, Automation & Data Science</li>
          <li>IT Consulting & Cybersecurity</li>
        </ul>
        <Link to="/services" className="inline-block mt-6 bg-primary text-white px-6 py-2 rounded hover:opacity-90">
          Explore Tech Services
        </Link>
      </div>

      {/* Student Services */}
      <div className="bg-surface p-6 md:p-10 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-secondary mb-4">📚 Student Services</h2>
        <p className="text-textSecondary mb-4">
          Helping students succeed with reliable, expert-led academic support:
        </p>
        <ul className="list-disc list-inside text-textPrimary space-y-2">
          <li>Assignment Help (All Subjects)</li>
          <li>Live Tutoring & Doubt Solving</li>
          <li>Project Guidance & Development</li>
          <li>Final Year IT/CS Projects</li>
          <li>Report Writing & Presentation Support</li>
        </ul>
        <Link to="/services" className="inline-block mt-6 bg-primary text-white px-6 py-2 rounded hover:opacity-90">
          Explore Student Services
        </Link>
      </div>

      {/* Expert Application Call to Action */}
      <div className="bg-blue-50 border border-blue-200 p-8 rounded-lg shadow text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Are You a Tech Expert?</h2>
        <p className="text-lg text-blue-600 mb-4">
          Join Techlambda to share your expertise, teach cutting-edge courses, and earn from your skills.
        </p>
        <Link
          to="/expert-apply"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        >
          Apply as Expert
        </Link>
      </div>

      {/* Why Choose Us */}
      <div>
        <h2 className="text-3xl font-bold text-secondary mb-4 text-center">✅ Why Choose Techlambda?</h2>
        <ul className="list-disc list-inside text-textSecondary space-y-2 max-w-3xl mx-auto text-lg">
          <li>✔️ Full-Service Tech & Academic Solutions</li>
          <li>✔️ Real Experts, Real Results</li>
          <li>✔️ Affordable & Reliable Support</li>
          <li>✔️ Deadline-Focused Delivery</li>
          <li>✔️ Customized Help for Every Need</li>
        </ul>
      </div>

      {/* Business & Student Segments */}
      <div className="grid sm:grid-cols-2 gap-6 text-center">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-primary mb-2">💼 For Businesses</h3>
          <p className="text-textSecondary">We turn your tech challenges into growth opportunities.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-primary mb-2">🎓 For Students</h3>
          <p className="text-textSecondary">We turn your academic load into academic success.</p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-10 space-y-4">
        <Link to="/contact" className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition">
          Get in Touch
        </Link>

        <p className="text-textSecondary max-w-xl mx-auto">
          Whether it’s your next app or your next assignment — we’re here to help. Reach out for a free consultation or quote.
        </p>

        <Link to="/contact" className="inline-block text-primary underline font-medium">
          Contact Us Now
        </Link>
      </div>

      {/* Trusted Section Placeholder */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-secondary mb-2">Trusted by Clients & Students Worldwide</h3>
        <p className="text-textSecondary">[Add logos/testimonials/partner badges here]</p>
      </div>
    </section>
  );
};

export default Home;
