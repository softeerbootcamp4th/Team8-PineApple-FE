import React, { useState } from 'react';
import Edit from '@/assets/icons/edit.svg';
import Link from '@/assets/icons/link.svg';
import ToastMessage from '@/components/toastMessage/ToastMessage';
import CommandInputModal from '@/components/modal/CommandInputModal';

function DailyComment() {
  const [showToast, setShowToast] = useState(false);
  const [openCommandInputModal, setOpenCommandInputModal] = useState(false);

  const openCommandModal = () => {
    setOpenCommandInputModal(true);
  };

  const closeCommandModal = () => {
    setOpenCommandInputModal(false);
  };

  const handleShareClick = () => {
    if (showToast) return;

    navigator.clipboard
      .writeText('www.naver.com')
      .then(() => {
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      })
      .catch(error => {
        console.error('toast message error', error);
      });
  };

  return (
    <div className="pt-2500 mb-2900">
      <p className="text-detail-1-bold text-primary-blue mb-800">
        Event 3. 도구 아이템 한 번 더
      </p>
      <p className="text-heading-3-bold text-neutral-black mb-400">
        매일 한 줄 기대평 댓글 쓰고 아이템 받기
      </p>
      <p className="text-detail-2-medium text-neutral-black mb-1200">
        매일 1회 월드컵 상황과 관련된 캐스퍼 기대평을 작성하면 툴 박스 1개를
        받을 수 있어요.
        <br />그 날의 인기 기대평 작성자는 아이템 10개를 추가로 받는 혜택까지!
      </p>
      <div className="flex items-center gap-400">
        <button
          onClick={openCommandModal}
          className="flex items-center justify-center transition-transform duration-300 rounded-full bg-primary-blue px-1600 py-400 text-detail-2-medium text-neutral-white hover:scale-105"
        >
          <img src={Edit} alt="edit icons" className="mr-200" />
          일일 기대평 작성하기
        </button>
        <button
          onClick={handleShareClick}
          className="flex items-center justify-center bg-transparent border-solid rounded-full border-[1px] border-primary-blue px-1600 py-400 text-detail-2-medium text-primary-blue hover:scale-105 transition-transform duration-300"
        >
          <img src={Link} alt="link icons" className="mr-200" />
          친구에게 공유하기
        </button>
      </div>
      {showToast && <ToastMessage messageType="copyLink" />}
      {openCommandInputModal ? (
        <CommandInputModal closeCommandModal={closeCommandModal} />
      ) : null}
    </div>
  );
}

export default DailyComment;
