import React from 'react';
import PropTypes from 'prop-types';

function TableHeader({ col }) {
  return (
    <div className="flex bg-[#363636] text-neutral-white">
      <div className="set-center min-w-[157px] min-h-[70px] border">Cohort</div>
      <div className="set-center min-w-[157px] min-h-[70px] border">Users</div>
      {Array.from({ length: col }).map((_, index) => (
        <div
          key={index}
          className="set-center bg-[#363636] min-w-[157px] min-h-[70px] border"
        >
          Day {index}
        </div>
      ))}
    </div>
  );
}

TableHeader.propTypes = {
  col: PropTypes.number.isRequired,
};

export default TableHeader;
