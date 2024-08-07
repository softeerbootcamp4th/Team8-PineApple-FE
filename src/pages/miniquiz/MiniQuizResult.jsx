import React from 'react';
import { useLocation } from 'react-router-dom';

function MiniQuizResult() {
  const location = useLocation();
  const { quizId, isChosen } = location.state || {};

  return (
    <div>
      <h1>Quiz Result</h1>
      <p>Quiz ID: {quizId}</p>
      <p>Chosen Answer: {isChosen}</p>
    </div>
  );
}

export default MiniQuizResult;
