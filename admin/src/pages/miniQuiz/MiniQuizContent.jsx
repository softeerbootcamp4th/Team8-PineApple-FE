import React from 'react';
import PropTypes from 'prop-types';
import InputForm from '@/components/form/InputForm';

function MiniQuizContent({ response, onChange }) {
  return (
    <>
      <InputForm
        label="퀴즈 질문"
        id="question"
        placeholder={response.quiz_description}
        value={response.quiz_description}
        onChange={value => onChange('quiz_description', value)}
      />

      {[1, 2, 3, 4].map(num => (
        <InputForm
          key={num}
          label={`선택지${num}`}
          id={`quizSelect_${num}`}
          placeholder={response[`quiz_question_${num}`]}
          value={response[`quiz_question_${num}`]}
          onChange={value => onChange(`quiz_question_${num}`, value)}
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
