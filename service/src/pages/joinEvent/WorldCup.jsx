import React from 'react';
import PropTypes from 'prop-types';
import BlueButton from '@/components/buttons/BlueButton';
import worldCupIntro1 from '@/assets/images/worldCupIntro1.svg';
import worldCupIntro2 from '@/assets/images/worldCupIntro2.svg';
import worldCupIntro3 from '@/assets/images/worldCupIntro3.svg';
import { useNavigate } from 'react-router-dom';

const WorldCupEventDescription = () => (
  <div className="space-y-800">
    <h2 className="text-primary-blue text-detail-1-bold">
      Event1. 자동차 얻기
    </h2>
    <p className="text-heading-3-bold">운전 중 피하고 싶은 상황 월드컵</p>
  </div>
);

const WorldCupEventDetails = ({ onClick }) => (
  <div className="space-y-1200">
    <p className="whitespace-pre-line text-detail-2-medium">
      {`운전 중 피하고 싶은 상황을 고르면 나에게 딱 맞는 캐스퍼 EV 옵션을
      추천받고 차 아이템은 한번 획득하면 응모에 여러번 참여해도 남아있어요.`}
    </p>
    <BlueButton
      value="이벤트 참여하기"
      styles="px-2000 py-400 text-detail-2-medium"
      onClickFunc={onClick}
    />
  </div>
);

WorldCupEventDetails.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const WorldCupImages = () => (
  <div className="relative w-[784px]">
    <img
      className="absolute top-[51px] left-[6px] z-0"
      src={worldCupIntro1}
      alt="출차 시 고급승용차에 둘러 싸이기"
      style={{ clipPath: 'polygon(0% 18%, 78% 0%, 100% 79%, 22% 100%)' }} //clipPath를 이용한 밑줄 삭제
      loading="lazy"
    />
    <img
      className="absolute top-[25px] left-[206px] z-50"
      src={worldCupIntro2}
      alt="산 중턱에서 전기차 배터리 방전되기"
      loading="lazy"
    />
    <img
      className="absolute top-[57px] left-[410px] z-0"
      src={worldCupIntro3}
      alt="골목에서 천천히 걸어가는 보행자 만나기"
      style={{ clipPath: 'polygon(22% 0%, 100% 18%, 78% 100%, 0% 79%)' }} //clipPath를 이용한 밑줄 삭제
      loading="lazy"
    />
  </div>
);

function WorldCup() {
  const navigate = useNavigate();
  const handleGotoWorldCup = () => navigate('/event/worldCup');

  return (
    <div className="px-3000 pt-2000 pb-500">
      <div className="flex gap-2000">
        <div className="min-w-[610px]">
          <WorldCupEventDescription />
          <WorldCupEventDetails onClick={handleGotoWorldCup} />
        </div>
        <WorldCupImages />
      </div>
    </div>
  );
}

export default WorldCup;
