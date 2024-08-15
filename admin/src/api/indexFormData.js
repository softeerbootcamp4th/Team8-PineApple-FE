const ApiRequest = async (url, method, body) => {
  const accessToken = localStorage.getItem('userInfo');

  try {
    const options = {
      method,
      headers: {
        ...(accessToken && {
          Authorization: `Bearer ${accessToken}`,
        }),
      },
      credentials: 'include',
    };

    const formData = new FormData();
    for (const key in body) {
      formData.append(key, body[key]);
    }
    options.body = formData;

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

export const post = (url, body) => {
  return ApiRequest(url, 'POST', body);
};

export const get = url => {
  return ApiRequest(url, 'GET', null);
};

export const put = (url, body) => {
  return ApiRequest(url, 'PUT', body);
};

export const patch = (url, body) => {
  return ApiRequest(url, 'PATCH', body);
};

export const del = (url, body, header) => {
  return ApiRequest(url, 'DELETE', body, header);
};
