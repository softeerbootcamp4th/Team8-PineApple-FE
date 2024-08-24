import React, { useState, useEffect, useCallback } from 'react';
import useMiniQuiz from '@/pages/miniquiz/miniquizhooks/useMiniQuiz';
import ClickBox from '@/pages/miniquiz/ClickBox';
import SubmitButton from '@/pages/miniquiz/SubmitButton';
import { useNavigate } from 'react-router-dom';
import LoadingQuiz from '@/pages/miniquiz/LoadingQuiz';
import PropTypes from 'prop-types';

const QuizDescription = ({ description }) => (
  <div className="text-center text-body-1-bold mb-2000">{description}</div>
);

QuizDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

const QuizQuestions = ({ questions, selectedId, onSelect }) => (
  <div className="grid grid-cols-2 gap-x-600 gap-y-600 mb-2000">
    {questions.map(([id, value]) => (
      <ClickBox
        id={Number(id)}
        isChosen={selectedId === Number(id)}
        value={value}
        onClick={() => onSelect(Number(id))}
        key={id}
      />
    ))}
  </div>
);

QuizQuestions.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.array).isRequired,
  selectedId: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
};

function MiniQuizMain() {
  const navigate = useNavigate();
  const { code, loading, error, data, shuffledQuizQuestion } = useMiniQuiz();
  const [selectedId, setSelectedId] = useState(null);
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    if (code === 'NO_QUIZ_CONTENT') {
      navigate('/event/noQuiz');
    }
  }, [code, navigate]);

  const handleSelect = useCallback(id => {
    setSelectedId(id);
    setSubmitDisabled(false);
  }, []);

  if (loading) return <LoadingQuiz />;
  if (error) return <div>Error: {error.message}</div>;

  const { quizDescription, quizId } = data;

  return (
    <div className="flex flex-col items-center h-screen bg-miniquiz-paper pt-3000">
      <div className="rounded-[8px] skyblue-box text-detail-1-bold mb-500">
        월드컵 일일 미니퀴즈
      </div>
      <QuizDescription description={quizDescription} />
      <QuizQuestions
        questions={shuffledQuizQuestion}
        selectedId={selectedId}
        onSelect={handleSelect}
      />
      <SubmitButton
        quizId={quizId}
        selectedId={selectedId}
        disabled={isSubmitDisabled}
        setDisabled={setSubmitDisabled}
      />
    </div>
  );
}

export default MiniQuizMain;
