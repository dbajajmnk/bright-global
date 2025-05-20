import React from 'react';

const Home = () => {
  return (
    <section className="px-6 md:px-20 py-10 space-y-8">
      <div className="bg-primary text-white p-10 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold">🎉 Ek Life-Changing Mauka! 🎉</h2>
        <p className="mt-4 text-lg">Ab sirf 3 mahine ke Nursing Course se paayen Europe mein 100% job placement aur work visa guaranteed – sab kuch course fees mein shaamil hai!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-secondary">Course Duration</h3>
          <p>3 Mahine (Classes sirf Dehradun mein hongi)</p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-secondary">Fees</h3>
          <p>₹5 Lakh (Training, Certification, Work Visa – sab kuch included, koi hidden charges nahi)</p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-secondary">Eligibility</h3>
          <p>12th Pass + English understanding/speaking</p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-secondary">Certificate</h3>
          <p>Europe-recognized, valid in all EU countries</p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-secondary">Job Locations</h3>
          <p>Greece, France, UK and more European countries</p>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold text-secondary">Seats Available</h3>
          <p>Sirf 1500 students ke liye</p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-secondary mt-10 mb-4">Kyu karein promote ya join ye course?</h3>
        <ul className="list-disc pl-5 space-y-2 text-lg text-textSecondary">
          <li>High Return on Investment – sirf 3 mahine mein international job</li>
          <li>Work visa 100% legal aur guaranteed</li>
          <li>European certificate jo har country mein kaam aayega</li>
          <li>Nursing ya medical ka background zaroori nahi</li>
          <li>Training se lekar visa aur job tak poora support</li>
          <li>Europe jaane ke baad kai naye career options</li>
          <li>1.5–2 lakh/month basic salary, overtime se 2.5–3 lakh bhi possible</li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
