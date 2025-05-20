// src/pages/Home.tsx
import React from 'react';

const Home = () => {
  return (
    <section className="px-6 md:px-20 py-10 space-y-8">
      {/* Featured Image Banner */}
      <div className="w-full h-[300px] rounded-lg overflow-hidden border border-gray-300 shadow">
        <img
          src="/home-banner.jpg"
          alt="Bright Global Featured"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Welcome to Bright Global
        </h1>
        <p className="text-lg md:text-xl text-textSecondary">
          Explore our life-changing 3-month nursing program with guaranteed Europe placement.
        </p>
      </div>

      <div className="bg-primary text-white p-6 md:p-10 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold">🎉 Ek Life-Changing Mauka! 🎉</h2>
        <p className="mt-4 text-base md:text-lg">
          Ab sirf 3 mahine ke Nursing Course se paayen Europe mein 100% job placement aur work visa guaranteed – sab kuch course fees mein shaamil hai!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-secondary mb-4">Kyu karein promote ya join ye course?</h3>
        <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-textSecondary">
          <li>✅ High Return on Investment – sirf 3 mahine mein international job</li>
          <li>✅ Work visa 100% legal aur guaranteed</li>
          <li>✅ European certificate jo har country mein kaam aayega</li>
          <li>✅ Nursing ya medical ka background zaroori nahi</li>
          <li>✅ Training se lekar visa aur job tak poora support</li>
          <li>✅ Europe jaane se aapke 50 Options aur khulenge , zindagi safal hojayegi</li>
          <li>✅ 15-20 lakh rupee log sirf work visa ke le lete hai , jisme job ki guarantee nahi hoti. Hum aapko ₹5 lakh mein EU certificate aur job guarantee Europe mein de rahe hain.</li>
          <li>✅ 1.5-2 lakh/month aapki basic salary hai, overtime karke aap ₹2.5–3 lakh kama sakte hain.</li>
        </ul>
      </div>

      <div className="mt-10 text-center">
        <h3 className="text-2xl font-semibold text-secondary mb-2">💼 Partnership Opportunity</h3>
        <p className="text-base md:text-lg text-textSecondary">
          Hum dhoond rahe hain motivated partners aur brokers jo is golden opportunity ko deserving candidates tak pahuncha sakein.
        </p>
      </div>

      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold text-primary">📞 Contact now</h3>
        <p className="text-base">📧 info@brightglobal.co.in</p>
        <p className="text-base">🌐 brightglobal.co.in</p>
        <a
          href="https://www.instagram.com/bright_overseas__?igsh=YzhkeWh0ZW15Ymxk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Instagram Profile
        </a>
      </div>
    </section>
  );
};

export default Home;
