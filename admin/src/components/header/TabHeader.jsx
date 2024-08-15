import React from 'react';
import { NavLink } from 'react-router-dom';

function TabHeader() {
  return (
    <div className="pt-1000 flex justify-start items-center gap-500 w-[90%]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${
            isActive
              ? 'text-body-3-bold text-neutral-black border-b-black border-b-solid border-b-[3px]'
              : 'text-detail-1-regular text-neutral-500 hover:scale-110 transition-transform duration-300'
          }`
        }
      >
        미니퀴즈 질문
      </NavLink>
      <NavLink
        to="/miniQuizAnswer"
        className={({ isActive }) =>
          `${
            isActive
              ? 'text-body-3-bold text-neutral-black border-b-black border-b-solid border-b-[3px]'
              : 'text-detail-1-regular text-neutral-500 hover:scale-110 transition-transform duration-300'
          }`
        }
      >
        미니퀴즈 답변
      </NavLink>
      <NavLink
        to="/draw"
        className={({ isActive }) =>
          `${
            isActive
              ? 'text-body-3-bold text-neutral-black border-b-black border-b-solid border-b-[3px]'
              : 'text-detail-1-regular text-neutral-500 hover:scale-110 transition-transform duration-300'
          }`
        }
      >
        응모 결과
      </NavLink>
      <NavLink
        to="/reward"
        className={({ isActive }) =>
          `${
            isActive
              ? 'text-body-3-bold text-neutral-black border-b-black border-b-solid border-b-[3px]'
              : 'text-detail-1-regular text-neutral-500 hover:scale-110 transition-transform duration-300'
          }`
        }
      >
        상품 목록
      </NavLink>
    </div>
  );
}

export default TabHeader;
