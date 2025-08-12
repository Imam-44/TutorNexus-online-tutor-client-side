import React from 'react';

const RefundPolicy = () => {
  return (
    <div className='p-6'>
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg my-12">
        <h1 className="text-5xl font-extrabold mb-8 text-fuchsia-600 border-b-4 border-fuchsia-500 pb-3">
          Refund Policy
        </h1>

        <p className="text-lg text-gray-800 mb-6 leading-relaxed">
          We want you to be satisfied with your experience at <span className="font-semibold">TutorNexus</span>. Please read our refund policy carefully:
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg leading-7">
          <li>Refund requests must be submitted within <span className="font-semibold">7 days</span> of booking.</li>
          <li>No refunds will be issued after a tutoring session has started.</li>
          <li>Refunds will be processed to the original payment method within 5-7 business days.</li>
          <li>In cases of tutor cancellation or technical difficulties, exceptions may apply.</li>
          <li>Please contact our support team for any refund requests or questions.</li>
        </ul>

        <p className="mt-8 text-gray-700 text-lg leading-relaxed">
          Thank you for trusting <span className="font-semibold">TutorNexus</span> with your language learning journey.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
