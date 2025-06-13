import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Registration = () => {

 const {createUser} = use(AuthContext)

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    console.log({name, email, password, photoUrl});

    //create user
    createUser( email, password)
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.log(error.message);
    })
  }




  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf4ff] via-[#fae8ff] to-[#f0abfc] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-fuchsia-600">Register</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-fuchsia-700">Name</label>
            <input
              type="text"
              name='name'
              placeholder="Enter your name"
              className="w-full border border-fuchsia-500 shadow-md px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-fuchsia-700">Email</label>
            <input
              type="email"
              name='email'
              placeholder="Enter your email"
              className="w-full border border-fuchsia-500 shadow-md px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-fuchsia-700">Password</label>
            <input
              type="password"
              name='password'
              placeholder="Enter your password"
              className="w-full border border-fuchsia-500 shadow-md px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block mb-1 font-medium text-fuchsia-700">Photo URL</label>
            <input
              type="text"
              name='photoUrl'
              placeholder="Enter your photo URL"
              className="w-full border border-fuchsia-500 shadow-md px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold py-2 rounded-md shadow-lg transition cursor-pointer"
            >
              Register
            </button>
          </div>

        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?
          <Link to="/sign-in" className="text-fuchsia-600 font-semibold ml-1 hover:underline">
           here Sign-In 
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
