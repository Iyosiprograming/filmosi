import React, { useState, useEffect } from 'react'; // Add this import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Routes
import { Head } from './component/Head';
import { Ai } from './Pages/Ai';
import Card from './component/Card';
import { Footer } from './component/Footer';

function App() {
  const apikey = '74889ce36f8bbcd547d699c1518c41c5'; 
  const [movie, setMovie] = useState([]); // Correct usage of useState
  const [search, setSearch] = useState(""); // Correct usage of useState

  const handleSearch = () => {
    if (!search) {
      alert("Please Enter A Movie Name");
    } else {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setMovie(data.results);
          setSearch(""); // Clear the input field after search
          document.getElementById("search").value = "";
        })
        .catch((err) => console.log(err));
    }
  };
  

  const FetchLoadMovie = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&page=1`)
      .then((res) => res.json())
      .then((data) => setMovie(data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    FetchLoadMovie();
  }, []);

  return (
    <Router> {/* Wrap your app with Router */}
      <Head />
      
      <Routes> {/* Define the routes */}
        <Route path="/" element={
          <>
            

            {/* Search Bar Section */}
            <div className="flex justify-center items-start mt-12 w-full">
              <div className="flex items-center space-x-4 mb-12">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search Hundreds of Movies"
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-80 p-4 rounded-l-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-xl placeholder:text-gray-200 focus:outline-none focus:ring-4 focus:ring-purple-300"
                />
                <button
                  onClick={handleSearch}
                  className="px-6 py-3 rounded-r-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold text-lg hover:scale-105 hover:from-pink-600 hover:to-orange-600 transition-all duration-300 shadow-2xl"
                >
                  Search
                </button>
              </div>
            </div>

            <h1 className="text-5xl font-extrabold mb-8 text-center text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text drop-shadow-lg">
              Latest <span className="text-white glow-effect">Movies</span>
            </h1>

            {/* Movie List */}
            <div className="movie-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {movie.map((movie) => (
                <Card
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  release_date={movie.release_date}
                  rating={movie.vote_average}
                  overview={movie.overview}
                  cast={movie.cast ? movie.cast.slice(0, 5) : []}
                  genres={movie.genres ? movie.genres.slice(0, 3) : []}
                  status={movie.status}
                  original_language={movie.original_language}
                />
              ))}
            </div>
          </>
        } />
        <Route path="/ai" element={<Ai />} /> 
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
