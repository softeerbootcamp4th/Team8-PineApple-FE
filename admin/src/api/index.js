const ApiRequest = async (url, method, body) => {
  const accessToken = sessionStorage.getItem('userInfo');
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

    if (body) {
      if (!(body instanceof FormData)) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
      } else {
        options.body = body;
      }
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
