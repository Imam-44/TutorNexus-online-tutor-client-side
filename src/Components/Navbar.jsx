import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("sign out user");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-fuchsia-500 border-b-4 border-fuchsia-500 pb-1 font-semibold text-lg"
      : "font-semibold text-lg";

  return (
    <div className='shadow-sm'>
      <div className="navbar max-w-7xl mx-auto bg-base-100">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-fuchsia-500 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
              </svg>
            </div>
            <ul tabIndex={0} className="menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
              <li><NavLink to="/find-tutors" className={navLinkClass}>Find Tutors</NavLink></li>
              <li><NavLink to="/add-tutorials" className={navLinkClass}>Add Tutorials</NavLink></li>
              <li><NavLink to={`/my-tutorials/${user?.email}`} className={navLinkClass}>My Tutorials</NavLink></li>
              <li><NavLink to="/my-booked-tutors" className={navLinkClass}>My Booked Tutors</NavLink></li>
            </ul>
          </div>
          <Link to="/" className="text-3xl font-bold text-fuchsia-500">TutorNexus</Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-4">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/find-tutors" className={navLinkClass}>Find Tutors</NavLink></li>
            <li><NavLink to="/add-tutorials" className={navLinkClass}>Add Tutorials</NavLink></li>
            <li><NavLink to={`/my-tutorials/${user?.email}`} className={navLinkClass}>My Tutorials</NavLink></li>
            <li><NavLink to="/my-booked-tutors" className={navLinkClass}>My Booked Tutors</NavLink></li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-4">
          {user ? (
            <>
              {/* Profile Image with Tooltip Name */}
              <div className="relative group">
                <img
                  className="w-10 h-10 rounded-full border-2 border-fuchsia-500 object-cover cursor-pointer"
                  src={user.photoURL}
                  alt="User Profile"
                  title={user.displayName}
                />
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3
                  bg-fuchsia-500 text-white text-sm font-semibold rounded px-3 py-1 shadow-lg
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 whitespace-nowrap">
                  {user.displayName}
                </div>
              </div>

              {/* Sign Out Button */}
              <button onClick={handleSignOut} className="btn bg-fuchsia-500 text-white">
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/sign-in" className="btn bg-fuchsia-500 text-white">Sign In</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
