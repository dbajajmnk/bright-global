import React from 'react';

const About = () => {
  return (
    <section className="px-6 md:px-20 py-10 space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-secondary mb-4">How We Work</h2>
        <p className="text-textSecondary text-lg">
          Bright Global follows a structured, transparent, and supportive process from counseling to overseas placement. We assist students at every stage – from form submission and training in Dehradun to visa processing and job placement across Europe.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-secondary mb-4">Our Vision</h2>
        <p className="text-textSecondary text-lg">
          To empower aspiring healthcare professionals with international opportunities and a globally recognized education, making success accessible in just 3 months.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-secondary mb-4">Our Mission</h2>
        <p className="text-textSecondary text-lg">
          Our mission is to create a reliable bridge between talent in India and demand in Europe through ethical, affordable, and guaranteed work pathways for students with basic qualifications.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-secondary mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Anjali Verma', role: 'Training Head', image: 'https://via.placeholder.com/150' },
            { name: 'Rahul Bansal', role: 'Visa Consultant', image: 'https://via.placeholder.com/150' },
            { name: 'Sneha Mehra', role: 'Placement Coordinator', image: 'https://via.placeholder.com/150' },
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden text-center p-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
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
