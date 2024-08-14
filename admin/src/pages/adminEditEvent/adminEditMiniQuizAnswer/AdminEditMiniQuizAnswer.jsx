import React, { useState, useEffect } from 'react';
import AdminEditHeader from '../AdminEditHeader';
import AdminEditMiniQuizAnswerContent from './AdminEditMiniQuizAnswerContent';
import BlackButton from '@/components/buttons/BlackButton';

function AdminEditMiniQuizAnswer() {
  const [date, setDate] = useState(1);
  const [quizAnswerData, setAnswerData] = useState({
    id: 1,
    answer_num: 1,
    quiz_image:
      'https://softeer4-team8.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A1%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%80%E1%85%A5.svg',
  });

  const handleChange = (field, value) => {
    setAnswerData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    // try {
    //   const response = await axios.put(`/api/quiz/${quizAnswerData.id}`, quizAnswerData);
    //   console.log('수정된 데이터가 서버에 저장되었습니다.', response.data);
    // } catch (error) {
    //   console.error('수정 요청 중 오류가 발생했습니다.', error);
    // }
    console.log('dddd');
  };

  return (
    <div className="w-[100%] mt-1000">
      <AdminEditHeader
        info="미니퀴즈 답변 수정"
        date={date}
        setDate={setDate}
      />
      <div className="flex-col w-[100%] set-center bg-neutral-white rounded-b-[10px] py-1000">
        <AdminEditMiniQuizAnswerContent
          response={quizAnswerData}
          onChange={handleChange}
        />
        <BlackButton onClickFunc={handleSubmit} />
      </div>
    </div>
  );
}

export default AdminEditMiniQuizAnswer;
