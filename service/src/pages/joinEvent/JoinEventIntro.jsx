import React from 'react';
import DailyComment from '@/pages/joinEvent/DailyComment';
import CommentIndex from '@/pages/joinEvent/commentList/CommentIndex';
import JoinEventIntroMain from '@/pages/joinEvent/JoinEventIntroMain';
import WorldCup from '@/pages/joinEvent/WorldCup';
import MiniQuiz from '@/pages/joinEvent/MiniQuiz';
import useScroll from '@/hooks/useScroll';

function JoinEventIntro() {
  const { refs } = useScroll();

  return (
    <>
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
