import React, { useState, useContext, useEffect } from 'react';
import CarCard from '@/pages/joinEvent/CarCard';
import ToolBoxCard from '@/pages/joinEvent/ToolBoxCard';
import PhoneInputModal from '@/components/modal/PhoneInputModal';
import { AuthContext } from '@/context/authContext';
import BluePurpleButton from '@/components/buttons/BluePurpleButton';
import { useNavigate } from 'react-router-dom';
import { getScenario } from '@/api/scenario';
import { animationVariants } from '@/styles/FramerMotion';
import { motion } from 'framer-motion';

function JoinEventIntroMain() {
  const navigate = useNavigate();
  const { userInfo } = useContext(AuthContext);
  const [openPhoneInputModal, setOpenPhoneInputModal] = useState(false);
  const [day, setDay] = useState(null);
  const [scenario, setScenario] = useState('');
  const { car, toolBoxCnt, phoneNumber } = userInfo;
  const isRewardButtonDisabled = !phoneNumber || !car || toolBoxCnt === 0;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getScenario();
        const { day, commonScenario } = response;
        setDay(day);
        setScenario(commonScenario);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const openPhoneModal = () => {
    setOpenPhoneInputModal(true);
  };

  const closePhoneModal = () => {
    setOpenPhoneInputModal(false);
  };

  const handleReward = async () => {
    navigate(`/event/reward`);
  };

  return (
    <>
      <div className="bg-join-event-main bg-cover bg-center h-screen pt-[250px] flex flex-col">
        <div className="flex gap-2000 px-3000">
          <div className="space-y-1200">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-300">
                <CarCard />
                <div className="text-heading-1-bold text-neutral-white">+</div>
                <ToolBoxCard />
              </div>
            </motion.div>
            <div
              className={`text-center underline text-neutral-white text-shadow-default ${phoneNumber ? 'invisible' : 'visible'}`}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={animationVariants}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 1.0 }}
              >
                <span className="cursor-pointer" onClick={openPhoneModal}>
                  보유 아이템이 있다면? 전화번호 입력하고 내 아이템 개수
                  확인하기
                </span>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
          >
            <div className="relative flex flex-col">
              <div className="text-heading-banner-title-2 text-nowrap mb-1000">
                <span className="text-gradient-blue-purple">캐스퍼 EV</span>와
                떠나기
              </div>
              <div className="w-[84px] bg-op-30-blue px-400 py-100 mb-400 text-detail-2-medium text-neutral-white">
                Day {day}
              </div>
              <div className="whitespace-pre-line h-1800 text-detail-1-regular text-neutral-black mb-1500">
                {scenario}
              </div>
              <div>
                <BluePurpleButton
                  value="결과 보기"
                  onClickFunc={handleReward}
                  styles="text-body-3-regular px-5000 py-400"
                  disabled={isRewardButtonDisabled}
                />
              </div>
              {isRewardButtonDisabled && (
                <>
                  <div className="absolute top-[417px] left-[279px] h-0 w-0 border-x-[12px] border-b-[12px] border-x-transparent border-b-neutral-white"></div>
                  <div className="absolute top-[423px] left-[91px] w-[400px] rounded-[5px] py-300 text-center bg-neutral-white text-primary-blue">
                    이벤트에 참여해서 추첨을 위한 아이템을 모아보아요!
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      {openPhoneInputModal && (
        <PhoneInputModal closePhoneModal={closePhoneModal} />
      )}
    </>
  );
}

export default JoinEventIntroMain;
