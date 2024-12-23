import { useEffect, useState } from 'react';

export const useRecommendations = (userId: string) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch(`https://api.example.com/recommendations/${userId}`)
      .then((response) => response.json())
      .then((data) => setRecommendations(data))
      .catch((err) => console.error('Error fetching recommendations', err));
  }, [userId]);

  return recommendations;
};
