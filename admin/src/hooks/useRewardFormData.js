import { useCallback } from 'react';

const useRewardFormData = () => {
  const createFormData = useCallback(data => {
    const formData = new FormData();

    data.forEach((item, index) => {
      Object.keys(item).forEach(key => {
        const value = item[key];

        if (value !== undefined && value !== null) {
          const formattedKey = `rewards[${index}].${key}`;

          if (
            typeof value === 'string' &&
            value.includes(
              'https://softeer4-team8.s3.ap-northeast-2.amazonaws.com/',
            )
          ) {
            // 아무것도 안함
          } else {
            formData.append(formattedKey, value);
          }
        }
      });
    });

    return formData;
  }, []);

  return createFormData;
};

export default useRewardFormData;
