import React from 'react';
import PropTypes from 'prop-types';

function AdminEditMiniQuizHeader({ info }) {
  return (
    <div className="h-[80px] bg-[#F2F2F2] flex items-center rounded-t-[10px]">
      <span className="text-neutral-black text-body-3-bold ml-1000">
        {info}
      </span>
    </div>
  );
}

AdminEditMiniQuizHeader.propTypes = {
  info: PropTypes.string.isRequired,
};

export default AdminEditMiniQuizHeader;
