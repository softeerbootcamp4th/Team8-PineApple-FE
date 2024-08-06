import React, { useState, useEffect } from 'react';
import EventHeader from '@/components/header/EventHeader';
import QuizResult from '@/pages/miniquiz/MiniQuizResult';
import ClickBox from '@/pages/miniquiz/ClickBox';
import shuffleArr from '@/utils/shuffleArr';
import { getMiniQuiz } from '@/api/miniQuiz';
import BluePurpleButton from '@/components/buttons/BluePurpleButton';
import '@/styles/global.css';

function MiniQuiz() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quizDescription, setQuizDescription] = useState('');
  const [quizId, setQuizId] = useState(0);
  const [shuffledSelectList, setShuffledSelectList] = useState([]);
  const [isChosen, setIsChosen] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const fetchMiniQuiz = async () => {
      try {
        setLoading(true);
        const data = await getMiniQuiz();
        const { quizId, quizDescription, quizQuestions } = data;
        setQuizId(quizId);
        setQuizDescription(quizDescription);
        const quizArr = Object.entries(quizQuestions);
        setShuffledSelectList(shuffleArr(quizArr));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMiniQuiz();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    if (error.message === 'Cannot convert undefined or null to object')
      return <div></div>; //error no data
    return <div>Error: {error.message}</div>;
  }

  if (isSubmit) {
    return <QuizResult quizId={quizId} isChosen={isChosen} />;
  }
  return (
    <>
      <div className="relative min-h-[860px] text-nowrap">
        <EventHeader
          eventTitle="Event 2. 도구 얻기"
          eventBody="월드컵 일일 미니퀴즈"
        />
        <div className="flex flex-col items-center h-screen bg-miniquiz-paper pt-3000">
          <div className="rounded-[8px] skyblue-box text-detail-1-bold mb-500">
            월드컵 일일 미니퀴즈
          </div>
          <div className="text-center text-body-1-bold mb-2000">
            {quizDescription}
          </div>
          <div className="grid grid-cols-2 gap-x-600 gap-y-600 mb-2000">
            {shuffledSelectList.map(item => {
              const id = Number(item[0]);
              const value = item[1];
              return (
                <ClickBox
                  id={id}
                  isChosen={isChosen}
                  value={value}
                  onClick={() => setIsChosen(id)}
                  key={id}
                />
              );
            })}
          </div>
          <BluePurpleButton
            value="제출"
            onClickFunc={() => setIsSubmit(true)}
            styles="px-3000 py-500 text-detail-1-regular"
          />
        </div>
      </div>
    </>
  );
}

export default MiniQuiz;
