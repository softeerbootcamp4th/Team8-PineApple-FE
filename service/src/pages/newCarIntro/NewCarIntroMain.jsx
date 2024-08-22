import React from 'react';
import BluePurpleButton from '@/components/buttons/BluePurpleButton';
import WhiteButton from '@/components/buttons/WhiteButton';
import { linkToFreeRide, linkToPreOrder } from '@/utils/linkToFunc';
import SlideUpMotion from '@/components/SlideUpMotion/SlideUpMotion';

function NewCarIntroMain() {
  const handleFreeRide = () => linkToFreeRide();

  const handlePreOrder = () => linkToPreOrder();

  return (
    <div className="bg-new-car-intro bg-cover bg-center h-[680px] pt-[250px] flex flex-col gap-1300">
      <SlideUpMotion>
        <div className="flex flex-col items-center">
          <div className="text-detail-1-medium text-neutral-white">
            전력을 다해, CASPER Eletric 사전계약 진행중
          </div>
          <div className="text-heading-banner-title text-neutral-white">
            CASPER Electric
          </div>
        </div>
      </SlideUpMotion>
      <SlideUpMotion delay={0.5}>
        <div className="flex justify-center gap-300">
          <BluePurpleButton
            value="무료 시승 신청 (최대 연 6회)"
            onClickFunc={handleFreeRide}
            styles="text-detail-3-semibold px-800 py-400 "
          />
          <WhiteButton
            value="사전 계약하기"
            onClickFunc={handlePreOrder}
            styles="text-detail-3-semibold px-800 py-400"
          />
        </div>
      </SlideUpMotion>
    </div>
  );
}
export default NewCarIntroMain;
