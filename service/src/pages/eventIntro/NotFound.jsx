import React from 'react';
import { Link } from 'react-router-dom';
import BlueButton from '@/components/buttons/BlueButton';

function NotFound() {
  return (
    <div className="fixed flex-col w-screen h-screen set-center bg-neutral-white z-100">
      <p className="text-body-1-bold mb-1000">
        요청하신 페이지를 찾을 수 없습니다..!
      </p>
      <Link to="/">
        <BlueButton
          value="메인 페이지로 이동하기"
          styles="px-1300 py-200 text-body-3-semibold"
        />
      </Link>
    </div>
  );
}

export default NotFound;
