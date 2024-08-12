import React, { useContext, useState } from 'react';
import { AuthContext } from '@/context/authContext';
import PhoneInputModal from '@/components/modal/PhoneInputModal';
import { NavLink, useLocation } from 'react-router-dom';
import { logout } from '@/api/auth/index';

function Header() {
  const { userInfo, setUserInfo } = useContext(AuthContext);
  const [openPhoneInputModal, setOpenPhoneInputModal] = useState(false);
  const textColor =
    useLocation().pathname === '/introduce'
      ? 'text-neutral-white'
      : 'text-neutral-black';

  const openPhoneModal = () => {
    setOpenPhoneInputModal(true);
  };

  const closePhoneModal = () => {
    setOpenPhoneInputModal(false);
  };

  const handleLogout = () => {
    logout()
      .then(result => {
        localStorage.removeItem('userInfo');
        setUserInfo({});
      })
      .catch(error => {
        console.error('API 통신 실패:', error);
      });
  };

  return (
    <header className="absolute flex justify-between w-full bg-transparent px-3000 py-500">
      <span
        className={`flex items-center justify-center text-detail-1-bold text-neutral-black text-nowrap ${textColor}`}
      >
        CASPER ELECTRONIC
      </span>
      <div className="flex items-center justify-between">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-nowrap pr-[44px] ${textColor} ${
              isActive
                ? 'text-detail-1-bold'
                : 'text-detail-2-regular hover:scale-110 transition-transform duration-300'
            }`
          }
        >
          이벤트 소개
        </NavLink>
        <NavLink
          to="event"
          className={({ isActive }) =>
            `text-nowrap pr-[44px] ${textColor} ${
              isActive
                ? 'text-detail-1-bold'
                : 'text-detail-2-regular hover:scale-110 transition-transform duration-300'
            }`
          }
        >
          이벤트 참여하기
        </NavLink>
        <NavLink
          to="introduce"
          className={({ isActive }) =>
            `text-nowrap pr-[44px] ${textColor} ${
              isActive
                ? 'text-detail-1-bold'
                : 'text-detail-2-regular hover:scale-110 transition-transform duration-300'
            }`
          }
        >
          신차 소개
        </NavLink>
      </div>
      <div className="min-w-[270px]">
        {userInfo.phoneNumber === undefined ? (
          <button
            onClick={openPhoneModal}
            className="text-nowrap px-[21px] h-[44px] bg-primary-blue text-neutral-white text-detail-3-regular rounded-full"
          >
            전화번호 입력하기
          </button>
        ) : (
          <div className="flex gap-300">
            <div className="text-nowrap px-[21px] h-[44px] bg-primary-blue text-neutral-white text-detail-3-regular rounded-full flex justify-center items-center">
              {userInfo.phoneNumber}
            </div>
            <button
              onClick={handleLogout}
              className="flex justify-center items-center px-[21px] py-[9px] text-neutral-950 text-detail-3-regular rounded-full border-solid border-[1px] border-black hover:scale-110 transition-transform duration-300"
            >
              로그아웃
            </button>
          </div>
        )}
        {openPhoneInputModal ? (
          <PhoneInputModal closePhoneModal={closePhoneModal} />
        ) : null}
      </div>
    </header>
  );
}

export default Header;
