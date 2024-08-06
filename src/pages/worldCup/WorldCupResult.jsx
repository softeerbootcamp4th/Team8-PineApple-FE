import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import EventHeader from '@/components/header/EventHeader';
import ExitModal from '@/components/modal/ExitModal';
import worldCupArrowIcon from '@/assets/icons/worldCupArrowIcon.svg';

function WorldCupResult() {
  const location = useLocation();
  const data = location.state;
  const [openExitModal, setopenExitModal] = useState(false);
  const onClose = () => setopenExitModal(false);
  return (
    <div>
      {data === null ? (
        <div>잘못된 접근입니다..!</div>
      ) : (
        <div className="h-screen bg-center bg-join-event-main">
          <EventHeader
            eventTitle="Event 1. 차 얻기"
            eventBody="운전 중 피하고 싶은 상황 월드컵"
            setopenExitModal={setopenExitModal}
          />
          <div className="relative flex flex-col items-center pt-2000">
            <img
              src={worldCupArrowIcon}
              alt="worldCupArrowIcon"
              className="absolute top-[60%]"
            />
            <div className="px-[58px] py-[5px] bg-primary-babyblue rounded-md flex justify-center items-center text-detail-1-bold text-primary-blue mb-300">
              우승
            </div>
            <p className="text-center text-heading-3-bold mb-700 text-neutral-black">
              {data.story}
            </p>
            <div className="flex justify-center gap-1000 pl-700">
              <img src={data.image} alt="dataImage" />
              <img src={data.resultImage} alt="resultImage" />
            </div>
          </div>
          {openExitModal ? (
            <ExitModal onClose={onClose} game="worldCup" />
          ) : null}
        </div>
      )}
    </div>
  );
}

export default WorldCupResult;
