import React, { useState, useEffect } from 'react';
import CommentDate from '@/pages/joinEvent/commentList/CommentDate';
import RemainingTime from '@/pages/joinEvent/commentList/RemainingTime';
import RefreshData from '@/pages/joinEvent/commentList/RefreshData';
import CommentToggleButton from '@/pages/joinEvent/commentList/CommentToggleButton';
import EachComment from '@/pages/joinEvent/commentList/EachComment';
import PagingComment from '@/pages/joinEvent/commentList/PagingComment';
import dateFormatting from '@/utils/dateFormatting';
import getNowTime from '@/utils/getNowTime';
import { getComment } from '@/api/comment';

function CommentIndex() {
  const [today, setToday] = useState(dateFormatting());
  const [option, setOption] = useState('like');
  const [commentList, setCommentList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCommentCount, setTotalCommentCount] = useState(0);
  const [nowTime, setNowTime] = useState(getNowTime());

  const updateComments = async () => {
    const data = await getComment(currentPage - 1, option, today);
    if (data) {
      setCommentList(data.comments);
      setTotalCommentCount(data.totalPages);
    }
  };

  useEffect(() => {
    updateComments();
  }, [currentPage, option, today]);

  const onChangePage = page => {
    setCurrentPage(page);
  };

  const onClickrefreshData = () => {
    setNowTime(getNowTime());
    updateComments();
  };
  return (
    <div>
      <CommentDate today={today} setToday={setToday} />
      <div className="flex items-center justify-between mb-1000">
        <RemainingTime />
        <div className="flex">
          <RefreshData
            nowTime={nowTime}
            setNowTime={setNowTime}
            onClickrefreshData={onClickrefreshData}
          />
          <CommentToggleButton option={option} setOption={setOption} />
        </div>
      </div>
      <div className="mb-2900">
        {commentList.map((comment, index) => (
          <EachComment
            comment={comment}
            key={index}
            indexOfFirstPost={(currentPage - 1) * 10 + index}
            option={option}
          />
        ))}
      </div>
      <div className="mb-2000">
        <PagingComment
          page={currentPage}
          count={totalCommentCount}
          onChangePage={onChangePage}
        />
      </div>
    </div>
  );
}

export default CommentIndex;
