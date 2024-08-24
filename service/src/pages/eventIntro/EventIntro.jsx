import React from 'react';
import EventIntroMain from '@/pages/eventIntro/EventIntroMain';
import EventIntroNav from '@/pages/eventIntro/EventIntroNav';
import EventIntroRewards from '@/pages/eventIntro/EventIntroRewards';
import SlideUpMotion from '@/components/SlideUpMotion/SlideUpMotion';
import { Helmet } from 'react-helmet-async';

const TITLE = '캐스퍼 이벤트 소개';
const DESCRIPTION =
  '캐스퍼 EV를 받을 수 있는 이벤트에 대해 자세히 알아보세요. 이벤트 참여 방법과 다양한 보상을 소개합니다.';
const OG_IMAGE_URL =
  'https://softeer4-team8.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%B5%E1%84%82%E1%85%B5+%E1%84%8F%E1%85%B1%E1%84%8C%E1%85%B3+7.svg';

const HelmetMeta = () => (
  <Helmet>
    <title>{TITLE}</title>
    <meta name="description" content={DESCRIPTION} />
    <meta property="og:title" content={TITLE} />
    <meta property="og:description" content={DESCRIPTION} />
    <meta property="og:image" content={OG_IMAGE_URL} />
  </Helmet>
);

function EventIntro() {
  return (
    <div>
      <HelmetMeta />
      <EventIntroMain />
      <div className="bg-gradient-lightblue-white-vertical mt-[1px]">
        <EventIntroNav />
        <SlideUpMotion delay={0.1}>
          <EventIntroRewards />
        </SlideUpMotion>
      </div>
    </div>
  );
}

export default EventIntro;
