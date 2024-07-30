import React from 'react';
import EventMainIntro from '@/pages/eventIntro/EventIntroMain';
import EventIntroNav from '@/pages/eventIntro/EventIntroNav';
import EventIntroRewards from '@/pages/eventIntro/EventIntroRewards';

function EventIntro() {
  return (
    <div>
      <EventMainIntro />
      <div className="bg-gradient-lightblue-white-vertical">
        <EventIntroNav />
        <EventIntroRewards />
      </div>
    </div>
  );
}

export default EventIntro;
