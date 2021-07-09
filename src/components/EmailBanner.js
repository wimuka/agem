import React from 'react';
import Arrow from '../images/svg/arrow.svg';

import './styles/email-banner.scss';
import './styles/typography.scss';

const EmailBanner = () => {
  return (
    <section className='email-banner'>
      <h2 className='heading-medium email-banner__header'>Sign Up For Email</h2>
      <form className='email-banner__container'>
        <input
          className='email-banner__input'
          type='email'
          placeholder='Email Address'
          title='Add your email address'
        />
        <button className='btn email-banner__btn' type='submit'>
          <Arrow className='email-banner__arrow' />
          Sumbit
        </button>
      </form>
    </section>
  );
};

export default EmailBanner;
