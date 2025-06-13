import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import {
  FaLandmark,
  FaGopuram,
  FaPagelines,
  FaCity,
  FaMonument,
  FaToriiGate,
  FaChurch,
  FaUniversity,
  FaClock
} from 'react-icons/fa';

const languages = [
  { title: 'English tutors', count: '33,602 teachers', icon: <FaClock /> },
  { title: 'Spanish tutors', count: '10,056 teachers', icon: <FaGopuram /> },
  { title: 'French tutors', count: '3,714 teachers', icon: <FaPagelines /> },
  { title: 'German tutors', count: '1,518 teachers', icon: <FaCity /> },
  { title: 'Italian tutors', count: '2,542 teachers', icon: <FaMonument /> },
  { title: 'Chinese tutors', count: '5,253 teachers', icon: <FaLandmark /> },
  { title: 'Arabic tutors', count: '3,651 teachers', icon: <FaUniversity /> },
  { title: 'Japanese tutors', count: '2,902 teachers', icon: <FaToriiGate /> },
  { title: 'Portuguese tutors', count: '1,635 teachers', icon: <FaChurch /> },
];

const LanguageCategory = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/find-tutors');
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-fuchsia-500">Language Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {languages.map((lang, idx) => (
          <div
            key={idx}
            onClick={handleCardClick}
            className="flex justify-between items-center p-6 bg-white rounded-lg shadow cursor-pointer border hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <div className="text-3xl text-fuchsia-300">{lang.icon}</div>
              <div>
                <h3 className="text-lg font-bold">{lang.title}</h3>
                <p className="text-sm text-gray-500">{lang.count}</p>
              </div>
            </div>
            <FaArrowRight className="text-gray-400" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguageCategory;
