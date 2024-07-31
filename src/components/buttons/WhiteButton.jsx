import React from 'react';
import PropTypes from 'prop-types';

function WhiteButton({ value, onClickFunc, textSize }) {
  return (
    <button
      onClick={onClickFunc}
      className={`flex items-center justify-center rounded-full bg-neutral-white px-800 py-400 ${textSize} text-neutral-black`}
    >
      {value}
    </button>
  );
}

WhiteButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func.isRequired,
  textSize: PropTypes.string.isRequired,
};

export default React.memo(WhiteButton);
