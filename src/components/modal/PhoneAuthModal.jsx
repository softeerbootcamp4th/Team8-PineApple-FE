import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '@/context/authContext';
import modalClose from '@/assets/icons/modalClose.svg';
import { loginCode } from '@/api/auth/index';
import PropTypes from 'prop-types';
import AlreadyGetCarModal from '@/components/modal/AlreadyGetCarModal';
import GetCarModal from '@/components/modal/GetCarModal';

function PhoneAuthModal({
  inputPhone,
  closePhoneModal,
  option = '',
  setResultModalOpen,
}) {
  const { userInfo, setUserInfo } = useContext(AuthContext);
  const [validateCode, setValidateCode] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [firstClick, setFirstClick] = useState(false);
  const [alreadyGetCarModalOpen, setAlreadyGetCarModalOpen] = useState(false);
  const [getCarModalOpen, setGetCarModalOpen] = useState(false);

  const closeModal = () => {
    setAlreadyGetCarModalOpen(false);
    setGetCarModalOpen(false);
  };
  const handleInputText = e => {
    setValidateCode(e.target.value);
    setIsValid(e.target.value.length === 6);
  };
  const handleAuth = async () => {
    if (validateCode === '111111') {
      try {
        const response = await loginCode(inputPhone, validateCode);
        localStorage.setItem('userInfo', JSON.stringify(response));
        setUserInfo(response);

        if (option === '자동차 아이템') {
          if (userInfo.car) {
            setResultModalOpen('alreadyGetCar');
          } else {
            setResultModalOpen('getCar');
          }
        }
        closePhoneModal();
      } catch (error) {
        console.error('API 통신 실패:', error);
      }
    } else {
      alert('ddd');
    }
  };
  const firstClickEvent = () => {
    setFirstClick(true);
  };
  // 모달창이 띄워졌을때 뒷부분 스크롤 막기 위한 코드
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <div className="nextModalContainer w-[800px]">
        <button
          onClick={closePhoneModal}
          className="absolute top-[29px] right-[29px]"
        >
          <img src={modalClose} alt="Close" />
        </button>
        {option != '' ? (
          <div className="skyblue-box text-detail-3-semibold mb-400">
            {option}
          </div>
        ) : null}
        <span className="text-body-2-bold text-neutral-black mb-900">
          인증번호를 입력해주세요
        </span>
        <div className="relative">
          <input
            placeholder="인증번호 입력 (6자리)"
            onClick={firstClickEvent}
            onChange={handleInputText}
            className={`w-[640px] h-[80px] px-[30px] pl-[40px] mb-1500 text-body-3-regular text-neutral-black placeholder:text-body-3-regular placeholder-neutral-black placeholder-opacity-50 border-solid ${!isValid && firstClick ? 'border-red-500 focus:border-red-500' : 'border-neutral-black focus:border-primary-blue'} border-[4px] rounded-[10px] outline-none`}
          ></input>
          {!isValid && firstClick && (
            <span className="absolute top-[60%] left-[2%] text-red-500 text-detail-3-regular">
              인증번호 형식이 맞지 않습니다!
            </span>
          )}
        </div>
        {isValid ? (
          <button
            onClick={handleAuth}
            className="w-[400px] h-[70px] flex justify-center items-center bg-primary-blue rounded-full"
          >
            <span className="text-neutral-white text-body-3-regular">
              인증번호 확인
            </span>
          </button>
        ) : (
          <button className="w-[400px] h-[70px] flex justify-center items-center bg-primary-blue rounded-full opacity-30 cursor-default">
            <span className="text-neutral-white text-body-3-regular">
              인증번호 확인
            </span>
          </button>
        )}
      </div>
      {alreadyGetCarModalOpen ? (
        <AlreadyGetCarModal close={closeModal} isAuth={true} />
      ) : null}
      {getCarModalOpen ? (
        <GetCarModal close={closeModal} isAuth={true} />
      ) : null}
    </>
  );
}

PhoneAuthModal.propTypes = {
  inputPhone: PropTypes.string.isRequired,
  closePhoneModal: PropTypes.func.isRequired,
  option: PropTypes.string,
  setResultModalOpen: PropTypes.func,
};

export default PhoneAuthModal;
