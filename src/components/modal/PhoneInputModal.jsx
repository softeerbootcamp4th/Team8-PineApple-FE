import React, { useState, useContext } from 'react';
import { AuthContext } from '@/context/authContext';
import isValidPhoneNumber from '@/utils/isValidPhoneNumber';
import modalClose from '@/assets/icons/modalClose.svg';
import PropTypes from 'prop-types';

function PhoneInputModal({ closePhoneModal }) {
  const { phoneNumber, setPhoneNumber } = useContext(AuthContext);
  const [inputPhone, setInputPhone] = useState('');
  const [isInvalid, setIsValid] = useState(false);
  const handleInputText = e => {
    setInputPhone(e.target.value);
    setIsValid(isNaN(e.target.value));
  };
  const handleAuth = () => {
    if (isValidPhoneNumber(inputPhone)) {
      setPhoneNumber(inputPhone);
      closePhoneModal();
    } else {
      alert('전화번호 형식이 잘못되었습니다!');
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-neutral-black">
      <div className="bg-neutral-white w-[900px] h-[500px] pt-[105px] pb-[67px] flex flex-col justify-between items-center relative rounded-[20px]">
        <button
          onClick={closePhoneModal}
          className="absolute top-[29px] right-[29px]"
        >
          <img src={modalClose} alt="Close" />
        </button>
        <span className="text-body-2-bold font-pretendard text-neutral-black">
          핸드폰 번호를 입력해주세요
        </span>
        <input
          placeholder="핸드폰 번호 입력 (010XXXXXXXX)"
          onChange={handleInputText}
          className={`w-[640px] h-[80px] px-[30px] pl-[40px] text-body-3-regular text-neutral-black placeholder:text-body-3-regular placeholder-neutral-black placeholder-opacity-50 border-solid ${isInvalid ? 'border-red-500 focus:border-red-500' : 'border-neutral-black focus:border-primary-blue'} border-[4px] rounded-[10px] outline-none`}
        ></input>
        {isInvalid && (
          <span className="absolute text-red-500 text-detail-3-regular top-[310px] left-[150px]">
            숫자만 입력 가능합니다
          </span>
        )}
        <button
          onClick={handleAuth}
          className="w-[400px] h-[70px] flex justify-center items-center bg-gradient-blue-purple rounded-full"
        >
          <span className="text-neutral-white text-body-3-regular">
            본인인증
          </span>
        </button>
      </div>
    </div>
  );
}

PhoneInputModal.propTypes = {
  closePhoneModal: PropTypes.func.isRequired, // closePhoneModal은 필수로 함수여야 함
};

export default PhoneInputModal;
