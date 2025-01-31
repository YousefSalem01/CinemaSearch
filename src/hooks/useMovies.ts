import { useState, useEffect, useCallback } from "react";
import { movieService } from "../api/omdbService";
import { Movie } from "../types/movie";
import useDebounce from "./useDebounce";

export const useMovies = () => {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState<Movie[]>([]);
	const [error, setError] = useState("");
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [totalResults, setTotalResults] = useState(0);

	const debouncedQuery = useDebounce(query, 500);

	const fetchMovies = useCallback(async () => {
		const trimmedQuery = debouncedQuery.trim();

		if (!trimmedQuery) {
			setError("");
			setMovies([]);
			setTotalResults(0);
			setTotalPages(1);
			return;
		}

		if (trimmedQuery.length < 3) {
			setError("Please enter at least 3 characters");
			setMovies([]);
			setTotalResults(0);
			setTotalPages(1);
			return;
		}

		setIsLoading(true);
		try {
			const data = await movieService.searchMovies(debouncedQuery, page);

			if (data.Response === "True") {
				setTotalResults(parseInt(data.totalResults || "0"));
				setMovies((prev) => (page === 1 ? data.Search || [] : [...prev, ...(data.Search || [])]));
				setTotalPages(Math.ceil(parseInt(data.totalResults || "0") / 10));
				setError("");
			} else {
				setError(data.Error || "No results found");
				if (page === 1) setMovies([]);
			}
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to fetch movies");
			setMovies([]);
		} finally {
			setIsLoading(false);
		}
	}, [debouncedQuery, page]);

	useEffect(() => {
		setPage(1);
	}, [debouncedQuery]);

	useEffect(() => {
		fetchMovies();
	}, [fetchMovies]);

	return {
		query,
		setQuery,
		movies,
		error,
		isLoading,
		page,
		setPage,
		totalPages,
		totalResults,
	};
};
