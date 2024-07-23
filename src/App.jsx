import React from 'react';
import { TabProvider } from '@/context/tabContext';
import Header from '@/components/header/Header';

function App() {
  return (
    <div>
      <TabProvider>
        <Header />
        ddd
      </TabProvider>
    </div>
  );
}

export default App;
