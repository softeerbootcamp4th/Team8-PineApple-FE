import React from 'react';
import WhiteButton from '@/components/buttons/WhiteButton';
import { useNavigate } from 'react-router-dom';

function NoQuizMain() {
  const navigate = useNavigate();
  //useNavigate는 훅이기에 랜더링될 때 navigate의 레퍼런스가 바뀜
  //따라서 useCallback으로 선언해서 의존성을 넣는 것은 child의 재렌더링을 방지할 수 없음
  /* const navigateRef = useRef(navigate);
   *
   *const handleExit = useCallback(() => {
   *  navigateRef.current('/some-path');
   *}, []);
   */
  //이런 식으로 하면 되긴 하지만 이 페이지에서는 불필요한 최적화임

  const handleNavigateToEvent = () => navigate('/event');

  return (
    <div className="flex flex-col items-center h-screen bg-miniquiz-paper pt-5000">
      <div className="text-heading-banner-title-3 text-gradient-blue-purple py-500">
        12시부터 13까지는 퀴즈 준비시간입니다!!!
      </div>
      <div className="text-heading-banner-title-3 text-gradient-blue-purple pb-1000">
        이벤트 페이지로 돌아가시겠습니까???
      </div>
      <WhiteButton
        value="돌아가기"
        onClickFunc={handleNavigateToEvent}
        styles="px-3000 py-500 text-detail-1-semibold"
      />
    </div>
  );
}

export default NoQuizMain;
