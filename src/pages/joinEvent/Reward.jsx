import React, { useState } from 'react';
import EventResultModal from '@/components/modal/EventResultModal';
import PrizeLinkSentModal from '@/components/modal/PrizeLinkSentModal';
import { useNavigate, useLocation } from 'react-router-dom';
import { postSendPrize } from '@/api/rapple/index';

function Reward() {
  const navigate = useNavigate();
  const [openResultModal, setOpenResultModal] = useState(true);
  const [openMessageModal, setOpenMessageModal] = useState(false);
  const [resultImage, setResultImage] = useState('');
  const data = useLocation().state;

  const closeResultModal = () => {
    setOpenResultModal(false);
    setOpenMessageModal(false);
    navigate(`/event`);
  };

  const handleSendPrize = async () => {
    const response = await postSendPrize();
    console.log(response);
    if (response) {
      setResultImage('./src/assets/images/eventIntroNav3.svg');
      setOpenResultModal(false);
      setOpenMessageModal(true);
    }
  };

  return (
    <div>
      {openResultModal && (
        <EventResultModal
          closeResultModal={closeResultModal}
          data={data}
          handleSendPrize={handleSendPrize}
        />
      )}
      {openMessageModal && (
        <PrizeLinkSentModal
          closeResultModal={closeResultModal}
          resultImage={resultImage}
        />
      )}
    </div>
  );
}

export default Reward;
