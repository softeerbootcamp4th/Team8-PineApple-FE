import React from 'react';
import { TabProvider } from '@/context/tabContext';
import { AuthProvider } from '@/context/authContext';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import MainContent from '@/pages/MainContent';

function App() {
  return (
    <div className="relative min-w-[1720px]">
      <AuthProvider>
        <TabProvider>
          <Header />
          <MainContent />
        </TabProvider>
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
