import { post, get, patch, put, del } from '@/api/index';

const postParticipants = () => {
  return post('/worldcup/participants', null);
};

const postWorldCupResult = id => {
  return post('/worldcup/results', { id: id });
};

const getWorldCupResult = () => {
  return get('/worldcup/results');
};

export { postParticipants, postWorldCupResult, getWorldCupResult };
