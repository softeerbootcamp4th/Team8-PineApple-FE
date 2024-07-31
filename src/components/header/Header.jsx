import React, { useContext, useState } from 'react';
import { AuthContext } from '@/context/authContext';
import PhoneInputModal from '@/components/modal/PhoneInputModal';
import { NavLink } from 'react-router-dom';

function Header() {
  const { phoneNumber } = useContext(AuthContext);
  const [openPhoneInputModal, setOpenPhoneInputModal] = useState(false);

  const openPhoneModal = () => {
    setOpenPhoneInputModal(true);
  };

  const closePhoneModal = () => {
    setOpenPhoneInputModal(false);
  };

  return (
    <header className="absolute flex justify-between w-full bg-transparent px-3000 py-500">
      <span className="flex items-center justify-center text-detail-1-bold text-neutral-black text-nowrap">
        CASPER ELECTRONIC
      </span>
      <div className="flex items-center justify-between">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-nowrap pr-[44px] ${
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
            `text-nowrap pr-[44px] ${
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
            `text-nowrap pr-[44px] ${
              isActive
                ? 'text-detail-1-bold'
                : 'text-detail-2-regular hover:scale-110 transition-transform duration-300'
            }`
          }
        >
          신차 소개
        </NavLink>
      </div>
      {phoneNumber === '' ? (
        <button
          onClick={openPhoneModal}
          className="text-nowrap w-[140px] h-[44px] bg-primary-blue text-neutral-white text-detail-3-regular rounded-full"
        >
          전화번호 입력하기
        </button>
      ) : (
        <div className="text-nowrap w-[140px] h-[44px] bg-primary-blue text-neutral-white text-detail-3-regular rounded-full">
          {phoneNumber}
        </div>
      )}
      {openPhoneInputModal ? (
        <PhoneInputModal closePhoneModal={closePhoneModal} />
      ) : null}
    </header>
  );
}

export default Header;
