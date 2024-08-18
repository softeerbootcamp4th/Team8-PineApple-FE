import React from 'react';
import PropTypes from 'prop-types';
import InputForm from '@/components/form/InputForm';
import ImageUploader from '@/components/form/ImageUploader';

function RewardContent({ response, onChange }) {
  const handleInputChange = (id, field, value) => {
    onChange(id, field, value);
  };

  const handleImageChange = (id, file) => {
    onChange(id, 'image', file);
  };

  return (
    <>
      {response.map((item, index) => (
        <div
          key={index} // 인덱스를 key로 사용
          className="rounded-[20px] bg-white w-[90%] shadow-xl set-center flex-col pt-1000 mb-1000"
        >
          <InputForm
            label="등수"
            id={`ranking-${index}`}
            placeholder={String(item.ranking)}
            value={String(item.ranking)}
            onChange={value => handleInputChange(index, 'ranking', value)}
          />
          <InputForm
            label="이름"
            id={`name-${index}`}
            placeholder={item.name}
            value={item.name}
            onChange={value => handleInputChange(index, 'name', value)}
          />
          <InputForm
            label="재고"
            id={`stock-${index}`}
            placeholder={String(item.stock)}
            value={String(item.stock)}
            onChange={value => handleInputChange(index, 'stock', value)}
          />
          <ImageUploader
            label="이미지"
            imageUrl={item.image}
            onChange={file => handleImageChange(index, file)}
          />
        </div>
      ))}
    </>
  );
}

RewardContent.propTypes = {
  response: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RewardContent;
