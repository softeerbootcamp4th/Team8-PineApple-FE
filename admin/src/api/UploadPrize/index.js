import { post } from '@/api/indexFormData';

const postPrize = (file, ranking) =>
  post('/admin/drawPrize', {
    file,
    ranking,
  });

export { postPrize };
