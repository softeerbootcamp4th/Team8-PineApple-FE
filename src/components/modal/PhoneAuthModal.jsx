import React, { useState, useContext } from 'react';
import { AuthContext } from '@/context/authContext';
import modalClose from '@/assets/icons/modalClose.svg';
import PropTypes from 'prop-types';

function PhoneAuthModal({ inputPhone, closePhoneModal }) {
  const { phoneNumber, setPhoneNumber } = useContext(AuthContext);
  const [validateCode, setValidateCode] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [firstClick, setFirstClick] = useState(false);
  const handleInputText = e => {
    setValidateCode(e.target.value);
    setIsValid(e.target.value.length === 6);
  };
  const handleAuth = () => {
    if (validateCode === '111111') {
      fetch('http://13.125.215.8:8080/login/code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: inputPhone,
          code: validateCode,
        }),
      })
        .then(response => response.json())
        .then(result => {
          setPhoneNumber();
          closePhoneModal();
        })
        .catch(error => {
          console.error('API 통신 실패:', error);
        });
    } else {
      alert('ddd');
    }
  };
  const firstClickEvent = () => {
    setFirstClick(true);
  };
  return (
    <div className="bg-neutral-white w-[800px] py-1500 flex flex-col items-center relative rounded-[20px]">
      <button
        onClick={closePhoneModal}
        className="absolute top-[29px] right-[29px]"
      >
        <img src={modalClose} alt="Close" />
      </button>
      <span className="text-body-2-bold text-neutral-black mb-900">
        인증번호를 입력해주세요
      </span>
      <input
        placeholder="인증번호 입력 (6자리)"
        onClick={firstClickEvent}
        onChange={handleInputText}
        className={`w-[640px] h-[80px] px-[30px] pl-[40px] mb-800 text-body-3-regular text-neutral-black placeholder:text-body-3-regular placeholder-neutral-black placeholder-opacity-50 border-solid ${!isValid && firstClick ? 'border-red-500 focus:border-red-500' : 'border-neutral-black focus:border-primary-blue'} border-[4px] rounded-[10px] outline-none`}
      ></input>
      {!isValid && firstClick && (
        <span className="absolute text-red-500 text-detail-3-regular top-[235px] left-[100px]">
          인증번호 형식이 맞지 않습니다!
        </span>
      )}
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
  );
}

PhoneAuthModal.propTypes = {
  inputPhone: PropTypes.string.isRequired,
  closePhoneModal: PropTypes.func.isRequired,
};

export default PhoneAuthModal;
