import React from 'react';
import BluePurpleButton from '@/components/buttons/BluePurpleButton';
import WhiteButton from '@/components/buttons/WhiteButton';

function Footer() {
  const linkToFreeRide = () => {
    window.open('https://casper.hyundai.com/vehicles/test-driving/intro');
  };
  const linkToPreOrder = () => {
    window.open('https://casper.hyundai.com/vehicles/test-driving/intro');
  };
  return (
    <footer className="flex flex-col items-center justify-start gap-900 h-[412px] px-[236px] py-[56px] bg-neutral-50">
      <div className="text-center text-primary-berrypurple text-detail-1-medium ">
        전력을 다해, CASPER Eletric 사전계약 진행중
      </div>
      <div className="flex justify-center gap-300">
        <BluePurpleButton
          value="무료 시승 신청 (최대 연 6회)"
          onClickFunc={linkToFreeRide}
          textSize="text-detail-3-semibold"
        />
        <WhiteButton value="사전 계약하기" onClickFunc={linkToPreOrder} />
      </div>
    </footer>
  );
}

export default Footer;
