import { post, get, patch, put, del } from '@/api/index';

const getComment = (currentPage, option, today) => {
  return get(`/comments?page=${currentPage}&sort=${option}&date=${today}`);
};

const postComment = comment => {
  return post('/comments', { content: comment });
};

const postLike = commentId => {
  return post('/comments/likes', { commentId: commentId });
};

export { getComment, postComment, postLike };
