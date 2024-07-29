import React from 'react';
import EventMainIntro from '@/pages/eventIntro/EventIntroMain';
import EventIntroNav from '@/pages/eventIntro/EventIntroNav';
import EventIntroRewards from './EventIntroRewards';

function EventIntro() {
  return (
    <>
      <EventMainIntro />
      <div className="bg-gradient-lightblue-white-vertical">
        <EventIntroNav />
        <EventIntroRewards />
      </div>
    </>
  );
}

export default EventIntro;
