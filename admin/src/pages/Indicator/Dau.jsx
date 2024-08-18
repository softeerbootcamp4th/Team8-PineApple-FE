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
          {/* 추후 null은 0으로 변경되어 올 예정 지금은 임시방편 */}
          {value === null ? 0 : value}
        </div>
      ))}
    </div>
  );
}

Dau.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Dau;
