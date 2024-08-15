import React, { useState, useContext, useEffect } from 'react';
import AdminEditHeader from '@/components/header/AdminEditHeader';
import AdminEditMiniQuizContent from './MiniQuizContent';
import BlackButton from '@/components/buttons/BlackButton';
import { getAdminMiniQuiz, putAdminMiniQuiz } from '@/api/miniQuiz/index';
import { DateContext } from '@/context/dateContext';
import useFetch from '@/hooks/useFetch';
import ModalFrame from '@/components/modal/ModalFrame';

function MiniQuiz() {
  const { dateInfo } = useContext(DateContext);
  const {
    data: initialData,
    loading,
    error,
    refetch,
  } = useFetch(getAdminMiniQuiz, dateInfo);
  const [quizData, setQuizData] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (initialData) {
      setQuizData(initialData);
    }
  }, [initialData]);

  const handleChange = (field, value) => {
    setQuizData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    const response = await putAdminMiniQuiz(quizData);
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

  if (!quizData) {
    return <div>No quiz data available</div>;
  }

  return (
    <div className="w-[100%] mt-1000">
      <AdminEditHeader info="미니퀴즈 질문 수정" />
      <div className="flex-col w-[100%] set-center bg-neutral-white rounded-b-[10px] py-1000">
        <AdminEditMiniQuizContent response={quizData} onChange={handleChange} />
        <BlackButton value="수정하기" onClickFunc={() => setOpenModal(true)} />
      </div>
      {openModal && (
        <ModalFrame
          text="정말 미니퀴즈를 수정하실 건가요?"
          onClickNo={() => setOpenModal(false)}
          onClickYes={handleSubmit}
        />
      )}
    </div>
  );
}

export default MiniQuiz;
