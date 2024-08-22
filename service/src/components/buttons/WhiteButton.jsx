import React from 'react';
import BaseButton from '@/components/buttons/BaseButton';

function WhiteButton(props) {
  return (
    <BaseButton
      {...props}
      bgColor="bg-neutral-white"
      textColor="text-neutral-black"
    />
  );
}

export default React.memo(WhiteButton);
