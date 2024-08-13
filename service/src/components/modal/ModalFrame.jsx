import React, { useEffect } from 'react';
import ModalPortal from './ModalPortal';
import ModalClose from '@/assets/icons/modalClose.svg';
import PropTypes from 'prop-types';

function ModalFrame({ children, handleExit, tag, title }) {
  // 모달창이 띄워졌을때 뒷부분 스크롤 막기 위한 코드
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return (
    <ModalPortal>
      <div className="fixed inset-0 set-center bg-opacity-50 bg-neutral-black z-[10]">
        <div className="bg-neutral-white p-1500 flex flex-col items-center relative rounded-[20px]">
          <button
            onClick={handleExit}
            className="absolute top-[29px] right-[29px]"
          >
            <img src={ModalClose} alt="Close icons" />
          </button>
          {tag != '' && (
            <div className="skyblue-box text-detail-1-semibold mb-500">
              {tag}
            </div>
          )}
          <span className="text-body-2-bold text-neutral-black mb-900">
            {title}
          </span>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
}

ModalFrame.propTypes = {
  children: PropTypes.node.isRequired,
  handleExit: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ModalFrame;
