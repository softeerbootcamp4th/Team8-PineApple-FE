import React, { useState, useRef } from 'react';
import { postAnswer } from '@/api/miniQuiz';
import { useNavigate } from 'react-router-dom';
import BluePurpleButton from '@/components/buttons/BluePurpleButton';
import PropTypes from 'prop-types';

function SubmitButton({ quizId, isChosen, disabled, setDisabled }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isSubmitting = useRef(false);

  const fetchMiniQuiz = async () => {
    if (isSubmitting.current) return;

    isSubmitting.current = true;
    try {
      setLoading(true);
      setDisabled(true);
      const response = await postAnswer(quizId, isChosen);
      navigate('/event/miniQuizResult', { state: response });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
      isSubmitting.current = false;
    }
  };

  const handleSubmit = () => {
    if (!disabled) {
      fetchMiniQuiz();
    }
  };

  if (error) {
    return <div>{error}가 발생했습니다. 새로고침해주세요</div>;
  } else if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BluePurpleButton
      value="제출"
      onClickFunc={handleSubmit}
      disabled={disabled}
      styles="px-3000 py-500 text-detail-1-regular"
    />
  );
}

SubmitButton.propTypes = {
  quizId: PropTypes.number,
  isChosen: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
  setDisabled: PropTypes.func.isRequired,
};

export default React.memo(SubmitButton);
