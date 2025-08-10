import React, { useEffect } from "react";
import Hero from "../Components/Hero";
import Stats from "../Components/Stats";
import LanguageCategory from "../Components/LanguageCategory";
import WhyLearnWithUs from "../Components/WhyLearnWithUs";
import LearnerReview from "../Components/LearnerReview";
import AnimatedSection from "../Components/AnimatedSection";


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);  
  }, []);

  return (
    <div className="bg-base-300">
      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      <AnimatedSection>
        <Stats />
      </AnimatedSection>

      <AnimatedSection>
        <LanguageCategory />
      </AnimatedSection>

      <AnimatedSection>
        <WhyLearnWithUs />
      </AnimatedSection>

      <AnimatedSection>
        <LearnerReview />
      </AnimatedSection>
    </div>
  );
};

export default Home;
