import React from 'react';
import EventIntroMain from '@/pages/eventIntro/EventIntroMain';
import EventIntroNav from '@/pages/eventIntro/EventIntroNav';
import EventIntroRewards from '@/pages/eventIntro/EventIntroRewards';

function EventIntro() {
  return (
    <div>
      <EventIntroMain />
      <div className="bg-gradient-lightblue-white-vertical">
        <EventIntroNav />
        <EventIntroRewards />
      </div>
    </div>
  );
}

export default EventIntro;
