import React from "react";
import coverImage from './assets/coverpage.jpg';
import Register from "./Register";

function Login() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}


    >

      <nav className="w-full bg-gray-800 bg-opacity-70 p-4 fixed top-0 left-0">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl text-red-600 font-extrabold">FILMOSI</h1>
        </div>
      </nav>
      <div className="bg-gray-800 bg-opacity-70 p-10 rounded-lg shadow-lg w-96">
        <h1 className="text-4xl text-red-600 font-extrabold mb-6 text-center">Login</h1>
        <input
          type="text"
          placeholder="Email"
          className="w-full p-4 mb-4 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-white bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-4 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-white bg-gray-700"
        />
        <button className="w-full p-4 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 mb-4">
          Login
        </button>
        <div className="text-center">
          <a href="Register.jsx" className="text-sm text-gray-400 hover:underline">
            Don't have an account?
          </a>
        </div>
      </div>
    </div>

  );
}

export default Login;
