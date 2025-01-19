import React from "react";
import coverImage from './assets/coverpagee.jpg'; 

function Register() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
     

      <div className="bg-gray-800 bg-opacity-90 p-10 rounded-lg shadow-lg w-96">
         <h1 className="text-4xl text-red-600 font-extrabold mb-6 text-center">Register</h1>
        
        <input
          type="text"
          placeholder="Email"
          className="w-full p-4 mb-4 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-white bg-transparent"
        />
        <input
          type="text"
          placeholder="Username"
          className="w-full p-4 mb-4 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-white bg-transparent"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-4 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-white bg-transparent"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-4 mb-4 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-white bg-transparent"
        />
        <button className="w-full p-4 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 mb-4">
          Register
        </button>
        <div className="text-center">
          <a href="Login.jsx" className="text-sm text-gray-400 hover:underline">
            Already have an account? 
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
