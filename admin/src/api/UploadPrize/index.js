import { post, get } from '@/api/index';

const postPrize = body => post('/admin/draw-prize', body);

const getProbability = () => get('/admin/draw-probability');

export { postPrize, getProbability };
