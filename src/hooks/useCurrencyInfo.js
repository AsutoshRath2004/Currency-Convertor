import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null);  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/ca72484daeae302837f39ba8/latest/${currency}`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result.conversion_rates); 
        setLoading(false);  
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCurrencyData();
  }, [currency]);

  return { data, error, loading };
}

export default useCurrencyInfo;
