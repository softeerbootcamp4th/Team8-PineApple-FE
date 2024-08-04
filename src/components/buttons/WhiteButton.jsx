import React from 'react';
import PropTypes from 'prop-types';

function WhiteButton({ value, onClickFunc, styles, disabled = false }) {
  return (
    <button
      onClick={onClickFunc}
      className={`${styles} ${disabled ? 'opacity-30' : 'opacity-100 hover:scale-105 transition-transform'} flex items-center justify-center rounded-full bg-neutral-white text-neutral-black`}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

WhiteButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func.isRequired,
  styles: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default React.memo(WhiteButton);
