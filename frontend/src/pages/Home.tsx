import React from 'react';
import HeroSlider from '../components/HeroSlider';
import { Link } from 'react-router-dom';
import TestimonialsSlider from '../components/TestimonialsSlider';

const Home = () => {
  return (
    <section className="px-6 md:px-20 py-16 space-y-20 overflow-x-hidden bg-white text-gray-800">
      {/* Hero Section */}
      <HeroSlider />

      {/* Welcome Message */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-[#F57C00] mb-4">Welcome to Techlambda</h1>
        <p className="text-xl text-gray-600">
          Your All-in-One Technology & Academic Solutions Partner
        </p>
        <p className="text-lg text-gray-700 mt-4">
          From innovative tech solutions to academic support, Techlambda is your go-to hub for everything digital, educational, and transformational.
        </p>
        <p className="text-lg text-gray-700 mt-2 font-semibold">
           Tech Services. 🎓 Academic Support. All in One Place.
        </p>
      </div>

      {/* Tech Services */}
      <div className="bg-[#FFF7F0] p-10 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-[#F57C00] mb-6">Our Tech Services</h2>
        <p className="text-gray-700 mb-6">
          Helping businesses thrive with smart, scalable tech:
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-3 text-lg">
          <li>Web & Mobile App Development</li>
          <li>Custom Software Solutions</li>
          <li>UI/UX Design</li>
          <li>Cloud & DevOps</li>
          <li>AI, Automation & Data Science</li>
          <li>IT Consulting & Cybersecurity</li>
        </ul>
        <Link to="/services" className="inline-block mt-6 bg-[#F57C00] text-white px-6 py-3 rounded hover:bg-[#E65C00] text-lg font-semibold">
          Explore Tech Services
        </Link>
      </div>

      {/* Student Services */}
      <div className="bg-[#FFF7F0] p-10 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-[#F57C00] mb-6">Student Services</h2>
        <p className="text-gray-700 mb-6">
          Helping students succeed with reliable, expert-led academic support:
        </p>
        <ul className="list-disc list-inside text-gray-800 space-y-3 text-lg">
          <li>Assignment Help (All Subjects)</li>
          <li>Live Tutoring & Doubt Solving</li>
          <li>Project Guidance & Development</li>
          <li>Final Year IT/CS Projects</li>
          <li>Report Writing & Presentation Support</li>
        </ul>
        <Link to="/services" className="inline-block mt-6 bg-[#F57C00] text-white px-6 py-3 rounded hover:bg-[#E65C00] text-lg font-semibold">
          Explore Student Services
        </Link>
      </div>

      {/* Why Choose Us */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#F57C00] mb-6">Why Choose Techlambda?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg text-left">
          <li>Full-Service Tech & Academic Solutions</li>
          <li>Real Experts, Real Results</li>
          <li>Affordable & Reliable Support</li>
          <li>Deadline-Focused Delivery</li>
          <li>Customized Help for Every Need</li>
        </ul>
      </div>

      {/* Business & Student Segments */}
      <div className="grid sm:grid-cols-2 gap-8 text-center">
        <div className="bg-white p-8 rounded-lg shadow border border-gray-200">
          <h3 className="text-2xl font-semibold text-[#F57C00] mb-2">💼 For Businesses</h3>
          <p className="text-gray-700 text-lg">We turn your tech challenges into growth opportunities.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow border border-gray-200">
          <h3 className="text-2xl font-semibold text-[#F57C00] mb-2">🎓 For Students</h3>
          <p className="text-gray-700 text-lg">We turn your academic load into academic success.</p>
        </div>
      </div>

      {/* Expert Call to Action */}
      <div className="bg-[#FFF7F0] border border-orange-200 p-10 rounded-lg shadow text-center">
        <h2 className="text-3xl font-bold text-[#F57C00] mb-4">Are You a Tech Expert?</h2>
        <p className="text-lg text-gray-800 mb-4">
          Join Techlambda to share your expertise, teach cutting-edge courses, and earn from your skills.
        </p>
        <Link
          to="/expert-apply"
          className="inline-block bg-[#F57C00] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#E65C00] transition"
        >
          Apply as Expert
        </Link>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-[#F57C00] mb-8 text-center">What Our Clients Say About Techlambda</h3>
        <div className="overflow-x-auto scrollbar-hide">
          <TestimonialsSlider />
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16 space-y-6">
        <Link to="/contact" className="inline-block bg-[#F57C00] text-white font-semibold py-4 px-8 rounded-lg hover:bg-[#E65C00] transition text-lg">
          Get in Touch
        </Link>

        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Whether it’s your next app or your next assignment — we’re here to help. Reach out for a free consultation or quote.
        </p>

        <Link to="/contact" className="inline-block text-[#F57C00] underline font-medium">
          Contact Us Now
        </Link>
      </div>
    </section>
  );
};

export default Home;
