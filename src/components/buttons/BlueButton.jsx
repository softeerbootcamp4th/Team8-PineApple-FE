import React from 'react';
import PropTypes from 'prop-types';

function BlueButton({ value, onClickFunc, textSize }) {
  return (
    <button
      onClick={onClickFunc}
      // text-detail and padding have to be fixed, 인자로 추가할까??

      className={`flex items-center justify-center rounded-full bg-primary-blue px-800 py-400 ${textSize} text-neutral-white`}
    >
      {value}
    </button>
  );
}

BlueButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func.isRequired,
  textSize: PropTypes.string.isRequired,
};

//memo를 이용하여 rerender 방지
export default React.memo(BlueButton);
