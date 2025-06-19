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

  return (
    <div className='py-16 bg-gradient-to-b from-fuchsia-50 to-white'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 w-11/12 mx-auto'>
        <div>
          <h2 className='text-3xl font-bold text-gray-700 text-center'>
            <CountUp end={stats.totalTutorials} duration={3} />+
          </h2>
          <h1 className='text-gray-600 font-semibold text-center'>Experienced Tutors</h1>
        </div>

        <div>
          <h2 className='text-3xl font-bold text-gray-700 text-center'>
            <CountUp end={stats.totalReviews} duration={3} />+
          </h2>
          <h1 className='text-gray-600 font-semibold text-center'>5-star Tutor Reviews</h1>
        </div>

        <div>
          <h2 className='text-3xl font-bold text-gray-700 text-center'>
            <CountUp end={stats.totalLanguages} duration={3} />+
          </h2>
          <h1 className='text-gray-600 font-semibold text-center'>Languages Taught</h1>
        </div>

        <div>
          <h2 className='text-3xl font-bold text-gray-700 text-center'>
            <CountUp end={stats.totalUsers} duration={3} />+
          </h2>
          <h1 className='text-gray-600 font-semibold text-center'>Registered Users</h1>
        </div>
      </div>
    </div>
  );
};

export default Stats;
