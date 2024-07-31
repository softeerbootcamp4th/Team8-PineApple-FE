import React from 'react';
import { AuthProvider } from '@/context/authContext';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="relative min-w-[1720px]">
      <AuthProvider>
        <Header />
        <Outlet />
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
