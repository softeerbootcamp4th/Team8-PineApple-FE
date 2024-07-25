import React, { useContext, useEffect } from 'react';
import EventIntro from '@/pages/eventIntro/EventIntro';
// import JoinEvent from '@/pages/joinEvent/JoinEvent';
import NewCarIntro from '@/pages/newCarIntro/NewCarIntro';
import { TabContext } from '@/context/tabContext';

function MainContent() {
  const { activeTab, setActiveTab } = useContext(TabContext);
  useEffect(() => {
    setActiveTab('introduce');
  }, []);
  return (
    <>
      {activeTab === 'introduce' && <EventIntro />}
      {/* {activeTab === 'join' && <JoinEvent />} */}
      {activeTab === 'newCarIntro' && <NewCarIntro />}
    </>
  );
}

export default MainContent;
