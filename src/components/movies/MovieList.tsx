import { Grid } from '@mui/material';
import MovieCard from './MovieCard';
import { Movie } from '../../types/movie';

interface Props {
  movies: Movie[];
  onSelect: (id: string) => void;
}

const MovieList = ({ movies, onSelect }: Props) => (
  <Grid container spacing={4}>
    {movies.map(movie => (
      <Grid item key={movie.imdbID} xs={12} sm={6} md={4}>
        <MovieCard movie={movie} onSelect={() => onSelect(movie.imdbID)} />
      </Grid>
    ))}
  </Grid>
);

export default MovieList;