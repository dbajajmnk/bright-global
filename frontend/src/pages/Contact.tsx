import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="px-6 md:px-20 py-10 space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-secondary mb-4">Contact Us</h2>
        <p className="text-textSecondary text-lg mb-2">
          Feel free to reach out to us for registration, collaboration, or any queries.
        </p>
        <div className="space-y-2 text-lg text-textPrimary">
          <p><strong>📍 Address:</strong> Dehradun, India</p>
          <p><strong>📞 Phone:</strong> +91 98765 43210</p>
          <p><strong>📧 Email:</strong> info@brightglobal.co.in</p>
          <p><strong>🌐 Website:</strong> <a href="https://brightglobal.co.in" target="_blank" rel="noopener noreferrer" className="text-primary underline">brightglobal.co.in</a></p>
          <p><strong>📸 Instagram:</strong> <a href="https://www.instagram.com/bright_overseas__" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary gap-1"><FaInstagram /> @bright_overseas__</a></p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-secondary mb-4">Find Us on Map</h3>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.241021115706!2d78.03219261487736!3d30.316495981773075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929f6b9fdccb5%3A0x9f5b08fdb3e5a20!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1617607366619!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen={true}
            loading="lazy"
            className="border-0 w-full h-80"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
