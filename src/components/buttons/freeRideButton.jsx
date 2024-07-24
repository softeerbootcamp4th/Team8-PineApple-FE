import React from 'react';

export function FreeRideButton() {
  return (
    <button
      onClick={() =>
        window.open('https://casper.hyundai.com/vehicles/test-driving/intro')
      }
      className="flex items-center justify-center rounded-full bg-gradient-blue-purple px-800 py-400 text-detail-3-semibold text-neutral-white"
    >
      무료 시승 신청 (최대 연 6회)
    </button>
  );
}
