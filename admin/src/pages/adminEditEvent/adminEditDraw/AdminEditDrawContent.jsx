import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImageAddIcon from '@/assets/icons/imageAddIcon.svg';

function AdminEditDrawContent({ response, onChange }) {
  const [imagePreview, setImagePreview] = useState(response.quiz_image || '');

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      onChange('quiz_image', file);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className="flex mb-1000 w-[90%] gap-500">
        <label
          htmlFor="failMessage"
          className="w-[15%] text-detail-1-bold text-neutral-800 set-center"
        >
          실패 메세지 *
        </label>
        <input
          id="failMessage"
          className="w-[85%] px-400 py-200 text-detail-2-medium text-neutral-black placeholder:text-detail-2-medium placeholder:text-neutral-500 border-solid border-neutral-black focus:border-primary-blue border-[2px] rounded-[10px]"
          placeholder={response.lose_message}
          value={response.lose_message}
          onChange={e => onChange('lose_message', e.target.value)}
        />
      </div>
      <div className="flex mb-1000 w-[90%] gap-500">
        <div className="w-[15%]">
          <label
            htmlFor="answerImage"
            className="flex justify-center text-detail-1-bold text-neutral-800"
          >
            정답 이미지 *
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
            className="w-full h-full opacity-0 cursor-pointer "
            accept="image/png, image/jpg, image/jpeg"
            onChange={handleImageChange}
          />
        </div>
      </div>
    </>
  );
}

AdminEditDrawContent.propTypes = {
  response: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdminEditDrawContent;
