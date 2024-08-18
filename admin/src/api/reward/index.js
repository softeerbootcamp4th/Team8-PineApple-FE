import { post, get, patch, put, del } from '@/api/index';

const getAdminReward = () => get(`/admin/draw-reward-info`);

const putAdminReward = body => put(`/admin/draw-reward-info`, body);

export { getAdminReward, putAdminReward };
