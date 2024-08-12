import React from 'react';
import { AuthProvider } from '@/context/authContext';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const hideHeader = [
    '/event/worldCup',
    '/event/miniQuiz',
    '/event/worldCupResult',
    '/event/miniQuizResult',
    '/event/invalidAccess',
    '/event/noQuiz',
    '/event/reward',
  ].includes(location.pathname);

  const hideFooter = [
    '/event/worldCup',
    '/event/miniQuiz',
    '/event/miniQuizResult',
    '/event/invalidAccess',
    '/event/noQuiz',
    '/event/reward',
  ].includes(location.pathname);

  return (
    <div className="relative min-w-[1720px]">
      <AuthProvider>
        {!hideHeader && <Header />}
        <Outlet />
      </AuthProvider>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default App;
