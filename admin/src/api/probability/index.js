import { post, get, patch, put, del } from '@/api/index';

const getAdminProbability = () => get(`/admin/draw-probability`);

const putAdminProbability = body => put(`/admin/draw-probability`, body);

export { getAdminProbability, putAdminProbability };
