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

  const renderMessageContent = () => {
    switch (messageType) {
      case 'copyLink':
        return (
          <p className="text-detail-2-medium text-neutral-black">
            공유 링크가 복사되었습니다!
          </p>
        );
      case 'unAuthorized':
        return (
          <div className="flex flex-col items-center">
            <img
              src={AlertTriangle}
              alt="AlertTriangle"
              className="mb-300 w-[48px] h-[48px]"
            />
            <p className="text-detail-2-medium text-neutral-black">
              로그인 후 사용할 수 있는 기능입니다.
            </p>
          </div>
        );
      case 'notAlreadyComment':
        return (
          <div className="flex flex-col items-center">
            <img
              src={AlertTriangle}
              alt="AlertTriangle"
              className="mb-300 w-[48px] h-[48px]"
            />
            <p className="text-detail-2-medium text-neutral-black">
              아직 기대평을 작성하지 않았어요.
            </p>
            <p className="text-detail-2-medium text-neutral-black">
              작성 후 다시 시도해 주세요!
            </p>
          </div>
        );
      case 'alreadyPostComment':
        return (
          <div className="flex flex-col items-center">
            <img
              src={AlertTriangle}
              alt="AlertTriangle"
              className="mb-300 w-[48px] h-[48px]"
            />
            <p className="text-detail-2-medium text-neutral-black">
              오늘은 이미 기대평을 작성했어요.
            </p>
            <p className="text-detail-2-medium text-neutral-black">
              내일 또 작성할 수 있어요!
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`fixed py-600 px-3000 top-[43%] left-[33.5%] z-[100] rounded-2xl shadow-2xl bg-neutral-white ${animationClass}`}
    >
      {renderMessageContent()}
    </div>
  );
}

ToastMessage.propTypes = {
  messageType: PropTypes.oneOf([
    'copyLink',
    'unAuthorized',
    'notAlreadyComment',
    'alreadyPostComment',
  ]).isRequired,
};

export default ToastMessage;
