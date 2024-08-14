import React from 'react';
import PropTypes from 'prop-types';

function AdminEditMiniQuizContent({ response, onChange }) {
  return (
    <>
      <div className="flex mb-1000 w-[90%] gap-500">
        <label
          htmlFor="question"
          className="w-[15%] text-detail-1-bold text-neutral-800 set-center"
        >
          퀴즈 질문 *
        </label>
        <input
          id="question"
          className="w-[85%] px-400 py-200 text-detail-2-medium text-neutral-black placeholder:text-detail-2-medium placeholder:neutral-500 border-solid border-neutral-black focus:border-primary-blue border-[2px] rounded-[10px]"
          placeholder={response.quiz_description}
          value={response.quiz_description}
          onChange={e => onChange('quiz_description', e.target.value)}
        />
      </div>

      {[1, 2, 3, 4].map(num => (
        <div className="flex mb-1000 w-[90%] gap-500" key={num}>
          <label
            htmlFor={`quizSelect_${num}`}
            className="w-[15%] text-detail-2-bold text-neutral-800 set-center"
          >
            선택지{num} *
          </label>
          <input
            id={`quizSelect_${num}`}
            className="w-[85%] px-400 py-200 text-detail-2-medium text-neutral-black placeholder:text-detail-2-medium placeholder:neutral-500 border-solid border-neutral-black focus:border-primary-blue border-[2px] rounded-[10px]"
            placeholder={response[`quiz_question_${num}`]}
            value={response[`quiz_question_${num}`]}
            onChange={e => onChange(`quiz_question_${num}`, e.target.value)}
          />
        </div>
      ))}
    </>
  );
}

AdminEditMiniQuizContent.propTypes = {
  response: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdminEditMiniQuizContent;
