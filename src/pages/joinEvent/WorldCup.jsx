import React from 'react';
import worldCupIntro1 from '@/assets/images/worldCupIntro1.svg';
import worldCupIntro2 from '@/assets/images/worldCupIntro2.svg';
import worldCupIntro3 from '@/assets/images/worldCupIntro3.svg';

function WorldCup() {
  return (
    <div className="px-2500">
      <div className="flex">
        <div className="h-[610px]">
          <div>Event1</div>
          <div>운전 중 피하고 싶은 상황 월드컵</div>
          <div>{`운전 중 피하고 싶은 상황을 고르면 나에게 딱 맞는 캐스퍼 EV 옵션을'\n'
            추천받고 차 아이템은 한번 획득하면 응모에 여러번 참여해도 남아있어요.`}</div>
        </div>
        <div className="relative">
          <img className="absolute " src={worldCupIntro1}></img>
          <img className="absolute" src={worldCupIntro2}></img>
          <img className="absolute" src={worldCupIntro3}></img>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default WorldCup;
