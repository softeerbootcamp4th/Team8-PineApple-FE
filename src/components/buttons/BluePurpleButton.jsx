import React from 'react';
import PropTypes from 'prop-types';

function BluePurpleButton({ value, onClickFunc, textSize, disabled }) {
  return (
    <button
      onClick={onClickFunc}
      className={`${textSize} ${disabled ? 'opacity-30' : 'opacity-100'} flex items-center justify-center rounded-full bg-gradient-blue-purple px-800 py-400 text-neutral-white`}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

BluePurpleButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func.isRequired,
  textSize: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default React.memo(BluePurpleButton);
