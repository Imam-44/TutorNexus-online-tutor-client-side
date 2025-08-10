import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import axios from 'axios';

const Stats = () => {
  const [stats, setStats] = useState({
    totalTutorials: 0,
    totalReviews: 0,
    totalLanguages: 0,
    totalUsers: 0
  });

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/stats`)
      .then(res => setStats(res.data))
      .catch(err => console.error('Failed to fetch stats:', err));
  }, []);

  // Common card styles
  const cardClass = "bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-transform hover:scale-105 hover:shadow-xl";

  return (
    <div className='py-16 '>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 w-11/12 mx-auto'>
        <div className={cardClass}>
          <h2 className='text-4xl font-extrabold text-fuchsia-600'>
            <CountUp end={stats.totalTutorials} duration={3} />+
          </h2>
          <h1 className='text-gray-700 font-semibold mt-3 text-center'>Experienced Tutors</h1>
        </div>

        <div className={cardClass}>
          <h2 className='text-4xl font-extrabold text-fuchsia-600'>
            <CountUp end={stats.totalReviews} duration={3} />+
          </h2>
          <h1 className='text-gray-700 font-semibold mt-3 text-center'>5-star Tutor Reviews</h1>
        </div>

        <div className={cardClass}>
          <h2 className='text-4xl font-extrabold text-fuchsia-600'>
            <CountUp end={stats.totalLanguages} duration={3} />+
          </h2>
          <h1 className='text-gray-700 font-semibold mt-3 text-center'>Languages Taught</h1>
        </div>

        <div className={cardClass}>
          <h2 className='text-4xl font-extrabold text-fuchsia-600'>
            <CountUp end={stats.totalUsers} duration={3} />+
          </h2>
          <h1 className='text-gray-700 font-semibold mt-3 text-center'>Registered Users</h1>
        </div>
      </div>
    </div>
  );
};

export default Stats;
