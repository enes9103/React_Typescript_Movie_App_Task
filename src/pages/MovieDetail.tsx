import { Link, useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MovieDetail = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState();

    // const API_KEY = process.env.REACT_APP_TMDB_KEY;
    const API_KEY = "eeed018179a4468a4d5a012819757c7d";

    const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
    const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
    const defaultImage = "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

    useEffect(() => {
        axios
          .get(movieDetailBaseUrl)
          .then((res) => setMovieDetails(res.data))
          .catch((err) => console.log(err));
      }, [movieDetailBaseUrl]);
      
  return (
    <div>
      
    </div>
  )
}

export default MovieDetail
