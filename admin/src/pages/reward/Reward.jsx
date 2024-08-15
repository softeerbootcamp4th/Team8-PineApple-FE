import React, { useState, useEffect } from 'react';
import AdminEditHeader from '@/components/header/AdminEditHeader';
import RewardContent from './RewardContent';
import BlackButton from '@/components/buttons/BlackButton';

function Reward() {
  const [rewardData, setRewardData] = useState([
    {
      id: 1,
      ranking: 0,
      name: '꽝~!',
      stock: 5000,
      image:
        'https://softeer4-team8.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A1%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%80%E1%85%A5.svg',
    },
    {
      id: 2,
      ranking: 2,
      name: '전기차 구매 보조 지원금',
      stock: 5,
      image:
        'https://softeer4-team8.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A1%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%80%E1%85%A5.svg',
    },
    {
      id: 3,
      ranking: 3,
      name: '옵션 할인 쿠폰',
      stock: 10,
      image:
        'https://softeer4-team8.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A1%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%80%E1%85%A5.svg',
    },
    {
      id: 4,
      ranking: 4,
      name: '전기차 충전 쿠폰',
      stock: 99,
      image:
        'https://softeer4-team8.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A1%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%80%E1%85%A5.svg',
    },
    {
      id: 5,
      ranking: 5,
      name: '스타벅스 커피',
      stock: 986,
      image:
        'https://softeer4-team8.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A1%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%80%E1%85%A5.svg',
    },
  ]);

  const handleChange = (id, field, value) => {
    setRewardData(prevState =>
      prevState.map(item =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  const handleSubmit = async () => {
    // try {
    //   const response = await axios.put(`/api/quiz/${rewardData.id}`, rewardData);
    //   console.log('수정된 데이터가 서버에 저장되었습니다.', response.data);
    // } catch (error) {
    //   console.error('수정 요청 중 오류가 발생했습니다.', error);
    // }
    console.log('ddddd');
  };

  return (
    <div className="w-[100%] mt-1000">
      <AdminEditHeader info="상품 목록 수정" />
      <div className="flex-col w-[100%] set-center bg-neutral-100 rounded-b-[10px] py-1000">
        <RewardContent response={rewardData} onChange={handleChange} />
        <BlackButton onClickFunc={handleSubmit} />
      </div>
    </div>
  );
}

export default Reward;
