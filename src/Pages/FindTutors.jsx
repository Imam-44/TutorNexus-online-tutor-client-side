import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TutorCard from '../Components/TutorCard';
import { useSearchParams } from 'react-router-dom';
import Loading from '../Components/Loading';

const FindTutors = () => {
  const [tutorials, setTutorials] = useState([]);
  const [searchParams] = useSearchParams();
  const lang = searchParams.get('lang');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Loading true on every fetch start

    const url = lang
      ? `${import.meta.env.VITE_API_URL}/tutorials-by-language/${lang}`
      : `${import.meta.env.VITE_API_URL}/tutorials`;

    axios.get(url)
      .then(res => setTutorials(res.data))
      .catch(err => console.error('Failed to load tutorials:', err))
      .finally(() => setLoading(false));
  }, [lang]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-fuchsia-600 mb-8 text-center">
        {lang ? `Tutors for "${lang}"` : 'All Tutors'}
      </h2>

      {tutorials.length === 0 ? (
        <p className="text-center text-gray-500">No tutors found.</p>
      ) : (
        <div className="">
          {tutorials.map(tutor => (
            <TutorCard key={tutor._id} tutor={tutor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FindTutors;
