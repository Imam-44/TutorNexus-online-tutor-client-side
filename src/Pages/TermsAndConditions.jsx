import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className='py-6'>
       <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg my-12">
      <h1 className="text-5xl font-extrabold mb-8 text-fuchsia-600 border-b-4 border-fuchsia-500 pb-3">
        Terms & Conditions
      </h1>

      <p className="text-lg text-gray-800 mb-6 leading-relaxed">
        Welcome to <span className="font-semibold">TutorNexus</span>. By using our services, you agree to comply with and be bound by the following terms and conditions.
      </p>

      <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg leading-7">
        <li>You must be at least <span className="font-semibold">18 years old</span> to use this platform.</li>
        <li>All content provided is for <span className="italic">educational purposes only</span>.</li>
        <li>Users are responsible for maintaining the confidentiality of their accounts and passwords.</li>
        <li>Booking and payment terms must be strictly followed as outlined on the site.</li>
        <li>We reserve the right to modify these terms at any time without prior notice.</li>
      </ul>

      <p className="mt-8 text-gray-700 text-lg leading-relaxed">
        For full details, please read all sections carefully. If you have any questions, feel free to contact our support team.
      </p>
    </div>
    </div>
  );
};

export default TermsAndConditions;
