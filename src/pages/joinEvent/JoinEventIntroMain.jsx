import React, { useState, useContext } from 'react';
import Card1 from '@/pages/joinEvent/Card1';
import Card2 from '@/pages/joinEvent/Card2';
import PhoneInputModal from '@/components/modal/PhoneInputModal';
import { AuthContext } from '@/context/authContext';

function JoinEventIntroMain() {
  const { phoneNumber } = useContext(AuthContext);
  const [openPhoneInputModal, setOpenPhoneInputModal] = useState(false);

  const openPhoneModal = () => {
    setOpenPhoneInputModal(true);
  };

  const closePhoneModal = () => {
    setOpenPhoneInputModal(false);
  };

  return (
    <>
      <div className="bg-join-event-main bg-cover bg-center h-screen pt-[250px] flex flex-col gap-1300">
        <div className="flex justify-between px-5000">
          <div className="space-y-1200">
            <div className="flex items-center gap-300">
              <Card1 loginData="a" />
              <div className="text-heading-1-bold text-neutral-white">+</div>
              <Card2 loginData={0} auth={phoneNumber} />
            </div>
            <div
              className={`text-center underline cursor-pointer text-neutral-white text-shadow-default ${phoneNumber ? 'invisible' : 'visible'}`}
              onClick={openPhoneModal}
            >
              보유 아이템이 있다면? 전화번호 입력하고 내 아이템 개수 확인하기
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <span>캐스퍼 EV</span>와 떠나기
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {openPhoneInputModal ? (
        <PhoneInputModal closePhoneModal={closePhoneModal} />
      ) : null}
    </>
  );
}

export default JoinEventIntroMain;
