import React from 'react';
import modalClose from '@/assets/icons/modalClose.svg';
import BlueButton from '@/components/buttons/BlueButton';
import getCarModalImage from '@/assets/images/getCarModalImage.svg';
import '@/styles/global.css';

function GetItemModal(close) {
  return (
    <div className="fixed inset-0 set-center bg-opacity-50 bg-neutral-black z-[100]">
      <div className="bg-neutral-white w-[600px] h-[480px] py-1500 flex flex-col items-center relative rounded-[20px]">
        <button onClick={close} className="absolute top-[29px] right-[29px]">
          <img src={modalClose} alt="Close" />
        </button>
        <div className="skyblue-box text-detail-3-semibold mb-400">
          자동차 아이템
        </div>
        <div className="text-center text-detail-1-bold">자동차를 얻었어요!</div>
        <img
          src={getCarModalImage}
          alt="getCarModalImage"
          className="absolute top-[100px] left-[63px] z-[103]"
        ></img>
        <div className="absolute top-[385px]">
          <BlueButton
            value="받기"
            onClickFunc={() => alert('get')}
            styles="px-1300 py-400 text-detail-3-semibold"
          />
        </div>
      </div>
    </div>
  );
}

export default GetItemModal;
