import { post } from '@/api/_index';

const postQuizReward = (file, quizDate) =>
  post(
    '/admin/quiz-reward',
    {
      file,
      quizDate,
    },
    true,
  );

export { postQuizReward };
