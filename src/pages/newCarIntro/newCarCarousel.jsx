import React from 'react';
import newCarImage1 from '@/assets/images/newCarImage1.svg';
import arrowLeftCircle from '@/assets/images/arrowLeftCircle.svg';
import arrowRightCircle from '@/assets/images/arrowRightCircle.svg';

function NewCarCarousel() {
  return (
    <>
      <div className="mx-5000 mb-1500">
        <div className="text-body-3-semibold text-primary-blue">Highlights</div>
        <div className="text-heading-2-bold">전력을 다해, CASPER Electric</div>
        <div className="mt-1500 mb-1200">
          <img
            src={newCarImage1}
            alt="newCarImage1"
            className="w-[1240px] h-[567px]"
          />
        </div>
        <div className="flex justify-center gap-600">
          <img src={arrowLeftCircle} className="hover:cursor-pointer"></img>
          <img src={arrowRightCircle} className="hover:cursor-pointer"></img>
        </div>
      </div>
    </>
  );
}
export default NewCarCarousel;
