import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '@/styles/global.css';

function ClickBox({ id, value, isChosen, onClick }) {
  let className =
    ' hover-scale-ani set-center text-body-3-semibold min-w-[586px] min-h-[120px] rounded-[15px] border-2 ';
  if (id === isChosen) {
    className = 'bg-background-lightblue gradient-border' + className;
  } else {
    className = className + 'border-op-30-blue bg-neutral-white';
  }

  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}

ClickBox.propTypes = {
  value: PropTypes.string.isRequired,
  isChosen: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ClickBox;
