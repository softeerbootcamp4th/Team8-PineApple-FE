import React from 'react';
import NewCarIntroMain from '@/pages/newCarIntro/NewCarIntroMain';
import NewCarCarousel from '@/pages/newCarIntro/NewCarCarousel';
import NewCarDetail from '@/pages/newCarIntro/NewCarDetail';

function NewCarIntro() {
  return (
    <>
      <NewCarIntroMain />
      <div className="pt-2500 bg-gradient-lightblue-white-vertical pb-4000">
        <NewCarCarousel />
        <NewCarDetail />
      </div>
    </>
  );
}

export default NewCarIntro;
