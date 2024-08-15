import React, { useState, useEffect } from 'react';
import AdminEditHeader from '@/components/header/AdminEditHeader';
import AdminEditDrawContent from './DrawContent';
import BlackButton from '@/components/buttons/BlackButton';

function Draw() {
  const [drawData, setDrawData] = useState({
    id: 1,
    draw_date: '2024-08-12',
    lose_image:
      'https://softeer4-team8.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A1%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%80%E1%85%A5.svg',
    lose_message: 'Sorry, you lose! Try again',
    lose_scenario: 'The opposing team outplayed you!',
    win_image:
      'https://softeer4-team8.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A1%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%80%E1%85%A5.svg',
    win_message: 'Congraulation!, You have won!',
    daily_message:
      '캐스퍼 EV와 떠날 시간!\n 깜빡하고 차키를 안 가져왔네요.. 어떻게 해야할까요?',
  });

  const handleChange = (field, value) => {
    setDrawData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    // try {
    //   const response = await axios.put(`/api/quiz/${drawData.id}`, drawData);
    //   console.log('수정된 데이터가 서버에 저장되었습니다.', response.data);
    // } catch (error) {
    //   console.error('수정 요청 중 오류가 발생했습니다.', error);
    // }
    console.log('ddddd');
  };

  return (
    <div className="w-[100%] mt-1000">
      <AdminEditHeader info="응모 결과 수정" />
      <div className="flex-col w-[100%] set-center bg-neutral-white rounded-b-[10px] py-1000">
        <AdminEditDrawContent response={drawData} onChange={handleChange} />
        <BlackButton onClickFunc={handleSubmit} />
      </div>
    </div>
  );
}

export default Draw;
