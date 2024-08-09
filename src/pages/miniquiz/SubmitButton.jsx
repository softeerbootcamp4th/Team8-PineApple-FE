import React, { useState } from 'react';
import { postAnswer } from '@/api/miniQuiz';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '@/styles/global.css';

function CustomBluePurpleButton({ quizId, isChosen }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const value = '제출';

  const fetchMiniQuiz = async () => {
    try {
      setLoading(true);
      const response = await postAnswer(quizId, isChosen);
      navigate('/event/miniQuizResult', { state: response });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
      setDisabled(false);
    }
  };

  const handleClick = () => {
    setDisabled(true);
    fetchMiniQuiz();
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <button
      onClick={handleClick}
      className={`${disabled ? 'opacity-30' : 'opacity-100 hover-scale-ani'} px-3000 py-500 text-detail-1-regular set-center rounded-full bg-gradient-blue-purple text-neutral-white`}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

CustomBluePurpleButton.propTypes = {
  quizId: PropTypes.number,
  isChosen: PropTypes.number,
};

export default React.memo(CustomBluePurpleButton);
