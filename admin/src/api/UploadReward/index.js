import { post } from '@/api/indexFormData';

const postQuizReward = (file, quizDate) =>
  post('/admin/quizReward', {
    file,
    quizDate,
  });

export { postQuizReward };
