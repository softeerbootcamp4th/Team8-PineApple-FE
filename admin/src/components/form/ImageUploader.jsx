import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageAddIcon from '@/assets/icons/imageAddIcon.svg';

function ImageUploader({ onChange, imageUrl, label }) {
  const [imagePreview, setImagePreview] = useState(imageUrl || '');

  useEffect(() => {
    if (typeof imageUrl === 'string') {
      setImagePreview(imageUrl);
    }
  }, [imageUrl]);

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      onChange(file); // 파일 객체를 onChange로 전달
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex mb-1000 w-[90%] gap-500">
      <div className="w-[15%]">
        <label
          htmlFor={label}
          className="flex justify-center text-detail-1-bold text-neutral-800"
        >
          {label} *
        </label>
        <p className="text-center text-detail-3-medium text-neutral-400">
          포맷: jpg/ png/ jpeg
        </p>
      </div>
      <div className="relative w-[85%] h-[200px] rounded-[10px] border-[2px] border-solid border-neutral-black">
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="absolute max-w-full max-h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
        )}
        <img
          src={ImageAddIcon}
          alt="ImageAddIcon"
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[50px] h-auto"
        />
        <input
          type="file"
          className="w-full h-full opacity-0 cursor-pointer"
          accept="image/png, image/jpg, image/jpeg"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
}

ImageUploader.propTypes = {
  onChange: PropTypes.func.isRequired,
  imageUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  label: PropTypes.string.isRequired,
};

export default ImageUploader;
