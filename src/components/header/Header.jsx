import React, { useContext, useState } from 'react';
import { TabContext } from '@/context/tabContext';
import { AuthContext } from '@/context/authContext';
import PhoneInputModal from '@/components/modal/PhoneInputModal';

function Header() {
  const { activeTab, setActiveTab } = useContext(TabContext);

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
        <button
          onClick={() => setActiveTab('introduce')}
          className={`text-nowrap ${
            activeTab === 'introduce'
              ? 'text-detail-1-bold'
              : 'text-detail-2-regular hover:scale-110 transition-transform duration-300'
          }
               pr-[44px]`}
        >
          이벤트 소개
        </button>
        <button
          onClick={() => setActiveTab('join')}
          className={`text-nowrap ${
            activeTab === 'join'
              ? 'text-detail-1-bold'
              : 'text-detail-2-regular hover:scale-110 transition-transform duration-300'
          }
               pr-[44px]`}
        >
          이벤트 참여하기
        </button>
        <button
          onClick={() => setActiveTab('newCarIntro')}
          className={` text-nowrap ${
            activeTab === 'newCarIntro'
              ? 'text-detail-1-bold'
              : 'text-detail-2-regular hover:scale-110 transition-transform duration-300'
          }
              pr-[44px]`}
        >
          신차 소개
        </button>
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
