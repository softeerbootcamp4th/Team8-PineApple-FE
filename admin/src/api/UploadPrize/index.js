import { post, get } from '@/api/_index';

const postPrize = (file, ranking) =>
  post(
    '/admin/draw-prize',
    {
      file,
      ranking,
    },
    true,
  );

const getProbability = () => get('/admin/draw-probability');

export { postPrize, getProbability };
