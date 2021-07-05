import React from 'react';

import './styles/reviews.scss';
import './styles/typography.scss';

const Reviews = () => {
  return (
    <>
      <section className='reviews'>
        <h1 className='heading-large'>Reviews</h1>
        <div className='reviews__container'>
          <div className='reviews__item'>
            <p className='reviews__name'>Hana Bole</p>
            <p className='reviews__text'>
              The lime and coconut cleansing water and Rosehip day cream swell
              wondrfull and feel great on my skin, some night cream will be my
              next purchase, I'm so pleased I found your skincare product...
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
