const apiRequest = async (url, method, body) => {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json;',
      },
      credentials: 'include',
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}${url}`,
      options,
    );
    console.log(response);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('API 통신 실패 : ', error);
    throw error;
  }
};

export const post = (url, body) => {
  return apiRequest(url, 'POST', body);
};

export const get = url => {
  return apiRequest(url, 'GET');
};

export const put = (url, body) => {
  return apiRequest(url, 'PUT', body);
};

export const patch = (url, body) => {
  return apiRequest(url, 'PATCH', body);
};

export const del = (url, body) => {
  return apiRequest(url, 'DELETE', body);
};
