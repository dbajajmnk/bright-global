import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xdkzproo");

  if (state.succeeded) {
    return (
      <p className="text-green-600 font-semibold">
        ✅ Thanks for contacting us!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="space-y-6 max-w-xl"
    >
      <div>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name" // ✅ Required for Formspree
          required
          className="w-full p-2 border rounded"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email" // ✅ Required
          required
          className="w-full p-2 border rounded"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone" // ✅ Optional but should be named
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message" // ✅ Required
          required
          className="w-full p-2 border rounded"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {state.submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default ContactForm;
