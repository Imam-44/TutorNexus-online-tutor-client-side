import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

  const {user, signOutUser} = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
    .then(()=> {
      console.log("sign out user");
    })
    .catch((error) => {
      console.log(error.message);
    })
  }

  const navLinkClass = ({ isActive }) => {
   return isActive ? "text-fuchsia-500 border-b-4 border-fuchsia-500 pb-1 font-semibold text-lg"
      : "font-semibold text-lg";
  }
  return (
    <>
      <div className='shadow-sm'>
        <div className="navbar max-w-11/12 mx-auto bg-base-100 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost text-fuchsia-500  lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li className='font-semibold text-lg'><NavLink to={'/'} className={navLinkClass}>Home</NavLink></li>

    
              <li className='font-semibold text-lg'>
                <NavLink to={'/find-tutors'} className={navLinkClass}>Find tutors
              </NavLink></li>
              <li className='font-semibold text-lg'>
                <NavLink to={'/add-tutorials'} className={navLinkClass}>Add Tutorials  </NavLink> </li>

              <li className='font-semibold text-lg'>
                <NavLink to={'/my-tutorials'} className={navLinkClass}>My Tutorials  </NavLink></li>

              <li className='font-semibold text-lg'>
                <NavLink to={'/my-booked-tutors'} className={navLinkClass}>My booked tutorials  </NavLink></li>

              </ul>
            </div>
            <a className=" text-4xl font-semibold text-fuchsia-500">TutorNexus</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal px-1 gap-4">
              <li className='font-semibold text-lg'><NavLink to={'/'} className={navLinkClass}>Home</NavLink></li>

              <li className='font-semibold text-lg'>
                <NavLink to={'/find-tutors'} className={navLinkClass}>Find tutors
              </NavLink></li>
              <li className='font-semibold text-lg'>
                <NavLink to={'/add-tutorials'} className={navLinkClass}>Add Tutorials  </NavLink> </li>

              <li className='font-semibold text-lg'>
                <NavLink to={'/my-tutorials'} className={navLinkClass}>My Tutorials  </NavLink></li>

              <li className='font-semibold text-lg'>
                <NavLink to={'/my-booked-tutors'} className={navLinkClass}>My booked tutors  </NavLink></li>

            </ul>
          </div>
          <div className="navbar-end">
           {
            user ?  <Link onClick={handleSignOut}  className="btn bg-fuchsia-500 text-white">Sign Out</Link> :  <Link to={'/sign-in'} className="btn bg-fuchsia-500 text-white">Sign In</Link>
           }
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;