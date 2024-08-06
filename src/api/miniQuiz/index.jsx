import { post, get, patch, put, del } from '@/api/index';

const getMiniQuiz = () => {
  return get('/quiz');
};

const pushAnswer = (quizId, answerNum) =>
  post('/quiz/answer', {
    quizId,
    answerNum,
  });

export { getMiniQuiz, pushAnswer };
