export const formatDuration = (minutes: number): string => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };
  
  export const capitalize = (str: string): string => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };
  
  export const formatCurrency = (amount: string): string => {
    return `$${parseInt(amount).toLocaleString()}`;
  };