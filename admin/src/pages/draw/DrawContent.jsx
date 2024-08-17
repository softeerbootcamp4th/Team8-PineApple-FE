import React from 'react';
import PropTypes from 'prop-types';
import InputForm from '@/components/form/InputForm';
import ImageUploader from '@/components/form/ImageUploader';

function DrawContent({ response, onChange }) {
  return (
    <>
      <InputForm
        label="일일 메세지"
        id="commonScenario"
        placeholder={response.commonScenario}
        value={response.commonScenario}
        onChange={value => onChange('commonScenario', value)}
      />
      <InputForm
        label="실패 메세지"
        id="loseMessage"
        placeholder={response.loseMessage}
        value={response.loseMessage}
        onChange={value => onChange('loseMessage', value)}
      />
      <InputForm
        label="실패 시나리오"
        id="loseScenario"
        placeholder={response.loseScenario}
        value={response.loseScenario}
        onChange={value => onChange('loseScenario', value)}
      />
      <ImageUploader
        label="실패 이미지"
        imageUrl={response.loseImage}
        onChange={file => onChange('loseImage', file)}
      />
      <InputForm
        label="성공 메세지"
        id="winMessage"
        placeholder={response.winMessage}
        value={response.winMessage}
        onChange={value => onChange('winMessage', value)}
      />
      <ImageUploader
        label="성공 이미지"
        imageUrl={response.winImage}
        onChange={file => onChange('winImage', file)}
      />
    </>
  );
}

DrawContent.propTypes = {
  response: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DrawContent;
