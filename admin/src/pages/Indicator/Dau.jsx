import React from 'react';
import PropTypes from 'prop-types';

function Dau({ data }) {
  return (
    <div className="flex bg-[#363636] text-neutral-white">
      <div className="set-center min-w-[157px] min-h-[70px] border">Dau</div>
      <div className="set-center min-w-[157px] min-h-[70px] border">
        시작일 기준
      </div>
      {data.map((value, index) => (
        <div
          key={index}
          className="set-center bg-[#363636] min-w-[157px] min-h-[70px] border"
        >
          {value}
        </div>
      ))}
    </div>
  );
}

Dau.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Dau;
