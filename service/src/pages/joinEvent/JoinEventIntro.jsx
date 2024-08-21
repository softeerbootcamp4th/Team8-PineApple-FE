import React from 'react';
import DailyComment from '@/pages/joinEvent/DailyComment';
import CommentIndex from '@/pages/joinEvent/commentList/CommentIndex';
import JoinEventIntroMain from '@/pages/joinEvent/JoinEventIntroMain';
import WorldCup from '@/pages/joinEvent/WorldCup';
import MiniQuiz from '@/pages/joinEvent/MiniQuiz';
import useScroll from '@/hooks/useScroll';
import { Helmet } from 'react-helmet-async';

function JoinEventIntro() {
  const { refs } = useScroll();

  return (
    <>
      <Helmet>
        <title>캐스퍼 이벤트 참여</title>
        <meta
          name="description"
          content="다양한 게임을 즐기고 응모권을 모아 캐스퍼 EV를 받을 수 있는 기회를 잡아보세요!"
        />
        <meta property="og:title" content="캐스퍼 이벤트 참여" />
        <meta
          property="og:description"
          content="다양한 게임을 즐기고 응모권을 모아 캐스퍼 EV를 받을 수 있는 기회를 잡아보세요!"
        />
        <meta
          property="og:image"
          content="https://softeer4-team8.s3.ap-northeast-2.amazonaws.com/OGImage.svg"
        />
      </Helmet>
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
