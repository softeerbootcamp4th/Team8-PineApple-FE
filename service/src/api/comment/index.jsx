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

const getEachComment = commentId => {
  return get(`/comments/commentId?id=${commentId}`);
};

const getShortenLink = () => {
  return get(`/shorten-url`);
};

const getRedirectLink = commentId => {
  try {
    return get(`/redirect/${commentId}`);
  } catch (error) {
    console.error('API 호출 실패: ', error);
    throw error;
  }
};

export {
  getComment,
  postComment,
  postLike,
  getEachComment,
  getShortenLink,
  getRedirectLink,
};
