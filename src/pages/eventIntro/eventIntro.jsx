import React from 'react';
import EventMainIntro from '@/pages/eventIntro/EventIntroMain';
import EventIntroNav from '@/pages/eventIntro/EventIntroNav';

function EventIntro() {
  return (
    <>
      <EventMainIntro />
      {/* <div className="bg-gradient-cobaltblue-white"> */}
      <EventIntroNav />
      {/* </div> */}
    </>
  );
}

export default EventIntro;
