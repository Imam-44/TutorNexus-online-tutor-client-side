import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
  return (
     <div className='py-15'>
       <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-11/12  mx-auto'>
       <div>  
         <h2  className='text-3xl font-bold text-gray-700 text-center'><CountUp end={45000}  duration={7}  />+ </h2>
          <h1 className='text-gray-600 font-semibold text-center'>Expreienced tutors</h1>   
       </div>
       <div>  
         <h2  className='text-3xl font-bold text-gray-700 text-center'><CountUp end={30000}  duration={7}  />+ </h2>
          <h1 className='text-gray-600 font-semibold text-center'>5-star tutor reviews</h1>   
       </div>
       <div>  
         <h2  className='text-3xl font-bold text-gray-700 text-center'><CountUp end={120}  duration={7}  />+ </h2>
          <h1 className='text-gray-600 font-semibold text-center'>Subjects taught</h1>   
       </div>
       <div>  
         <h2  className='text-3xl font-bold text-gray-700 text-center'><CountUp end={180}  duration={7}  />+ </h2>
          <h1 className='text-gray-600 font-semibold text-center'>Tutor nationalities</h1>   
       </div>
      
             
          
       </div>
     </div>
  );
};

export default Stats;