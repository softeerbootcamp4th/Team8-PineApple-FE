import { post, get, patch, put, del } from '@/api/index';

const getAdminMiniQuiz = day => get(`/admin/quiz/${day}`);

const putAdminMiniQuiz = (day, body) =>
  put(`/admin/quiz/${day}`, {
    quizId: body.quizId,
    quizDescription: body.quizDescription,
    quizQuestions: {
      1: body.quizQuestions[1],
      2: body.quizQuestions[2],
      3: body.quizQuestions[3],
      4: body.quizQuestions[4],
    },
  });

export { getAdminMiniQuiz, putAdminMiniQuiz };
