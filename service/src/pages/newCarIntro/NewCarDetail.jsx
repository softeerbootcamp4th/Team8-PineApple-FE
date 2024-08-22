import React from 'react';
import NewCarDetailBox from '@/pages/newCarIntro/NewCarDetailBox';
import newCarDetailData from '@/constants/newCarIntro/newCarDetailData';
import { animationVariants } from '@/styles/FramerMotion';
import { motion } from 'framer-motion';

function NewCarDetail() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
    >
      <div className="flex px-5000">
        <div>
          <div className="text-primary-berrypurple text-body-2-regular">
            1회 충전 주행 가능 거리
          </div>
          <div className="font-bold text-gradient-blue-purple font-pretendard text-[200px]">
            315km
          </div>
        </div>
        <div className="flex flex-col justify-end p-2000">
          <div>
            49kWh 배터리를 적용하여 여유 있는 주행 기능 거리를 제공합니다.
          </div>
          <div>(15인치 알로이 휠, 인스퍼레이션 트림 기준)</div>
        </div>
      </div>

      <div className="grid grid-cols-2 mx-5000 gap-x-600 gap-y-2900">
        {newCarDetailData.map(item => (
          <NewCarDetailBox details={item} key={item.id} />
        ))}
      </div>
    </motion.div>
  );
}

export default NewCarDetail;
