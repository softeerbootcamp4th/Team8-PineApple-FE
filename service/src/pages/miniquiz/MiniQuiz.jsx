import React, { useState } from 'react';
import EventHeader from '@/components/header/EventHeader';
import ExitModal from '@/components/modal/ExitModal';
import MiniQuizMain from '@/pages/miniquiz/MiniQuizMain';
import { Helmet } from 'react-helmet-async';

function MiniQuiz() {
  const [openExitModal, setOpenExitModal] = useState(false);

  const onClose = () => setOpenExitModal(false);

  return (
    <>
      <div className="relative min-h-[860px] text-nowrap">
        <Helmet>
          <title>캐스퍼 미니퀴즈</title>
          <meta
            name="description"
            content="미니퀴즈을 통해 선착순 경품과 툴박스 아이템을 획득하세요!"
          />
          <meta property="og:title" content="캐스퍼 미니퀴즈" />
          <meta
            property="og:description"
            content="미니퀴즈을 통해 선착순 경품과 툴박스 아이템을 획득하세요!"
          />
          <meta
            property="og:image"
            content="https://softeer4-team8.s3.ap-northeast-2.amazonaws.com/OGImage.svg"
          />
        </Helmet>
        <EventHeader
          eventTitle="Event 2. 도구 얻기"
          eventBody="월드컵 일일 미니퀴즈"
          setOpenExitModal={setOpenExitModal}
        />
        <MiniQuizMain />
      </div>
      {openExitModal && <ExitModal onClose={onClose} game="MiniQuiz" />}
    </>
  );
}

export default MiniQuiz;
