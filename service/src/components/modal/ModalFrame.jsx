import React, { useEffect } from 'react';
import ModalPortal from './ModalPortal';
import ModalClose from '@/assets/icons/modalClose.svg';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function ModalFrame({ children, handleExit, tag, title, controls }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <ModalPortal>
      <div className="fixed inset-0 set-center bg-opacity-50 bg-neutral-black z-[10]">
        <motion.div
          animate={controls}
          className="bg-neutral-white p-1500 flex flex-col items-center relative rounded-[20px]"
        >
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
        </motion.div>
      </div>
    </ModalPortal>
  );
}

ModalFrame.propTypes = {
  children: PropTypes.node.isRequired,
  handleExit: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  controls: PropTypes.object,
};

export default ModalFrame;
