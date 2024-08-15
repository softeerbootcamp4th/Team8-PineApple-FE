import React from 'react';
import PropTypes from 'prop-types';
import InputForm from '@/components/form/InputForm';

function MiniQuizContent({ response, onChange }) {
  return (
    <>
      <InputForm
        label="퀴즈 질문"
        id="question"
        placeholder={response.quizDescription}
        value={response.quizDescription}
        onChange={value => onChange('quizDescription', value)}
      />

      {Object.keys(response.quizQuestions).map(key => (
        <InputForm
          key={key}
          label={`선택지 ${key}`}
          id={`quizSelect_${key}`}
          placeholder={response.quizQuestions[key]}
          value={response.quizQuestions[key]}
          onChange={value => onChange(`quizQuestions.${key}`, value)}
        />
      ))}
    </>
  );
}

MiniQuizContent.propTypes = {
  response: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MiniQuizContent;
