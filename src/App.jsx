import React, { useContext, useEffect } from 'react';
import { TabProvider, TabContext } from '@/context/tabContext';
import { AuthProvider } from '@/context/authContext';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import EventIntro from '@/pages/eventIntro/eventIntro';
import NewCarIntro from '@/pages/newCarIntro/NewCarIntro';

function App() {
  // const [activeTab, setActiveTab] = useContext(TabContext); // TabContext 사용
  // useEffect(() => {
  //   setActiveTab('introduce');
  // }, []);

  return (
    <div className="relative">
      <AuthProvider>
        <TabProvider>
          <Header />
          <EventIntro />
          {/* {activeTab === 'join' && <JoinEvent />} */}
          {/* {activeTab === 'newCarIntro' && <NewCarIntro />} */}
        </TabProvider>
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
