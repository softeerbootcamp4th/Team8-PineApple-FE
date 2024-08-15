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
      {response.map(item => (
        <div
          key={item.id}
          className="rounded-[20px] bg-white w-[90%] shadow-xl set-center flex-col pt-1000 mb-1000"
        >
          <InputForm
            label="등수"
            id={`ranking-${String(item.id)}`}
            placeholder={String(item.ranking)}
            value={String(item.ranking)}
            onChange={value => handleInputChange(item.id, 'ranking', value)}
          />
          <InputForm
            label="이름"
            id={`name-${String(item.id)}`}
            placeholder={item.name}
            value={item.name}
            onChange={value => handleInputChange(item.id, 'name', value)}
          />
          <InputForm
            label="재고"
            id={`stock-${String(item.id)}`}
            placeholder={String(item.stock)}
            value={String(item.stock)}
            onChange={value => handleInputChange(item.id, 'stock', value)}
          />
          <ImageUploader
            label="이미지"
            imageUrl={item.image}
            onChange={file => handleImageChange(item.id, file)}
          />
        </div>
      ))}
    </>
  );
}

RewardContent.propTypes = {
  response: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      ranking: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      stock: PropTypes.number,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RewardContent;
