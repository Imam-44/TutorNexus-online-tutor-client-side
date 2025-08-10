import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const HomeLayout = () => {
  return (
     <>
      <header>
         <Navbar/>
      </header>
      
      <main className='pt-16'>
          <Outlet/>
      </main>

      <footer>
      <Footer/>     
     </footer> 
     </>
  );
};

export default HomeLayout;