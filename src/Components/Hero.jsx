import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const slides = [
  {
    title: 'Connect with Expert Language Tutors',
    description:
      'Join a global community of learners and connect with experienced language tutors from around the world. Whether you want to improve your English, learn Spanish, or master Japanese, our platform helps you find the perfect tutor tailored to your goals.',
    image: '/assets/slider-1.jpg',
  },
  {
    title: 'Learn Anytime, Anywhere',
    description:
      'Enjoy flexible learning with online lessons that fit your schedule. Use video chat, interactive tools, and personalized lesson plans to make your language learning journey effective and engaging right from the comfort of your home.',
    image: '/assets/slider-2.jpg',
  },
  {
    title: 'Grow Your Language Skills',
    description:
      "Track your progress, receive instant feedback, and build real conversational skills. Whether you're a beginner or preparing for language exams, our tutors provide the guidance you need to speak confidently and fluently.",
    image: '/assets/slider-3.jpg',
  },
];



const Hero = () => {
  return (
    <div className="w-full h-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-[600px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={`slide-${index}`}
                className="w-full h-full object-cover object-top "
              />
              <div className="absolute inset-0 bg-black/60 flex items-center px-8 md:px-20">
                <div className="text-white max-w-xl space-y-6 animate-fade-in-left">
                  <h2 className="text-3xl text-fuchsia-500 md:text-5xl font-bold transition-all duration-1000">
                    
                    <span className="text-fuchsia-500">
  
                      {slide.title}
                    </span>
                  </h2>
                  <p className="text-lg  md:text-xl whitespace-pre-line transition-opacity duration-1000">
                    {slide.description}
                  </p>
                  <div className="flex gap-4">
                    <button className="bg-fuchsia-500 text-white px-10 py-2 rounded-full hover:bg-fuchsia-400 transition duration-300 cursor-pointer">
                      Explore
                    </button>
                    <button className="bg-transparent border border-white px-10 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 cursor-pointer">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
