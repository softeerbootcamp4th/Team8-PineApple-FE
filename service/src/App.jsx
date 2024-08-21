import React from 'react';
import { AuthProvider } from '@/context/authContext';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
  ];

  const hideFooter = hideFooterPattern.some(pattern =>
    pattern.test(location.pathname),
  );

  return (
    <HelmetProvider>
      <div className="relative min-w-[1720px]">
        <Helmet>
          <meta
            name="description"
            content="캐스퍼에 당첨될 수 있는 기회!! 이벤트 참여하고 캐스퍼 EV를 받아가세요!!"
          />
          <meta property="og:url" content="https://casper-event.store" />
          <meta property="og:title" content="캐스퍼 이벤트" />
          <meta
            property="og:description"
            content="캐스퍼에 당첨될 수 있는 기회!! 이벤트 참여하고 캐스퍼 EV를 받아가세요!!"
          />
          <meta
            property="og:image"
            content="https://softeer4-team8.s3.ap-northeast-2.amazonaws.com/OGImage.png"
          />

          <title>캐스퍼 이벤트</title>
        </Helmet>
        <AuthProvider>
          {!hideHeader && <Header />}
          <Outlet />
        </AuthProvider>
        {!hideFooter && <Footer />}
      </div>
    </HelmetProvider>
  );
}

export default App;
