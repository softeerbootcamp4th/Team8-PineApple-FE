import { useEffect } from 'react';

const useBeforeUnload = () => {
  useEffect(() => {
    const handleBeforeUnload = event => {
      event.preventDefault();
      return (event.returnValue = '');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  });
};

export default useBeforeUnload;
