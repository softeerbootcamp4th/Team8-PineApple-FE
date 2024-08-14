import React from 'react';
import PropTypes from 'prop-types';
import '@/styles/global.css';

function TableRow({ id, phoneNumber, time, result }) {
  return (
    <div className="flex bg-neutral-white h-[50px]">
      <div className="set-center w-[275px] border border-black">{id}</div>
      <div className="flex-1 border border-black set-center">{phoneNumber}</div>
      <div className="flex-1 border border-black set-center">{time}</div>
      <div className="flex-1 border border-black set-center">{result}</div>
    </div>
  );
}

TableRow.propTypes = {
  id: PropTypes.number.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};

export default TableRow;