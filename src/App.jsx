import React from 'react';
import { TabProvider } from '@/context/tabContext';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

function App() {
  return (
    <div>
      <TabProvider>
        <Header />
        ddd
        <Footer />
      </TabProvider>
    </div>
  );
}

export default App;
