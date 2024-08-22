import React from 'react';
import BaseButton from '@/components/buttons/BaseButton';

function BlueButton(props) {
  return (
    <BaseButton
      {...props}
      bgColor="bg-primary-blue"
      textColor="text-neutral-white"
    />
  );
}

export default React.memo(BlueButton);
