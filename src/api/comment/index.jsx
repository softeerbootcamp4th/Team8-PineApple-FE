import { post, get, patch, put, del } from '@/api/index';

const getComment = (currentPage, option, today) => {
  return get(`/comments?page=${currentPage}&sort=${option}&date=${today}`);
};

export { getComment };
