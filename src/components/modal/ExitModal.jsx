import React, { useCallback } from 'react';
import BlueButton from '@/components/buttons/BlueButton';
import WhiteButton from '@/components/buttons/WhiteButton';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function ExitModal({ onClose, game }) {
  const navigate = useNavigate();

  const gotoBack = useCallback(() => {
    if (game === 'worldCup') {
      navigate(`/event`, { state: { scrollTo: 'worldCup' } });
    } else {
      navigate(`/event`, { state: { scrollTo: 'miniQuiz' } });
    }
  }, []);
  return (
    <div className="modalContainer">
      <div className="bg-neutral-white px-2000 rounded-[20px] pt-1500 pb-800">
        <p className="text-center text-detail-2-medium text-neutral-black">
          지금 창을 나가면 처음부터 다시 시작해야해요.
        </p>
        <p className="text-center text-detail-2-medium text-neutral-black">
          정말 창을 나갈까요?
        </p>
        <div className="flex items-center justify-center mt-1200 gap-300">
          <WhiteButton
            value="나가기"
            onClickFunc={gotoBack}
            styles="px-1300 py-400 text-detail-3-semibold border-solid border-[1px] border-black"
          />
          <BlueButton
            value="이어서하기"
            onClickFunc={onClose}
            styles="px-1300 py-400 text-detail-3-semibold"
          />
        </div>
      </div>
    </div>
  );
}

ExitModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  game: PropTypes.string.isRequired,
};

export default ExitModal;
