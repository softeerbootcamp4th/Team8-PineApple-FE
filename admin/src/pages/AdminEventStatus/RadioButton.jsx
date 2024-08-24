import React from 'react';
import PropTypes from 'prop-types';

function RadioButton({ value, checked, onChange }) {
  return (
    <label className="flex items-center gap-2">
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className="w-[20px] h-[20px]"
      />
      {value}개씩 보기
    </label>
  );
}

RadioButton.propTypes = {
  value: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioButton;
