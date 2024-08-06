import React from 'react';
import PropTypes from 'prop-types';

function EventHeader({ eventTitle, eventBody }) {
  return (
    <div className="absolute flex w-full h-[32px] items-center top-[2%] left-[5%]">
      <span className="text-detail-1-bold text-neutral-black mr-2000">
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
};

export default EventHeader;
