import React, { useState } from 'react';
import isValidPhoneNumber from '@/utils/isValidPhoneNumber';
import PropTypes from 'prop-types';
import Check from '@/assets/icons/check.svg';
import { loginPhone } from '@/api/auth/index';
import phoneNumberFormatting from '@/utils/phoneNumberFormatting';
import ModalFrame from './ModalFrame';
import PhoneAuthModal from './PhoneAuthModal';
import BlueButton from '@/components/buttons/BlueButton';

function PhoneInputModal({ closePhoneModal, option = '', setResultModalOpen }) {
  const [inputPhone, setInputPhone] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [firstClick, setFirstClick] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [tag, setTag] = useState('로그인');
  const [title, setTitle] = useState('핸드폰 번호를 입력해주세요');

  const handleInputText = e => {
    setInputPhone(e.target.value);
    setIsValid(isValidPhoneNumber(e.target.value));
  };

  const handleAuth = async () => {
    try {
      const formattedPhone = phoneNumberFormatting(inputPhone);
      await loginPhone(formattedPhone);
      setInputPhone(formattedPhone);
      setTag('인증번호 입력');
      setTitle('인증번호를 입력해주세요');
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

  const closeAuthModal = () => {
    setShowAuthModal(false);
    closePhoneModal();
  };

  return (
    <ModalFrame handleExit={closePhoneModal} tag={tag} title={title}>
      {showAuthModal ? (
        <PhoneAuthModal
          inputPhone={inputPhone}
          setResultModalOpen={setResultModalOpen}
          closeAuthModal={closeAuthModal}
          option={option}
        />
      ) : (
        <div className="flex flex-col items-center">
          <div className="relative">
            <input
              placeholder="핸드폰 번호 입력 (01XXXXXXXXX)"
              onClick={firstClickEvent}
              onChange={handleInputText}
              className={`w-[640px] h-[80px] px-[30px] pl-[40px] mb-800 text-body-3-regular text-neutral-black placeholder:text-body-3-regular placeholder-neutral-black placeholder-opacity-50 border-solid ${!isValid && firstClick ? 'border-red-500 focus:border-red-500' : 'border-neutral-black focus:border-primary-blue'} border-[4px] rounded-[10px] outline-none`}
            />
            {!isValid && firstClick && (
              <span className="absolute top-[75%] left-[2%] text-red-500 text-detail-3-regular">
                전화번호 형식이 맞지 않습니다!
              </span>
            )}
          </div>
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
              <img src={Check} alt="check" className="absolute left-0 top-2" />
            )}
          </div>
          {isValid && isCheck ? (
            <BlueButton
              value="본인인증하기"
              onClickFunc={handleAuth}
              styles="px-2000 py-400 text-body-3-semibold"
            />
          ) : (
            <BlueButton
              value="본인인증하기"
              onClickFunc={handleAuth}
              styles="px-2000 py-400 text-body-3-semibold"
              disabled={true}
            />
          )}
        </div>
      )}
    </ModalFrame>
  );
}

PhoneInputModal.propTypes = {
  closePhoneModal: PropTypes.func.isRequired,
  setResultModalOpen: PropTypes.func,
  option: PropTypes.string,
};

export default PhoneInputModal;
