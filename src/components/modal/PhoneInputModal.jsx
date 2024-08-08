import React, { useState, useEffect } from 'react';
import isValidPhoneNumber from '@/utils/isValidPhoneNumber';
import modalClose from '@/assets/icons/modalClose.svg';
import PropTypes from 'prop-types';
import Check from '@/assets/icons/check.svg';
import PhoneAuthModal from '@/components/modal/PhoneAuthModal';
import { loginPhone } from '@/api/auth/index';
import phoneNumberFormatting from '@/utils/phoneNumberFormatting';

function PhoneInputModal({ closePhoneModal }) {
  const [inputPhone, setInputPhone] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [firstClick, setFirstClick] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleInputText = e => {
    setInputPhone(e.target.value);
    setIsValid(isValidPhoneNumber(e.target.value));
  };

  const handleAuth = async () => {
    try {
      const formattedPhone = phoneNumberFormatting(inputPhone);
      const response = await loginPhone(formattedPhone);
      setInputPhone(formattedPhone);
      setShowAuthModal(true);
    } catch (error) {
      console.error('loginPhone API 통신 실패:', error);
    }
  };

  const handleCheck = () => {
    setIsCheck(prev => !prev);
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
    <div className="modalContainer">
      {showAuthModal ? (
        <PhoneAuthModal
          inputPhone={inputPhone}
          closePhoneModal={closePhoneModal}
        />
      ) : (
        <div className="nextModalContainer w-[800px]">
          <button
            onClick={closePhoneModal}
            className="absolute top-[29px] right-[29px]"
          >
            <img src={modalClose} alt="Close" />
          </button>
          <span className="text-body-2-bold text-neutral-black mb-900">
            핸드폰 번호를 입력해주세요
          </span>
          <input
            placeholder="핸드폰 번호 입력 (01XXXXXXXXX)"
            onClick={firstClickEvent}
            onChange={handleInputText}
            className={`w-[640px] h-[80px] px-[30px] pl-[40px] mb-800 text-body-3-regular text-neutral-black placeholder:text-body-3-regular placeholder-neutral-black placeholder-opacity-50 border-solid ${!isValid && firstClick ? 'border-red-500 focus:border-red-500' : 'border-neutral-black focus:border-primary-blue'} border-[4px] rounded-[10px] outline-none`}
          ></input>
          {!isValid && firstClick && (
            <span className="absolute text-red-500 text-detail-3-regular top-[235px] left-[100px]">
              전화번호 형식이 맞지 않습니다!
            </span>
          )}
          <div
            onClick={handleCheck}
            className="relative flex items-center justify-center cursor-pointer mb-800"
          >
            <div className="border-solid border-neutral-black border-[2px] w-600 h-600 mt-1"></div>
            <strong className="mt-0.5 ml-200 text-detail-2-semibold">
              [필수]
            </strong>
            <span className="mt-1 ml-200 text-neutral-black text-detail-2-regular hover:underline">
              개인정보 수집 및 이용 제공 동의
            </span>
            {isCheck && (
              <img
                src={Check}
                alt="check"
                className="absolute left-0 top-2"
              ></img>
            )}
          </div>
          {isValid && isCheck ? (
            <button
              onClick={handleAuth}
              className="w-[400px] h-[70px] flex justify-center items-center bg-primary-blue rounded-full"
            >
              <span className="text-neutral-white text-body-3-regular">
                본인인증하기
              </span>
            </button>
          ) : (
            <button className="w-[400px] h-[70px] flex justify-center items-center bg-primary-blue rounded-full opacity-30 cursor-default">
              <span className="text-neutral-white text-body-3-regular">
                본인인증하기
              </span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

PhoneInputModal.propTypes = {
  closePhoneModal: PropTypes.func.isRequired,
};

export default PhoneInputModal;
