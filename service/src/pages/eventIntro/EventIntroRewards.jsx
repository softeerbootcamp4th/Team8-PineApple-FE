import React, { useState, useEffect } from 'react';
import { getPrizeInfo } from '@/api/rapple/index';
function EventIntroRewards() {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const data = await getPrizeInfo();
        if (Array.isArray(data)) {
          setInfo(data);
        } else {
          setError('dataFormat이 잘못 되었습니다!');
        }
      } catch (error) {
        setError('api 통신이 잘못되었습니다..!');
      } finally {
        setLoading(false);
      }
    };
    fetchInfo();
  }, []);
  if (loading) return <div className="h-[1258px]">Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="pt-2500 pb-4000 px-4000">
      <span className="text-heading-2-bold text-neutral-black">
        이벤트 경품
      </span>
      <div className="py-[17px] pl-[31px] pr-[21px] w-full flex justify-between rounded-xl shadow-3xl gap-5000 items-center bg-neutral-white mt-800 mb-[24px]">
        <div>
          <span className="text-body-2-bold text-primary-blue mb-500">
            {info[1].rank}등
          </span>
          <p className="text-body-2-bold mb-[16px] text-neutral-black">
            {info[1].rewardName}
            &nbsp;
            {info[1].rewardCount}명
          </p>
          <p className="text-detail-3-regular text-neutral-black">
            이벤트 기간 종료 후 전체 응모 참여자를 대상으로 1등 당첨자를
            추첨해요!
          </p>
          <p className="text-detail-3-regular text-neutral-black mb-700">
            응모에 많이 참여할 수록 당첨 확률이 높아져요.
          </p>
          <p className="text-detail-3-semibold text-primary-blue">
            1등 당첨자 발표: 2024.08.29 13시
          </p>
        </div>
        <div>
          <img src={info[1].imageUrl} alt="Prize1" />
        </div>
      </div>
      <div className="flex justify-between gap-600 mb-600">
        <div className="flex items-center justify-between rounded-xl shadow-3xl bg-neutral-white gap-[100px] w-[700px] h-[260px] px-[31px] relative">
          <div>
            <span className="text-body-2-bold text-primary-blue">
              {info[2].rank}등
            </span>
            <p className="text-body-2-bold text-neutral-black w-[250px]">
              {info[2].rewardName}
              &nbsp;
              {info[2].rewardCount}명
            </p>
          </div>
          <span className="absolute text-primary-blue text-detail-3-semibold top-52 right-8">
            상시 추첨
          </span>
          <div>
            <img src={info[2].imageUrl} alt="Prize2" className="w-[200px]" />
          </div>
        </div>
        <div className="flex items-center justify-between rounded-xl shadow-3xl bg-neutral-white gap-[100px] w-[700px] h-[260px] px-[31px] relative">
          <div>
            <span className="text-body-2-bold text-primary-blue">
              {info[3].rank}등
            </span>
            <p className="text-body-2-bold text-neutral-black w-[250px]">
              {info[3].rewardName}
              &nbsp;
              {info[3].rewardCount}명
            </p>
          </div>
          <span className="absolute text-primary-blue text-detail-3-semibold top-52 right-8">
            상시 추첨
          </span>
          <div>
            <img src={info[3].imageUrl} alt="Prize3" className="w-[200px]" />
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-600 mb-600">
        <div className="flex items-center justify-between rounded-xl shadow-3xl bg-neutral-white gap-[100px] w-[700px] h-[260px] px-[31px] relative">
          <div>
            <span className="text-body-2-bold text-primary-blue">
              {info[4].rank}등
            </span>
            <p className="text-body-2-bold text-neutral-black w-[250px]">
              {info[4].rewardName}
              &nbsp;
              {info[4].rewardCount}명
            </p>
          </div>
          <span className="absolute text-primary-blue text-detail-3-semibold top-52 right-8">
            상시 추첨
          </span>
          <div>
            <img src={info[4].imageUrl} alt="Prize4" className="w-[200px]" />
          </div>
        </div>
        <div className="flex items-center rounded-xl shadow-3xl bg-neutral-white gap-[100px] w-[700px] h-[260px] px-[31px] pr-[30px] relative">
          <div>
            <span className="text-body-2-bold text-primary-blue">
              {info[5].rank}등
            </span>
            <p className="text-body-2-bold text-neutral-black w-[200px]">
              {info[5].rewardName}
              &nbsp;
              {info[5].rewardCount}명
            </p>
          </div>
          <span className="absolute text-primary-blue text-detail-3-semibold top-52 right-8">
            상시 추첨
          </span>
          <div>
            <img src={info[5].imageUrl} alt="Prize5" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default EventIntroRewards;
