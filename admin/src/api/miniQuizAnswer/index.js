import { post, get, patch, put, del } from '@/api/index';

const getAdminMiniQuizAnswer = day => get(`/admin/quiz/answers/${day}`);

const putAdminMiniQuizAnswer = (day, body) =>
  put(`/admin/quiz/answers/${day}`, body);

export { getAdminMiniQuizAnswer, putAdminMiniQuizAnswer };
