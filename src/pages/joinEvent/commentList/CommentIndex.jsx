import React, { useState, useEffect } from 'react';
import CommentDate from '@/pages/joinEvent/commentList/CommentDate';
import RemainingTime from '@/pages/joinEvent/commentList/RemainingTime';
import RefreshData from '@/pages/joinEvent/commentList/RefreshData';
import CommentToggleButton from '@/pages/joinEvent/commentList/CommentToggleButton';
import EachComment from '@/pages/joinEvent/commentList/EachComment';
import PagingComment from '@/pages/joinEvent/commentList/PagingComment';
import dateFormatting from '@/utils/dateFormatting';
import getNowTime from '@/utils/getNowTime';

function CommentIndex() {
  const [today, setToday] = useState(dateFormatting());
  const [option, setOption] = useState('popularity');
  const [commentList, setCommentList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalCommentCount, setTotalCommentCount] = useState(0);
  const [nowTime, setNowTime] = useState(getNowTime());
  const [indexOfLastPost, setIndexOfLastPost] = useState(10);
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
  const fetchComments = async () => {
    try {
      const response = await fetch(
        `http://13.125.215.8:8080/comments?page=${currentPage}&sort=${option}&date=${today}`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('댓글을 가져오는데 실패하였습니다.', error);
    }
  };

  useEffect(() => {
    const updateComments = async () => {
      const data = await fetchComments();
      if (data) {
        setCommentList(data.comments);
        setTotalCommentCount(data.totalPages);
      }
    };

    updateComments();
  }, [currentPage, option, today]);

  const onChangePage = page => {
    setIndexOfLastPost(page * 10);
    setIndexOfFirstPost((page - 1) * 10);
    setCurrentPage(page);
  };
  return (
    <div>
      <CommentDate today={today} setToday={setToday} />
      <div className="flex items-center justify-between mb-1000">
        <RemainingTime />
        <div className="flex">
          <RefreshData nowTime={nowTime} setNowTime={setNowTime} />
          <CommentToggleButton option={option} setOption={setOption} />
        </div>
      </div>
      <div className="mb-2900">
        {commentList.map((comment, index) => (
          <EachComment
            comment={comment}
            key={index}
            indexOfFirstPost={indexOfFirstPost + index}
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

// comment 벡에서 전해주는 데이터떄문에 바뀌었으니 구조 전체적으로 다듬어야함
// 모달 구조 짜기
// 전화번호 인증된 값 로컬에 담을지 쿠키에 담을지 어떤식으로 새로고침할때 받아올지 잘 찾아보고 정하기
