import React from 'react';

const Placement = () => {
  return (
    <section className="px-6 md:px-20 py-10 space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-primary mb-2">Placement Support</h2>
        <p className="text-lg text-textSecondary max-w-3xl mx-auto">
          At Techlambda, we don’t just deliver training — we deliver outcomes. Whether you're a student completing a project or a client finishing a software build, we ensure your next step is forward.
        </p>
      </div>

      {/* How We Help */}
      <div>
        <h3 className="text-2xl font-semibold text-secondary mb-4">What We Offer</h3>
        <ul className="list-disc list-inside text-textSecondary space-y-2">
          <li>Resume building and interview coaching</li>
          <li>Live project experience and certification</li>
          <li>Mock interviews and role-play sessions</li>
          <li>Referrals to our hiring network and partners</li>
          <li>LinkedIn and portfolio optimization</li>
        </ul>
      </div>

      {/* Where Our Talent Works */}
      <div>
        <h3 className="text-2xl font-semibold text-secondary mb-4">Hiring Network</h3>
        <p className="text-textSecondary">
          We collaborate with a trusted network of startups, SMEs, MNCs, and global recruiters to place talent in:
        </p>
        <ul className="list-disc list-inside text-textSecondary mt-2 space-y-1">
          <li>Software Development & QA roles</li>
          <li>Cloud, DevOps, and AI/ML domains</li>
          <li>IT Consulting & Cybersecurity</li>
          <li>Internships for students & freshers</li>
        </ul>
      </div>

      {/* Testimonials Placeholder */}
      <div className="text-center mt-10">
        <h3 className="text-2xl font-semibold text-secondary mb-4">Success Stories</h3>
        <p className="text-textSecondary mb-2">
          From graduation to placement — hear it from our successful candidates.
        </p>
        <p className="text-sm text-textSecondary italic">
          (Add real testimonials, logos, or LinkedIn screenshots here)
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <h3 className="text-xl font-bold text-primary mb-2">Ready for Your Dream Job?</h3>
        <p className="text-textSecondary mb-4">
          Let Techlambda support your journey — from training to placement and beyond.
        </p>
        <a
          href="/apply"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Apply for Placement Support
        </a>
      </div>
    </section>
  );
};

export default Placement;
