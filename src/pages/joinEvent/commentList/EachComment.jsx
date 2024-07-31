import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Heart from '@/assets/icons/heart.svg';
import FullHeart from '@/assets/icons/fullHeart.svg';

function EachComment({ comment, indexOfFirstPost }) {
  const [isHeart, setIsHeart] = useState(false);
  const [likes, setLikes] = useState(comment.likes);
  const handleHeart = () => {
    setIsHeart(prev => !prev);
    if (isHeart) {
      setLikes(prev => prev - 1);
    } else {
      setLikes(prev => prev + 1);
    }
  };
  return (
    <div className="flex items-center w-full py-6 pl-700 pr-1900 mb-500 bg-neutral-white rounded-xl">
      <div className="flex items-center justify-center w-16 h-10 rounded-full bg-primary-blue text-detail-3-semibold text-neutral-white mr-1000">
        {indexOfFirstPost + 1}등
      </div>
      <span className="w-44 text-detail-2-regular text-neutral-500 mr-1500">
        {comment.phone}
      </span>
      <p className="text-detail-2-regular text-neutral-950 overflow-hidden whitespace-nowrap text-ellipsis w-[650px] mr-2500">
        {comment.body}
      </p>
      <div className="flex items-center">
        <div className="text-detail-2-regular text-neutral-500">{likes}</div>
        <img
          src={isHeart ? FullHeart : Heart}
          alt={isHeart ? 'FullHeart' : 'Heart'}
          className="mt-0.5 ml-100"
          onClick={() => handleHeart()}
        />
      </div>
    </div>
  );
}

EachComment.propTypes = {
  comment: PropTypes.object.isRequired,
  indexOfFirstPost: PropTypes.number.isRequired,
};

export default EachComment;
