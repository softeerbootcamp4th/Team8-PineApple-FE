import { useState, useEffect, useCallback } from 'react';
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
        setError('');
        const [quizData] = await Promise.all([
          getMiniQuiz(),
          new Promise(resolve => setTimeout(resolve, 300)), // 사용자의 경험을 방해하지 않는 선에서 로딩 화면을 보여주기 위한 0.3초
        ]);

        const { quizCode, quizQuestions } = quizData;
        if (quizCode === 'NO_QUIZ_CONTENT') {
          setCode(quizCode);
          return;
        }
        setData(quizData);
        setShuffledQuizQuestion(shuffleArr(Object.entries(quizQuestions)));
      } catch (err) {
        setError('퀴즈 로딩에 실패했습니다. 다시 시도 부탁드립니다.');
      } finally {
        setLoading(false);
      }
    };
    fetchMiniQuiz();
  }, []);

  return { code, error, loading, data, shuffledQuizQuestion };
};

export default useMiniQuiz;
