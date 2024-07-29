import React, { useContext, useEffect } from 'react';
import EventIntro from '@/pages/eventIntro/EventIntro';
import JoinEventIntro from '@/pages/joinEvent/JoinEventIntro';
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
      {activeTab === 'join' && <JoinEventIntro />}
      {activeTab === 'newCarIntro' && <NewCarIntro />}
    </>
  );
}

export default MainContent;
