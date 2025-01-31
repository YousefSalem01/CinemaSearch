import { Skeleton } from '@mui/material';

interface Props {
  count?: number;
  className?: string;
}

const LoadingSkeleton = ({ count = 8, className = '' }: Props) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
    {[...Array(count)].map((_, index) => (
      <Skeleton
        key={index}
        variant="rectangular"
        height={400}
        sx={{ borderRadius: 2 }}
      />
    ))}
  </div>
);

export default LoadingSkeleton;