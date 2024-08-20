import { get } from '@/api/index';

const draw = () => get('/admin/topPrizeWinner');

export { draw };
