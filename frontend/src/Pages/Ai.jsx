import React, { useState } from "react";

export const Ai = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "AIzaSyBZEfwRMgApOkxZX1jywo9lxtRhdoyw_lY"; // Replace with your actual API key

  const handleSearch = async () => {
    if (!search.trim()) return; // Prevent empty search

    setLoading(true);
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `A user is describing a movie but forgot the name. The description: "${search}". Your task is to identify the most likely movie name and release year. Do not provide disclaimers. Just give the movie title and year and description about the movie and give them more than one recommendation and remove the astrics.`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const aiResponse =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No recommendations found.";

      setMovies(aiResponse.split("\n")); 
      setSearch("");
      document.getElementById("AiSearch").value = "";
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMovies(["Failed to get recommendations. Try again!"]);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      {/* Title with gradient */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-white drop-shadow-lg">
  Filmosi AI{" "}
  <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent glow-effect">
    Movie
  </span>{" "}
  Recommendation
</h1>


      {/* Search bar container */}
      <div className="flex w-full max-w-xl">
        <input
          type="text"
          placeholder="Describe the movie... 🎬"
          id="AiSearch"
          className="flex-grow p-4 rounded-l-full bg-gray-800 text-white shadow-lg placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-500 transition-all"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="px-6 py-3 rounded-r-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:scale-105 transition-all"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* AI Response Area */}
      <div className="mt-10 w-full max-w-3xl p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-xl min-h-[200px]">
        {loading ? (
          <p className="text-gray-400 text-lg italic">AI is thinking... 🤖</p>
        ) : (
          <ul className="text-gray-300 text-lg">
            {movies.length > 0 ? (
              movies.map((movie, index) => (
                <li key={index} className="mb-4 border-l-4 border-purple-500 pl-4">
                  {movie}
                </li>
              ))
            ) : (
              <p className="text-gray-400 italic">
                No recommendations yet. Try searching!
              </p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};
