import React from 'react';
import NavLinkItem from '@/components/header/NavLinkItem';

function TabHeader() {
  return (
    <div className="pt-1000 flex justify-between items-center w-[90%]">
      <NavLinkItem path="/" value="미니퀴즈 질문" />
      <NavLinkItem path="/miniQuizAnswer" value="미니퀴즈 답변" />
      <NavLinkItem path="/draw" value="응모 결과" />
      <NavLinkItem path="/reward" value="상품 목록" />
      <NavLinkItem path="/probability" value="응모 당첨 확률" />
      <NavLinkItem path="/uploadReward" value="선착순 코드 업로드" />
      <NavLinkItem path="/uploadPrize" value="경품 코드 업로드" />
      <NavLinkItem path="/adminEventStatus" value="이벤트 현황" />
      <NavLinkItem path="/indicator" value="지표 분석" />
    </div>
  );
}

export default TabHeader;
