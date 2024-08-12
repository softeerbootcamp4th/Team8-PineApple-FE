import { post, get, patch, put, del } from '@/api/index';

const postReward = () => {
  return post(`/draw`);
};

const postSendPrize = () => {
  return post(`/draw/rewards/send-prize`);
};

export { postReward, postSendPrize };
