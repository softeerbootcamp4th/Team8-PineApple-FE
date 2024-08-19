import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Heart from '@/assets/icons/heart.svg';
import FullHeart from '@/assets/icons/fullHeart.svg';
import timeFormatting from '@/utils/timeFormatting';
import { postLike } from '@/api/comment/index';
import { AuthContext } from '@/context/authContext';
import PhoneInputModal from '@/components/modal/PhoneInputModal';

function EachComment({ comment, indexOfFirstPost, option }) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(comment.isLiked);
  const [likeCount, setLikeCount] = useState(comment.likeCount);
  const { userInfo } = useContext(AuthContext);
  const [openPhoneInputModal, setOpenPhoneInputModal] = useState(false);

  useEffect(() => {
    setIsLiked(comment.isLiked);
    setLikeCount(comment.likeCount);
  }, [comment]);

  const closePhoneModal = () => {
    setOpenPhoneInputModal(false);
  };

  const handleHeart = async e => {
    e.stopPropagation();
    e.preventDefault();

    if (userInfo.phoneNumber === undefined) {
      const phoneVerified = await showPhoneInputModal();
      if (!phoneVerified) {
        return;
      }
    } else {
      setIsLiked(prev => !prev);
      setLikeCount(prevCount => prevCount + (isLiked ? -1 : 1));
      try {
        const response = await postLike(comment.id);
      } catch (error) {
        setIsLiked(isLiked);
        setLikeCount(prevCount => prevCount + (isLiked ? 1 : -1));
        alert('네트워크 환경이 불안정합니다');
      }
    }
  };

  const showPhoneInputModal = () => {
    setOpenPhoneInputModal(true);
    return new Promise(resolve => {
      const checkPhoneVerification = () => {
        if (localStorage.getItem('userInfo')) {
          resolve(true);
          setOpenPhoneInputModal(false);
        } else {
          setTimeout(checkPhoneVerification, 1000);
        }
      };
      checkPhoneVerification();
    });
  };

  const registerTime = timeFormatting(comment.postTime);

  const handleCommentClick = e => {
    navigate(`/event/comments/commentId/${comment.id}`);
  };

  return (
    <>
      <div
        className="flex items-center w-full py-6 cursor-pointer pl-1700 pr-2000 mb-500 bg-neutral-white rounded-xl"
        onClick={handleCommentClick}
      >
        {option === 'like' ? (
          <div className="flex items-center justify-center w-16 h-10 rounded-full bg-primary-blue text-detail-3-semibold text-neutral-white mr-1000">
            {indexOfFirstPost + 1}등
          </div>
        ) : (
          <div className="flex items-center justify-center w-16 h-10 text-detail-3-semibold text-primary-blue mr-1000">
            {registerTime}
          </div>
        )}

        <span className="w-44 text-detail-2-regular text-neutral-500 mr-500">
          {comment.phoneNumber}
        </span>
        <p className="text-detail-2-regular text-neutral-950 overflow-hidden whitespace-nowrap text-ellipsis w-[1000px]">
          {comment.content}
        </p>
        <div
          className="flex items-center w-[100px] h-[50px] z-100"
          onClick={handleHeart} // Handle heart click
        >
          <div className="text-detail-2-regular text-neutral-500">
            {likeCount}
          </div>
          <img
            src={isLiked ? FullHeart : Heart}
            alt={isLiked ? 'FullHeart' : 'Heart'}
            key={comment.id}
            className="mt-0.5 ml-100"
          />
        </div>
      </div>
      {openPhoneInputModal && (
        <PhoneInputModal closePhoneModal={closePhoneModal} />
      )}
    </>
  );
}

EachComment.propTypes = {
  comment: PropTypes.object.isRequired,
  indexOfFirstPost: PropTypes.number,
  option: PropTypes.string.isRequired,
};

export default EachComment;
