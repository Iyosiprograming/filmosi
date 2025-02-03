import { useState } from "react";
import { FaUser, FaHeart, FaStar, FaPlay } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

const movies = [
  {
    id: 1,
    title: "Inception",
    rating: "8.8",
    poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    description: "A skilled thief is given a chance at redemption if he can successfully perform an inception.",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    genres: ["Action", "Sci-Fi", "Thriller"],
  },
  {
    id: 2,
    title: "Interstellar",
    rating: "8.6",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description: "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    genres: ["Adventure", "Drama", "Sci-Fi"],
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: "9.0",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description: "Batman sets out to dismantle the remaining criminal organizations that plague Gotham.",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    genres: ["Action", "Crime", "Drama"],
  },
];

export default function Dashboard() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedRating, setSelectedRating] = useState("");
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  const [likedVideos, setLikedVideos] = useState([movies[1], movies[2]]); // example liked videos
  const [username] = useState("JohnDoe"); // example username

  const genres = ["Action", "Adventure", "Crime", "Drama", "Sci-Fi", "Thriller"];
  const ratings = ["8.0", "8.5", "9.0"];

  // Filter movies by genre and rating
  const filteredMovies = movies.filter((movie) => {
    const matchesGenre = selectedGenres.length === 0 || selectedGenres.some((genre) => movie.genres.includes(genre));
    const matchesRating = !selectedRating || parseFloat(movie.rating) >= parseFloat(selectedRating);
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGenre && matchesRating && matchesSearch;
  });

  const handleGenreChange = (e) => {
    const genre = e.target.value;
    setSelectedGenres((prev) => (prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]));
  };

  const handleRatingChange = (e) => {
    setSelectedRating(e.target.value);
  };

  const toggleAccountMenu = () => {
    setAccountMenuOpen((prev) => !prev);
  };

  const logout = () => {
    console.log("Logging out...");
    // You can add real logout functionality here (e.g., clearing user data or redirecting)
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-5">
        <div className="text-4xl font-bold text-red-500 font-poppins">Filmosi</div>
        <div className="mt-4">
          <div className="text-lg font-semibold mb-2">Filter by Genres</div>
          {genres.map((genre) => (
            <div key={genre} className="flex items-center mb-3">
              <input
                type="checkbox"
                value={genre}
                onChange={handleGenreChange}
                className="mr-2"
              />
              <span className="text-lg">{genre}</span>
            </div>
          ))}
          <div className="mt-4">
            <div className="text-lg font-semibold mb-2">Filter by Rating</div>
            {ratings.map((rating) => (
              <div key={rating} className="flex items-center mb-3">
                <input
                  type="radio"
                  name="rating"
                  value={rating}
                  onChange={handleRatingChange}
                  className="mr-2"
                />
                <span className="text-lg">{rating}+</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 flex flex-col">
        {/* Navbar */}
        <div className="flex justify-between items-center mb-5 border-b border-gray-700 pb-3">
          <div className="text-lg cursor-pointer">AI Recommendation</div>
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Search Movies"
              className="bg-gray-700 p-2 rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FiSearch className="text-2xl cursor-pointer" />
            <div className="relative">
              <FaUser
                className="text-2xl cursor-pointer"
                onClick={toggleAccountMenu}
              />
              {accountMenuOpen && (
                <div className="absolute right-0 mt-2 bg-gray-800 p-4 rounded-lg shadow-lg w-48">
                  <div className="font-semibold text-lg">{username}</div>
                  <div className="text-sm text-gray-400 mt-2">
                    <p><strong>Liked Videos:</strong></p>
                    <ul className="text-sm">
                      {likedVideos.map((video) => (
                        <li key={video.id} className="text-gray-300">{video.title}</li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className="mt-4 w-full bg-red-500 p-2 rounded-lg text-white"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-3 gap-4">
          {filteredMovies.map((movie) => (
            <motion.div
              key={movie.id}
              className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedMovie(movie)}
            >
              <img src={movie.poster} alt={movie.title} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-2 text-lg font-semibold">{movie.title}</h3>
              <p className="text-gray-400">⭐ {movie.rating}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Movie Details Modal - Fullscreen */}
      {selectedMovie && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedMovie(null)}
        >
          <div className="relative bg-gray-800 p-6 rounded-lg w-full h-full text-center">
            <img
              src={selectedMovie.poster}
              alt={selectedMovie.title}
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <h2 className="text-4xl font-bold">{selectedMovie.title}</h2>
              <p className="text-gray-300 mt-2">{selectedMovie.description}</p>
              <p className="text-yellow-400 mt-2">⭐ {selectedMovie.rating}</p>
              <div className="text-sm text-gray-300 mt-4">
                <p><strong>Actors:</strong> {selectedMovie.actors.join(", ")}</p>
                <p><strong>Genres:</strong> {selectedMovie.genres.join(", ")}</p>
              </div>
              <div className="flex gap-4 justify-center mt-4">
                <button className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600">
                  <FaHeart /> Like
                </button>
                <button className="flex items-center gap-2 bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600">
                  <FaStar /> Favorite
                </button>
                <button className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
                  <FaPlay /> Watch Trailer
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
