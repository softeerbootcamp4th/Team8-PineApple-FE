import React, { useState, useContext, useEffect } from 'react';
import AdminEditHeader from '@/components/header/AdminEditHeader';
import MiniQuizContent from './MiniQuizContent';
import BlackButton from '@/components/buttons/BlackButton';
import { getAdminMiniQuiz, putAdminMiniQuiz } from '@/api/miniQuiz/index';
import { DateContext } from '@/context/dateContext';
import useFetch from '@/hooks/useFetch';
import ModalFrame from '@/components/modal/ModalFrame';
import useNavigationBlocker from '@/hooks/useNavigationBlocker';
import useBeforeUnload from '@/hooks/useBeforeUnload';

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
  const [modified, setModified] = useState(false);

  useBeforeUnload();

  const {
    unsavedChangesModal,
    handleConfirmNavigation,
    handleCancelNavigation,
  } = useNavigationBlocker(modified, () => {
    setModified(false);
  });

  useEffect(() => {
    if (initialData) {
      if (initialData.code === 'NO_QUIZ_INFO') {
        setQuizData({
          quizId: '0',
          quizDescription: '',
          quizQuestions: {
            1: '',
            2: '',
            3: '',
            4: '',
          },
        });
      } else {
        setQuizData(initialData);
      }
    }
  }, [initialData]);

  const handleChange = (key, value) => {
    setModified(true);
    if (key === 'quizDescription') {
      setQuizData(prevState => ({
        ...prevState,
        [key]: value,
      }));
    } else {
      setQuizData(prevState => ({
        ...prevState,
        quizQuestions: {
          ...prevState.quizQuestions,
          [key]: value,
        },
      }));
    }
  };

  const handleSubmit = async () => {
    const response = await putAdminMiniQuiz(dateInfo, quizData);
    if (response.status === 200) {
      await refetch();
      setModified(false);
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
        <MiniQuizContent response={quizData} onChange={handleChange} />
        <BlackButton value="수정하기" onClickFunc={() => setOpenModal(true)} />
      </div>
      {openModal && (
        <ModalFrame
          text="정말 미니퀴즈를 수정하실 건가요?"
          onClickNo={() => setOpenModal(false)}
          onClickYes={handleSubmit}
        />
      )}
      {unsavedChangesModal && (
        <ModalFrame
          text={`지금 페이지를 나가시면 작성중인 내용이 삭제됩니다. 정말 페이지를 나가시겠습니까?`}
          onClickNo={handleCancelNavigation}
          onClickYes={handleConfirmNavigation}
        />
      )}
    </div>
  );
}

export default MiniQuiz;
