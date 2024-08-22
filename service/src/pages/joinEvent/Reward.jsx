import React, { useState, useEffect, useContext } from 'react';
import EventResultModal from '@/components/modal/EventResultModal';
import PrizeLinkSentModal from '@/components/modal/PrizeLinkSentModal';
import { useNavigate } from 'react-router-dom';
import { postReward, postSendPrize } from '@/api/rapple/index';
import { AuthContext } from '@/context/authContext';
import Loading from '@/assets/icons/Loading.svg';
import BlueButton from '@/components/buttons/BlueButton';
import JSConfetti from 'js-confetti';

function Reward() {
  const navigate = useNavigate();
  const [openResultModal, setOpenResultModal] = useState(false);
  const [openMessageModal, setOpenMessageModal] = useState(false);
  const [resultImage, setResultImage] = useState('');
  const { userInfo, setUserInfo } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const { toolBoxCnt } = userInfo;

  useEffect(() => {
    const confetti = new JSConfetti();

    const timer = setTimeout(() => {
      handleReward(confetti);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleReward = async confetti => {
    if (userInfo.toolBoxCnt > 0) {
      try {
        const response = await postReward();
        console.log(response);
        if (response && response.image) {
          setData(response);
          const updatedUserInfo = { ...userInfo, toolBoxCnt: toolBoxCnt - 1 };
          setUserInfo(updatedUserInfo);
          setLoading(false);
          setOpenResultModal(true);
          if (response.isDrawWin && confetti) {
            confetti.addConfetti({
              confettiColors: ['#CAB0FF'],
              confettiNumber: 500,
            });
          }
        } else {
          console.log('유효하지 않은 응답입니다: ', response);
          setError(true);
        }
      } catch (error) {
        console.error(error);
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  const closeResultModal = () => {
    setOpenResultModal(false);
    setOpenMessageModal(false);
    navigate(`/event`);
  };

  const handleSendPrize = async () => {
    const response = await postSendPrize(data.prizeId);
    if (response) {
      setResultImage(response.image);
      setOpenResultModal(false);
      setOpenMessageModal(true);
    }
  };

  const goToEventPage = () => {
    navigate('/event');
  };

  if (error) {
    return (
      <div className="flex-col h-screen set-center">
        <p className="text-heading-banner-title-3 text-gradient-blue-purple mb-2500">
          예상하지 못한 에러가 발생했습니다..!
        </p>
        <BlueButton
          value="돌아가기"
          onClickFunc={goToEventPage}
          styles="text-body-3-semibold px-1300 py-200 mt-[-5%]"
        />
      </div>
    );
  }

  return (
    <div>
      {loading && !error && (
        <div className="w-screen h-screen set-center">
          <div className="set-center flex-col w-[400px] h-[400px] rounded-[30px] bg-white shadow-2xl pt-[50px]">
            <img
              src={Loading}
              alt="Loading"
              className="rotate-360 w-[100px] h-auto"
            />
            <p className="text-neutral-black mt-1000 text-detail-1-semibold">
              경품을 응모중입니다.
            </p>
            <p className="text-neutral-black mt-300 text-detail-1-semibold">
              잠시만 기다려주세요.
            </p>
          </div>
        </div>
      )}
      {openResultModal && (
        <EventResultModal
          closeResultModal={closeResultModal}
          data={data}
          handleSendPrize={handleSendPrize}
        />
      )}
      {openMessageModal && (
        <PrizeLinkSentModal
          closeResultModal={closeResultModal}
          resultImage={resultImage}
        />
      )}
    </div>
  );
}

export default Reward;
