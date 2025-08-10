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
  { title: 'English',  icon: <FaClock /> },
  { title: 'Spanish', icon: <FaGopuram /> },
  { title: 'French',  icon: <FaPagelines /> },
  { title: 'German',  icon: <FaCity /> },
  { title: 'Italian',  icon: <FaMonument /> },
  { title: 'Chinese',  icon: <FaLandmark /> },
  { title: 'Arabic',  icon: <FaUniversity /> },
  { title: 'Japanese',  icon: <FaToriiGate /> },
  { title: 'Portuguese', icon: <FaChurch /> },
];

const LanguageCategory = () => {
  const navigate = useNavigate();

  const handleCardClick = (language) => {
   
    navigate(`/find-tutors?lang=${language.toLowerCase()}`);
  };

  return (
    <section className="w-11/12 mx-auto px-4 py-10">
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
