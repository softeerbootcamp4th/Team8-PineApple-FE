import React from 'react';
import BaseButton from '@/components/buttons/BaseButton';

function BluePurpleButton(props) {
  return (
    <BaseButton
      {...props}
      bgColor="bg-gradient-blue-purple"
      textColor="text-neutral-white"
    />
  );
}

export default React.memo(BluePurpleButton);
