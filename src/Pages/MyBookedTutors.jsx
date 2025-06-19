import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const MyBookedTutors = () => {
  const { user } = React.useContext(AuthContext);
  const [bookedTutorials, setBookedTutorials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;
    axios.get(`${import.meta.env.VITE_API_URL}/my-booked-tutorials/${user.email}`)
      .then(res => {
        setBookedTutorials(res.data);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user?.email]);

  const handleReview = async (id) => {
    try {
      const res = await axios.patch(`${import.meta.env.VITE_API_URL}/tutorial/${id}/review`);
      if (res.data.success) {
       
        setBookedTutorials(prev =>
          prev.map(tutor =>
            tutor._id === id
              ? { ...tutor, review: (tutor.review || 0) + 1 }
              : tutor
          )
        );
      }
    } catch (error) {
      console.error('Failed to update review:', error);
    }
  };

  if (loading) return <p>Loading your booked tutorials...</p>;
  if (bookedTutorials.length === 0) return <p>You have no booked tutorials yet.</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-fuchsia-700">My Booked Tutors</h1>
      <div className="space-y-6">
        {bookedTutorials.map(tutor => (
          <div
            key={tutor._id}
            className="flex border border-fuchsia-400 rounded-lg shadow-md p-4 items-center space-x-4 bg-white"
          >
            <img
              src={tutor.image}
              alt={tutor.userName}
              className="w-20 h-20 rounded-full object-cover border-2 border-fuchsia-400"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-fuchsia-700">{tutor.userName}</h2>
              <p className="text-gray-600">Language: {tutor.language}</p>
              <p className="text-gray-700 font-bold">Price: BDT {tutor.price}</p>
              <p className="text-gray-700 font-semibold">Reviews: {tutor.review || 0}</p>
              <button
                onClick={() => handleReview(tutor._id)}
                className="mt-2 px-3 py-1 bg-fuchsia-500 text-white rounded hover:bg-fuchsia-600 w-full cursor-pointer"
              >
                Review
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookedTutors;
