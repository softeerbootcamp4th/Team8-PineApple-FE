import React, { useState, useEffect, useContext } from 'react';
import AdminEditHeader from '@/components/header/AdminEditHeader';
import MiniQuizAnswerContent from './MiniQuizAnswerContent';
import BlackButton from '@/components/buttons/BlackButton';
import {
  getAdminMiniQuizAnswer,
  putAdminMiniQuizAnswer,
} from '@/api/miniQuizAnswer/index';
import { DateContext } from '@/context/dateContext';
import useFetch from '@/hooks/useFetch';
import ModalFrame from '@/components/modal/ModalFrame';

function MiniQuizAnswer() {
  const { dateInfo } = useContext(DateContext);
  const {
    data: initialData,
    loading,
    error,
    refetch,
  } = useFetch(getAdminMiniQuizAnswer, dateInfo);
  const [quizAnswerData, setQuizAnswerData] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (initialData) {
      setQuizAnswerData(initialData);
    }
  }, [initialData]);

  const handleSubmit = async () => {
    // quizAnswerData.quizImage 를 현재는 File형식으로 json 으로 보내는데 이 부분에서 formData 형식으로 바꿔서 보내야함..
    // const formData = new FormData();
    // formData.append('answerNum', quizAnswerData.answerNum);

    // if (quizAnswerData.quizImage) {
    //   formData.append('quizImage', quizAnswerData.quizImage);
    // }

    const response = await putAdminMiniQuizAnswer(dateInfo, quizAnswerData);
    if (response.status === 200) {
      await refetch();
    } else {
      alert('수정이 불가능합니다!');
    }
    setOpenModal(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!quizAnswerData) {
    return <div>No quiz data available</div>;
  }

  const handleChange = (field, value) => {
    setQuizAnswerData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <div className="w-[100%] mt-1000">
      <AdminEditHeader info="미니퀴즈 답변 수정" />
      <div className="flex-col w-[100%] set-center bg-neutral-white rounded-b-[10px] py-1000">
        <MiniQuizAnswerContent
          response={quizAnswerData}
          onChange={handleChange}
        />
        <BlackButton value="수정하기" onClickFunc={() => setOpenModal(true)} />
      </div>
      {openModal && (
        <ModalFrame
          text="정말 미니퀴즈 답변을 수정하실 건가요?"
          onClickNo={() => setOpenModal(false)}
          onClickYes={handleSubmit}
        />
      )}
    </div>
  );
}

export default MiniQuizAnswer;
