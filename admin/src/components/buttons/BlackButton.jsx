import React from 'react';
import PropTypes from 'prop-types';

function BlackButton({ value, onClickFunc }) {
  return (
    <button
      onClick={onClickFunc}
      className={`text-body-3-semibold text-white rounded py-200 px-1000 bg-neutral-700 hover:bg-neutral-black`}
    >
      {value}
    </button>
  );
}

BlackButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func.isRequired,
};

//memo를 이용하여 rerender 방지
export default React.memo(BlackButton);
