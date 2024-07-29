import React from 'react';
import NewCarDetailBox from '@/pages/newCarIntro/NewCarDetailBox';
import image1 from '@/assets/images/newCarDetailImage1.svg';
import image2 from '@/assets/images/newCarDetailImage2.svg';
import image3 from '@/assets/images/newCarDetailImage3.svg';
import image4 from '@/assets/images/newCarDetailImage4.svg';
import image5 from '@/assets/images/newCarDetailImage5.svg';
import image6 from '@/assets/images/newCarDetailImage6.svg';

const detailData = [
  {
    title: '실내/외 V2L (Vehicle to Load)',
    description: '야외/실내에서 자유로운 전자기기 사용',
    imageSrc: image1,
  },
  {
    title: '넓은 2열 공간',
    description: '길어진 휠 베이스',
    imageSrc: image2,
  },
  {
    title: '클러스터 & 내비게이션',
    description: '더 커진 10.25인치 화면',
    imageSrc: image3,
  },
  {
    title: '고속도로 주행 보조',
    description: '장거리 고속도로 운전도 편안하게',
    imageSrc: image4,
  },
  {
    title: '서라운드 뷰 모니터',
    description: '좁은 길을 지날 때, 주차할 때',
    imageSrc: image5,
  },
  {
    title: '스마트폰 무선 충전',
    description: 'USB 연결 없이',
    imageSrc: image6,
  },
];
function NewCarDetail() {
  return (
    <>
      <div className="flex mx-5000">
        <div>
          <div className="text-primary-berrypurple text-body-2-regular">
            1회 충전 주행 가능 거리
          </div>
          <div className="font-bold text-gradient-blue-purple font-pretendard text-[200px]">
            315km
          </div>
        </div>
        <div className="flex flex-col justify-end p-2000">
          <div>
            49kWh 배터리를 적용하여 여유 있는 주행 기능 거리를 제공합니다.
          </div>
          <div>(15인치 알로이 휠, 인스퍼레이션 트림 기준)</div>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-5000 gap-x-600 gap-y-2900">
        {detailData.map((item, idx) => (
          <NewCarDetailBox details={item} key={idx} />
        ))}
      </div>
    </>
  );
}

export default NewCarDetail;
