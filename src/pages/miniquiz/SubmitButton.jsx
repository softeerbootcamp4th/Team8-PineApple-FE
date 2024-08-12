import React, { useState, useEffect } from 'react';
import { postAnswer } from '@/api/miniQuiz';
import { useNavigate } from 'react-router-dom';
import BluePurpleButton from '@/components/buttons/BluePurpleButton';
import PropTypes from 'prop-types';
import '@/styles/global.css';

function CustomBluePurpleButton({ quizId, isChosen }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (!disabled) return;
    fetchMiniQuiz();
  }, [disabled]);

  const fetchMiniQuiz = async () => {
    try {
      setLoading(true);
      const response = await postAnswer(quizId, isChosen);
      navigate('/event/miniQuizResult', { state: response });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BluePurpleButton
      value="제출"
      onClickFunc={() => setDisabled(true)}
      disabled={disabled}
      styles="px-3000 py-500 text-detail-1-regular"
    />
  );
}

CustomBluePurpleButton.propTypes = {
  quizId: PropTypes.number,
  isChosen: PropTypes.number,
};

export default React.memo(CustomBluePurpleButton);
