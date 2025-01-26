import React from "react";
import coverImage from './assets/coverpagee.jpg';

function Register() {
  return (
    <div
      className="min-h-screen pt-24 flex flex-col items-center"
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      
      <nav className="w-full bg-gray-800 bg-opacity-70 p-4 fixed top-0 left-0">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl text-red-600 font-extrabold">FILMOSI</h1>
        </div>
      </nav>

      
      <div className="bg-gray-800 bg-opacity-90 p-10 rounded-lg shadow-lg w-96 mb-8">
        <h1 className="text-4xl text-red-600 font-extrabold mb-6 text-center">Register</h1>

        
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-white bg-transparent"
            required
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full p-4 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-white bg-transparent"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-white bg-transparent"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-4 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-white bg-transparent"
            required
          />
          
          <button
            type="submit"
            className="w-full p-4 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
          >
            Create Account
          </button>
        </form>

        
        <div className="mt-6 text-center">
          <a
            href="/login"
            className="text-sm text-gray-400 hover:text-red-500 transition-colors underline"
          >
            Already have an account?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;