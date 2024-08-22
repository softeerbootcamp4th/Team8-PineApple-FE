import React, { useState, useContext } from 'react';
import { AuthContext } from '@/context/authContext';
import { loginCode } from '@/api/auth/index';
import PropTypes from 'prop-types';
import BlueButton from '@/components/buttons/BlueButton';

function PhoneAuthModal({
  inputPhone,
  option,
  setResultModalOpen,
  closeAuthModal,
  handleDisabledClick,
  controls,
}) {
  const { userInfo, setUserInfo } = useContext(AuthContext);
  const [validateCode, setValidateCode] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [firstClick, setFirstClick] = useState(false);
  const [alertText, setAlertText] = useState('인증번호 형식이 맞지 않습니다!');
  const handleInputText = e => {
    setValidateCode(e.target.value);
    setIsValid(e.target.value.length === 6);
  };
  const handleAuth = async () => {
    try {
      const response = await loginCode(inputPhone, validateCode);
      if (response.code && response.code === 'CODE_INCORRECT') {
        controls.start({
          x: [0, -20, 20, -20, 20, 0],
          transition: { duration: 0.5, ease: 'easeInOut' },
        });
        setAlertText('인증번호를 다시 확인해주세요!');
        setIsValid(false);
      } else {
        localStorage.setItem('userInfo', response.accessToken);
        setUserInfo(response);
        if (option === '자동차 아이템') {
          if (response.car) {
            setResultModalOpen('alreadyGetCar');
            return;
          } else {
            setResultModalOpen('getCar');
            return;
          }
        } else if (option === '기대평 댓글 작성') {
          setResultModalOpen('comment');
          return;
        }
        closeAuthModal();
      }
    } catch (error) {
      console.error('API 통신 실패:', error);
    }
  };
  const firstClickEvent = () => {
    setFirstClick(true);
  };

  return (
    <>
      <div className="relative">
        <input
          placeholder="인증번호 입력 (6자리)"
          onClick={firstClickEvent}
          onChange={handleInputText}
          className={`w-[640px] h-[80px] px-[30px] pl-[40px] mb-1500 text-body-3-regular text-neutral-black placeholder:text-body-3-regular placeholder-neutral-black placeholder-opacity-50 border-solid ${!isValid && firstClick ? 'border-red-500 focus:border-red-500' : 'border-neutral-black focus:border-primary-blue'} border-[4px] rounded-[10px] outline-none`}
        ></input>
        {!isValid && firstClick && (
          <span className="absolute top-[60%] left-[2%] text-red-500 text-detail-3-regular">
            {alertText}
          </span>
        )}
      </div>
      <BlueButton
        value="인증번호 확인"
        onClickFunc={isValid ? handleAuth : handleDisabledClick}
        styles="px-2000 py-400 text-body-3-semibold"
        disabled={!isValid}
      />
    </>
  );
}

PhoneAuthModal.propTypes = {
  inputPhone: PropTypes.string.isRequired,
  setResultModalOpen: PropTypes.func,
  closeAuthModal: PropTypes.func.isRequired,
  option: PropTypes.string,
  handleDisabledClick: PropTypes.func.isRequired,
  controls: PropTypes.object.isRequired,
};

export default PhoneAuthModal;
