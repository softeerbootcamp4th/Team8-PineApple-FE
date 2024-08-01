import React from 'react';
import PropTypes from 'prop-types';

function BluePurpleButton({
  value,
  onClickFunc,
  textSize,
  disabled = false,
  px,
  py,
}) {
  return (
    <button
      onClick={onClickFunc}
      className={`${textSize} ${px} ${py} ${disabled ? 'opacity-30' : 'opacity-100'} flex items-center justify-center rounded-full bg-gradient-blue-purple  text-neutral-white`}
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
  disabled: PropTypes.bool,
  px: PropTypes.string.isRequired,
  py: PropTypes.string.isRequired,
};

export default React.memo(BluePurpleButton);
