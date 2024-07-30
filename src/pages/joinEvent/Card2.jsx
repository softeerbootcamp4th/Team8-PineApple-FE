import React from 'react';
import BlueButton from '@/components/buttons/BlueButton';
import noToolBoxImage from '@/assets/images/noToolBoxImage.svg';
import toolBoxImage from '@/assets/images/toolBoxImage.svg';
import PropTypes from 'prop-types';

function Card({ details }) {
  const { bgColor, title, description, imageSrc, buttonValue, onClickFunc } =
    details;
  return (
    <div
      className={`${bgColor} px-800 py-700 w-[340px] h-[417px] rounded-[30px]`}
    >
      <div className>{title}</div>
      <div className="whitespace-pre-line">{description}</div>
      <image className="w-266" src={imageSrc}></image>
      <BlueButton value={buttonValue} onclick={onClickFunc} />
    </div>
  );
}

Card.propTypes = {
  details: PropTypes.shape({
    bgColor: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    buttonValue: PropTypes.string.isRequired,
    onClickFunc: PropTypes.func.isRequired,
  }).isRequired,
};

export default Card2;
