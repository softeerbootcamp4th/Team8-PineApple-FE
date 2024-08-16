import { post } from '@/api/index';

const postPrize = (file, ranking) =>
  post(
    '/admin/drawPrize',
    {
      file,
      ranking,
    },
    true,
  );

export { postPrize };
