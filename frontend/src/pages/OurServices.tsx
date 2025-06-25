import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className="px-6 md:px-20 py-10 space-y-16">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary mb-2">Our Services</h2>
        <p className="text-lg text-textSecondary max-w-3xl mx-auto">
          <strong className="text-secondary">One Partner. Endless Solutions.</strong><br />
          At Techlambda, we offer a powerful combination of professional tech services and academic support – all under one roof. Whether you're a business building digital products or a student chasing deadlines, we've got you covered.
        </p>
      </div>

      {/* Technology Services */}
      <div>
        <h3 className="text-3xl font-bold text-secondary mb-4">Technology Services</h3>
        <p className="text-textSecondary mb-6">
          Delivering smart, scalable, and secure solutions for modern businesses.
        </p>
        <ul className="list-disc list-inside text-textPrimary space-y-2">
          <li><strong>Custom Software Development:</strong> Tailored desktop, web, or mobile applications built for performance and scalability.</li>
          <li><strong>Web & Mobile App Development:</strong> User-friendly websites and mobile apps for all platforms and devices.</li>
          <li><strong>UI/UX Design:</strong> Modern, intuitive interfaces that enhance user engagement and brand identity.</li>
          <li><strong>Cloud Solutions & DevOps:</strong> Scalable infrastructure, automation pipelines, and cloud deployments.</li>
          <li><strong>AI, ML & Automation:</strong> Smart, data-driven technologies to optimize business performance.</li>
          <li><strong>Cybersecurity & Compliance:</strong> Comprehensive security strategies to protect your systems and data.</li>
          <li><strong>IT Support & Consultancy:</strong> Reliable, expert consulting for startups, SMBs, and large enterprises.</li>
        </ul>
        <Link
          to="/contact"
          className="inline-block mt-6 bg-primary text-white px-6 py-2 rounded hover:opacity-90 transition"
        >
          Request a Quote
        </Link>
      </div>

      {/* Academic Services */}
      <div>
        <h3 className="text-3xl font-bold text-secondary mb-4">Academic & Student Services</h3>
        <p className="text-textSecondary mb-6">
          Empowering students to succeed with expert-led academic help and project support.
        </p>
        <ul className="list-disc list-inside text-textPrimary space-y-2">
          <li><strong>Assignment Help:</strong> Accurate, plagiarism-free assignments in a wide range of subjects.</li>
          <li><strong>Online Tutoring:</strong> Personalized tutoring sessions to support learning and exam preparation.</li>
          <li><strong>Final Year & Capstone Projects:</strong> End-to-end guidance for IT, CS, and engineering projects.</li>
          <li><strong>Report & Presentation Support:</strong> Professional assistance with academic reports, PowerPoints, and documentation.</li>
          <li><strong>Programming & Coding Help:</strong> Support in C, C++, Python, Java, HTML/CSS, React, and other languages.</li>
          <li><strong>Research & Case Study Support:</strong> Help with academic research, case studies, and paper writing.</li>
        </ul>
        <Link
          to="/contact"
          className="inline-block mt-6 bg-primary text-white px-6 py-2 rounded hover:opacity-90 transition"
        >
          Get Academic Help
        </Link>
      </div>

      {/* Why Choose */}
      <div className="text-center">
        <h3 className="text-3xl font-bold text-secondary mb-4">Why Choose Techlambda?</h3>
        <ul className="list-disc list-inside text-textSecondary space-y-2 text-left max-w-2xl mx-auto text-lg">
          <li>Diverse expertise across tech and education</li>
          <li>Fast, deadline-driven delivery</li>
          <li>Quality-first approach in every project</li>
          <li>Professional team with real-world experience</li>
          <li>100% privacy and confidentiality</li>
        </ul>
      </div>

      {/* Custom Solutions CTA */}
      <div className="text-center mt-10">
        <h3 className="text-2xl font-semibold text-primary mb-2">Need a Custom Solution?</h3>
        <p className="text-textSecondary mb-4 max-w-xl mx-auto">
          Let us know your specific goals or challenges — we’ll tailor a solution just for you.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-primary text-white px-6 py-2 rounded hover:opacity-90 transition"
        >
          Contact Our Team
        </Link>
      </div>
    </section>
  );
};

export default Services;
