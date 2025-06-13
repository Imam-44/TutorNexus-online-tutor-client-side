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
       <Outlet/>

      <footer>
      <Footer/>     
     </footer> 
     </>
  );
};

export default HomeLayout;