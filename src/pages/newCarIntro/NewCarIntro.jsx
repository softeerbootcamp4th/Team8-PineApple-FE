import React from 'react';
import NewCarIntroMain from '@/pages/newCarIntro/NewCarIntroMain';
import NewCarCarousel from './newCarCarousel';

function NewCarIntro() {
  return (
    <>
      <NewCarIntroMain />
      <div className="pt-2500 bg-gradient-lightblue-white-vertical">
        <NewCarCarousel />
      </div>
    </>
  );
}

export default NewCarIntro;
