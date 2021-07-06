import React from 'react';
import Star from '../images/svg/ios-star.svg';
import { reviews } from '../config';

import './styles/reviews.scss';
import './styles/typography.scss';

const Reviews = () => {
  return (
    <>
      <section className='reviews'>
        <h1 className='heading-large'>Reviews</h1>
        <div className='reviews__container'>
          {reviews.map(({ name, text, date }, index) => (
            <div className='reviews__item'>
              <p className='reviews__name'>{name}</p>
              <p className='reviews__text'>{text}</p>
              <div className='reviews__rating-container'>
                <div>
                  <Star className='reviews__star' />
                  <Star className='reviews__star' />
                  <Star className='reviews__star' />
                  <Star className='reviews__star' />
                  <Star className='reviews__star' />
                </div>
                <div>
                  <p className='reviews__date'>{date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Reviews;
