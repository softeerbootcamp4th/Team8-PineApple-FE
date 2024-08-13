import { post, get, patch, put, del } from '@/api/index';

const getMiniQuiz = () => get('/quiz');

const postAnswer = (quizId, answerNum) =>
  post('/quiz/answer', {
    quizId,
    answerNum,
  });

const getToolBox = () => get('/quiz/participants');

const getRewardCheck = () => get('/quiz/reward/check');

const postReward = participantId => post('/quiz/reward', { participantId });

export { getMiniQuiz, postAnswer, getToolBox, postReward, getRewardCheck };
