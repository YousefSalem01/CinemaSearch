import { Button } from "@mui/material";
import { motion } from "framer-motion";

interface Props {
	onSelect: (term: string) => void;
}

const POPULAR_SEARCHES = ["The Meg", "Spider-Man", "Batman", "Avengers", "Pirates of the Caribbean", "Fast & Furious"];

const PopularSearches = ({ onSelect }: Props) => (
	<div className='mt-8'>
		<h2 className='text-2xl font-bold mb-4'>Popular Searches</h2>
		<div className='flex flex-wrap gap-3'>
			{POPULAR_SEARCHES.map((term) => (
				<motion.div key={term} whileHover={{ scale: 1.05 }}>
					<Button
						variant='outlined'
						onClick={() => onSelect(term)}
						sx={{
							borderColor: "#f5c518",
							color: "#000",
							"&:hover": { borderColor: "#d4af37" },
						}}
					>
						{term}
					</Button>
				</motion.div>
			))}
		</div>
	</div>
);

export default PopularSearches;
