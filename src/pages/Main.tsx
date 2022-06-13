import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContext";

const API_KEY = "eeed018179a4468a4d5a012819757c7d";
// const API_KEY = process.env.REACT_APP_TMDB_KEY;

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => {setMovies(res.data.results)})
      .catch((err) => console.log(err));      
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // search if the user is logged in and the search term is not empty.
    if (searchTerm && currentUser) {
      getMovies(SEARCH_API + searchTerm);
    } else if (!currentUser) {
      alert("Please log in to search a movie");
    } else {
      alert("Please enter a text");
    }
  };

  return (
    <div>
      <div>
      <marquee behavior="scroll" direction="left"> <button>VİZYONDAKİLER</button> Soldan sağa ekrandan çıktığında başa döner</marquee>
      </div>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="search"
          className="search-input"
          placeholder="Search a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="d-flex justify-content-center flex-wrap">
        { movies.slice(1,5).map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
      <Link to={ "/list" } state={{ movies: {movies} }} className="card-link d-flex justify-content-center">
        <button className="btn btn-primary  m-3"><i className="bi bi-chevron-double-right"></i> MORE RESULTS</button>  
      </Link>
    </div>
  );
};

export default Main;
