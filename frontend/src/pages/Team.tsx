import React from 'react';

const teamMembers = [
  {
    name: 'Anjali Verma',
    role: 'Project Manager',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Rahul Bansal',
    role: 'Cloud Architect',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Sneha Mehra',
    role: 'Lead UI/UX Designer',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Amit Singh',
    role: 'Senior Backend Developer',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Pooja Desai',
    role: 'Academic Support Lead',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Nikhil Sharma',
    role: 'AI/ML Engineer',
    image: 'https://via.placeholder.com/150',
  },
];

const Team = () => {
  return (
    <section className="px-6 md:px-20 py-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary">Meet Our Team</h2>
        <p className="text-textSecondary mt-2 max-w-2xl mx-auto">
          Our team combines expertise across technology and education to deliver solutions that are smart, scalable, and student-friendly. Get to know the people behind Techlambda's innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md text-center p-6 hover:shadow-lg transition"
          >
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
    </section>
  );
};

export default Team;
