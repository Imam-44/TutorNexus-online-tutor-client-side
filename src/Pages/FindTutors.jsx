import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TutorCard from '../Components/TutorCard';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';

const FindTutors = () => {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const lang = searchParams.get('lang') || '';
  const [searchTerm, setSearchTerm] = useState(lang);

  useEffect(() => {
    setLoading(true);

    const url = lang
      ? `${import.meta.env.VITE_API_URL}/tutorials-by-language/${lang}`
      : `${import.meta.env.VITE_API_URL}/tutorials`;

    axios.get(url)
      .then(res => setTutorials(res.data))
      .catch(err => console.error('Failed to load tutorials:', err))
      .finally(() => setLoading(false));
  }, [lang]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/find-tutors?lang=${searchTerm.trim().toLowerCase()}`);
    } else {
      navigate(`/find-tutors`);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-fuchsia-600 mb-6 text-center">
        {lang ? `Tutors for "${lang}"` : 'All Tutors'}
      </h2>

      {/* 🔍 Search Bar */}
      <form onSubmit={handleSearch} className=" w-8/12 mx-auto mb-10 flex gap-2 ">
        <input
          type="text"
          placeholder="Search by language (e.g., English, Spanish)"
          className="input input-bordered w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="btn bg-fuchsia-500 text-white">Search</button>
      </form>

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
