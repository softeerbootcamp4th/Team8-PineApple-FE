import React from 'react';
import casperCarImage from '@/assets/images/casper_car_image.webp';
import arrow from '@/assets/icons/arrow.svg';
import casperCarImageShadow from '@/assets/images/casperCarImageShadow.webp';
import { Link } from 'react-router-dom';
import SlideUpMotion from '@/components/SlideUpMotion/SlideUpMotion';

function EventIntroMain() {
  return (
    <div className="bg-gradient-violetblue-cobaltblue h-[872px] pt-[151px]">
      <SlideUpMotion>
        <div className="flex justify-between">
          <div className="ml-3000">
            <div className="inline-block px-500 py-200 bg-primary-berrypurple mb-600">
              <p className="text-detail-1-bold text-neutral-white">
                진짜 캐스퍼 EV를 얻을 수 있는 기회
              </p>
            </div>
            <div className="text-heading-banner-title text-neutral-black mb-1000 text-nowrap">
              캐스퍼 EV와
              <br />
              함께 떠나기
            </div>
            <p className="text-detail-2-regular text-neutral-black text-nowrap ">
              매일 이벤트를 수행하고 얻은 아이템으로 캐스퍼와 떠나보아요!
            </p>
            <p className="text-detail-2-regular text-neutral-black ">
              성공 시{' '}
              <strong className="w-full text-detail-2-semibold text-gradient-blue-purple">
                전기차 충전 쿠폰, 전기차 구매 보조금
              </strong>
              부터
            </p>
            <p className="text-detail-2-regular text-neutral-black">
              <strong className="w-full text-detail-2-semibold text-gradient-blue-purple">
                진짜 캐스퍼 EV
              </strong>
              까지 다양한 상품을 받을 수 있어요.
            </p>
            <div className="flex mt-600 gap-300">
              <Link to="event">
                <button className="flex items-center justify-center duration-200 rounded-full px-1200 py-600 bg-neutral-white hover:scale-105">
                  <p className="text-neutral-black text-detail-2-semibold">
                    이벤트 참여하기
                  </p>
                </button>
              </Link>
              <Link to="introduce">
                <button className="flex items-center justify-center bg-transparent rounded-full px-1000 py-500 border-[2px] border-solid border-neutral-black hover:scale-105 duration-200">
                  <p className="text-neutral-black text-detail-2-semibold">
                    캐스퍼 EV 알아보기
                  </p>
                  <img src={arrow} alt="move" />
                </button>
              </Link>
            </div>
          </div>
          <div className="relative pr-[35px] pb-[112px]">
            <span className="flex justify-center items-center text-[10rem] text-neutral-white font-poppins font-bold opacity-20 leading-[160px]">
              CASPER
            </span>
            <span className="flex justify-center items-center  text-[10rem] text-neutral-white font-poppins font-bold opacity-20 leading-[160px]">
              ELECTRONIC
            </span>
            <img
              src={casperCarImage}
              alt="casperCar"
              className="w-[750px] absolute top-[30px] left-[50px]"
            />
            <img
              src={casperCarImageShadow}
              alt="casperCar"
              className="absolute"
            />
          </div>
        </div>
      </SlideUpMotion>
    </div>
  );
}

export default EventIntroMain;
