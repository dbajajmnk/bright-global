import React from 'react';

const Mission: React.FC = () => {
  return (
    <section className="px-6 md:px-20 py-10 space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary mb-2">Our Mission</h2>
        <p className="text-lg text-textSecondary max-w-3xl mx-auto">
          At Techlambda, we believe in driving positive change through technology and education. Our purpose is clear, and our passion is limitless.
        </p>
      </div>

      {/* Mission */}
      <div className="bg-surface p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-secondary mb-2">Our Mission</h3>
        <p className="text-textSecondary text-lg">
          At Techlambda Services Pvt. Ltd., our mission is to harness the power of technology to unlock potential, inspire innovation, and drive meaningful progress. 
          We strive to make advanced digital solutions accessible and impactful — from empowering students with academic support to equipping businesses with cutting-edge software 
          and IT services. Through unwavering commitment to quality, integrity, and innovation, we aim to be a catalyst for success in a rapidly evolving digital world. 
          Our purpose is not just to deliver services, but to create transformative experiences that shape a smarter, more connected future.
        </p>
      </div>

      {/* Values */}
      <div>
        <h3 className="text-2xl font-semibold text-secondary mb-4">Our Core Values</h3>
        <ul className="list-disc list-inside text-textSecondary space-y-2 text-lg">
          <li><strong>Innovation:</strong> We build creative, cutting-edge solutions that solve real-world problems.</li>
          <li><strong>Integrity:</strong> We operate with honesty, ethics, and transparency.</li>
          <li><strong>Excellence:</strong> We never settle — we refine, improve, and deliver results that exceed expectations.</li>
          <li><strong>Empowerment:</strong> We uplift businesses, students, and individuals with tools to succeed.</li>
          <li><strong>Collaboration:</strong> We grow together — with our team, clients, and community.</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <h3 className="text-xl font-bold text-primary mb-2">Join Our Mission</h3>
        <p className="text-textSecondary mb-4 max-w-xl mx-auto">
          Be part of a future where technology and education change lives. Whether you're a student, entrepreneur, or partner — Techlambda is your ally.
        </p>
        <a
          href="/contact"
          className="inline-block bg-primary text-white px-6 py-3 rounded hover:opacity-90 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Mission;
