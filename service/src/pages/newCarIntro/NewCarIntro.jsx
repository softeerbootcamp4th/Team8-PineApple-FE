import React from 'react';
import NewCarIntroMain from '@/pages/newCarIntro/NewCarIntroMain';
import NewCarCarousel from '@/pages/newCarIntro/NewCarCarousel';
import NewCarDetail from '@/pages/newCarIntro/NewCarDetail';
import { Helmet } from 'react-helmet-async';

const TITLE = '캐스퍼 EV 소개';
const DESCRIPTION = '캐스퍼 EV에 대해 알아보세요!';
const OG_IMAGE_URL =
  'https://softeer4-team8.s3.ap-northeast-2.amazonaws.com/OGImage.png';
const OG_URL = 'https://casper-event.store/introd';

const HelmetMeta = () => (
  <Helmet>
    <title>{TITLE}</title>
    <meta name="description" content={DESCRIPTION} />
    <meta property="og:url" content={OG_URL} />
    <meta property="og:title" content={TITLE} />
    <meta property="og:description" content={DESCRIPTION} />
    <meta property="og:image" content={OG_IMAGE_URL} />
  </Helmet>
);

function NewCarIntro() {
  return (
    <>
      <HelmetMeta />
      <NewCarIntroMain />
      <div className="pt-1800 bg-gradient-lightblue-white-vertical pb-4000">
        <NewCarCarousel />
        <NewCarDetail />
      </div>
    </>
  );
}

export default NewCarIntro;
