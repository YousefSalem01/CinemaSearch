import { Button, CircularProgress, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface Props {
	currentPage: number;
	totalPages: number;
	isLoading: boolean;
	onPageChange: (newPage: number) => void;
	remainingResults: number;
	totalResults: number;
}

const SearchPagination = ({ currentPage, totalPages, isLoading, onPageChange, remainingResults, totalResults }: Props) => (
	<div className='mt-8 flex flex-col items-center gap-4'>
		<Typography variant='body1' className='text-gray-600'>
			Showing {totalResults === 0 ? 0 : totalResults - remainingResults} of {totalResults} results •
			{totalResults > 0 && remainingResults > 0 && ` ${remainingResults} more to explore`}
		</Typography>

		{currentPage < totalPages && (
			<motion.div className='w-full max-w-xs' whileHover={{ scale: 1.02 }}>
				<Button
					fullWidth
					onClick={() => onPageChange(currentPage + 1)}
					variant='contained'
					disabled={isLoading}
					sx={{
						bgcolor: "#f5c518",
						"&:hover": { bgcolor: "#d4af37" },
						color: "#000",
						py: 1.5,
						fontSize: "1rem",
						fontWeight: 600,
						borderRadius: 2,
					}}
				>
					{isLoading ? <CircularProgress style={{ color: "#f5c518" }} /> : "Show More Results"}
				</Button>
			</motion.div>
		)}
	</div>
);

export default SearchPagination;
