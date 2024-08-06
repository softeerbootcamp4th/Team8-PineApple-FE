import React, { useState } from 'react';
import WorldCupGame from './WorldCupGame';
import worldCupData from '@/constants/worldCup/worldCupData';
import { useNavigate } from 'react-router-dom';
import shuffleArr from '@/utils/shuffleArr';

const WorldCupMain = () => {
  const navigate = useNavigate();
  const [totalData, setTotalData] = useState(shuffleArr(worldCupData));
  const [roundData, setRoundData] = useState(totalData.slice(0, 2));
  const [round, setRound] = useState(1);

  const handleSelect = isChosen => {
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
      navigate(`/event/worldCupResult`, { state: updatedData[0] });
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
        return '';
    }
  };

  return (
    <div>
      <WorldCupGame
        title={getTitle()}
        roundData={roundData}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default WorldCupMain;
