import React from 'react';
import DailyComment from '@/pages/joinEvent/DailyComment';
import CommentIndex from '@/pages/joinEvent/commentList/CommentIndex';

function JoinEventIntro() {
  return (
    <>
      <div className="bg-gradient-lightblue-white-vertical px-[240px] py-[115px]">
        <DailyComment />
        <CommentIndex />
      </div>
    </>
  );
}

export default JoinEventIntro;
