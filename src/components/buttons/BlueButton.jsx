import React from 'react';
import PropTypes from 'prop-types';
import '@/styles/global.css';

function BlueButton({ value, styles, onClickFunc, disabled = false }) {
  return (
    <button
      onClick={onClickFunc}
      className={`${styles} ${disabled ? 'opacity-30' : 'opacity-100 hover-scale-ani'} set-center rounded-full bg-primary-blue text-neutral-white`}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

BlueButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func.isRequired,
  styles: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

//memo를 이용하여 rerender 방지
export default React.memo(BlueButton);
