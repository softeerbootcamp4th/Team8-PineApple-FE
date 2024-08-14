import React, { useState } from 'react';
import ReloadComment from '@/assets/icons/reloadComment.svg';
import PropTypes from 'prop-types';

function RefreshData({ nowTime, onClickrefreshData }) {
  const [isRotating, setIsRotating] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleRefresh = () => {
    if (isDisabled) return;

    setIsRotating(true);
    setIsDisabled(true);
    onClickrefreshData();

    setTimeout(() => {
      setIsRotating(false);
      setIsDisabled(false);
    }, 1000);
  };

  return (
    <div className="flex items-center mr-600 gap-400">
      <span className="text-detail-3-regular text-neutral-500">{nowTime}</span>
      <img
        src={ReloadComment}
        alt="ReloadComment"
        onClick={handleRefresh}
        className={`cursor-pointer ${isRotating ? 'rotate-180' : ''} `}
      />
    </div>
  );
}

RefreshData.propTypes = {
  nowTime: PropTypes.string.isRequired,
  onClickrefreshData: PropTypes.func.isRequired,
};

export default RefreshData;
