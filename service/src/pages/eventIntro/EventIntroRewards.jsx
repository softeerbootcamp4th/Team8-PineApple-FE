import React from 'react';
import Prize1 from '@/assets/images/1stPrize.png';
import Prize2 from '@/assets/images/prize2.png';
import Prize3 from '@/assets/images/prize3.png';
import Prize4 from '@/assets/images/prize4.png';
import Prize5_1 from '@/assets/images/prize5_1.png';
import Prize5_2 from '@/assets/images/prize5_2.png';

function EventIntroRewards() {
  return (
    <div className="pt-2500 pb-4000 px-4000">
      <span className="text-heading-2-bold text-neutral-black">
        이벤트 경품
      </span>
      <div className="py-[17px] pl-[31px] pr-[21px] w-full flex justify-between rounded-xl shadow-3xl gap-5000 items-center bg-neutral-white mt-800 mb-[24px]">
        <div>
          <span className="text-body-2-bold text-primary-blue mb-500">1등</span>
          <p className="text-body-2-bold mb-[16px] text-neutral-black">
            캐스퍼 EV 1명
          </p>
          <p className="text-detail-3-regular text-neutral-black">
            이벤트 기간 종료 후 전체 응모 참여자를 대상으로 1등 당첨자를
            추첨해요!
          </p>
          <p className="text-detail-3-regular text-neutral-black mb-700">
            응모에 많이 참여할 수록 당첨 확률이 높아져요.
          </p>
          <p className="text-detail-3-semibold text-primary-blue">
            1등 당첨자 발표: nnnn.nn.nn nn시
          </p>
        </div>
        <div>
          <img src={Prize1} alt={Prize1} />
        </div>
      </div>
      <div className="flex justify-between gap-600 mb-600">
        <div className="flex items-center justify-between rounded-xl shadow-3xl bg-neutral-white gap-[100px] w-[700px] h-[260px] px-[31px] relative">
          <div>
            <span className="text-body-2-bold text-primary-blue">2등</span>
            <p className="text-body-2-bold text-neutral-black">
              전기차 구매 보조금
            </p>
            <p className="text-body-2-bold text-neutral-black">
              200만원 지원 5명
            </p>
          </div>
          <span className="absolute text-primary-blue text-detail-3-semibold top-52 right-8">
            상시 추첨
          </span>
          <div>
            <img src={Prize2} alt={Prize2} className="w-[200px]" />
          </div>
        </div>
        <div className="flex items-center justify-between rounded-xl shadow-3xl bg-neutral-white gap-[100px] w-[700px] h-[260px] px-[31px] relative">
          <div>
            <span className="text-body-2-bold text-primary-blue">3등</span>
            <p className="text-body-2-bold text-neutral-black">
              캐스퍼 EV 옵션
            </p>
            <p className="text-body-2-bold text-neutral-black">
              30만원 쿠폰 10명
            </p>
          </div>
          <span className="absolute text-primary-blue text-detail-3-semibold top-52 right-8">
            상시 추첨
          </span>
          <div>
            <img src={Prize3} alt={Prize3} className="w-[200px]" />
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-600 mb-600">
        <div className="flex items-center justify-between rounded-xl shadow-3xl bg-neutral-white gap-[100px] w-[700px] h-[260px] px-[31px] relative">
          <div>
            <span className="text-body-2-bold text-primary-blue">4등</span>
            <p className="text-body-2-bold text-neutral-black">전기차 충전</p>
            <p className="text-body-2-bold text-neutral-black">
              3만원 쿠폰 100명
            </p>
          </div>
          <span className="absolute text-primary-blue text-detail-3-semibold top-52 right-8">
            상시 추첨
          </span>
          <div>
            <img src={Prize4} alt={Prize4} className="w-[200px]" />
          </div>
        </div>
        <div className="flex items-center rounded-xl shadow-3xl bg-neutral-white gap-[100px] w-[700px] h-[260px] px-[31px] pr-[30px] relative">
          <div>
            <span className="text-body-2-bold text-primary-blue">5등</span>
            <p className="text-body-2-bold text-neutral-black">
              스타벅스 1만원 쿠폰
            </p>
            <p className="text-body-2-bold text-neutral-black">1,000명</p>
          </div>
          <span className="absolute text-primary-blue text-detail-3-semibold top-52 right-8">
            상시 추첨
          </span>
          <div>
            <img src={Prize5_2} alt={Prize5_2} className="w-[186px]" />
          </div>
          <img
            src={Prize5_1}
            alt={Prize5_1}
            className="w-[186px] absolute top-8 right-0"
          />
        </div>
      </div>
    </div>
  );
}

export default EventIntroRewards;
