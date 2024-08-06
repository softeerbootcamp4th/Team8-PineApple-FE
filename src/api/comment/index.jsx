import { post, get, patch, put, del } from '@/api/index';

const getComment = (currentPage, option, today) => {
  return get(`/comments?page=${currentPage}&sort=${option}&date=${today}`);
};

const postComment = (accessToken, comment) => {
  return post('/comments', { content: comment }, { accessToken });
};

export { getComment, postComment };
