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
  { title: 'English', count: '33,602 teachers', icon: <FaClock /> },
  { title: 'Spanish', count: '10,056 teachers', icon: <FaGopuram /> },
  { title: 'French', count: '3,714 teachers', icon: <FaPagelines /> },
  { title: 'German', count: '1,518 teachers', icon: <FaCity /> },
  { title: 'Italian', count: '2,542 teachers', icon: <FaMonument /> },
  { title: 'Chinese', count: '5,253 teachers', icon: <FaLandmark /> },
  { title: 'Arabic', count: '3,651 teachers', icon: <FaUniversity /> },
  { title: 'Japanese', count: '2,902 teachers', icon: <FaToriiGate /> },
  { title: 'Portuguese', count: '1,635 teachers', icon: <FaChurch /> },
];

const LanguageCategory = () => {
  const navigate = useNavigate();

  const handleCardClick = (language) => {
    // URL query দিয়ে পাঠিয়ে দিচ্ছি
    navigate(`/find-tutors?lang=${language.toLowerCase()}`);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-fuchsia-500">Language Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {languages.map((lang, idx) => (
          <div
            key={idx}
            onClick={() => handleCardClick(lang.title)}
            className="flex justify-between items-center p-6 bg-white rounded-lg shadow cursor-pointer border hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <div className="text-3xl text-fuchsia-300">{lang.icon}</div>
              <div>
                <h3 className="text-lg font-bold">{lang.title} Tutors</h3>
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
