import React from 'react';

const CybersecurityBlog: React.FC = () => {
  return (
    <section className="px-6 md:px-20 py-10 max-w-4xl mx-auto text-textPrimary">
      <h1 className="text-4xl font-bold text-primary mb-2">Cybersecurity: Why It Matters More Than Ever</h1>
      <p className="text-sm text-gray-500 mb-6">By <strong>Ekta Prabhakar</strong> • TechLambda Blog</p>

      <p className="mb-6 text-lg">
        Let’s be honest — most of us don’t think much about cybersecurity until something goes wrong.
        Maybe you’ve received a weird email that looked almost real, or a friend messaged you saying your Instagram was hacked.
        In today’s world, things like this aren’t rare — they’re common.
      </p>

      <h2 className="text-2xl font-semibold text-secondary mt-10 mb-2">What Exactly Is Cybersecurity?</h2>
      <p className="mb-4">
        In simple terms, cybersecurity is how we protect our digital lives. It’s the combination of tools, practices,
        and habits we use to keep our data — photos, passwords, bank info, work documents — safe from people who want to steal, corrupt, or exploit it.
      </p>

      <h2 className="text-2xl font-semibold text-secondary mt-10 mb-2">Why Should I Care?</h2>
      <p className="mb-4">
        Great question. Here’s the thing: you don’t have to be rich or famous to be a target. Hackers aren’t picky.
        They look for easy opportunities — and anyone who isn’t paying attention is an easy target.
      </p>

      <h2 className="text-2xl font-semibold text-secondary mt-10 mb-2">The Most Common Threats (and How to Spot Them)</h2>

      <h3 className="text-lg font-semibold mt-6">1. Phishing</h3>
      <p className="mb-4">
        You get an email that looks like it's from your bank, telling you to “verify your account.” But it’s not.
        <br /><strong>Pro tip:</strong> Always double-check the sender’s email address and never click on links unless you’re 100% sure.
      </p>

      <h3 className="text-lg font-semibold mt-6">2. Ransomware</h3>
      <p className="mb-4">
        This one's a nightmare. Your files get locked and the hacker demands money to unlock them.
        <br /><strong>Best defense:</strong> Back up your data regularly and avoid sketchy downloads.
      </p>

      <h3 className="text-lg font-semibold mt-6">3. Malware</h3>
      <p className="mb-4">
        Malicious software that sneaks into your device and causes damage.
        <br /><strong>Stay safe:</strong> Use antivirus software and keep your system updated.
      </p>

      <h2 className="text-2xl font-semibold text-secondary mt-10 mb-2">How to Stay Safer Online</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Use strong passwords (don’t reuse them)</li>
        <li>Enable two-factor authentication (2FA)</li>
        <li>Be cautious of unknown links or offers</li>
        <li>Keep your apps and systems updated</li>
        <li>Back up your data regularly</li>
      </ul>

      <h2 className="text-2xl font-semibold text-secondary mt-10 mb-2">Looking Ahead</h2>
      <p className="mb-4">
        Hackers are getting smarter — but so are our defenses. AI, biometrics, and real-time monitoring are now helping stop threats before they hit.
      </p>

      <h2 className="text-2xl font-semibold text-secondary mt-10 mb-2">Final Thoughts</h2>
      <p className="mb-6">
        Cybersecurity might sound technical, but it’s really about peace of mind.
        It ensures your personal info, business, and online presence stay protected.
      </p>

      <p className="font-semibold text-primary">
        Have questions? Need guidance? Reach out at <a href="mailto:hr@techlambda.com" className="underline">hr@techlambda.com</a> <br />
        Stay safe, stay smart — and lock your digital doors.
      </p>
    </section>
  );
};

export default CybersecurityBlog;
