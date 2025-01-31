import { motion } from 'framer-motion';
import { Movie } from '../../types/movie';
import placeholder from '../../assets/images/placeholder-movie.svg';

interface MovieCardProps {
  movie: Movie;
  onSelect: () => void;
}

const MovieCard = ({ movie, onSelect }: MovieCardProps) => (
  <motion.div whileHover={{ scale: 1.03 }}>
    <article 
      onClick={onSelect}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
    >
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : placeholder}
        alt={movie.Title}
        className="w-full h-64 object-cover bg-gray-100"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg truncate">{movie.Title}</h3>
        <p className="text-gray-600 text-sm mt-2">
          {movie.Year} {movie.Type && `• ${movie.Type}`}
        </p>
      </div>
    </article>
  </motion.div>
);

export default MovieCard;