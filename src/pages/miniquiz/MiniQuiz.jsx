import React, { useState, useEffect } from 'react';
import '@/styles/global.css';
import ClickBox from './ClickBox';
import EventHeader from '@/components/header/EventHeader';
import addIdsAndShuffleData from '@/utils/utilForMiniQuiz';

function MiniQuiz() {
  //TODO 백에서 데이터 가져오기
  // try catch를 이용하여 12 ~ 13시는 다른 화면 return

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMiniQuiz = async () => {
      try {
        setLoading(true);
        const data = await getMiniQuiz();
        const { question, ...selectListObj } = data;
        const ShuffledselectList = addIdsAndShuffleData(selectListObj);
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
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="relative min-w-[1104px] min-h-[860px] text-nowrap">
        <EventHeader
          eventTitle="Event 2. 도구 얻기"
          eventBody="월드컵 일일 미니퀴즈"
        />
        <div className="flex flex-col items-center h-screen bg-miniquiz-paper pt-3000">
          <div className="rounded-[8px] skyblue-box text-detail-1-bold mb-500">
            월드컵 일일 미니퀴즈
          </div>
          <div className="text-center text-body-1-bold mb-2000">{question}</div>
          <div className="grid grid-cols-2 gap-x-600 gap-y-600">
            {ShuffledselectList.map(item => {
              <ClickBox value={item.value} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MiniQuiz;
