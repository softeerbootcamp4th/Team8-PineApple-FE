import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ClickBox = ({ id, value, isChosen, onClick }) => {
  const baseClass =
    'hover-scale-ani set-center text-body-3-semibold min-w-[586px] min-h-[120px] rounded-[15px] border-2 overflow-hidden';

  const className = classnames(baseClass, {
    'bg-background-lightblue gradient-border': id === isChosen,
    'border-op-30-blue bg-neutral-white': id !== isChosen,
  }); //classnames 를 사용하여 가독성 개선

  //이전 코드
  /*   let className =
   *   'hover-scale-ani set-center text-body-3-semibold min-w-[586px] min-h-[120px] rounded-[15px] border-2 overflow-hidden ';
   * if (id === isChosen) {
   *   className = className + 'bg-background-lightblue gradient-border';
   * } else {
   *   className = className + 'border-op-30-blue bg-neutral-white';
   * }
   */

  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

ClickBox.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  isChosen: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ClickBox;
