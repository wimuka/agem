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
          type='Email Address'
          placeholder='Email Adress'
        />
        <a href='#signup'>
          <Arrow className='email-banner__arrow' />
        </a>
      </form>
    </section>
  );
};

export default EmailBanner;
