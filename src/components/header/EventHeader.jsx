import React from 'react';
import PropTypes from 'prop-types';
import BackIcon from '@/assets/icons/back.svg';

function EventHeader({ eventTitle, eventBody, setOpenExitModal }) {
  return (
    <div className="absolute flex h-[32px] items-center top-[1%] left-[3%] z-[100]">
      <button
        onClick={() => setOpenExitModal(true)}
        className="transition-transform duration-300 hover:scale-125"
      >
        <img src={BackIcon} alt="back" />
      </button>
      <span className="text-detail-1-bold text-neutral-black mr-1000 pl-500">
        CASPER ELECTRIC
      </span>
      <span className="text-detail-2-medium text-primary-blue mr-[16px]">
        {eventTitle}
      </span>
      <span className="text-detail-2-medium text-neutral-black">
        {eventBody}
      </span>
    </div>
  );
}

EventHeader.propTypes = {
  eventTitle: PropTypes.string.isRequired,
  eventBody: PropTypes.string.isRequired,
  setOpenExitModal: PropTypes.func.isRequired,
};

export default EventHeader;
