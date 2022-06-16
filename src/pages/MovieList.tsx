import MovieCard from '../components/MovieCard';
import { useLocation } from 'react-router-dom';

const MovieList = () => {
const location = useLocation()

const movies = location.state.movies.movies
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {movies.map((movie:any) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  )
}

export default MovieList
