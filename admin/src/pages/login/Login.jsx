import React, { useState } from 'react';
import isValidPhoneNumber from '@/utils/isValidPhoneNumber';
import { loginPhone, loginCode } from '@/api/auth/index';
import phoneNumberFormatting from '@/utils/phoneNumberFormatting';
import BlackButton from '@/components/buttons/BlackButton';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [inputPhone, setInputPhone] = useState('');
  const [phoneValid, setPhoneValid] = useState(false);
  const [firstPhoneClick, setFirstPhoneClick] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const [validateCode, setValidateCode] = useState('');
  const [codeValid, setCodeValid] = useState(false);
  const [firstCodeClick, setFirstCodeClick] = useState(false);
  const [alertText, setAlertText] = useState('인증번호 형식이 맞지 않습니다!');

  const handlePhoneInput = e => {
    setInputPhone(e.target.value);
    setPhoneValid(isValidPhoneNumber(e.target.value));
  };

  const handleCodeInput = e => {
    setValidateCode(e.target.value);
    setCodeValid(e.target.value.length === 6);
  };

  const handlePhoneAuth = async () => {
    try {
      const formattedPhone = phoneNumberFormatting(inputPhone);
      await loginPhone(formattedPhone);
      setInputPhone(formattedPhone);
      setShowAuth(true);
    } catch (error) {
      console.error('loginPhone API 통신 실패:', error);
    }
  };

  const handleCodeAuth = async () => {
    try {
      const response = await loginCode(inputPhone, validateCode);
      if (response.code && response.code === 'CODE_INCORRECT') {
        setAlertText('인증번호를 다시 확인해주세요!');
        setCodeValid(false);
      } else {
        sessionStorage.setItem('userInfo', response.accessToken);
        navigate('/');
      }
    } catch (error) {
      console.error('API 통신 실패:', error);
    }
  };

  const handleFirstPhoneClick = () => setFirstPhoneClick(true);
  const handleFirstCodeClick = () => setFirstCodeClick(true);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      {showAuth ? (
        <>
          <p className="text-body-3-bold text-neutral-black mb-900">
            인증번호를 입력해주세요
          </p>
          <input
            placeholder="인증번호 입력 (6자리)"
            onClick={handleFirstCodeClick}
            onChange={handleCodeInput}
            value={validateCode}
            className={`w-[640px] h-[80px] px-[30px] pl-[40px] mb-1500 text-body-3-regular text-neutral-black placeholder:text-body-3-regular placeholder-neutral-black placeholder-opacity-50 border-solid ${!codeValid && firstCodeClick ? 'border-red-500 focus:border-red-500' : 'border-neutral-black focus:border-primary-blue'} border-[4px] rounded-[10px] outline-none`}
          />
          {!codeValid && firstCodeClick && (
            <span className="absolute top-[54%] left-[32%] text-red-500 text-detail-3-regular">
              {alertText}
            </span>
          )}
          <BlackButton
            value="인증번호 확인"
            onClickFunc={handleCodeAuth}
            disabled={!codeValid}
          />
        </>
      ) : (
        <>
          <p className="text-body-3-bold text-neutral-black mb-900">
            핸드폰 번호를 입력해주세요
          </p>
          <input
            placeholder="핸드폰 번호 입력 (01XXXXXXXXX)"
            onClick={handleFirstPhoneClick}
            onChange={handlePhoneInput}
            value={inputPhone}
            className={`w-[640px] h-[80px] px-[30px] pl-[40px] mb-800 text-body-3-regular text-neutral-black placeholder:text-body-3-regular placeholder-neutral-black placeholder-opacity-50 border-solid ${!phoneValid && firstPhoneClick ? 'border-red-500 focus:border-red-500' : 'border-neutral-black focus:border-primary-blue'} border-[4px] rounded-[10px] outline-none`}
          />
          {!phoneValid && firstPhoneClick && (
            <span className="absolute top-[54%] left-[32%] text-red-500 text-detail-3-regular">
              전화번호 형식이 맞지 않습니다!
            </span>
          )}
          <BlackButton
            value="본인인증하기"
            onClickFunc={handlePhoneAuth}
            disabled={!phoneValid}
          />
        </>
      )}
    </div>
  );
}

export default Login;
