import React from 'react';
import BluePurpleButton from '@/components/buttons/BluePurpleButton';
import WhiteButton from '@/components/buttons/WhiteButton';

function NewCarIntroMain() {
  const linkToFreeRide = () => {
    window.open('https://casper.hyundai.com/vehicles/test-driving/intro');
  };
  const linkToPreOrder = () => {
    window.open('https://casper.hyundai.com/vehicles/test-driving/intro');
  };

  return (
    <div className="bg-gradient-violetblue-cobaltblue w-screen h-screen pt-[250px] flex flex-col gap-1300">
      <div className="flex flex-col items-center">
        <div className="text-detail-1-medium text-neutral-white">
          전력을 다해, CASPER Eletric 사전계약 진행중
        </div>
        <div className="text-heading-banner-title text-neutral-white">
          CASPER Electric
        </div>
      </div>
      <div className="flex justify-center gap-300">
        <BluePurpleButton
          value="무료 시승 신청 (최대 연 6회)"
          onClickFunc={linkToFreeRide}
        />
        <WhiteButton value="사전 계약하기" onClickFunc={linkToPreOrder} />
      </div>
    </div>
  );
}
export default NewCarIntroMain;
