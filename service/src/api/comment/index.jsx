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

const getRedirectLink = async commentId => {
  console.log('dddd');
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/redirect/${commentId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...(accessToken && {
            Authorization: `Bearer ${accessToken}`,
          }),
        },
        credentials: 'include',
      },
    );
    console.log('ddd');
    // 응답의 헤더에서 Location 값을 추출
    const redirectUrl = response.headers.get('Location');
    return redirectUrl;
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
