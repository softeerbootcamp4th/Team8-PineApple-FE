import React from 'react';
import PropTypes from 'prop-types';

function TableRow({ data, day }) {
  let start;
  return (
    <div className="flex bg-[#363636] text-neutral-white">
      <div className="set-center min-w-[157px] min-h-[70px] border">
        Day {day}
      </div>
      <div className="set-center min-w-[157px] min-h-[70px] border">
        {data.shift()}
      </div>
      <div className="set-center min-w-[157px] min-h-[70px] border">100%</div>
      {data.map((value, index) => {
        if (value === -1) return null;
        return (
          <div
            key={index}
            className="set-center bg-[#363636] min-w-[157px] min-h-[70px] border"
          >
            {value.toFixed(2)}%
          </div>
        );
      })}
    </div>
  );
}

TableRow.propTypes = {
  day: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
};

export default TableRow;
