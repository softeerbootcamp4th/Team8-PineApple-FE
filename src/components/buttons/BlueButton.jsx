import React from 'react';
import PropTypes from 'prop-types';

function BlueButton({
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
      // text-detail and padding have to be fixed, 인자로 추가할까??
      className={`${textSize} ${px} ${py} ${disabled ? 'opacity-30' : 'opacity-100'} flex items-center justify-center rounded-full bg-primary-blue text-neutral-white`}
    >
      {value}
    </button>
  );
}

BlueButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func.isRequired,
  textSize: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  px: PropTypes.string.isRequired,
  py: PropTypes.string.isRequired,
};

//memo를 이용하여 rerender 방지
export default React.memo(BlueButton);
