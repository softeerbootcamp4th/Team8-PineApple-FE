import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '@/styles/global.css';

function ClickBox({ text }) {
  const [isChosen, setIsChosen] = useState(false);

  return (
    <button className="hover:scale-105 transition-transform set-center text-body-3-semibold bg-neutral-white min-w-[586px] min-h-[120px] rounded-[15px] border-op-30-blue border-2">
      {text}
    </button>
  );
}

ClickBox.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ClickBox;
