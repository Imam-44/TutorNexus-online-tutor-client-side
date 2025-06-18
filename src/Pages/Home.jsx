import React, { useState } from 'react';
import Hero from '../Components/Hero';
import Stats from '../Components/Stats';
import LanguageCategory from '../Components/LanguageCategory';
import { useLoaderData } from 'react-router';
import MyTutorials from './MyTutorials';
import TutorCard from '../Components/TutorCard';

const Home = () => {
  const data = useLoaderData();
  const [tutorials, setTutorials] = useState(data?.data || [])
  console.log(data.data);
  return (
     <>
       <Hero/>
       <Stats/>
       {/* lagnguage category  */}
       {
        tutorials.map(tutorial => {
         return <TutorCard key={tutorial._id} tutor={tutorial}/>
        })
       }
       
     </>
  );
};

export default Home;