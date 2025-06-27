import React from 'react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Deepika Bajaj',
    role: 'Managing Director',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Sonika Agarwal',
    role: 'Business Development Manager',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Anamika',
    role: 'Marketing Manager',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Pulkit Khatter',
    role: 'Full-Stack & Mobile Developer | React, React Native, Android, Flutter, Python | Tutor',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Kapil Gupta',
    role: 'Backend Developer | Node.js, MERN Stack',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Shiwani Baghel',
    role: 'Frontend Developer | CSS, HTML, Python, Django, UI/UX | YouTube Content Creator',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Amritpal Singh',
    role: 'Full-Stack Developer | Django, HTML, CSS, JavaScript, Python',
    image: 'https://via.placeholder.com/150',
  },
];

const AboutUsPage: React.FC = () => {
  return (
    <div className="px-6 md:px-20 py-10 space-y-16 bg-white text-gray-800">
      <section>
        <h1 className="text-4xl font-bold text-[#F57C00] mb-6">About Us</h1>
        <p className="text-lg mb-4">TechLambda – Your Vision, Our Technology</p>
        <p className="text-gray-700 mb-6">
          At TechLambda, we’re more than just a technology company — we’re your trusted innovation partner. Whether you're a startup looking to disrupt the market or an established enterprise aiming to scale, we deliver tailored, future-ready solutions that turn bold ideas into measurable results.
        </p>
        <h2 className="text-2xl font-semibold text-[#F57C00] mt-8 mb-4">Who We Are</h2>
        <p className="text-gray-700 mb-4">
          TechLambda Services Pvt. Ltd. is a full-spectrum digital technology firm committed to solving real-world problems with precision, creativity, and heart. Our passionate team of engineers, designers, consultants, and technologists collaborates to deliver solutions across:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
          <li>Software Development</li>
          <li>Web & Mobile App Design</li>
          <li>Cloud & DevOps Solutions</li>
          <li>UI/UX Design</li>
          <li>Cybersecurity</li>
          <li>AI, ML & Data Integration</li>
          <li>IT Consulting & Support</li>
          <li>ERP & E-commerce Systems</li>
        </ul>
        <p className="text-gray-700">
          We combine strategy, technology, and execution to accelerate growth and digital transformation — all under one roof.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#F57C00] mb-4">Our Mission</h2>
        <p className="text-gray-700">
          At TechLambda, our mission is to harness the power of technology to unlock potential, inspire innovation, and drive meaningful progress.
        </p>
        <p className="text-gray-700 mt-2">
          We simplify the digital journey by delivering intelligent, impactful solutions that empower businesses and learners alike. From academic support to enterprise software, every service is designed to be transformative, intuitive, and scalable.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#F57C00] mb-4">Our Vision</h2>
        <p className="text-gray-700">
          We envision a world where technology becomes second nature — empowering individuals and businesses to innovate fearlessly and grow boundlessly.
        </p>
        <p className="text-gray-700 mt-2">
          Our goal is to make complexity disappear and possibilities expand by bridging the gap between human need and digital capability.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#F57C00] mb-4">Core Values</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Clarity:</strong> Simplicity is our strength — we deliver solutions that are clean and focused.</li>
          <li><strong>Innovation:</strong> We lead with creative thinking and technical expertise.</li>
          <li><strong>Integrity:</strong> We value honesty, transparency, and respect in everything we do.</li>
          <li><strong>Excellence:</strong> We don’t settle. We refine, perfect, and exceed expectations.</li>
          <li><strong>Empowerment:</strong> We help people succeed by making technology accessible and useful.</li>
          <li><strong>Collaboration:</strong> Together, we go further — with clients, communities, and each other.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#F57C00] mb-4">Why Choose TechLambda?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>One-Stop Tech Hub – From design to deployment, we handle it all.</li>
          <li>Client-Centric Approach – Your goals shape our solutions.</li>
          <li>Scalable & Agile – Built to grow and adapt with your needs.</li>
          <li>Expert Team – Certified pros, real-world experience.</li>
          <li>Transparent Process – No surprises, just results.</li>
        </ul>
      </section>

      <section className="pt-10">
        <h2 className="text-3xl font-bold text-[#F57C00] mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center border border-gray-200"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-[#F57C00] mb-1">{member.name}</h4>
              <p className="text-gray-600 text-sm mb-2">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center pt-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Let’s Build the Future Together</h3>
        <p className="text-gray-700 text-lg mb-6">
          We’re here to simplify, scale, and support your digital ambitions — with technology that’s powerful, purposeful, and human-first.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#F57C00] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#E65C00] transition text-lg"
        >
          👉 Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default AboutUsPage;
