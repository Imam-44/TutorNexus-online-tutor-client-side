import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const handleGoogleSignIn = () => {
    // এখানে তোমার Google Sign-in ফাংশন বসাও
    console.log('Google Sign-in triggered');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf4ff] via-[#fae8ff] to-[#f0abfc] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-fuchsia-600">Sign In</h2>

        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-fuchsia-700">Email</label>
            <input
              type="email"
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
              placeholder="Enter your password"
              className="w-full border border-fuchsia-500 shadow-md px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold py-2 rounded-md shadow-lg cursor-pointer transition"
            >
              Login
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="text-center text-gray-400">OR</div>

        {/* Google Sign-in */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full border border-fuchsia-500 shadow-md py-2 rounded-md font-medium text-fuchsia-700 hover:bg-fuchsia-50 transition cursor-pointer"
        >
          Continue with Google
        </button>

        {/* Link to Register */}
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-fuchsia-600 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
