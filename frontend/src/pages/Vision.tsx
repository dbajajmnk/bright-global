import React from 'react';

const Vision: React.FC = () => {
  return (
    <section className="px-6 md:px-20 py-10 space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary mb-2">Our Vision</h2>
        <p className="text-lg text-textSecondary max-w-3xl mx-auto">
          At Techlambda, we envision a world where technology becomes second nature — empowering individuals and businesses to innovate fearlessly and grow boundlessly.
        </p>
      </div>

      {/* Vision Statement */}
      <div className="bg-surface p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-secondary mb-2">
          Vision Statement – Techlambda Services Pvt. Ltd.
        </h3>
        <p className="text-textSecondary text-lg">
          Our mission is to simplify the digital journey — delivering concise, intelligent, and impactful solutions that empower people and organizations to thrive.
          At Techlambda, we bridge the gap between technology and human need, offering tailored software, IT services, and academic support that are not only future-ready
          but remarkably easy to adopt. With every project, we aim to make complexity disappear and possibilities expand.
        </p>
      </div>

      {/* Core Values */}
      <div>
        <h3 className="text-2xl font-semibold text-secondary mb-4">Our Core Values</h3>
        <ul className="list-disc list-inside text-textSecondary space-y-2 text-lg">
          <li>
            <strong>Clarity:</strong> We believe simplicity drives impact. We strip away the unnecessary to deliver what truly matters.
          </li>
          <li>
            <strong>Innovation:</strong> We craft forward-thinking solutions that solve real problems with elegance and precision.
          </li>
          <li>
            <strong>Integrity:</strong> We operate with honesty, transparency, and a deep respect for our clients and team.
          </li>
          <li>
            <strong>Excellence:</strong> We pursue mastery in everything we do, delivering results that are clean, clear, and powerful.
          </li>
          <li>
            <strong>Empowerment:</strong> We uplift our users by making technology accessible, intuitive, and effective.
          </li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <h3 className="text-xl font-bold text-primary mb-2">Grow With Our Vision</h3>
        <p className="text-textSecondary mb-4 max-w-xl mx-auto">
          Be part of our journey as we reimagine what's possible through clarity, innovation, and purpose-driven technology.
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

export default Vision;
