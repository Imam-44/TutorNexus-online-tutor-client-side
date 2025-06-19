import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaTimesCircle } from 'react-icons/fa';

const TutorDetails = () => {
  const { user } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const { data: tutorial } = useLoaderData();
  const { _id, userName, price, language, description, image, book = [], email, rating } = tutorial;

  const handleBook = async () => {
    if (user?.email === email) {
      toast.warn(<span><FaExclamationTriangle className="inline mr-2" /> You cannot book your own tutorial.</span>, {
        position: "top-center"
      });
      return;
    }

    if (book.includes(user.email)) {
      toast.info(<span><FaInfoCircle className="inline mr-2" /> You have already booked this tutor.</span>, {
        position: "top-center"
      });
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/book-tutorial`, {
        tutorialId: _id,
        userEmail: user.email
      });

      if (response.data.success) {
        toast.success(<span><FaCheckCircle className="inline mr-2" /> Booking successful!</span>, {
          position: "top-center"
        });
        setTimeout(() => {
          navigate('/my-booked-tutors');
        }, 1500);
      }
    } catch (error) {
      console.error(error);
      toast.error(<span><FaTimesCircle className="inline mr-2" /> Something went wrong. Please try again.</span>, {
        position: "top-center"
      });
    }
  };

  return (
    <div className="flex border border-fuchsia-500 rounded-xl shadow-lg p-6 items-center space-x-6 max-w-4xl mx-auto my-6 bg-white hover:bg-fuchsia-50 transition duration-300">
      <ToastContainer />
      <img src={image} alt={userName} className="w-32 h-32 rounded-full object-cover border-4 border-fuchsia-400" />

      <div className="flex-1">
        <div className='flex justify-between'>
          <h2 className="text-2xl font-bold text-fuchsia-700 mb-1">
            Name: {userName} <span className="text-yellow-500 text-lg">⭐ {rating || 5}</span>
          </h2>
          <p className="text-fuchsia-700 font-bold text-xl mb-4">BDT: {price}</p>
        </div>

        <p className="text-base text-gray-700 font-medium mb-1">Language: {language}</p>
        <p className="text-gray-600 text-sm mb-4">Details: {description}</p>

        <button
          onClick={handleBook}
          className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-5 py-2.5 rounded-md text-sm shadow-md transition cursor-pointer w-full"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TutorDetails;
