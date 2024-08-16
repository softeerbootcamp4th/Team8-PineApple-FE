import React from 'react';
import PropTypes from 'prop-types';

function BlackButton({ value, onClickFunc, disabled = false }) {
  return (
    <button
      onClick={onClickFunc}
      className={`${disabled ? 'opacity-30' : 'opacity-100 hover:bg-neutral-black'} text-body-3-semibold text-white rounded py-200 px-1000 bg-neutral-700`}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

BlackButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

//memo를 이용하여 rerender 방지
export default React.memo(BlackButton);
