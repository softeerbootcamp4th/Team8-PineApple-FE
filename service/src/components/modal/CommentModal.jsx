import React from 'react';
import PropTypes from 'prop-types';
import ModalFrame from './ModalFrame';
import Heart from '@/assets/icons/heart.svg';
import FullHeart from '@/assets/icons/fullHeart.svg';
import shortDateFormat from '@/utils/shortDateFormat';

function CommentModal({
  data,
  closeCommentModal,
  handleHeart,
  isLiked,
  likeCount,
}) {
  const registerTime = shortDateFormat(data.postTime || '');

  return (
    <ModalFrame
      handleExit={closeCommentModal}
      tag={registerTime}
      title={data.content || '제목 없음'}
    >
      <div className="px-1500 set-center gap-500">
        <p>{data.phoneNumber}</p>
        <div className="flex items-center">
          <div className="text-detail-2-regular text-neutral-500">
            {likeCount}
          </div>
          <img
            src={isLiked ? FullHeart : Heart}
            alt={isLiked ? 'FullHeart' : 'Heart'}
            className="mt-0.5 ml-100 cursor-pointer"
            onClick={handleHeart}
          />
        </div>
      </div>
    </ModalFrame>
  );
}

CommentModal.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
    isLiked: PropTypes.bool,
    likeCount: PropTypes.number,
    phoneNumber: PropTypes.string.isRequired,
    postTime: PropTypes.string.isRequired,
  }).isRequired,
  closeCommentModal: PropTypes.func.isRequired,
  handleHeart: PropTypes.func.isRequired,
  isLiked: PropTypes.bool.isRequired, // Add PropTypes for isLiked
  likeCount: PropTypes.number.isRequired, // Add PropTypes for likeCount
};

export default CommentModal;
