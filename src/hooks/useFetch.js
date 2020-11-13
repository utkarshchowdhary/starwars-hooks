import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async (url) => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const deets = await res.json();
        setData(deets);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    })(url);
  }, [url]);

  return [isLoading, error, data];
};

export default useFetch;
