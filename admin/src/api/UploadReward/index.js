import { post } from '@/api/index';

const postQuizReward = body => post('/admin/quiz-reward', body);

export { postQuizReward };
