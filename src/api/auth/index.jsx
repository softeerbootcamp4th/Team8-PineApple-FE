import { post, get, patch, put, del } from '@/api/index';

const loginPhone = phoneNumber => {
  return post('/login/phone', {
    phoneNumber: phoneNumber,
  });
};

const loginCode = (phoneNumber, validateCode) => {
  return post('/login/code', {
    phoneNumber: phoneNumber,
    code: validateCode,
  });
};

const logout = () => {
  return post('/logout', null);
};

const getMemberInfo = () => {
  return get('/members');
};

export { loginPhone, loginCode, logout, getMemberInfo };
