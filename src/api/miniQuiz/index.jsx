import { post, get, patch, put, del } from '@/api/index';

const getMiniQuiz = () => get('/quiz');

const postAnswer = (quizId, answerNum) =>
  post('/quiz/answer', {
    quizId,
    answerNum,
  });

export { getMiniQuiz, postAnswer };
