import React, { useState } from 'react';
import AdminEditHeader from '@/components/header/AdminEditHeader';
import BlackButton from '@/components/buttons/BlackButton';
import ModalFrame from '@/components/modal/ModalFrame';
import { draw } from '@/api/DrawCasper/index';

function DrawCasper() {
  const [openSubmitModal, setOpenSubmitModal] = useState(false);
  const [winner, setWinner] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await draw();
      setWinner(response.phoneNumber);
    } catch (error) {
      console.error(error);
    } finally {
      setOpenSubmitModal(false);
    }
  };

  return (
    <div className="w-full mt-10">
      <AdminEditHeader info="1등 경품 추첨" />
      <div className="set-center h-[400px] w-full bg-neutral-white rounded-b-[10px] py-4">
        {winner === '' ? (
          <BlackButton
            value="추첨하기"
            onClickFunc={() => setOpenSubmitModal(true)}
          />
        ) : (
          <div className="text-heading-banner-title-3">{winner}</div>
        )}
      </div>
      {openSubmitModal && (
        <ModalFrame
          text="정말로 추첨하시겠습니까??"
          onClickNo={() => setOpenSubmitModal(false)}
          onClickYes={() => handleSubmit()}
        />
      )}
    </div>
  );
}

export default DrawCasper;
