import React from 'react';
import PropTypes from 'prop-types';
import ModalFrame from './ModalFrame';
import Heart from '@/assets/icons/heart.svg';
import FullHeart from '@/assets/icons/fullHeart.svg';

function CommentModal({ data, closeCommentModal, handleHeart }) {
  return (
    <ModalFrame handleExit={closeCommentModal} tag="" title="공유 받은 댓글">
      <div className="px-1500 set-center">
        <p className="text-detail-2-regular text-neutral-950 overflow-hidden whitespace-nowrap text-ellipsis mr-1000">
          {data.content}
        </p>
        <div className="flex items-center">
          <div className="text-detail-2-regular text-neutral-500">
            {data.likeCount}
          </div>
          <img
            src={data.isLiked ? FullHeart : Heart}
            alt={data.isLiked ? 'FullHeart' : 'Heart'}
            key={data.id}
            className="mt-0.5 ml-100"
            onClick={e => {
              e.stopPropagation();
              handleHeart();
            }}
          />
        </div>
        {/* {openPhoneInputModal && (
          <PhoneInputModal closePhoneModal={closePhoneModal} />
        )} */}
      </div>
    </ModalFrame>
  );
}

CommentModal.propTypes = {
  data: PropTypes.object.isRequired,
  closeCommentModal: PropTypes.func.isRequired,
  handleHeart: PropTypes.func.isRequired,
};

export default CommentModal;
