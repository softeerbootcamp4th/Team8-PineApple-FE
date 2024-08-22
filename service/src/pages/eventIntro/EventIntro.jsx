import React from 'react';
import EventIntroMain from '@/pages/eventIntro/EventIntroMain';
import EventIntroNav from '@/pages/eventIntro/EventIntroNav';
import EventIntroRewards from '@/pages/eventIntro/EventIntroRewards';
import SlideUpMotion from '@/components/SlideUpMotion/SlideUpMotion';

function EventIntro() {
  return (
    <div>
      <EventIntroMain />
      <div className="bg-gradient-lightblue-white-vertical mt-[1px]">
        <EventIntroNav />
        <SlideUpMotion delay={0.1}>
          <EventIntroRewards />
        </SlideUpMotion>
      </div>
    </div>
  );
}

export default EventIntro;
