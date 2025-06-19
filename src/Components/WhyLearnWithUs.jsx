import React from 'react';

const WhyLearnWithUs = () => {
  return (
     <div className='w-11/12 mx-auto'>
      <section className="bg-white py-12 px-4 md:px-10">
  <h2 className="text-3xl font-bold text-center text-fuchsia-700 mb-6">Why Learn with Us?</h2>
  <div className="grid md:grid-cols-3 gap-6">
    <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-fuchsia-600 mb-2">Expert Tutors</h3>
      <p className="text-gray-600">All our tutors are verified and experienced in teaching languages effectively, both online and offline.</p>
    </div>
    <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-fuchsia-600 mb-2">Flexible Scheduling</h3>
      <p className="text-gray-600">Learn anytime from anywhere. Choose your preferred time and get one-on-one tutoring based on your convenience.</p>
    </div>
    <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-fuchsia-600 mb-2">Affordable Pricing</h3>
      <p className="text-gray-600">Quality language learning doesn’t have to be expensive. We offer sessions starting from just BDT 200.</p>
    </div>
  </div>
</section>

     </div>
  );
};

export default WhyLearnWithUs;