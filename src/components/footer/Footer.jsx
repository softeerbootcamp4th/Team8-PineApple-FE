import React from 'react';
import { linkToFreeRide, linkToPreOrder } from '@/utils/linkToFunc';
import BluePurpleButton from '@/components/buttons/BluePurpleButton';
import WhiteButton from '@/components/buttons/WhiteButton';

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-start gap-900 px-[236px] pt-[50px] pb-[80px] bg-neutral-50">
      <div className="text-center text-primary-berrypurple text-detail-1-medium">
        전력을 다해, CASPER Eletric 사전계약 진행중
      </div>
      <div className="flex justify-center gap-300">
        <BluePurpleButton
          value="무료 시승 신청 (최대 연 6회)"
          onClickFunc={linkToFreeRide}
          styles="text-detail-3-semibold px-800 py-400"
        />
        <WhiteButton
          value="사전 계약하기"
          onClickFunc={linkToPreOrder}
          styles="text-detail-3-semibold px-800 py-400"
        />
      </div>
    </footer>
  );
}

export default Footer;
