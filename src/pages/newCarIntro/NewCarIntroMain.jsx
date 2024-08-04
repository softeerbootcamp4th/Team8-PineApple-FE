import React, { useCallback } from 'react';
import BluePurpleButton from '@/components/buttons/BluePurpleButton';
import WhiteButton from '@/components/buttons/WhiteButton';
import originLinkToFreeRide from '@/utils/linkToFreeRideFunc';
import originLinkToPreOrder from '@/utils/linkToPreOrderFunc';

function NewCarIntroMain() {
  // NewCarIntroMain이  rerender 되었을 때 새로 생성되어 함수 또한 재생성된다.
  // 함수의 주소가 바뀌면 Button 컴포넌트는 props가 바뀐 것으로 판단
  // rerendering이 된다. 따라서 이를 방지하기 위해 useCallback 사용
  const linkToFreeRide = useCallback(() => {
    originLinkToFreeRide();
  }, []);

  const linkToPreOrder = useCallback(() => {
    originLinkToPreOrder();
  }, []);
  return (
    <div className="bg-new-car-intro bg-cover bg-center h-[680px] pt-[250px] flex flex-col gap-1300">
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
          styles="text-detail-3-semibold px-800 py-400 "
        />
        <WhiteButton
          value="사전 계약하기"
          onClickFunc={linkToPreOrder}
          styles="text-detail-3-semibold px-800 py-400"
        />
      </div>
    </div>
  );
}
export default NewCarIntroMain;
