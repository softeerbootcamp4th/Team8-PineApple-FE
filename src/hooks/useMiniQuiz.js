import { useState, useEffect } from 'react';
import { getMiniQuiz } from '@/api/miniQuiz';
import shuffleArr from '@/utils/shuffleArr';

const useMiniQuiz = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quizDescription, setQuizDescription] = useState('');
  const [quizId, setQuizId] = useState(0);
  const [shuffledSelectList, setShuffledSelectList] = useState([]);
  const [code, setCode] = useState('');

  useEffect(() => {
    const fetchMiniQuiz = async () => {
      try {
        setLoading(true);
        const data = await getMiniQuiz();
        const { quizId, quizDescription, quizQuestions, code } = data;
        if (code === 'NO_QUIZ_CONTENT') {
          setCode(code);
          return;
        }
        setQuizId(quizId);
        setQuizDescription(quizDescription);
        const quizArr = Object.entries(quizQuestions);
        setShuffledSelectList(shuffleArr(quizArr));
        setCode(code);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMiniQuiz();
  }, []);

  return { loading, error, quizDescription, quizId, shuffledSelectList, code };
};

export default useMiniQuiz;
