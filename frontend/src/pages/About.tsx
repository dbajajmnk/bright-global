import React from 'react';

const About = () => {
  return (
    <section className="px-6 md:px-20 py-10 space-y-16">
      {/* About Us */}
      <div>
        <h2 className="text-3xl font-bold text-secondary mb-4">About Us</h2>
        <p className="text-textSecondary text-lg">
          <strong className="text-primary">TechLambda</strong> – Your Vision, Our Technology.
          <br /><br />
          At TechLambda, we’re not just a tech company — we’re your innovation partner. From startups to enterprises, we empower businesses to thrive in a fast-moving digital world with end-to-end technology solutions tailored to your goals.
        </p>
      </div>

      {/* Who We Are */}
      <div>
        <h2 className="text-3xl font-bold text-secondary mb-4">Who We Are</h2>
        <p className="text-textSecondary text-lg">
          TechLambda is a full-spectrum technology company delivering high-quality services across software development, web & app design, IT consulting, cloud solutions, cybersecurity, and more. Our forward-thinking team blends creativity and technical excellence to bring your ideas to life.
        </p>
      </div>

      {/* What We Do */}
      <div>
        <h2 className="text-3xl font-bold text-secondary mb-4">What We Do</h2>
        <ul className="text-textSecondary text-lg list-disc list-inside space-y-1">
          <li>Custom Software Development</li>
          <li>Website & Mobile App Development</li>
          <li>UI/UX Design</li>
          <li>Cloud Infrastructure & DevOps</li>
          <li>IT Support & Consultancy</li>
          <li>Cybersecurity Solutions</li>
          <li>AI & Machine Learning Integration</li>
          <li>E-commerce Platforms & ERP Systems</li>
        </ul>
        <p className="mt-4 text-textSecondary text-lg">
          Whether you're building from scratch or upgrading legacy systems, we provide scalable solutions that grow with you.
        </p>
      </div>

      {/* Why Choose Us */}
      <div>
        <h2 className="text-3xl font-bold text-secondary mb-4">Why Choose TechLambda?</h2>
        <ul className="text-textSecondary text-lg list-disc list-inside space-y-1">
          <li><strong>One-Stop Tech Hub</strong> – Everything tech, under one roof.</li>
          <li><strong>Client-Centric Approach</strong> – We listen, we adapt, we deliver.</li>
          <li><strong>Innovative & Scalable Solutions</strong> – Built for today, ready for tomorrow.</li>
          <li><strong>Expert Team</strong> – Certified professionals solving real-world problems.</li>
          <li><strong>Agile & Transparent</strong> – We keep you in the loop, every step of the way.</li>
        </ul>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-secondary mb-4">Our Mission</h2>
          <p className="text-textSecondary text-lg">
            To simplify technology and empower businesses through reliable, innovative, and future-ready digital solutions.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-secondary mb-4">Our Vision</h2>
          <p className="text-textSecondary text-lg">
            To become a global leader in tech solutions, known for transforming ideas into impact and clients into long-term partners.
          </p>
        </div>
      </div>

      {/* Meet the Team */}
      <div>
        <h2 className="text-3xl font-bold text-secondary mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Anjali Verma', role: 'Project Manager', image: 'https://via.placeholder.com/150' },
            { name: 'Rahul Bansal', role: 'Cloud Architect', image: 'https://via.placeholder.com/150' },
            { name: 'Sneha Mehra', role: 'Lead UI/UX Designer', image: 'https://via.placeholder.com/150' },
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden text-center p-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-primary">{member.name}</h4>
              <p className="text-textSecondary">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
