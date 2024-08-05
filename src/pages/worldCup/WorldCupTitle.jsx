import React from 'react';
import PropTypes from 'prop-types';

function WorldCupTitle({ title }) {
  return (
    <div className="absolute flex flex-col items-center top-[10%] w-full">
      <div className="w-[160px] h-[45px] bg-neutral-white flex justify-center items-center text-primary-blue text-detail-1-bold rounded-xl mb-4">
        {title}
      </div>
      <div className="text-body-1-bold text-neutral-black">
        둘 중 제일 피하고 싶은 상황은?
      </div>
    </div>
  );
}

WorldCupTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default WorldCupTitle;
