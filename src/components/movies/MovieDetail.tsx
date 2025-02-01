import { useEffect, useState } from "react";
import { Button, Typography, Card, CardContent, CardMedia, Chip, Divider } from "@mui/material";
import type { MovieDetail } from "../../types/movie";
import { movieService } from "../../api/omdbService";
import { formatDuration } from "../../utils/helpers";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoadingSkeleton from "../common/LoadingSkeleton";
import ErrorMessage from "../common/ErrorMessage";
import placeholderImage from "../../assets/images/placeholder-movie.svg";

interface Props {
	id: string;
	onBack: () => void;
}

const MovieDetail = ({ id, onBack }: Props) => {
	const [movie, setMovie] = useState<MovieDetail | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchDetails = async () => {
			try {
				const data = await movieService.getMovieDetails(id);
				setMovie(data);
				setError("");
			} catch (err) {
				setError(err instanceof Error ? err.message : "Failed to load details");
			} finally {
				setLoading(false);
			}
		};

		fetchDetails();
	}, [id]);

	if (loading) return <LoadingSkeleton count={1} />;
	if (error) return <ErrorMessage message={error} />;
	if (!movie) return <Typography>No movie data available</Typography>;

	return (
		<Card className='mt-4 p-6 bg-white shadow-lg max-w-6xl mx-auto'>
			<CardContent>
				{/* Back Button */}
				<Button
					onClick={onBack}
					variant='contained'
					startIcon={<ArrowBackIcon />}
					sx={{
						mb: 4,
						bgcolor: "#f5c518",
						"&:hover": { bgcolor: "#d4af37" },
						color: "#000",
					}}
				>
					Back to Search
				</Button>

				{/* Main Content */}
				<div className='flex flex-col md:flex-row gap-8'>
					{/* Poster Section */}
					<div className='md:w-1/3'>
						<CardMedia component='img' image={movie.Poster !== "N/A" ? movie.Poster : placeholderImage} alt={movie.Title} className='rounded-lg shadow-xl' />
					</div>

					{/* Details Section */}
					<div className='md:w-2/3 space-y-4'>
						{/* Title Section */}
						<div>
							<Typography variant='h2' className='!text-3xl !font-bold !mb-2'>
								{movie.Title}
							</Typography>
							<div className='flex items-center gap-2'>
								<Typography variant='subtitle1' className='!text-lg'>
									{movie.Year} {movie.Runtime && movie.Runtime !== "N/A" && "•" + formatDuration(parseInt(movie.Runtime))}
								</Typography>
								{movie.Rated && movie.Rated !== "N/A" && <Chip label={movie.Rated} size='small' className='!bg-gray-100 !text-gray-800' />}
							</div>
						</div>

						{/* Genre Chips */}
						{movie.Genre && movie.Genre !== "N/A" && (
							<div className='flex flex-wrap gap-2'>
								{movie.Genre.split(", ").map((genre) => (
									<Chip key={genre} label={genre} variant='outlined' className='!border-yellow-400 !text-gray-800' />
								))}
							</div>
						)}

						{/* Divider */}
						<Divider className='!my-4' />

						{/* Plot Section */}
						{movie.Plot && movie.Plot !== "N/A" && (
							<div>
								<Typography variant='h6' className='!font-bold !mb-2'>
									Plot
								</Typography>
								<Typography className='!text-gray-700 !leading-relaxed'>{movie.Plot}</Typography>
							</div>
						)}

						{/* Details Grid */}
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							{movie.Director && movie.Director !== "N/A" && (
								<div>
									<Typography variant='subtitle2' className='!text-gray-500'>
										Director
									</Typography>
									<Typography>{movie.Director}</Typography>
								</div>
							)}

							{movie.Actors && movie.Actors !== "N/A" && (
								<div>
									<Typography variant='subtitle2' className='!text-gray-500'>
										Cast
									</Typography>
									<Typography>{movie.Actors}</Typography>
								</div>
							)}

							{movie.Country && movie.Country !== "N/A" && (
								<div>
									<Typography variant='subtitle2' className='!text-gray-500'>
										Country
									</Typography>
									<Typography>{movie.Country}</Typography>
								</div>
							)}

							{movie.Language && movie.Language !== "N/A" && (
								<div>
									<Typography variant='subtitle2' className='!text-gray-500'>
										Language
									</Typography>
									<Typography>{movie.Language}</Typography>
								</div>
							)}
						</div>

						{/* Ratings Section */}
						{movie.Ratings && movie.Ratings.length > 0 && (
							<div className='mt-6 bg-gray-50 p-4 rounded-lg'>
								<Typography variant='h6' className='!font-bold !mb-4'>
									Ratings
								</Typography>
								<div className='flex flex-wrap gap-4'>
									{movie.Ratings.map((rating, index) => (
										<div key={index} className='bg-white p-3 rounded shadow-sm min-w-[120px] text-center'>
											<Typography variant='subtitle2' className='!text-gray-500'>
												{rating.Source.replace("Internet Movie Database", "IMDb")}
											</Typography>
											<Typography variant='body1' className='!font-bold !mt-1'>
												{rating.Value}
											</Typography>
										</div>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default MovieDetail;
