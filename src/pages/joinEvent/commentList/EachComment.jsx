import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Heart from '@/assets/icons/heart.svg';
import FullHeart from '@/assets/icons/fullHeart.svg';

function EachComment({ comment, indexOfFirstPost }) {
  const [isHeart, setIsHeart] = useState(false);
  const [likes, setLikes] = useState(comment.likes);
  const handleHeart = isFull => {
    setIsHeart(prev => !prev);
    if (isFull) {
      setLikes(prev => prev + 1);
    } else {
      setLikes(prev => prev - 1);
    }
  };
  return (
    <div className="flex items-center w-full py-6 pl-700 mb-500 bg-neutral-white rounded-xl">
      <div className="rounded-full py-200 px-400 bg-primary-blue text-detail-3-semibold text-neutral-white mr-1000">
        {indexOfFirstPost + 1}등
      </div>
      <span className="text-detail-2-regular text-neutral-500 mr-1500">
        {comment.phone}
      </span>
      <p className="text-detail-2-regular text-neutral-950 overflow-hidden whitespace-nowrap text-ellipsis w-[650px] mr-2500">
        {comment.body}
      </p>
      <div className="text-detail-2-regular text-neutral-500 mr-100">
        {likes}
      </div>
      {!isHeart ? (
        <img
          src={Heart}
          alt="Heart"
          className="mt-0.5"
          onClick={() => handleHeart(true)}
        />
      ) : (
        <img
          src={FullHeart}
          alt="FullHeart"
          className="mt-0.5"
          onClick={() => handleHeart(false)}
        />
      )}
    </div>
  );
}

EachComment.propTypes = {
  comment: PropTypes.object.isRequired,
  indexOfFirstPost: PropTypes.number.isRequired,
};

export default EachComment;
