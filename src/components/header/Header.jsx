import React, { useContext } from 'react';
import { TabContext } from '@/context/tabContext';

function Header() {
  const { activeTab, setActiveTab } = useContext(TabContext);

  return (
    <header className="flex justify-between bg-transparent px-3000 py-500">
      <span className="flex items-center justify-center text-detail-1-bold text-neutral-black">
        CASPER ELECTRONIC
      </span>
      <div className="flex items-center justify-between gap-[44px]">
        <button
          onClick={() => setActiveTab('introduce')}
          className={
            activeTab === 'introduce'
              ? 'text-detail-1-bold'
              : 'text-detail-2-regular'
          }
        >
          이벤트 소개
        </button>
        <button
          onClick={() => setActiveTab('join')}
          className={
            activeTab === 'join'
              ? 'text-detail-1-bold'
              : 'text-detail-2-regular'
          }
        >
          이벤트 참여하기
        </button>
        <button
          onClick={() => setActiveTab('newCarIntro')}
          className={
            activeTab === 'newCarIntro'
              ? 'text-detail-1-bold'
              : 'text-detail-2-regular'
          }
        >
          신차 소개
        </button>
      </div>
      <button className="w-[140px] h-[44px] flex justify-center items-center bg-primary-blue text-neutral-white text-detail-3-regular rounded-full font-pretendard pt-[2px]">
        전화번호 입력하기
      </button>
    </header>
  );
}

export default Header;
