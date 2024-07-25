import React from 'react';
import PropTypes from 'prop-types';

function BluePurpleButton({ value, onClickFunc }) {
  return (
    <button
      onClick={onClickFunc}
      className="flex items-center justify-center rounded-full bg-gradient-blue-purple px-800 py-400 text-detail-3-semibold text-neutral-white"
    >
      {value}
    </button>
  );
}

BluePurpleButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func.isRequired,
};

export default BluePurpleButton;
