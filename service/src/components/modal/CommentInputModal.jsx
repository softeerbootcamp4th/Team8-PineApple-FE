import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { postComment } from '@/api/comment/index';
import ModalFrame from './ModalFrame';
import BlueButton from '@/components/buttons/BlueButton';

function CommentInputModal({
  closeCommentModal,
  AlreadyPostComment,
  setResultModalOpen,
}) {
  const [inputComment, setInputComment] = useState('');
  const handleInputText = e => {
    if (e.target.value.length > 50) {
      e.target.value = e.target.value.slice(0, 50);
    }
    setInputComment(e.target.value);
  };
  const handleComment = async () => {
    try {
      const response = await postComment(inputComment);
      if (response.code === 'ALREADY_REVIEWED') {
        AlreadyPostComment();
        closeCommentModal();
      } else {
        setResultModalOpen('toolBox');
      }
    } catch (error) {
      console.error('댓글 등록 API 통신 실패:', error);
    }
  };
  return (
    <ModalFrame
      handleExit={closeCommentModal}
      tag="툴 박스 1개"
      title="일일 한줄 기대평 이벤트"
    >
      <div className="relative flex-col px-3000 set-center">
        <textarea
          placeholder={`월드컵을 하면서 알게 된 캐스퍼 EV의 기능에 대한\n센스있는 한줄 기대평을 작성해보아요.`}
          onChange={handleInputText}
          maxLength="50"
          className="w-[440px] h-[200px] p-500 mb-700 text-detail-2-medium text-neutral-black placeholder:text-detail-2-medium placeholder-neutral-500 bg-neutral-50 rounded-lg resize-none"
        ></textarea>
        <span className="absolute top-[45%] left-[70%] text-detail-3-regular text-neutral-500">{`${inputComment.length}/50`}</span>
        <p className="mb-700 text-neutral-black text-detail-2-bold">
          기대평을 등록한 후에는 다시 수정할 수 없어요!
        </p>

        {inputComment != '' ? (
          <BlueButton
            value="확인"
            onClickFunc={handleComment}
            styles="px-2000 py-200 text-body-3-semibold"
          />
        ) : (
          <BlueButton
            value="확인"
            onClickFunc={handleComment}
            styles="px-2000 py-200 text-body-3-semibold"
            disabled={true}
          />
        )}
      </div>
    </ModalFrame>
  );
}

CommentInputModal.propTypes = {
  closeCommentModal: PropTypes.func.isRequired,
  AlreadyPostComment: PropTypes.func.isRequired,
  setResultModalOpen: PropTypes.func.isRequired,
};

export default CommentInputModal;
