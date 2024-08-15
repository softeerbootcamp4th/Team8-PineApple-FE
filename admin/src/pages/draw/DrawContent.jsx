import React from 'react';
import PropTypes from 'prop-types';
import InputForm from '@/components/form/InputForm';
import ImageUploader from '@/components/form/ImageUploader';

function DrawContent({ response, onChange }) {
  return (
    <>
      <InputForm
        label="일일 메세지"
        id="dailyMessage"
        placeholder={response.daily_message}
        value={response.daily_message}
        onChange={value => onChange('daily_message', value)}
      />
      <InputForm
        label="실패 메세지"
        id="loseMessage"
        placeholder={response.lose_message}
        value={response.lose_message}
        onChange={value => onChange('lose_message', value)}
      />
      <InputForm
        label="실패 시나리오"
        id="loseScenario"
        placeholder={response.lose_scenario}
        value={response.lose_scenario}
        onChange={value => onChange('lose_scenario', value)}
      />
      <ImageUploader
        label="실패 이미지"
        imageUrl={response.lose_image}
        onChange={file => onChange('lose_image', file)}
      />
      <InputForm
        label="성공 메세지"
        id="winMessage"
        placeholder={response.win_message}
        value={response.win_message}
        onChange={value => onChange('win_message', value)}
      />
      <ImageUploader
        label="성공 이미지"
        imageUrl={response.win_image}
        onChange={file => onChange('win_image', file)}
      />
    </>
  );
}

DrawContent.propTypes = {
  response: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DrawContent;
