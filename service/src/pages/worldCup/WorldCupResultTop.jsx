import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import WorldCupArrowIcon from '@/assets/icons/worldCupArrowIcon.svg';
import useToast from '@/hooks/useToast';
import ToastMessage from '@/components/toastMessage/ToastMessage';
import { AuthContext } from '@/context/authContext';
import AlreadyGetCarModal from '@/components/modal/AlreadyGetCarModal';
import GetItemModal from '@/components/modal/GetItemModal';
import PhoneInputModal from '@/components/modal/PhoneInputModal';
import useFunnel from '@/hooks/useFunnel';
import '@/styles/worldCupArrowAnimation.css';
import SlideUpMotion from '@/components/SlideUpMotion/SlideUpMotion';

function WorldCupResultTop({ data }) {
  const { showToast, messageType, handleShareClick } = useToast();
  const { userInfo } = useContext(AuthContext);
  const MODAL_STEPS = ['none', 'phoneInput', 'alreadyGetCar', 'getCar'];
  const [Funnel, setStep] = useFunnel(MODAL_STEPS);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = () => {
    if (userInfo.phoneNumber === undefined) {
      setStep('phoneInput');
    } else {
      if (userInfo.car) {
        setStep('alreadyGetCar');
      } else {
        setStep('getCar');
      }
    }
  };

  const closeModal = () => {
    setStep('none');
  };

  const closePhoneModal = () => {
    setStep('none');
  };

  return (
    <div className="relative flex flex-col items-center pt-2000">
      <img
        src={WorldCupArrowIcon}
        alt="worldCupArrowIcon"
        className={`${animate ? 'arrow-animation' : 'opacity-0'} absolute top-[45%]`}
      />
      <SlideUpMotion>
        <div className="set-center">
          <div className="w-[100px] py-[5px] bg-primary-babyblue rounded-md flex justify-center items-center text-detail-1-bold text-primary-blue mb-300">
            우승
          </div>
        </div>
        <p className="text-center text-heading-3-bold mb-700 text-neutral-black">
          {data.story}
        </p>
      </SlideUpMotion>
      <SlideUpMotion delay={0.5}>
        <div className="flex justify-center gap-1500 pl-500 mb-[-35px]">
          <img src={data.image} alt="dataImage" className="w-[420px] h-auto" />
          <img
            src={data.resultImage}
            alt="resultImage"
            className="w-[460px] h-auto"
          />
        </div>
        <div className="flex items-center justify-center gap-1000 mb-500">
          <p className="text-gradient-blue-purple text-detail-1-semibold">
            CASPER ELECTRIC과 함께한다면?
          </p>
          <p className="text-body-3-bold text-neutral-black">{data.solution}</p>
        </div>
      </SlideUpMotion>
      <SlideUpMotion delay={1.0}>
        <div className="flex items-center justify-center gap-1000">
          <button
            onClick={() => handleShareClick(false)}
            className="bg-transparent rounded-full border-[2px] border-solid border-white px-[140px] py-[16px] text-detail-1-medium text-neutral-white hover-scale-ani"
          >
            공유하기
          </button>
          <button
            onClick={handleOpenModal}
            className="bg-neutral-white rounded-full px-[100px] py-[16px] text-detail-1-medium text-neutral-black hover-scale-ani"
          >
            자동차 아이템 받기
          </button>
        </div>
      </SlideUpMotion>
      {showToast && <ToastMessage messageType={messageType} />}
      <Funnel>
        <Funnel.Step name="phoneInput">
          <PhoneInputModal
            closePhoneModal={closePhoneModal}
            option="자동차 아이템"
            setResultModalOpen={setStep}
          />
        </Funnel.Step>
        <Funnel.Step name="alreadyGetCar">
          <AlreadyGetCarModal close={closeModal} />
        </Funnel.Step>
        <Funnel.Step name="getCar">
          <GetItemModal close={closeModal} item="자동차 아이템" />
        </Funnel.Step>
      </Funnel>
    </div>
  );
}

WorldCupResultTop.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WorldCupResultTop;
