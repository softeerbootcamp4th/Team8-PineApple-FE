import React from 'react';
import PropTypes from 'prop-types';

function BluePurpleButton({ value, onClickFunc, styles, disabled = false }) {
  return (
    <button
      onClick={onClickFunc}
      className={`${styles} ${disabled ? 'opacity-30' : 'opacity-100 hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]'} flex items-center justify-center rounded-full bg-gradient-blue-purple  text-neutral-white`}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

BluePurpleButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func.isRequired,
  styles: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default React.memo(BluePurpleButton);
