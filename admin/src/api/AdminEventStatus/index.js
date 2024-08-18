import { get } from '@/api/index';

const getDrawHistory = (page, limit, sort = 'desc') =>
  get(`/admin/draw-history?page=${page}&limit=${limit}&sort=${sort}`);

const getDrawRemaining = () => get('/admin/draw-remaining');

export { getDrawHistory, getDrawRemaining };
