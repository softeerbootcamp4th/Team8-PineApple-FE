import React from 'react';
import PropTypes from 'prop-types';

function BlackButton({ onClickFunc }) {
  return (
    <button
      onClick={onClickFunc}
      className={`font-bold text-white rounded py-200 px-1000 bg-neutral-700 hover:bg-neutral-black`}
    >
      수정하기
    </button>
  );
}

BlackButton.propTypes = {
  onClickFunc: PropTypes.func.isRequired,
};

//memo를 이용하여 rerender 방지
export default React.memo(BlackButton);
