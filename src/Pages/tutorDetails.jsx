import React from 'react';
import { useLoaderData } from 'react-router';

const TutorDetails = () => {
  const {data:tutorial} = useLoaderData()
    const { userName, price, language, description, image,review, rating } = tutorial;
  console.log(tutorial);
  return (
     <>
         <div className="flex border border-fuchsia-500 rounded-xl shadow-lg p-6 items-center space-x-6 max-w-4xl mx-auto my-6 bg-white hover:bg-fuchsia-50 transition duration-300">
      
      {/* Profile Image - Bigger Size */}
      <img
        src={image}
        alt={userName}
        className="w-32 h-32 rounded-full object-cover border-4 border-fuchsia-400"
      />

      {/* Content */}
      <div className="flex-1">
      <div className='flex justify-between'>
           <h2 className="text-2xl font-bold text-fuchsia-700 mb-1">
         Name: {userName} <span className="text-yellow-500 text-lg">⭐ {rating || 5}</span>
         
        </h2>

        <p className="text-fuchsia-700 font-bold text-xl mb-4">
        BDT:{price}</p>
      </div>
        <p className="text-base text-gray-700 font-medium mb-1">Language: {language}</p>
        
        <p className="text-gray-700 text-sm mb-4">
        Details:{description}</p>

        <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-5 py-2.5 rounded-md text-sm shadow-md transition cursor-pointer">
          Book Now
        </button>
      </div>
    </div>
     </>
  );
};

export default TutorDetails;