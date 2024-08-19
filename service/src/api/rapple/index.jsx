import { post, get, patch, put, del } from '@/api/index';

const postReward = () => {
  return post(`/draw`);
};

const postSendPrize = prizeId => {
  return post(`/draw/rewards/send-prize`, { prizeId: prizeId });
};

const getPrizeInfo = () => {
  return get(`/draw/prize-infos`);
};

export { postReward, postSendPrize, getPrizeInfo };
