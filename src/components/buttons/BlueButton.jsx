import React from 'react';
import PropTypes from 'prop-types';

function BlueButton({ value, styles, onClickFunc, disabled = false }) {
  return (
    <button
      onClick={onClickFunc}
      // text-detail and padding have to be fixed, 인자로 추가할까??
      className={`${styles} ${disabled ? 'opacity-30' : 'opacity-100 hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]'} flex items-center justify-center rounded-full bg-primary-blue text-neutral-white`}
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
