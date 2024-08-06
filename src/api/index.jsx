const apiRequest = async (url, method, body, header) => {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(header &&
          header.accessToken && {
            Authorization: `Bearer ${header.accessToken}`,
          }),
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
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('API 통신 실패 : ', error);
    throw error;
  }
};

export const post = (url, body, header) => {
  return apiRequest(url, 'POST', body, header);
};

export const get = (url, header) => {
  return apiRequest(url, 'GET', null, header);
};

export const put = (url, body, header) => {
  return apiRequest(url, 'PUT', body, header);
};

export const patch = (url, body, header) => {
  return apiRequest(url, 'PATCH', body, header);
};

export const del = (url, body, header) => {
  return apiRequest(url, 'DELETE', body, header);
};
