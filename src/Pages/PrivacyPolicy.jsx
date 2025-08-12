import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className='p-6'>
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg my-12">
        <h1 className="text-5xl font-extrabold mb-8 text-fuchsia-600 border-b-4 border-fuchsia-500 pb-3">
          Privacy Policy
        </h1>

        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          At <span className="font-semibold">TutorNexus</span>, your privacy is our priority. This policy explains how we collect, use, and protect your personal information.
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg leading-7">
          <li>We collect information only when you register or book a tutor.</li>
          <li>Personal data is securely stored and never shared with third parties without your consent.</li>
          <li>Cookies are used to enhance your experience and analyze site traffic.</li>
          <li>You can request to view or delete your personal information at any time.</li>
          <li>We comply with all relevant data protection laws and regulations.</li>
        </ul>

        <p className="mt-8 text-gray-700 text-lg leading-relaxed">
          If you have any concerns regarding your data privacy, please contact our support team for assistance.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
