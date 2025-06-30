import React, { useState } from 'react';

const faqs = [
  {
    category: 'Online Teaching (For Tutors)',
    items: [
      {
        question: 'What is online teaching?',
        answer:
          'Online teaching involves delivering lessons through the internet using tools like video conferencing, screen sharing, and digital whiteboards. TechLambda connects tutors with students based on their learning needs.',
      },
      {
        question: 'Who can teach online at TechLambda?',
        answer:
          'Anyone with solid subject knowledge, good communication skills, and a reliable internet connection can teach. Prior experience is a plus but not required.',
      },
      {
        question: 'How do I start teaching through TechLambda?',
        answer:
          'Sign up as a tutor on the platform, complete and verify your profile, select your subjects, and begin receiving student requests and schedule classes.',
      },
      {
        question: 'Do I need a webcam or digital pen?',
        answer:
          'A webcam is recommended for better interaction with students. A digital pen or writing tablet is useful for drawing diagrams or solving equations, but it is not mandatory.',
      },
      {
        question: 'How do I get students?',
        answer:
          'After your profile is verified, TechLambda matches you with relevant student requirements. You can also explore and respond to open student requests.',
      },
      {
        question: 'How are payments handled?',
        answer:
          'Tutors can receive payments directly from students through UPI, bank transfer, or other preferred methods. A secure payment feature through TechLambda is also available.',
      },
    ],
  },
  {
    category: 'For Students',
    items: [
      {
        question: 'How to contact a teacher?',
        answer:
          'Search by subject, view teacher profiles, and send an inquiry directly through the platform.',
      },
      {
        question: 'When will a teacher respond?',
        answer:
          'Teachers usually reply within 24 hours. You will receive a notification once a teacher responds.',
      },
      {
        question: 'How to close a requirement?',
        answer:
          'Log into your dashboard → Go to your posted requirement → Click "Close" when your learning need is fulfilled.',
      },
    ],
  },
  {
    category: 'Development Services (For Clients & Experts)',
    items: [
      {
        question: 'What type of development work does TechLambda support?',
        answer:
          'We provide expertise in web and mobile app development, software engineering, UI/UX design, WordPress, Shopify, CMS platforms, AI/ML, and data analytics.',
      },
      {
        question: 'How can I hire a developer through TechLambda?',
        answer:
          'Post your project requirement. Experts will respond with proposals. You can choose the best fit based on skills, ratings, and experience.',
      },
      {
        question: 'How do I ensure quality from developers?',
        answer:
          'Review profiles, ratings, and communicate clearly. TechLambda also supports milestone-based payment options to release funds upon verified completion.',
      },
      {
        question: 'How is payment handled for development projects?',
        answer:
          'You can pay directly or through TechLambda’s secure payment system using agreed-upon milestones for added assurance.',
      },
      {
        question: 'I’m a developer—how do I get work on TechLambda?',
        answer:
          'Register as an expert, create and complete your profile, apply for projects or receive direct client requests based on your skills.',
      },
      {
        question: 'Do I need a contract for freelance work?',
        answer:
          'A formal contract isn’t mandatory through TechLambda, but it’s advised to confirm all project details, pricing, and timelines in writing through the platform’s chat system.',
      },
    ],
  },
  {
    category: 'Account Management',
    items: [
      {
        question: 'How to change my phone number or email?',
        answer:
          'Phone: Go to ‘Profile Settings’ → Edit your number → Verify with OTP. Email: Go to ‘Account Settings’ → Update email → Confirm via the verification link.',
      },
      {
        question: 'How to delete my account?',
        answer:
          'Send an email to hr@techlambda.com from your registered email ID. Your account will be deleted within 3–5 business days after verification.',
      },
    ],
  },
];

const FaqPage: React.FC = () => {
  const [open, setOpen] = useState<{ [key: number]: number | null }>({});

  const handleToggle = (catIndex: number, qIndex: number) => {
    setOpen((prev) => ({
      ...prev,
      [catIndex]: prev[catIndex] === qIndex ? null : qIndex,
    }));
  };

  return (
    <div className="px-6 md:px-20 py-12 bg-background text-textPrimary min-h-screen">
      <h1 className="text-4xl font-bold text-primary mb-10 text-center">
        TechLambda – Frequently Asked Questions (FAQs)
      </h1>

      {faqs.map((section, secIndex) => (
        <div key={secIndex} className="mb-12">
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            {section.category}
          </h2>
          {section.items.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg mb-3 p-5 shadow-sm hover:shadow transition-all cursor-pointer"
              onClick={() => handleToggle(secIndex, index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {open[secIndex] === index && (
                <p className="text-textSecondary mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      ))}

      <div className="mt-12 text-center text-lg">
        <p>
          Still have questions?{' '}
          <a
            href="mailto:hr@techlambda.com"
            className="text-primary font-semibold underline"
          >
            Contact us at hr@techlambda.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default FaqPage;
