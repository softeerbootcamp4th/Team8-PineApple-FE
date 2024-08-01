import React from 'react';
import PropTypes from 'prop-types';

function WhiteButton({ value, onClickFunc, textSize, px, py }) {
  return (
    <button
      onClick={onClickFunc}
      className={`${textSize} ${px} ${py} flex items-center justify-center rounded-full bg-neutral-white text-neutral-black`}
    >
      {value}
    </button>
  );
}

WhiteButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func.isRequired,
  textSize: PropTypes.string.isRequired,
  px: PropTypes.string.isRequired,
  py: PropTypes.string.isRequired,
};

export default React.memo(WhiteButton);
