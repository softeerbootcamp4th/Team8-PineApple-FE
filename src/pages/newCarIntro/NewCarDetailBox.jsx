import React from 'react';
import PropTypes from 'prop-types';

function NewCarDetailBox({ details }) {
  const { title, description, imageSrc } = details;
  return (
    <div>
      <img src={imageSrc} className="h-[435px] w-[703px]"></img>
      <div className="text-body-1-bold text-neutral-black">{title}</div>
      <div className="text-detail-2-medium text-neutral-black">
        {description}
      </div>
    </div>
  );
}

NewCarDetailBox.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewCarDetailBox;
