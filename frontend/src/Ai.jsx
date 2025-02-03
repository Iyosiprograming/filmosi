import React, { useState } from "react";
import { FaUser, FaRobot } from "react-icons/fa";

const Ai = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your movie assistant. How can I help you?", isBot: true },
  ]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      const newMessages = [...messages, { text: userInput, isBot: false }];
      setMessages(newMessages);
      setUserInput("");

      // Example AI logic (can be replaced with real AI)
      setTimeout(() => {
        const movieRecommendation = [
          {
            title: "Inception",
            poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
            description: "A skilled thief is given a chance at redemption if he can successfully perform an inception.",
          },
          {
            title: "Interstellar",
            poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
            description: "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
          },
        ];

        setRecommendedMovies(movieRecommendation);

        const botMessage = {
          text: "Here are some movie recommendations for you!",
          isBot: true,
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="text-3xl font-semibold">Filmosi AI Movie Recomedation</div>
        <div className="text-2xl">
          <FaUser />
        </div>
      </div>

      {/* Chat Box */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-800 flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          {/* Messages */}
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-3 ${message.isBot ? "text-left" : "text-right"}`}
            >
              <div
                className={`inline-block max-w-lg p-3 rounded-lg ${
                  message.isBot ? "bg-blue-600" : "bg-gray-600"
                }`}
              >
                <span>{message.text}</span>
              </div>
            </div>
          ))}

          {/* Movie Recommendations */}
          {recommendedMovies.length > 0 && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Movie Recommendations:</h2>
              <div className="flex gap-4 mt-4 overflow-x-auto">
                {recommendedMovies.map((movie, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-48 bg-gray-700 rounded-lg p-3"
                  >
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <h3 className="text-sm font-semibold mt-2">{movie.title}</h3>
                    <p className="text-xs text-gray-300">{movie.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* User Input Section */}
      <div className="p-4 bg-gray-800 flex gap-4 items-center border-t border-gray-600">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          className="flex-1 p-4 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none"
          placeholder="What Movies Do You Have In Mind"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-600 p-4 rounded-lg text-white hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Ai;
