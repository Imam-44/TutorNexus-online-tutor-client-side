import React from 'react';


const tutors = [
  {
    id: 1,
    name: 'John Doe',
    education: 'M.A. in English Literature',
    rating: 4.8,
    description: 'Experienced English tutor specializing in conversational skills and exam preparation.',
    image: 'https://i.ibb.co.com/prfR3cmb/smiling-showing-one-male-teacher-wearing-glasses-holding-number-fans-sitting-table-with-school-tools.jpg',
  },
  {
    id: 2,
    name: 'Maria Garcia',
    education: 'B.A. in Spanish Language',
    rating: 4.9,
    description: 'Passionate Spanish tutor helping beginners and advanced learners alike.',
    image: 'https://i.ibb.co.com/JwRJ9x2K/beautiful-happy-young-woman-writer-wearing-stylish-glasses-typing-keyboard-her-modern-laptop-pc-2736.jpg',
  },
  {
    id: 3,
    name: 'Akira Tanaka',
    education: 'Ph.D. in Japanese Linguistics',
    rating: 5.0,
    description: 'Expert Japanese tutor focusing on grammar, writing, and conversation.',
    image: 'https://i.ibb.co.com/B2g8VbtB/pretty-korean-female-scholar-green-sweater-holds-takeaway-coffee-cup-prepares-research-home-poses-ag.jpg',
  },
];

const LanguageTutorsSection = () => {
  return (
    <section className="w-11/12 mx-auto py-12">
      <h2 className="text-3xl font-bold text-fuchsia-500 mb-8 text-center">Meet Our Language Tutors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {tutors.map(tutor => (
          <div key={tutor.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img
              src={tutor.image}
              alt={tutor.name}
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-fuchsia-400"
            />
            <h3 className="text-xl font-semibold mb-1">{tutor.name}</h3>
            <p className="text-fuchsia-600 font-medium mb-1">{tutor.education}</p>
            <p className="mb-2 text-yellow-500 font-semibold">Rating: {tutor.rating} ★</p>
            <p className="text-gray-600">{tutor.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguageTutorsSection;
