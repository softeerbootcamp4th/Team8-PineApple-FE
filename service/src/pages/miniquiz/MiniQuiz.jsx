import React, { useState } from 'react';
import EventHeader from '@/components/header/EventHeader';
import ExitModal from '@/components/modal/ExitModal';
import MiniQuizMain from '@/pages/miniquiz/MiniQuizMain';
import { Helmet } from 'react-helmet-async';

const TITLE = '캐스퍼 미니퀴즈';
const DESCRIPTION = '미니퀴즈을 통해 선착순 경품과 툴박스 아이템을 획득하세요!';
const OG_IMAGE_URL =
  'https://softeer4-team8.s3.ap-northeast-2.amazonaws.com/OGImage.png';
const OG_URL = 'https://casper-event.store/event/miniquiz';

const HelmetMeta = () => (
  <Helmet>
    <title>{TITLE}</title>
    <meta name="description" content={DESCRIPTION} />
    <meta property="og:url" content={OG_URL} />
    <meta property="og:title" content={TITLE} />
    <meta property="og:description" content={DESCRIPTION} />
    <meta property="og:image" content={OG_IMAGE_URL} />
  </Helmet>
);

function MiniQuiz() {
  const [openExitModal, setOpenExitModal] = useState(false);

  const onClose = () => setOpenExitModal(false);

  return (
    <>
      <div className="relative min-h-[860px] text-nowrap">
        <HelmetMeta />
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
