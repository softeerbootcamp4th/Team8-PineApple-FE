import React, { useState, useEffect, useContext } from 'react';
import CommentDate from '@/pages/joinEvent/commentList/CommentDate';
import RemainingTime from '@/pages/joinEvent/commentList/RemainingTime';
import RefreshData from '@/pages/joinEvent/commentList/RefreshData';
import CommentToggleButton from '@/pages/joinEvent/commentList/CommentToggleButton';
import EachComment from '@/pages/joinEvent/commentList/EachComment';
import PagingComment from '@/pages/joinEvent/commentList/PagingComment';
import dateFormatting from '@/utils/dateFormatting';
import getNowTime from '@/utils/getNowTime';
import { getComment } from '@/api/comment';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@/context/authContext';

function CommentIndex() {
  const navigate = useNavigate();
  const [today, setToday] = useState(dateFormatting());
  const [option, setOption] = useState('like');
  const [commentList, setCommentList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCommentCount, setTotalCommentCount] = useState(0);
  const [nowTime, setNowTime] = useState(getNowTime());
  const { userInfo, setUserInfo } = useContext(AuthContext);

  const updateComments = async () => {
    const data = await getComment(currentPage - 1, option, today);
    if (data) {
      setCommentList([...data.comments]);
      setTotalCommentCount(data.totalPages);
    }
  };

  useEffect(() => {
    updateComments();
  }, [currentPage, option, today, userInfo]);

  const onChangePage = page => {
    setCurrentPage(page);
    navigate('/event', { state: { scrollTo: 'commentIndex' } });
  };

  const onClickrefreshData = () => {
    setNowTime(getNowTime());
    updateComments();
  };

  return (
    <div className="pt-1500 pb-2500">
      <CommentDate
        today={today}
        setToday={setToday}
        setCurrentPage={setCurrentPage}
      />
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
        {commentList.length === 0 ? (
          <div className="set-center text-body-1-bold text-neutral-500 mt-2000">
            현재 등록된 댓글이 없습니다!!
          </div>
        ) : (
          commentList.map((comment, index) => (
            <EachComment
              comment={comment}
              key={comment.id}
              indexOfFirstPost={(currentPage - 1) * 10 + index}
              option={option}
              updateComments={updateComments}
            />
          ))
        )}
      </div>
      <div className="mb-2000">
        <PagingComment
          page={currentPage}
          onChangePage={onChangePage}
          count={totalCommentCount}
        />
      </div>
    </div>
  );
}

export default CommentIndex;
