import React from 'react';
import PropTypes from 'prop-types';

function BlueButton({ value, onClickFunc }) {
  return (
    <button
      onClick={onClickFunc}
      // text-detail and padding have to be fixed, 인자로 추가할까??
      className="flex items-center justify-center rounded-full bg-primary-blue px-800 py-400 text-detail-3-semibold text-neutral-white"
    >
      {value}
    </button>
  );
}

BlueButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func.isRequired,
};

export default BlueButton;
