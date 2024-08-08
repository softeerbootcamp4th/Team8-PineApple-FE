import React, { useState, useEffect, useContext } from 'react';
import modalClose from '@/assets/icons/modalClose.svg';
import PropTypes from 'prop-types';
import { AuthContext } from '@/context/authContext';
import { postComment } from '@/api/comment/index';

function CommandInputModal({ closeCommandModal }) {
  const { userInfo, setUserInfo } = useContext(AuthContext);
  // 모달창이 띄워졌을때 뒷부분 스크롤 막기 위한 코드
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  const [inputCommand, setInputCommand] = useState('');
  const handleInputText = e => {
    if (e.target.value.length > 50) {
      e.target.value = e.target.value.slice(0, 50);
    }
    setInputCommand(e.target.value);
  };
  const handleComment = async () => {
    try {
      const response = await postComment(userInfo.accessToken, inputCommand);
      console.log(response);
      closeCommandModal();
    } catch (error) {
      console.error('댓글 등록 API 통신 실패:', error);
    }
  };
  return (
    <div className="modalContainer">
      <div className="nextModalContainer w-[800px]">
        <button
          onClick={closeCommandModal}
          className="absolute top-[29px] right-[29px]"
        >
          <img src={modalClose} alt="Close" />
        </button>
        <span className="text-detail-1-bold text-neutral-black mb-900">
          일일 한줄 기대평 이벤트
        </span>
        <textarea
          placeholder={`월드컵을 하면서 알게 된 캐스퍼 EV의 기능에 대한\n센스있는 한줄 기대평을 작성해보아요.`}
          onChange={handleInputText}
          maxLength="50"
          className="w-[440px] h-[200px] p-500 mb-700 text-detail-2-medium text-neutral-black placeholder:text-detail-2-medium placeholder-neutral-500 bg-neutral-50 rounded-lg resize-none"
        ></textarea>
        <span className="absolute top-[55%] left-[70%] text-detail-3-regular text-neutral-500">{`${inputCommand.length}/50`}</span>
        <p className="mb-700 text-neutral-500 text-detail-3-regular">
          기대평을 등록한 후에는 다시 수정할 수 없어요!
        </p>

        {inputCommand != '' ? (
          <button
            onClick={handleComment}
            className="flex items-center justify-center rounded-full px-1400 py-200 bg-primary-blue"
          >
            <span className="text-neutral-white text-body-3-regular">확인</span>
          </button>
        ) : (
          <button className="flex items-center justify-center rounded-full cursor-default px-1400 py-200 bg-primary-blue opacity-30">
            <span className="text-neutral-white text-body-3-regular">확인</span>
          </button>
        )}
      </div>
    </div>
  );
}

CommandInputModal.propTypes = {
  closeCommandModal: PropTypes.func.isRequired,
};

export default CommandInputModal;
