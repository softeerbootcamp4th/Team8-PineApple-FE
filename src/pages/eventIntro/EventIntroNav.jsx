import React from 'react';
import EventIntroNavItem from '@/pages/eventIntro/EventIntroNavItem';

function EventIntroNav() {
  const EventFocusTo = index => {
    console.log(index);
  };

  const navItem = [
    {
      tag: 'CAR ITEM',
      title1: '운전 중 피하고 싶은',
      title2: '상황 월드컵',
      body: '운전 중 피하고 싶은 상황을 고르면 나에게 딱 맞는 캐스퍼 EV 옵션을 추천받고 차 아이템을 받아요. 추첨에 실패해도 차 아이템은 계속 남아있어요.',
      image: './src/assets/images/eventIntroNav1.png',
      moveFunc: () => EventFocusTo(1),
    },
    {
      tag: 'OPTION ITEM',
      title1: '일일 미니퀴즈 선착순',
      title2: '500명 커피 증정',
      body: '월드컵에서 알 수 있는 캐스퍼 EV에 대한 일일 미니 퀴즈를 맞추고 도구 아이템을 받아요. 매일 선착순 500명까지 5천원 상당의 스타벅스 쿠폰을 증정해요!',
      image: './src/assets/images/eventIntroNav2.png',
      moveFunc: () => EventFocusTo(2),
    },
    {
      tag: '아이템 경품 추천',
      title1: '캐스퍼 EV와',
      title2: '함께 떠나기',
      body: '앞의 이벤트에서 얻은 차와 도구 아이템으로 캐스퍼와 떠나기 추첨 이벤트에 응모해요. 전기차 충전 쿠폰, 전기차 구매 보조금부터 진짜 캐스퍼 EV까지 다양한 상품이 준비되어 있어요!',
      image: './src/assets/images/eventIntroNav3.png',
      moveFunc: () => EventFocusTo(3),
    },
    {
      tag: '한 번 더 응모하고 싶다면?',
      title1: '기대평 댓글 쓰고',
      title2: '아이템 받기',
      body: '월드컵과 관련된 캐스퍼 기대평을 작성하면 아이템 1개를 받을 수 있어요. 그날의 인기 댓글 작성자는 아이템 10개를 추가로 받는 혜택까지!',
      image: './src/assets/images/eventIntroNav4.png',
      moveFunc: () => EventFocusTo(4),
    },
  ];
  return (
    <div className="flex justify-center pd-2500 gap-1000">
      {navItem.map((item, index) => (
        <EventIntroNavItem item={item} key={index} />
      ))}
    </div>
  );
}

export default EventIntroNav;
