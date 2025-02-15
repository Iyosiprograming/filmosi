import React, { useState } from 'react';

const Card = ({ title, poster, rating, release_date, overview, Trailer ,original_language,status }) => {
  // Get the year from the release_date prop
  const [modal, setModal] = useState(false);

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setModal(!modal);
  };

  const date = new Date(release_date);
  const year = date.getFullYear();

  return (
    <>
      <div
        className="bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-sm w-full flex flex-col text-white cursor-pointer"
        onClick={toggleModal} // Show modal when the card is clicked
      >
        <div className="w-full">
          <img
            className="w-full h-auto" // Ensures the card fits the image's height while maintaining aspect ratio
            src={poster}
            alt="Movie Poster"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h1 className="text-lg font-semibold text-red-400 mb-1">{title}</h1>
          <p className="text-gray-400 text-sm">📅 {year}</p>
          <p className="text-yellow-400 text-sm">⭐ {rating}</p>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-800 text-white p-8 rounded-lg w-11/12 md:w-3/4 lg:w-1/2 flex flex-col relative">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-white bg-blue-500 hover:bg-blue-700 rounded-full p-2"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="flex w-full">
              {/* Image on the Left */}
              <div className="w-1/3 mr-4">
                <img
                  className="w-full h-auto"
                  src={poster}
                  alt="Movie Poster"
                />
              </div>
              {/* Movie Details on the Right */}
              <div className="w-2/3">
                <h2 className="text-2xl font-semibold mb-4">{title}</h2>
                <p className="text-gray-400 text-sm mb-2">📅 {year}</p>
                <p className="text-yellow-400 text-sm mb-2">⭐ {rating}</p>
                <p className="mb-4">{overview}</p>
                <p className="text-yellow-400 text-sm mb-2">Language: {original_language}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
