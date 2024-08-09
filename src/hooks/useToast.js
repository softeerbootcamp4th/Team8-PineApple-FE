import { useCallback, useState } from 'react';

const useToast = (duration = 3000) => {
  const [showToast, setShowToast] = useState(false);
  const [messageType, setMessageType] = useState('');

  const showToastMessage = useCallback(
    type => {
      if (showToast) return;
      setMessageType(type);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, duration);
    },
    [showToast, duration],
  );

  const handleShareClick = useCallback(() => {
    navigator.clipboard
      .writeText('www.naver.com')
      .then(() => {
        showToastMessage('copyLink');
      })
      .catch(error => {
        console.error('toast message error', error);
      });
  }, [showToastMessage]);

  const AlreadyPostComment = useCallback(() => {
    showToastMessage('alreadyPostComment');
  }, [showToastMessage]);

  return { showToast, messageType, handleShareClick, AlreadyPostComment };
};

export default useToast;
