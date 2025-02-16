import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export const Head = () => {
  return (
    <div className="w-full bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Title on the Left */}
        <h1 className="text-4xl md:text-5xl font-bold text-left 
          bg-gradient-to-r from-pink-500 to-purple-500 
          bg-clip-text text-transparent 
          animate-glow shadow-lg">
          Fil<span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">mosi</span>
        </h1>
        
        {/* Link on the Right */}
        <Link 
          to="/ai" // Use Link to route to the Ai page
          className="text-2xl font-semibold text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text hover:text-rose-400 hover:underline underline-offset-4 transition-all duration-300">
          Ai Movie Suggestion
        </Link>
      </div>
    </div>
  );
};
