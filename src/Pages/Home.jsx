import React from 'react';
import Hero from '../Components/Hero';
import Stats from '../Components/Stats';
import LanguageCategory from '../Components/LanguageCategory';
import WhyLearnWithUs from '../Components/WhyLearnWithUs';
import LearnerReview from '../Components/LearnerReview';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <LanguageCategory />
      <WhyLearnWithUs/>
      <LearnerReview/>
    </>
  );
};

export default Home;
