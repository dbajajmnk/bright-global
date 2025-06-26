import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import ContactForm from '../components/ContactForm'; // Make sure this file exists and path is correct

const Contact: React.FC = () => {
  return (
    <section className="px-6 md:px-20 py-10 space-y-16">
      {/* Contact Info */}
      <div>
        <h2 className="text-3xl font-bold text-secondary mb-4">Contact Us</h2>
        <p className="text-textSecondary text-lg mb-6">
          Reach out for tech services, job opportunities, collaborations, or support. We're always ready to connect.
        </p>
        <div className="space-y-2 text-lg text-textPrimary">
          <p><strong>Company:</strong> Techlambda Services Pvt Ltd</p>
          <p><strong>Industry:</strong> IT Industry HR</p>
          <p><strong>Address:</strong> Gurugram, India</p>
          <p><strong>Phone:</strong> 7880671177, 8743097189, 8872910730</p>
          <p><strong>Email:</strong> techlambdaservices@gmail.com</p>
          <p>
            <strong>Website:</strong>{' '}
            <a
              href="https://www.techlambda.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              www.techlambda.com
            </a>
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-2xl font-semibold text-secondary mb-4">Connect with Us on Social Media</h3>
        <div className="flex flex-wrap gap-4 text-primary text-lg">
          <a
            href="https://whatsapp.com/channel/0029VarZn9aGk1FnlCttz11q"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href="https://www.youtube.com/@techlambda360"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FaYoutube /> YouTube
          </a>
          <a
            href="https://www.linkedin.com/company/105116331/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61566939595712"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FaFacebook /> Facebook
          </a>
          <a
            href="https://www.instagram.com/techlambdaservices/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <h3 className="text-2xl font-semibold text-secondary mb-4">Send Us a Message</h3>
        <ContactForm />
      </div>

      {/* Map */}
      <div>
        <h3 className="text-2xl font-semibold text-secondary mb-4">Find Us on Map</h3>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7014.015792594203!2d77.0301258!3d28.4594976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18a10a05b1cf%3A0xf6432eb2934b8e1f!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            className="border-0 w-full h-80"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
