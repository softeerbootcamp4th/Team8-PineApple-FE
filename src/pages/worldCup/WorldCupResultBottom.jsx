import React from 'react';
import worldCupResultData from '@/constants/worldCup/worldCupResultData';
import WorldCupResultItem from './WorldCupResultItem';

function WorldCupResultBottom() {
  const response = [
    {
      id: 4,
      people: 10000,
      probability: 30,
    },
    {
      id: 2,
      people: 5000,
      probability: 20,
    },
    {
      id: 3,
      people: 4000,
      probability: 10,
    },
    {
      id: 1,
      people: 3000,
      probability: 7,
    },
    {
      id: 6,
      people: 2000,
      probability: 5,
    },
    {
      id: 5,
      people: 1000,
      probability: 3,
    },
  ];
  return (
    <div className="pt-2000 pb-4000 px-3000">
      <span className="text-heading-1-bold text-neutral-black">전체 랭킹</span>
      <div className="flex justify-between mt-900">
        {response.map((res, index) => {
          const data = worldCupResultData.find(item => item.id === res.id);
          return (
            <WorldCupResultItem
              key={res.id}
              data={data}
              people={res.people}
              probability={res.probability}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default WorldCupResultBottom;
