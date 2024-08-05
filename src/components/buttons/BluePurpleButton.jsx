import React from 'react';
import PropTypes from 'prop-types';
import '@/styles/global.css';

function BluePurpleButton({ value, onClickFunc, styles, disabled = false }) {
  return (
    <button
      onClick={onClickFunc}
      className={`${styles} ${disabled ? 'opacity-30' : 'opacity-100 hover:scale-105 transition-transform'} set-center rounded-full bg-gradient-blue-purple  text-neutral-white`}
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
