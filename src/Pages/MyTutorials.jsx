import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import TutorCard from '../Components/TutorCard';

const MyTutorials = () => {
   const data = useLoaderData();
  const [tutorials, setTutorials] = useState(data?.data || [])
  console.log(data.data);
  return (
     <>
     
       {
        tutorials.map(tutorial => {
         return <TutorCard key={tutorial._id} tutor={tutorial}/>
        })
       }
       
     </>
  );
};

export default MyTutorials;