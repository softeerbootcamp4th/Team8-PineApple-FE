import React from 'react';
import PropTypes from 'prop-types';
import InputForm from '@/components/form/InputForm';

function DrawContent({ response, onChange }) {
  return (
    <>
      <InputForm
        label="응모 미당첨 확률"
        id="0"
        placeholder={String(response.probabilities['0'])}
        value={String(response.probabilities['0'])}
        onChange={value => onChange('0', value)}
      />
      <InputForm
        label="2등 당첨 확률"
        id="2"
        placeholder={String(response.probabilities['2'])}
        value={String(response.probabilities['2'])}
        onChange={value => onChange('2', value)}
      />
      <InputForm
        label="3등 당첨 확률"
        id="3"
        placeholder={String(response.probabilities['3'])}
        value={String(response.probabilities['3'])}
        onChange={value => onChange('3', value)}
      />
      <InputForm
        label="4등 당첨 확률"
        id="4"
        placeholder={String(response.probabilities['4'])}
        value={String(response.probabilities['4'])}
        onChange={value => onChange('4', value)}
      />
      <InputForm
        label="5등 당첨 확률"
        id="5"
        placeholder={String(response.probabilities['5'])}
        value={String(response.probabilities['5'])}
        onChange={value => onChange('5', value)}
      />
    </>
  );
}

DrawContent.propTypes = {
  response: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DrawContent;
