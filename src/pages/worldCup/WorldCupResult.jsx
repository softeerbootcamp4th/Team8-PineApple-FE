import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import EventHeader from '@/components/header/EventHeader';
import ExitModal from '@/components/modal/ExitModal';
import WorldCupResultTop from './WorldCupResultTop';
import WorldCupResultBottom from './WorldCupResultBottom';

function WorldCupResult() {
  const location = useLocation();
  const data = location.state;
  const [openExitModal, setOpenExitModal] = useState(false);
  const onClose = () => setOpenExitModal(false);

  return (
    <div>
      {data === null ? (
        <div>잘못된 접근입니다..!</div>
      ) : (
        <>
          <div className="h-screen bg-join-event-main bg-cover bg-center min-h-[800px]">
            <EventHeader
              eventTitle="Event 1. 차 얻기"
              eventBody="운전 중 피하고 싶은 상황 월드컵"
              setOpenExitModal={setOpenExitModal}
            />
            <WorldCupResultTop data={data} />
          </div>
          <WorldCupResultBottom data={data} />
          {openExitModal ? (
            <ExitModal onClose={onClose} game="worldCup" />
          ) : null}
        </>
      )}
    </div>
  );
}

export default WorldCupResult;
