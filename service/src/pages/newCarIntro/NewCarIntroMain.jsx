import React, { useCallback } from 'react';
import BluePurpleButton from '@/components/buttons/BluePurpleButton';
import WhiteButton from '@/components/buttons/WhiteButton';
import { linkToFreeRide, linkToPreOrder } from '@/utils/linkToFunc';
import { animationVariants } from '@/styles/FramerMotion';
import { motion } from 'framer-motion';

function NewCarIntroMain() {
  const handleFreeRide = useCallback(() => {
    linkToFreeRide();
  }, []);

  const handlePreOrder = useCallback(() => {
    linkToPreOrder();
  }, []);
  return (
    <div className="bg-new-car-intro bg-cover bg-center h-[680px] pt-[250px] flex flex-col gap-1300">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex flex-col items-center">
          <div className="text-detail-1-medium text-neutral-white">
            전력을 다해, CASPER Eletric 사전계약 진행중
          </div>
          <div className="text-heading-banner-title text-neutral-white">
            CASPER Electric
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
      >
        <div className="flex justify-center gap-300">
          <BluePurpleButton
            value="무료 시승 신청 (최대 연 6회)"
            onClickFunc={handleFreeRide}
            styles="text-detail-3-semibold px-800 py-400 "
          />
          <WhiteButton
            value="사전 계약하기"
            onClickFunc={handlePreOrder}
            styles="text-detail-3-semibold px-800 py-400"
          />
        </div>
      </motion.div>
    </div>
  );
}
export default NewCarIntroMain;
