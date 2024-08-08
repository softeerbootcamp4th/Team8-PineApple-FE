import React, { useState, useContext } from 'react';
import Card1 from '@/pages/joinEvent/Card1';
import Card2 from '@/pages/joinEvent/Card2';
import PhoneInputModal from '@/components/modal/PhoneInputModal';
import { AuthContext } from '@/context/authContext';
import BluePurpleButton from '@/components/buttons/BluePurpleButton';

function JoinEventIntroMain() {
  const { userInfo } = useContext(AuthContext);
  const [openPhoneInputModal, setOpenPhoneInputModal] = useState(false);

  const { car, toolBoxCnt, phoneNumber } = userInfo;
  let day = 2;
  const details = `캐스퍼 EV와 떠날 시간!\n깜빡하고 차키를 안 가져왔네요.. 어떻게 해야할까요?`;
  const disabled = !phoneNumber || !car || toolBoxCnt === 0; // 결과 보기 버튼 클릭 가능 여부 변수명 변경 필요

  const openPhoneModal = () => {
    setOpenPhoneInputModal(true);
  };

  const closePhoneModal = () => {
    setOpenPhoneInputModal(false);
  };

  return (
    <>
      <div className="bg-join-event-main bg-cover bg-center h-screen pt-[250px] flex flex-col">
        <div className="flex gap-2000 px-3000">
          <div className="space-y-1200">
            <div className="flex items-center gap-300">
              <Card1 />
              <div className="text-heading-1-bold text-neutral-white">+</div>
              <Card2 />
            </div>
            <div
              className={`text-center underline text-neutral-white text-shadow-default ${phoneNumber ? 'invisible' : 'visible'}`}
            >
              <span className="cursor-pointer" onClick={openPhoneModal}>
                보유 아이템이 있다면? 전화번호 입력하고 내 아이템 개수 확인하기
              </span>
            </div>
          </div>
          <div className="relative flex flex-col">
            <div className="text-heading-banner-title-2 text-nowrap mb-1000">
              <span className="text-gradient-blue-purple">캐스퍼 EV</span>와
              떠나기
            </div>
            <div className="w-[84px] bg-op-30-blue px-400 py-100 mb-400 text-detail-2-medium text-neutral-white">
              Day {day}
            </div>
            <div className="whitespace-pre-line h-1800 text-detail-1-regular text-neutral-black mb-1500">
              {details}
            </div>
            <div>
              <BluePurpleButton
                value="결과 보기"
                onClickFunc={() => alert('결과 보기')}
                styles="text-body-3-regular px-5000 py-400"
                disabled={disabled}
              />
            </div>
            {disabled && (
              <>
                <div className="absolute top-[417px] left-[279px] h-0 w-0 border-x-[12px] border-b-[12px] border-x-transparent border-b-neutral-white"></div>
                <div className="absolute top-[423px] left-[91px] w-[400px] rounded-[5px] py-300 text-center bg-neutral-white text-primary-blue">
                  이벤트에 참여해서 추첨을 위한 아이템을 모아보아요!
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {openPhoneInputModal && (
        <PhoneInputModal closePhoneModal={closePhoneModal} />
      )}
    </>
  );
}

export default JoinEventIntroMain;
