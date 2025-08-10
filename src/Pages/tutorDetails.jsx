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
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row p-10  m-10 gap-8 items-center md:items-start">
      <ToastContainer />
      {/* Left side image */}
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src={image}
          alt={userName}
          className="w-full h-auto rounded-lg object-cover border-4 border-fuchsia-400"
        />
      </div>

      {/* Right side info */}
      <div className="flex-1 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold text-fuchsia-700">
            {userName} <span className="text-yellow-500 text-2xl ml-3">⭐ {rating || 5}</span>
          </h2>
          <p className="text-fuchsia-700 font-extrabold text-3xl">BDT {price}</p>
        </div>

        <p className="text-xl font-semibold text-gray-800">Language: <span className="font-normal">{language}</span></p>

        <p className="text-gray-700 leading-relaxed text-lg">{description}</p>

        <button
          onClick={handleBook}
          className="w-full md:w-auto bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-10 py-4 rounded-md font-semibold shadow-md transition duration-300"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TutorDetails;
