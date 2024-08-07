import { useState, useEffect } from 'react';
import { getMiniQuiz } from '@/api/miniQuiz';
import shuffleArr from '@/utils/shuffleArr';

const useMiniQuiz = () => {
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [data, setData] = useState({});
  const [shuffledQuizQuestion, setShuffledQuizQuestion] = useState([]);

  useEffect(() => {
    const fetchMiniQuiz = async () => {
      try {
        setLoading(true);
        const data = await getMiniQuiz();
        const { code } = data;
        if (code === 'NO_QUIZ_CONTENT') {
          setCode(code);
          return;
        }
        setData(data);
        setShuffledQuizQuestion(shuffleArr(Object.entries(data.quizQuestions)));
      } catch (err) {
        setError(err);
        return;
      } finally {
        setLoading(false);
      }
    };

    fetchMiniQuiz();
  }, []);

  return { code, error, loading, data, shuffledQuizQuestion };
};

export default useMiniQuiz;
