import React, { useEffect } from 'react';
import ModalPortal from './ModalPortal';
import PropTypes from 'prop-types';

function ModalFrame({ text, onClickNo, onClickYes }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return (
    <ModalPortal>
      <div className="fixed inset-0 set-center bg-opacity-50 bg-neutral-black z-[10]">
        <div className="bg-neutral-white px-1000 pt-2000 pb-1000 flex flex-col items-center rounded-[20px]">
          <p className="text-body-3-bold text-neutral-black mb-900">{text}</p>
          <div className="set-center gap-500">
            <button
              onClick={onClickNo}
              className={`text-body-3-semibold text-neutral-black border-solid border-[2px] border-black rounded w-[150px] h-[60px] set-center bg-white hover:shadow-xl`}
            >
              아니오
            </button>
            <button
              onClick={onClickYes}
              className={`text-body-3-semibold text-white rounded w-[150px] h-[60px] set-center bg-neutral-700 hover:bg-neutral-black`}
            >
              네
            </button>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
}

ModalFrame.propTypes = {
  text: PropTypes.string.isRequired,
  onClickNo: PropTypes.func.isRequired,
  onClickYes: PropTypes.func.isRequired,
};

export default ModalFrame;
