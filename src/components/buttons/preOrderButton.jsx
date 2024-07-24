import React from 'react';

export function PreOrderButton() {
  return (
    <button
      onClick={() =>
        window.open('https://casper.hyundai.com/vehicles/electric/making/model')
      }
      className="flex justify-center items-center px-800 py-400 rounded-full border-[1.2px] border-neutral-black bg-neutral-white text-detail-3-semibold"
    >
      사전 계약하기
    </button>
  );
}
