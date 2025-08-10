import React, { useContext, useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FiMoon, FiSun } from 'react-icons/fi';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState('light');
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userMenuRef]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-fuchsia-500 border-b-4 border-fuchsia-500 pb-1 font-semibold text-lg"
      : "font-semibold text-lg";

  return (
    <div className='shadow-sm bg-base-100 fixed w-full top-0 z-50'>
      <div className="navbar max-w-7xl mx-auto px-4 py-3">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-fuchsia-500 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu-sm dropdown-content bg-base-100  rounded-box z-10 mt-3 w-52 p-2 shadow space-y-1">
              <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
              <li><NavLink to="/find-tutors" className={navLinkClass}>Find Tutors</NavLink></li>
              <li><NavLink to="/add-tutorials" className={navLinkClass}>Add Tutorials</NavLink></li>
              <li><NavLink to={`/my-tutorials/${user?.email}`} className={navLinkClass}>My Tutorials</NavLink></li>
              <li><NavLink to="/my-booked-tutors" className={navLinkClass}>My Booked Tutors</NavLink></li>
            </ul>
          </div>
          <img src="/assets/logo.png" alt="TutorNexus Logo" className="h-7 ml-2 mr-2" />
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
        <div className="navbar-end flex items-center gap-4 relative">

          {user ? (
            <>
              {/* Large screen: show profile pic and sign out */}
              <div className="hidden lg:flex items-center gap-3">
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
                <button onClick={signOutUser} className="btn bg-fuchsia-500 text-white">Sign Out</button>

                {/* Theme Toggle - Desktop only */}
                <button
                  onClick={toggleTheme}
                  className="btn btn-circle btn-outline p-1 text-xl text-pink-500"
                  title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                >
                  {theme === 'light' ? <FiMoon size={24} /> : <FiSun size={24} />}
                </button>
              </div>

              {/* Small screen: user icon toggles dropdown */}
              <div className="lg:hidden" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen(prev => !prev)}
                  className="btn btn-ghost p-0 rounded-full overflow-hidden"
                  aria-label="User menu"
                >
                  <img
                    src={user.photoURL}
                    alt="User Profile"
                    className="w-10 h-10 rounded-full border-2 border-fuchsia-500 object-cover"
                  />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 px-1">
                    <p className="px-4 py-2 text-gray-700 font-semibold border-b border-gray-200 truncate">{user.displayName}</p>
                    <button
                      onClick={() => {
                        signOutUser();
                        setUserMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-fuchsia-100 text-fuchsia-600 border  font-semibold"
                    >
                      Sign Out
                    </button>
                    <button
                      onClick={toggleTheme}
                      className="w-full text-left px-4 py-2 hover:bg-fuchsia-100 text-fuchsia-600 border mt-1 font-semibold flex items-center gap-2"
                    >
                      {theme === 'light' ? <FiMoon /> : <FiSun />}
                      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                    </button>
                  </div>
                )}
              </div>
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
