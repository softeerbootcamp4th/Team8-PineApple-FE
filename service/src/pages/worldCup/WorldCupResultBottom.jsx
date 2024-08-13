import React, { useState, useEffect } from 'react';
import worldCupResultData from '@/constants/worldCup/worldCupResultData';
import WorldCupResultItem from './WorldCupResultItem';
import PropTypes from 'prop-types';
import { getWorldCupResult } from '@/api/worldCup/index';

function WorldCupResultBottom({ data }) {
  const [responseData, setResponseData] = useState([]);
  const getResult = async () => {
    const data = await getWorldCupResult();
    if (data) {
      setResponseData(data);
    }
  };

  useEffect(() => {
    getResult();
  }, []);
  return (
    <div className="pt-2000 pb-4000 px-3000">
      <span className="text-heading-1-bold text-neutral-black">전체 랭킹</span>
      <div className="flex justify-between mt-900">
        {responseData.map((res, index) => {
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
