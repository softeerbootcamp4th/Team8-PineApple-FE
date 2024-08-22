import React from 'react';
import { AuthProvider } from '@/context/authContext';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const location = useLocation();

  const hideHeaderPattern = [
    /^\/event\/worldCup$/,
    /^\/event\/miniQuiz$/,
    /^\/event\/worldCupResult$/,
    /^\/event\/miniQuizResult$/,
    /^\/event\/invalidAccess$/,
    /^\/event\/noQuiz$/,
    /^\/event\/reward$/,
    /^\/event\/comments\/commentId\/\d+$/,
    /^\/event\/\w+$/,
  ];

  const hideHeader = hideHeaderPattern.some(pattern =>
    pattern.test(location.pathname),
  );

  const hideFooterPattern = [
    /^\/event\/worldCup$/,
    /^\/event\/miniQuiz$/,
    /^\/event\/miniQuizResult$/,
    /^\/event\/invalidAccess$/,
    /^\/event\/noQuiz$/,
    /^\/event\/reward$/,
    /^\/event\/comments\/commentId\/\d+$/,
    /^\/event\/\w+$/,
  ];

  const hideFooter = hideFooterPattern.some(pattern =>
    pattern.test(location.pathname),
  );

  return (
    <div className="relative min-w-[1720px]">
      <HelmetProvider>
        <AuthProvider>
          {!hideHeader && <Header />}
          <Outlet />
        </AuthProvider>
        {!hideFooter && <Footer />}
      </HelmetProvider>
    </div>
  );
}

export default App;
