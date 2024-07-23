import React from 'react';

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-start gap-900 h-[412px] px-[236px] py-[56px] bg-neutral-50">
      <div className="text-primary-berrypurple text-center text-[24px] text-detail-1-medium">
        전력을 다해, CASPER Eletric 사전계약 진행중
      </div>
      <div className="flex justify-center gap-300">
        <button
          onClick={() =>
            window.open(
              'https://casper.hyundai.com/vehicles/test-driving/intro',
            )
          }
          className="flex items-center justify-center rounded-full bg-gradient-blue-purple px-800 py-400 text-detail-3-semibold text-neutral-white"
        >
          무료 시승 신청 (최대 연 6회)
        </button>
        <button
          onClick={() =>
            window.open(
              'https://casper.hyundai.com/vehicles/electric/making/model',
            )
          }
          className="flex justify-center items-center px-800 py-400 rounded-full border-[1.2px] border-neutral-black bg-neutral-white text-detail-3-semibold"
        >
          사전 계약하기
        </button>
      </div>
    </footer>
  );
}

export default Footer;
