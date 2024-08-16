import { post } from '@/api/index';

const postQuizReward = (file, quizDate) =>
  post(
    '/admin/quizReward',
    {
      file,
      quizDate,
    },
    true,
  );

export { postQuizReward };
