import React, { useState } from 'react';
import PropTypes from 'prop-types';

function WorldCupResultItem({ data, people, probability, index }) {
  const [isFront, setIsFront] = useState(true);
  const handleClick = () => {
    setIsFront(prev => !prev);
  };
  return (
    <div>
      {isFront ? (
        <div
          onClick={handleClick}
          className="mb-4 p-4 border rounded shadow-lg cursor-pointer"
        >
          <img
            src={data.image}
            alt={`Front of ${data.story}`}
            className="mb-2"
          />
          <img
            src={data.backImage}
            alt={`Back of ${data.story}`}
            className="mb-2"
          />
          <div>{index + 1}</div>
          <div className="text-lg font-bold">{data.story}</div>
          <div className="text-md">{data.solution}</div>
          <div className="text-sm">People: {people}</div>
          <div className="text-sm">Probability: {probability}%</div>
        </div>
      ) : (
        <div
          onClick={handleClick}
          style={{
            backgroundImage: `url(${data.backImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '220px',
            height: '560.45px',
          }}
        >
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-center pt-[45px]">
              <div className="bg-neutral-white rounded-full text-primary-blue text-detail-1-bold w-[100px] h-[40px] flex justify-center items-center">
                {index}등
              </div>
            </div>
            <div className="flex flex-col pb-[130px]">
              <div className="text-neutral-white text-detail-3-semibold text-center">
                {data.solution}
              </div>
              <div className="text-neutral-white text-detail-3-semibold text-center">
                {data.solution2}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="text-center mt-[33px] text-heading-1-bold text-primary-blue">
        {probability}%
      </div>
      <div className="text-center text-body-3-medium text-primary-blue">
        {people}명
      </div>
    </div>
  );
}

WorldCupResultItem.propTypes = {
  data: PropTypes.object.isRequired,
  people: PropTypes.number.isRequired,
  probability: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default WorldCupResultItem;
