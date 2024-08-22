import React from 'react';
import PropTypes from 'prop-types';

function NewCarDetailBox({ details }) {
  const { title, description, imageSrc, alt } = details;
  return (
    <div>
      <img
        src={imageSrc}
        alt={alt}
        className="h-[435px] w-[703px]"
        loading="lazy"
        draggable="false"
      ></img>
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
    alt: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewCarDetailBox;
