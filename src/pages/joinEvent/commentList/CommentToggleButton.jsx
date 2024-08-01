import React from 'react';
import PropTypes from 'prop-types';

function SortCommentButton({ option, setOption }) {
  return (
    <div className="relative flex rounded-full w-44 h-11 bg-neutral-white">
      <div
        className={`absolute w-1/2 h-full rounded-full bg-primary-blue transition-transform duration-300 ease-in-out ${
          option === 'like'
            ? 'transform translate-x-0'
            : 'transform translate-x-full'
        }`}
      ></div>
      <button
        className={`flex-1 text-center z-10 text-detail-3-regular ${
          option === 'like' ? 'text-white' : 'text-primary-blue'
        }`}
        onClick={() => setOption('like')}
      >
        인기순
      </button>
      <button
        className={`flex-1 text-center z-10 text-detail-3-regular ${
          option === 'newest' ? 'text-white' : 'text-primary-blue'
        }`}
        onClick={() => setOption('newest')}
      >
        최신순
      </button>
    </div>
  );
}

SortCommentButton.propTypes = {
  option: PropTypes.string.isRequired,
  setOption: PropTypes.func.isRequired,
};

export default SortCommentButton;
