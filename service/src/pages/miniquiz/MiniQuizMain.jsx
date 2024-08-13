import React, { useState, useEffect } from 'react';
import useMiniQuiz from '@/pages/miniquiz/miniquizhooks/useMiniQuiz';
import ClickBox from '@/pages/miniquiz/ClickBox';
import SubmitButton from '@/pages/miniquiz/SubmitButton';
import { useNavigate } from 'react-router-dom';
import LoadingQuiz from '@/pages/miniquiz/LoadingQuiz';
import '@/styles/global.css';

function MiniQuiz() {
  const navigate = useNavigate();
  const { code, loading, error, data, shuffledQuizQuestion } = useMiniQuiz();
  const { quizDescription, quizId } = data;
  const [isChosen, setIsChosen] = useState(0);

  useEffect(() => {
    if (code === 'NO_QUIZ_CONTENT') {
      navigate('/event/noQuiz');
    }
  }, [code]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (loading) {
    return <LoadingQuiz />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (loading) {
    return <LoadingQuiz />;
  }

  return (
    <div className="flex flex-col items-center h-screen bg-miniquiz-paper pt-3000">
      <div className="rounded-[8px] skyblue-box text-detail-1-bold mb-500">
        월드컵 일일 미니퀴즈
      </div>
      <div className="text-center text-body-1-bold mb-2000">
        {quizDescription}
      </div>
      <div className="grid grid-cols-2 gap-x-600 gap-y-600 mb-2000">
        {shuffledQuizQuestion.map(item => {
          const id = Number(item[0]);
          const value = item[1];
          return (
            <ClickBox
              id={id}
              isChosen={isChosen}
              value={value}
              onClick={() => setIsChosen(id)}
              key={id}
            />
          );
        })}
      </div>
      <SubmitButton quizId={quizId} isChosen={isChosen} />
    </div>
  );
}

export default MiniQuiz;
