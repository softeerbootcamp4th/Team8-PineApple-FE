import React from 'react';
import ReloadComment from '@/assets/icons/reloadComment.svg';
import PropTypes from 'prop-types';
import getNowTime from '@/utils/getNowTime';

function RefreshData({ nowTime, setNowTime, onClickrefreshData }) {
  return (
    <div className="flex items-center mr-600 gap-400">
      <span className="text-detail-3-regular text-neutral-500">{nowTime}</span>
      <img
        src={ReloadComment}
        alt="ReloadComment"
        onClick={onClickrefreshData}
        className="cursor-pointer"
      />
    </div>
  );
}

RefreshData.propTypes = {
  nowTime: PropTypes.string.isRequired,
  setNowTime: PropTypes.func.isRequired,
  onClickrefreshData: PropTypes.func.isRequired,
};

export default RefreshData;
