import React from 'react';

const Services = () => {
  return (
    <section className="px-6 md:px-20 py-10 space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-secondary mb-4">Nursing Course</h2>
        <p className="text-textSecondary text-lg">
          Our 3-month intensive nursing course in Dehradun prepares candidates for the healthcare environment in Europe. The curriculum includes practical training, cultural orientation, and communication skills necessary for placement abroad.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-secondary mb-4">Placement Assistance</h2>
        <p className="text-textSecondary text-lg">
          We guarantee 100% job placement after training. Our strong network with European recruiters ensures that candidates receive employment offers with competitive salaries and legal work permits.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-secondary mb-4">Visa Support</h2>
        <p className="text-textSecondary text-lg">
          Bright Global provides complete assistance in documentation, embassy appointments, interview preparation, and visa processing, making the journey stress-free for candidates and their families.
        </p>
      </div>
    </section>
  );
};

export default Services;