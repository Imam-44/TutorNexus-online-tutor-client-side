import React from 'react';

const LearnerReview = () => {
  return (
    <div className='bg-fuchsia-100'>
      <section className=" w-11/12 mx-auto py-12 px-4 md:px-10 mt-10">
        <h2 className="text-3xl font-bold text-center text-fuchsia-700 mb-8">What Our Learners Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-700 italic">“The platform is super easy to use, and my Spanish tutor was amazing. Highly recommended!”</p>
            <p className="mt-4 font-semibold text-fuchsia-600">— Ayesha R.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-700 italic">“I love how I can choose tutors based on their reviews. I’ve improved my French speaking skills a lot!”</p>
            <p className="mt-4 font-semibold text-fuchsia-600">— Tanvir H.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-700 italic">“Affordable pricing and great flexibility. I could learn Japanese after work hours easily!”</p>
            <p className="mt-4 font-semibold text-fuchsia-600">— Rina M.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LearnerReview;