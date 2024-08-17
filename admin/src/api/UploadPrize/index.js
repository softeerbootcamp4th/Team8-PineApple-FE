import { post, get } from '@/api/index';

const postPrize = (file, ranking) =>
  post(
    '/admin/drawPrize',
    {
      file,
      ranking,
    },
    true,
  );

const getProbability = () => get('/admin/drawProbability');

export { postPrize, getProbability };
