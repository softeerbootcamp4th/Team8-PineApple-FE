import { useCallback } from 'react';

const useFormData = () => {
  const createFormData = useCallback(data => {
    const formData = new FormData();

    Object.keys(data).forEach(key => {
      if (data[key] !== undefined && data[key] !== null) {
        console.log(data[key]);
        formData.append(key, data[key]);
      }
    });

    return formData;
  }, []);

  return createFormData;
};

export default useFormData;
