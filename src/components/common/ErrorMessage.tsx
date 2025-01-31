// src/components/common/ErrorMessage.tsx
import { Alert } from '@mui/material';
import { motion } from 'framer-motion';

interface Props {
  message: string;
}

const ErrorMessage = ({ message }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Alert 
      severity="error"
      sx={{
        mb: 2,
        backgroundColor: '#fff3f3',
        border: '1px solid #ffcccc',
        alignItems: 'center'
      }}
    >
      <span className="font-medium text-red-700">{message}</span>
    </Alert>
  </motion.div>
);

export default ErrorMessage;