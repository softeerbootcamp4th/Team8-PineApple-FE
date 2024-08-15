import { post, get, patch, put, del } from '@/api/index';

const getAdminMiniQuizAnswer = day => get(`/admin/quiz/answers/${day}`);

const putAdminMiniQuizAnswer = (day, body) =>
  put(`/admin/quiz/answers/${day}`, {
    answerNum: body.answerNum,
    quizImage: body.quizImage,
  });

export { getAdminMiniQuizAnswer, putAdminMiniQuizAnswer };
