import React from 'react';
import PropTypes from 'prop-types';

function WhiteButton({ value, onClickFunc }) {
  return (
    <button
      onClick={onClickFunc}
      className="flex items-center justify-center rounded-full bg-neutral-white px-800 py-400 text-detail-3-semibold text-neutral-black"
    >
      {value}
    </button>
  );
}

WhiteButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func.isRequired,
};

export default React.memo(WhiteButton);
