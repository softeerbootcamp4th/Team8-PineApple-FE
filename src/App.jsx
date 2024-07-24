import React from 'react';
import { TabProvider } from '@/context/tabContext';
import { AuthProvider } from '@/context/authContext';
import { Footer } from '@/components/footer/Footer';
import Header from '@/components/header/Header';

function App() {
  return (
    <div>
      <AuthProvider>
        <TabProvider>
          <Header />
          ddd
        </TabProvider>
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
