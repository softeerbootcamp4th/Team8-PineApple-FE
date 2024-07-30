import React from 'react';
import DailyComment from '@/pages/joinEvent/DailyComment';
import JoinEventIntroMain from './JoinEventIntroMain';

function JoinEventIntro() {
  return (
    <>
      <JoinEventIntroMain />
      <div className="bg-gradient-lightblue-white-vertical px-[240px] py-[115px]">
        <DailyComment />
      </div>
    </>
  );
}

export default JoinEventIntro;
