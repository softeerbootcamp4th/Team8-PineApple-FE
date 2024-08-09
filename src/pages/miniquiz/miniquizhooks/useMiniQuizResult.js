import { useState, useEffect } from 'react';
import { postAnswer } from '@/api/miniQuiz';

const useMiniQuizResult = (quizId, isChosen) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState({});

  useEffect(() => {
    const fetchMiniQuiz = async () => {
      try {
        setLoading(true);
        const response = await postAnswer(quizId, isChosen);
        console.log(response);
        setResponse(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMiniQuiz();
  }, [quizId, isChosen]);

  return { loading, error, response };
};

export default useMiniQuizResult;
