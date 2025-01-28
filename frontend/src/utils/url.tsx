// Get API_URL based on the environment
export const API_URL = import.meta.env.MODE === 'development'
  ? 'http://localhost:3000'
  : "http://82.112.226.214:3000'";