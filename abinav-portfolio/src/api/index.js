// Example API helper for backend integration

export async function fetchFromAPI(endpoint, options = {}) {
  // Replace with your backend URL or use environment variables
  const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
  const res = await fetch(`${BASE_URL}${endpoint}`, options);
  if (!res.ok) throw new Error('API error');
  return res.json();
}

// Usage example (uncomment to use):
// fetchFromAPI('/projects').then(data => console.log(data)); 