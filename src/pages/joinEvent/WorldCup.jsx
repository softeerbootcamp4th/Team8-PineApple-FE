import React from 'react';
import worldCupIntro1 from '@/assets/images/worldCupIntro1.svg';
import worldCupIntro2 from '@/assets/images/worldCupIntro2.svg';
import worldCupIntro3 from '@/assets/images/worldCupIntro3.svg';

function WorldCup() {
  return (
    <div className="px-2500">
      <div className="flex">
        <div className="h-[610px]"></div>
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
