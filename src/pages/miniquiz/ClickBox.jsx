import React from 'react';
import PropTypes from 'prop-types';
import '@/styles/global.css';

function ClickBox({ text }) {
  return (
    <div className="set-center bg-neutral-white min-w-[586px] min-h-[120px] rounded-[15px] border-op-30-blue border-2">
      {text}
    </div>
  );
}

ClickBox.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ClickBox;
