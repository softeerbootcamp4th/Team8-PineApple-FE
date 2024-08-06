import React from 'react';
import { AuthProvider } from '@/context/authContext';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const hideHeaderAndFooter = ['/event/worldCup', '/event/miniQuiz'].includes(
    location.pathname,
  );

  return (
    <div className="relative min-w-[1720px]">
      <AuthProvider>
        {!hideHeaderAndFooter && <Header />}
        <Outlet />
        {!hideHeaderAndFooter && <Footer />}
      </AuthProvider>
    </div>
  );
}

export default App;
