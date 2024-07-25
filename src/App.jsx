import React, { useContext } from 'react';
import { TabProvider, TabContext } from '@/context/tabContext';
import { AuthProvider } from '@/context/authContext';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import EventIntro from '@/pages/eventIntro/eventIntro';
import NewCarIntro from '@/pages/newCarIntro/NewCarIntro';

function App() {
  return (
    <AuthProvider>
      <TabProvider>
        <MainContent />
      </TabProvider>
    </AuthProvider>
  );
}

function MainContent() {
  const [activeTab] = useContext(TabContext); // TabContext 사용

  return (
    <div className="relative">
      <Header />
      {activeTab === 'introduce' && <EventIntro />}
      {/* {activeTab === 'join' && <JoinEvent />} */}
      {activeTab === 'newCarIntro' && <NewCarIntro />}
      <Footer />
    </div>
  );
}

export default App;
