import React from 'react';
import { TabProvider } from '@/context/tabContext';
import { AuthProvider } from '@/context/authContext';
import Header from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer';
import EventIntro from '@/pages/eventIntro/eventIntro';

function App() {
  return (
    <div className="relative min-w-[1280px]">
      <AuthProvider>
        <TabProvider>
          <Header />
          <EventIntro />
        </TabProvider>
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
