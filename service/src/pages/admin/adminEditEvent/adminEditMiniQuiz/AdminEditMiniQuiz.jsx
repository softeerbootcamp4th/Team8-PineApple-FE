import React, { useState, useEffect } from 'react';
import AdminEditHeader from '../AdminEditHeader';
import AdminEditMiniQuizContent from './AdminEditMiniQuizContent';
import BlackButton from '@/components/buttons/BlackButton';

function AdminEditMiniQuiz() {
  const [date, setDate] = useState(1);
  const [quizData, setQuizData] = useState({
    id: 1,
    quiz_date: '2024-08-14',
    quiz_description: '오늘의 퀴즈는?? 두둥탁!!',
    quiz_question_1: '참맛참맛참맛',
    quiz_question_2: '보쌈보쌈보쌈',
    quiz_question_3: '하이하이하이하이',
    quiz_question_4: '이승섭은 롤을 잘해!',
  });

  const handleChange = (field, value) => {
    setQuizData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    // try {
    //   const response = await axios.put(`/api/quiz/${quizData.id}`, quizData);
    //   console.log('수정된 데이터가 서버에 저장되었습니다.', response.data);
    // } catch (error) {
    //   console.error('수정 요청 중 오류가 발생했습니다.', error);
    // }
    console.log('ddd');
  };

  return (
    <div className="w-[100%] mt-1000">
      <AdminEditHeader
        info="미니퀴즈 질문 수정"
        date={date}
        setDate={setDate}
      />
      <div className="flex-col w-[100%] set-center bg-neutral-white rounded-b-[10px] py-1000">
        <AdminEditMiniQuizContent response={quizData} onChange={handleChange} />
        <BlackButton onClickFunc={handleSubmit} />
      </div>
    </div>
  );
}

export default AdminEditMiniQuiz;
