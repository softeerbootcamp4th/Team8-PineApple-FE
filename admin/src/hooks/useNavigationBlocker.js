import { useState } from 'react';
import { useBlocker } from 'react-router-dom';

const useNavigationBlocker = (
  modified,
  onConfirmNavigation,
  onCancelNavigation,
) => {
  const [unsavedChangesModal, setUnsavedChangesModal] = useState(false);

  const blocker = useBlocker(({ currentLocation, nextLocation }) => {
    if (modified && currentLocation.pathname !== nextLocation.pathname) {
      setUnsavedChangesModal(true);
      return true;
    }
    return false;
  });

  const handleConfirmNavigation = () => {
    setUnsavedChangesModal(false);
    blocker.proceed();
    if (onConfirmNavigation) onConfirmNavigation();
  };

  const handleCancelNavigation = () => {
    setUnsavedChangesModal(false);
    blocker.reset();
    if (onCancelNavigation) onCancelNavigation();
  };

  return {
    unsavedChangesModal,
    handleConfirmNavigation,
    handleCancelNavigation,
  };
};

export default useNavigationBlocker;
