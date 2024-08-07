import React, { useState, useEffect } from 'react';
import { postAnswer } from '@/api/miniQuiz';
import { useLocation } from 'react-router-dom';

function MiniQuizResult() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState({});
  const { quizId, isChosen } = location.state || {};

  useEffect(() => {
    const fetchMiniQuiz = async () => {
      try {
        setLoading(true);
        const response = postAnswer(quizId, isChosen);
        console.log(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMiniQuiz();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Quiz Result</h1>
      <p>Quiz ID: {quizId}</p>
      <p>Chosen Answer: {isChosen}</p>
    </div>
  );
}

export default MiniQuizResult;
