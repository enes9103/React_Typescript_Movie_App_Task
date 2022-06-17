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
  const { currentUser } : any = useContext(AuthContext);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API:any) => {
    axios
      .get(API)
      .then((res) => {setMovies(res.data.results)})
      .catch((err) => console.log(err));      
  };

  const handleSubmit = (e:any) => {
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
      {/* SEARCH BAR */}
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
      {/* SCROLL BAR */}
      <div className="scrollingText">
        <marquee behavior="scroll" direction="left" style={{marginTop:"10px"}} >
          <button className="button">MOVİES AT VISION</button>
          <div className="load-item">
            <div className="line">
              <i className="box1"></i>
              <i className="box2"></i>
              <i className="circle"></i>
            </div>
            <b className="departure">1.00 pm.</b>
            <b className="arrival">8.15 pm.</b>
            <div className="clearfix"></div>
            <span className="price">THE LOST CİTY</span>
            <span className="add-offer">15 USD <small>+TAX</small></span>
          </div>
          <div className="load-item">
            <div className="line">
              <i className="box1"></i>
              <i className="box2"></i>
              <i className="circle"></i>
            </div>
            <b className="departure">2.00 pm.</b>
            <b className="arrival">7.15 pm.</b>
            <div className="clearfix"></div>
            <span className="price">THE NORTHMAN</span>
            <span className="add-offer">15 USD <small>+TAX</small></span>
          </div>
          <div className="load-item">
            <div className="line">
              <i className="box1"></i>
              <i className="box2"></i>
              <i className="circle"></i>
            </div>
            <b className="departure">3.00 pm.</b>
            <b className="arrival">6.15 pm.</b>
            <div className="clearfix"></div>
            <span className="price">JURASİC WORLD</span>
            <span className="add-offer">15 USD <small>+TAX</small></span>
          </div>
        </marquee>
      </div>
      {/* MOVIE CARDS */}
      <div className="d-flex justify-content-center flex-wrap">
        { movies.slice(1,5).map((movie) => (
          <MovieCard key={movie.id} {...movie as any} />
        ))}
      </div>
      {/* MORE BUTTON */}
      <Link to={ "/list" } state={{ movies: {movies} }} className="card-link d-flex justify-content-center">
        <button className="btn btn-primary  m-3"><i className="bi bi-chevron-double-right"></i> MORE RESULTS</button>  
      </Link>
    </div>
  );
};

export default Main;
