import React from 'react';
import NewCarIntroMain from '@/pages/newCarIntro/NewCarIntroMain';
import NewCarCarousel from '@/pages/newCarIntro/NewCarCarousel';
import NewCarDetail from '@/pages/newCarIntro/NewCarDetail';
import { Helmet } from 'react-helmet-async';

function NewCarIntro() {
  return (
    <>
      <Helmet>
        <title>캐스퍼 EV 소개</title>
        <meta name="description" content="캐스퍼 EV에 대해 알아보세요!" />
        <meta property="og:url" content="https://casper-event.store/introd" />
        <meta property="og:title" content="캐스퍼 EV 소개" />
        <meta
          property="og:description"
          content="캐스퍼 EV에 대해 알아보세요!"
        />
        <meta
          property="og:image"
          content="https://softeer4-team8.s3.ap-northeast-2.amazonaws.com/OGImage.png"
        />
      </Helmet>
      <NewCarIntroMain />
      <div className="pt-1800 bg-gradient-lightblue-white-vertical pb-4000">
        <NewCarCarousel />
        <NewCarDetail />
      </div>
    </>
  );
}

export default NewCarIntro;
