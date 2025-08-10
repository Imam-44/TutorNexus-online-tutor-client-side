import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import ScrollToTop from '../context/ScrollToTop';

const HomeLayout = () => {
  return (
     <>
      <header>
         <Navbar/>
      </header>
      <ScrollToTop />
      <main className='pt-16 bg-base-300'>
          <Outlet/>
      </main>

      <footer>
      <Footer/>     
     </footer> 
     </>
  );
};

export default HomeLayout;