import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function useFetch(api, params) {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await api(params);
      if (typeof response === 'object') {
        if (response.code === 'UNAUTHORIZED') {
          navigate('/error');
        } else {
          setData(response);
        }
      } else if (typeof response === 'string') {
        setData({ message: response });
      } else {
        throw new Error('Unsupported response format');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [api, params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

export default useFetch;
