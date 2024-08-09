import { post, get, patch, put, del } from '@/api/index';

const getComment = (currentPage, option, today, accessToken) => {
  return get(`/comments?page=${currentPage}&sort=${option}&date=${today}`, {
    accessToken,
  });
};

const postComment = (accessToken, comment) => {
  return post('/comments', { content: comment }, { accessToken });
};

const postLike = (accessToken, commentId) => {
  return post('/comments/likes', { commentId: commentId }, { accessToken });
};

export { getComment, postComment, postLike };
