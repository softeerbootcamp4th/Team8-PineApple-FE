import React from 'react';
import PropTypes from 'prop-types';

function BluePurpleButton({ value, onClickFunc, textSize }) {
  return (
    <button
      onClick={onClickFunc}
      className={`flex items-center justify-center rounded-full bg-gradient-blue-purple px-800 py-400 ${textSize} text-neutral-white`}
    >
      {value}
    </button>
  );
}

BluePurpleButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func.isRequired,
  textSize: PropTypes.string.isRequired,
};

export default React.memo(BluePurpleButton);
