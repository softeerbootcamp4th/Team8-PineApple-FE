import { useCallback, useState } from 'react';
import { getShortenLink } from '@/api/comment/index';

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

  const handleShareClick = useCallback(
    async isShortUrl => {
      if (isShortUrl) {
        const response = await getShortenLink();
        if (response.code === 'JWT_PARSING_ERROR') {
          showToastMessage('unAuthorized');
        } else if (response.code === 'NO_COMMENT') {
          showToastMessage('notAlreadyComment');
        } else {
          navigator.clipboard
            .writeText(`http://localhost:5173/event/${response.shortenUrl}`)
            .then(() => {
              showToastMessage('copyLink');
            })
            .catch(error => {
              console.error('toast message error', error);
            });
        }
      } else {
        navigator.clipboard
          .writeText(`https://casper-event.store`)
          .then(() => {
            showToastMessage('copyLink');
          })
          .catch(error => {
            console.error('toast message error', error);
          });
      }
    },
    [showToastMessage],
  );

  const AlreadyPostComment = useCallback(() => {
    showToastMessage('alreadyPostComment');
  }, [showToastMessage]);

  return { showToast, messageType, handleShareClick, AlreadyPostComment };
};

export default useToast;
