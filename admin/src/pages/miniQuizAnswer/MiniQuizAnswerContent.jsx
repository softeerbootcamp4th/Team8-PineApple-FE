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
        placeholder={String(response.answer_num)}
        value={String(response.answer_num)}
        onChange={value => onChange('answer_num', value)}
      />
      <ImageUploader
        label="정답 이미지"
        imagePreview={response.quiz_image}
        onChange={file => onChange('quiz_image', file)}
      />
    </>
  );
}

MiniQuizAnswerContent.propTypes = {
  response: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MiniQuizAnswerContent;
