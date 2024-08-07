import React from 'react';
import worldCupResultData from '@/constants/worldCup/worldCupResultData';
import WorldCupResultItem from './WorldCupResultItem';
import PropTypes from 'prop-types';

function WorldCupResultBottom({ data }) {
  const response = [
    {
      id: 4,
      count: 10000,
      percent: 30,
    },
    {
      id: 2,
      count: 5000,
      percent: 20,
    },
    {
      id: 3,
      count: 4000,
      percent: 10,
    },
    {
      id: 1,
      count: 3000,
      percent: 7,
    },
    {
      id: 6,
      count: 2000,
      percent: 5,
    },
    {
      id: 5,
      count: 1000,
      percent: 3,
    },
  ];
  return (
    <div className="pt-2000 pb-4000 px-3000">
      <span className="text-heading-1-bold text-neutral-black">전체 랭킹</span>
      <div className="flex justify-between mt-900">
        {response.map((res, index) => {
          const currentItem = worldCupResultData.find(
            item => item.id === res.id,
          );
          return (
            <WorldCupResultItem
              key={res.id}
              data={currentItem}
              count={res.count}
              percent={res.percent}
              index={index}
              choice={res.id === data.id}
            />
          );
        })}
      </div>
    </div>
  );
}

WorldCupResultBottom.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WorldCupResultBottom;
