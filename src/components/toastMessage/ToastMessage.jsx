import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AlertTriangle from '@/assets/icons/alertTriangle.svg';

function ToastMessage({ messageType }) {
  const [animationClass, setAnimationClass] = useState('animate-slide-down');

  useEffect(() => {
    if (messageType) {
      setAnimationClass('animate-slide-down');
      const timer = setTimeout(() => {
        setAnimationClass('animate-slide-up');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [messageType]);

  return (
    <div
      className={`fixed py-600 px-3000 top-[43%] left-[33.5%] rounded-2xl shadow-2xl bg-neutral-white ${animationClass}`}
    >
      {messageType === 'copyLink' ? (
        <p className="text-detail-2-medium text-neutral-black">
          공유 링크가 복사되었습니다!
        </p>
      ) : (
        <div className="flex flex-col items-center">
          <img
            src={AlertTriangle}
            alt="AlertTriangle"
            className="mb-300 w-[48px] h-[48px]"
          ></img>
          <p className="text-detail-2-medium text-neutral-black">
            오늘은 이미 기대평을 작성했어요.
          </p>
          <p className="text-detail-2-medium text-neutral-black">
            내일 또 작성할 수 있어요!
          </p>
        </div>
      )}
    </div>
  );
}

ToastMessage.propTypes = {
  messageType: PropTypes.string.isRequired,
};

export default ToastMessage;
