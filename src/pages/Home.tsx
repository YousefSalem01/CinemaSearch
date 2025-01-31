import { lazy, Suspense, useState } from "react";
import ErrorMessage from "../components/common/ErrorMessage";
import LoadingSkeleton from "../components/common/LoadingSkeleton";
import SearchBar from "../components/search/SearchBar";
import { useMovies } from "../hooks/useMovies";
import PopularSearches from "../components/movies/PopularSearches";
import MovieList from "../components/movies/MovieList";
import SearchPagination from "../components/common/SearchPagination";

const MovieDetail = lazy(() => import("../components/movies/MovieDetail"));

const Home = () => {
	const {
		query,
		setQuery,
		movies,
		error,
		isLoading,
		page,
		setPage,
		totalPages,
		totalResults,
	} = useMovies();
	const [selectedMovie, setSelectedMovie] = useState<string | null>(null);

	const remainingResults = Math.max(totalResults - movies.length, 0);

	return (
		<div className='min-h-screen bg-gray-50 flex flex-col'>
			<header className='bg-gray-900 py-6 shadow-lg'>
				<div className='max-w-6xl mx-auto px-4'>
					<div className='flex flex-col md:flex-row items-center justify-between gap-4'>
						<h1 className='text-3xl font-bold text-yellow-400'>MovieDB</h1>
						<div className='w-full md:w-96'>
							<SearchBar value={query} onChange={setQuery} />
						</div>
					</div>
				</div>
			</header>

			<main className='max-w-6xl mx-auto px-4 py-8 flex-1 w-full'>
				{error && <ErrorMessage message={error} />}

				{selectedMovie ? (
					<Suspense fallback={<LoadingSkeleton />}> 
						<MovieDetail id={selectedMovie} onBack={() => setSelectedMovie(null)} />
					</Suspense>
				) : (
					<>
						{!query && <PopularSearches onSelect={setQuery} />}

						<div className='mt-8'>
							{isLoading && page === 1 ? <LoadingSkeleton count={8} /> : <MovieList movies={movies} onSelect={setSelectedMovie} />}

							<SearchPagination
								currentPage={page}
								totalPages={totalPages}
								isLoading={isLoading}
								onPageChange={(newPage) => setPage(newPage)}
								remainingResults={remainingResults}
								totalResults={totalResults}
							/>
						</div>
					</>
				)}
			</main>
			<footer className='mt-auto py-6 bg-gray-900 text-center'>
				<p className='text-gray-400'>
					Powered by{" "}
					<a href='https://www.omdbapi.com/' target='_blank' rel='noopener noreferrer' className='text-yellow-400 hover:underline'>
						OMDb API
					</a>
				</p>
			</footer>
		</div>
	);
};

export default Home;
