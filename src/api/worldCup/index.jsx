import { post, get, patch, put, del } from '@/api/index';

const postParticipants = accessToken => {
  return post('/worldcup/participants', null, { accessToken });
};

const postWorldCupResult = (id, accessToken) => {
  return post('/worldcup/results', { id: id }, { accessToken });
};

const getWorldCupResult = () => {
  return get('/worldcup/results');
};

export { postParticipants, postWorldCupResult, getWorldCupResult };
