import React from 'react';
import PropTypes from 'prop-types';

function TableRow({ data, day }) {
  /*
   * 전체 데이터는 우하향으로 들어옴
   *[ 2, 50,   50, 0,   0]
   *[13, -1, 8.33, 0,   0]
   *[ 0, -1,   -1, 0,   0]
   *[ 0, -1,   -1, -1,  0]
   *[ 0, -1,   -1, -1, -1]
   * 해당 데이터를
   * [2, 50, 50, 0, 0]
   * [13, 8.33, 0, 0]
   * [0, 0, 0,]
   * [0, 0]
   * [0]
   * 으로 수정할 필요가 있음
   *
   * TableRow는 한 행을 받는 친구이기에 각각의 행에서 -1을 제거해서 배열을 재생성함
   */
  const renderedData = data.filter(value => value !== -1);
  const nullBoxCount = data.length - renderedData.length; //빈박스 생성으로 표의 구조 유지
  const initialUsers = renderedData.shift();

  return (
    <div className="flex bg-[#363636] text-neutral-white">
      <div className="set-center min-w-[157px] min-h-[70px] border">
        {day} 일차
      </div>
      <div className="set-center min-w-[157px] min-h-[70px] border">
        {initialUsers}
      </div>
      <div className="set-center min-w-[157px] min-h-[70px] border">
        {initialUsers === 0 ? 'N/A' : '100%'}
        {/* 유인된 유저가 0명이면 'N/A' 표시 */}
      </div>
      {renderedData.map((value, index) => (
        <div
          key={index}
          className="set-center bg-[#363636] min-w-[157px] min-h-[70px] border"
        >
          {value.toFixed(2)}%
        </div>
      ))}
      {Array.from({ length: nullBoxCount }).map((_, index) => (
        <div
          key={`null-box-${index}`}
          className="set-center bg-[#363636] min-w-[157px] min-h-[70px] border"
        />
      ))}
    </div>
  );
}

TableRow.propTypes = {
  day: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default TableRow;
