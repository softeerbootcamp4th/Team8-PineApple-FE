import React, { useState } from 'react';
import WorldCupGame from './WorldCupGame';
import worldCupData from '@/constants/worldCup/worldCupData';
import { useNavigate } from 'react-router-dom';
import shuffleArr from '@/utils/shuffleArr';
import { postWorldCupResult } from '@/api/worldCup/index';
import { Helmet } from 'react-helmet-async';

const TITLE = '캐스퍼 상황 월드컵';
const DESCRIPTION = '월드컵 게임을 통해 자동차 아이템을 획득하세요!';
const OG_IMAGE_URL =
  'https://softeer4-team8.s3.ap-northeast-2.amazonaws.com/OGImage.png';
const OG_URL = 'https://casper-event.store/event/worldcup';

const HelmetMeta = () => (
  <Helmet>
    <title>{TITLE}</title>
    <meta name="description" content={DESCRIPTION} />
    <meta property="og:url" content={OG_URL} />
    <meta property="og:title" content={TITLE} />
    <meta property="og:description" content={DESCRIPTION} />
    <meta property="og:image" content={OG_IMAGE_URL} />
  </Helmet>
);

const WorldCupMain = () => {
  const navigate = useNavigate();
  const [totalData, setTotalData] = useState(shuffleArr(worldCupData));
  const [roundData, setRoundData] = useState(totalData.slice(0, 2));
  const [round, setRound] = useState(1);
  const handleSelect = async isChosen => {
    let updatedData = [...totalData];

    if (isChosen) {
      // 첫번째 요소를 맨 뒤로 이동
      updatedData.push(updatedData[0]);
    } else {
      // 두번째 요소를 맨 뒤로 이동
      updatedData.push(updatedData[1]);
    }

    // 전체 data 배열에서 0, 1번째 요소 제거
    updatedData = updatedData.slice(2);

    if (round === 1) {
      setRound(2); // 8강-2 진행
    } else if (round === 2) {
      shuffleArr(updatedData);
      setRound(3); // 4강-1 진행
    } else if (round === 3) {
      setRound(4); // 4강-2 진행
    } else if (round === 4) {
      setRound(5); // 결승 진행
    } else if (round === 5) {
      try {
        setRound(6); // 로딩 페이지
        const response = await postWorldCupResult(updatedData[0].id);
        navigate(`/event/worldCupResult`, { state: updatedData[0] });
      } catch (error) {
        console.error('loginPhone API 통신 실패:', error);
      }
    }

    // 다음 라운드의 데이터 설정
    setTotalData(updatedData);
    setRoundData(updatedData.slice(0, 2));
  };

  const getTitle = () => {
    switch (round) {
      case 1:
      case 2:
        return '8강';
      case 3:
      case 4:
        return '4강';
      case 5:
        return '결승';
      default:
        return '로딩';
    }
  };

  return (
    <div>
      <HelmetMeta />
      <WorldCupGame
        title={getTitle()}
        roundData={roundData}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default WorldCupMain;
