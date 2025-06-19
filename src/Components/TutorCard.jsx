import React from 'react';
import { Link } from 'react-router';

const TutorCard = ({ tutor }) => {
  const {_id, userName, rating, language, description, image } = tutor;

  return (
    <div className="flex border border-fuchsia-500 rounded-xl shadow-lg p-6 items-center space-x-6 max-w-4xl mx-auto my-6 bg-white cursor-pointer hover:bg-fuchsia-50 transition duration-300">
      
      {/* Profile Image - Bigger Size */}
      <img
        src={image}
        alt={userName}
        className="w-32 h-32 rounded-full object-cover border-4 border-fuchsia-400"
      />

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-fuchsia-700 mb-1">
          {userName} <span className="text-yellow-500 text-lg">⭐ {rating || 5}</span>
        </h2>
        <p className="text-base text-gray-700 font-medium mb-1">Language: {language}</p>
        <p className="text-gray-700 text-sm mb-4">{description}</p>

       <Link to={`/tutorial/${_id}`}>
        <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-5 py-2.5 rounded-md text-sm shadow-md transition cursor-pointer">
          View Details
        </button>
       </Link>
      </div>
    </div>
  );
};

export default TutorCard;
