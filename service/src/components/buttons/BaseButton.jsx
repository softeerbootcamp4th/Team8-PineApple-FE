import React from 'react';
import PropTypes from 'prop-types';

function BaseButton({
  value,
  onClickFunc,
  styles = '',
  disabled = false,
  bgColor,
  textColor,
}) {
  return (
    <button
      onClick={onClickFunc}
      className={`${styles} ${disabled ? 'opacity-30' : 'opacity-100 hover-scale-ani'} set-center rounded-full ${bgColor} ${textColor}`}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

BaseButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func.isRequired,
  styles: PropTypes.string,
  disabled: PropTypes.bool,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default React.memo(BaseButton);
