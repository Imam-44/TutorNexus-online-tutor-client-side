import React from 'react';
import { Link } from 'react-router'; // corrected import

const TutorCard = ({ tutor }) => {
  const { _id, userName, rating, language, description, image } = tutor;

  return (
    <div className="flex flex-col sm:flex-row border border-fuchsia-500 rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto my-6 bg-white hover:shadow-xl hover:bg-fuchsia-50 transition duration-300">
      
      {/* Left - Profile Image */}
      <div className="sm:w-1/3 flex justify-center items-center p-4 ">
        <img
          src={image || 'https://via.placeholder.com/150'}
          alt={userName}
          className="w-32 h-32 sm:w-full sm:h-full object-cover rounded-full sm:rounded border-4 border-fuchsia-400 "
        />
      </div>

      {/* Right - Details */}
      <div className="sm:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-fuchsia-700 mb-1 flex items-center gap-2">
            {userName}
            <span className="text-yellow-500 text-lg">⭐ {rating || 5}</span>
          </h2>
          <p className="text-base text-gray-700 font-medium mb-1">
            Language: {language}
          </p>
          <p className="text-gray-700 text-sm mb-4 line-clamp-3">
            {description}
          </p>
        </div>

        <div>
          <Link to={`/tutorial/${_id}`}>
            <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-5 py-2.5 rounded-md text-sm shadow-md transition cursor-pointer">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
