import { useCallback } from 'react';

const useFormData = () => {
  const createFormData = useCallback(data => {
    const formData = new FormData();

    Object.keys(data).forEach(key => {
      if (data[key] !== undefined && data[key] !== null) {
        if (
          typeof data[key] === 'string' &&
          data[key].includes(
            'https://softeer4-team8.s3.ap-northeast-2.amazonaws.com/',
          )
        ) {
          // 아무것도 안함
        } else {
          formData.append(key, data[key]);
        }
      }
    });

    return formData;
  }, []);

  return createFormData;
};

export default useFormData;
