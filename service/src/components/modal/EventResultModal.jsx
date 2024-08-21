import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ModalFrame from './ModalFrame';
import BlueButton from '@/components/buttons/BlueButton';
import BlueCheckIcon from '@/assets/icons/blueCheckIcon.svg';
import CarImage from '@/assets/images/smallCarImage.svg';
import ToolBoxImage from '@/assets/images/smallToolBoxImage.svg';
import BlueBar from '@/assets/icons/blueBar.svg';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@/context/authContext';

function EventResultModal({ closeResultModal, data, handleSendPrize }) {
  const { userInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const navigateDailyComment = () => {
    navigate(`/event`, { state: { scrollTo: 'dailyComment' } });
  };

  return (
    <ModalFrame
      handleExit={closeResultModal}
      tag={`${data.isDrawWin ? data.prizeName : ''}`}
      title={`${data.isDrawWin ? data.dailyWinningMessage : data.dailyLoseMessage}`}
    >
      {data.isDrawWin ? (
        <div className="flex-col px-3000 set-center min-w-[800px]">
          <img
            src={data.image}
            alt="successImage"
            className="mb-900 max-w-[450px] h-auto"
          />
          <BlueButton
            value="상품 받기"
            onClickFunc={handleSendPrize}
            styles="text-detail-2-semibold px-1300 py-400"
          />
        </div>
      ) : (
        <div className="flex-col px-3000 set-center min-w-[800px]">
          <div className="flex mb-1200 mt-[-20px]">
            <img src={BlueCheckIcon} alt="BlueCheckIcon" />
            <p className="text-primary-blue text-detail-3-semibold ml-100 set-center">
              {data.dailyLoseScenario}
            </p>
          </div>
          <img
            src={data.image}
            alt="failImage"
            className="mb-900 w-[450px] h-[166px]"
          />
          {data.commentedToday ? (
            <p className="text-neutral-500 text-detail-3-regular set-center">
              내일 오후 1시 이후에 다시 도전해보아요!
            </p>
          ) : (
            <BlueButton
              value="기대평 작성하고 한번 더"
              onClickFunc={navigateDailyComment}
              styles="text-detail-2-semibold px-1300 py-400"
            />
          )}
        </div>
      )}
      <div className="absolute bg-background-lightblue set-center flex-col gap-500 p-300 rounded-[15px] top-[30%] left-[83%]">
        <span className="text-detail-3-semibold text-primary-blue">
          남은 아이템
        </span>
        <div className="rounded-lg px-300 py-200 bg-neutral-white text-detail-3-semibold text-primary-blue">
          {userInfo.car ? 1 : 0}
        </div>
        <img src={CarImage} alt="CarImage" className="w-[72px] h-auto" />
        <img src={BlueBar} alt="BlueBar" />
        <div className="rounded-lg px-300 py-200 bg-neutral-white text-detail-3-semibold text-primary-blue">
          {userInfo.toolBoxCnt}
        </div>
        <img
          src={ToolBoxImage}
          alt="ToolBoxImage"
          className="w-[72px] h-auto"
        />
      </div>
    </ModalFrame>
  );
}

EventResultModal.propTypes = {
  closeResultModal: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  handleSendPrize: PropTypes.func.isRequired,
};

export default EventResultModal;
