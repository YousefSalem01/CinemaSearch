import { MovieDetail, MovieResponse } from '../types/movie';

const BASE_URL = 'https://www.omdbapi.com/';
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) throw new Error('API request failed');
  return response.json();
};

export const movieService = {
  searchMovies: async (query: string, page: number): Promise<MovieResponse> => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return { Response: 'False', Error: 'Please enter a search term' };
    
    const params = new URLSearchParams({ 
      s: trimmedQuery,
      page: page.toString(),
      apikey: API_KEY,
    });

    return fetch(`${BASE_URL}?${params}`)
      .then(handleResponse<MovieResponse>);
  },

  getMovieDetails: async (id: string): Promise<MovieDetail> => {
    const params = new URLSearchParams({
      i: id,
      apikey: API_KEY,
    });

    return fetch(`${BASE_URL}?${params}`)
      .then(handleResponse<MovieDetail>);
  }
};