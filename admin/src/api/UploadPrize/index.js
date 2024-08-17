import { post, get } from '@/api/_index';

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
