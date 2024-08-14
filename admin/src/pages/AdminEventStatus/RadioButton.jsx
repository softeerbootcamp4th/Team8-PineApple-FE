import React from 'react';
import PropTypes from 'prop-types';

function RadioButton({ value, rowsPerPage, onChange }) {
  return (
    <label className="flex items-center gap-2">
      <input
        type="radio"
        value={value}
        checked={rowsPerPage === value}
        onChange={onChange}
        className="w-[20px] h-[20px]"
      />
      {value}개씩 보기
    </label>
  );
}

RadioButton.propTypes = {
  value: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioButton;
