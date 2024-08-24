import React from 'react';
import DailyComment from '@/pages/joinEvent/DailyComment';
import CommentIndex from '@/pages/joinEvent/commentList/CommentIndex';
import JoinEventIntroMain from '@/pages/joinEvent/JoinEventIntroMain';
import WorldCup from '@/pages/joinEvent/WorldCup';
import MiniQuiz from '@/pages/joinEvent/MiniQuiz';
import useScroll from '@/hooks/useScroll';
import { Helmet } from 'react-helmet-async';

const TITLE = '캐스퍼 이벤트 참여';
const DESCRIPTION =
  '다양한 게임을 즐기고 응모권을 모아 캐스퍼 EV를 받을 수 있는 기회를 잡아보세요!';
const OG_IMAGE_URL =
  'https://softeer4-team8.s3.ap-northeast-2.amazonaws.com/OGImage.png';
const OG_URL = 'https://casper-event.store/event';

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

function JoinEventIntro() {
  const { refs } = useScroll();

  return (
    <>
      <HelmetMeta />
      <div ref={refs.mainRef}>
        <JoinEventIntroMain />
      </div>
      <div ref={refs.worldCupRef}>
        <WorldCup />
      </div>
      <div ref={refs.miniQuizRef}>
        <MiniQuiz />
      </div>
      <div className="bg-gradient-lightblue-white-vertical px-3000">
        <div ref={refs.dailyCommentRef}>
          <DailyComment />
        </div>
        <div ref={refs.commentIndexRef}>
          <CommentIndex />
        </div>
      </div>
    </>
  );
}

export default JoinEventIntro;
