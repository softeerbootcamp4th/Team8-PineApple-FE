import React from 'react';
import PropTypes from 'prop-types';
import whiteArrow from '@/assets/icons/whiteArrow.svg';
import Clock from '@/assets/icons/clock.svg';

function EventIntroNavItem({ item }) {
  return (
    <div
      onClick={item.moveFunc}
      className="mt-[-100px] w-[300px] h-[500px] bg-neutral-white rounded-[25.86px] shadow-3xl hover:scale-110 transition-transform duration-300 z-10 cursor-pointer relative"
    >
      <img src={item.image} alt="navImage" className="w-full" />
      <div className="absolute flex items-center justify-center top-6 left-36">
        <span className="pr-2 text-detail-3-semibold text-neutral-white">
          이벤트 바로가기
        </span>
        <img src={whiteArrow} alt="whiteArrow" />
      </div>
      {item.tag === 'OPTION ITEM' ? (
        <div className="absolute bg-primary-blue bg-opacity-30 flex items-center justify-center top-[12.7rem] px-300 py-200">
          <img src={Clock} alt="clock" />
          <span className="text-detail-3-semibold text-neutral-white pl-200">
            매일 13시 퀴즈 공개
          </span>
        </div>
      ) : null}
      <div className="bg-neutral-white p-[17px] ">
        <span className="text-detail-3-semibold text-primary-blue">
          {item.tag}
        </span>
        <p className="text-detail-1-bold text-neutral-black">{item.title1}</p>
        <p className="text-detail-1-bold text-neutral-black mb-[12px]">
          {item.title2}
        </p>
        <p className="text-detail-3-regular text-neutral-500">{item.body}</p>
      </div>
    </div>
  );
}

EventIntroNavItem.propTypes = {
  item: PropTypes.object,
};

export default EventIntroNavItem;
