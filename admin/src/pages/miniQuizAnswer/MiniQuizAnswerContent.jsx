import React from 'react';
import PropTypes from 'prop-types';
import InputForm from '@/components/form/InputForm';
import ImageUploader from '@/components/form/ImageUploader';

function MiniQuizAnswerContent({ response, onChange }) {
  return (
    <>
      <InputForm
        label="정답"
        id="answer"
        placeholder={String(response.answerNum)}
        value={String(response.answerNum)}
        onChange={value => onChange('answerNum', value)}
      />
      <ImageUploader
        label="정답 이미지"
        imagePreview={response.quizImage}
        onChange={file => onChange('quizImage', file)}
      />
    </>
  );
}

MiniQuizAnswerContent.propTypes = {
  response: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MiniQuizAnswerContent;
