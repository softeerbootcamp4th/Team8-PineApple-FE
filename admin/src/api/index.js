const ApiRequest = async (url, method, body, isFormData) => {
  const accessToken = sessionStorage.getItem('userInfo');

  try {
    const options = {
      method,
      headers: {
        ...(accessToken && {
          Authorization: `Bearer ${accessToken}`,
        }),
        ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      },
      credentials: 'include',
    };

    if (body) {
      options.body = isFormData ? createFormData(body) : JSON.stringify(body);
    }

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}${url}`,
      options,
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('API 통신 실패 : ', error);
    throw error;
  }
};

const createFormData = body => {
  const formData = new FormData();
  for (const key in body) {
    formData.append(key, body[key]);
  }
  return formData;
};

export const post = (url, body, isFormData = false) => {
  return ApiRequest(url, 'POST', body, isFormData);
};

export const get = (url, isFormData = false) => {
  return ApiRequest(url, 'GET', null, isFormData);
};

export const put = (url, body, isFormData = false) => {
  return ApiRequest(url, 'PUT', body, isFormData);
};

export const patch = (url, body, isFormData = false) => {
  return ApiRequest(url, 'PATCH', body, isFormData);
};

export const del = (url, body, isFormData = false) => {
  return ApiRequest(url, 'DELETE', body, isFormData);
};
