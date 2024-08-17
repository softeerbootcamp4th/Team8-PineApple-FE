import { post } from '@/api/_index';

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
