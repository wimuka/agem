import React from 'react';
import Copyright from '../images/svg/copyright.svg';

import './styles/footer.scss';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer__top'>
          <div className='footer__subscribe'>
            <p className='footer__subscribe--top'>Subscribe to our email</p>
            <p className='footer__subscribe--middle'>
              Sign up for the latest and greatest in AGEM news!
            </p>
            <form className='subscribe-form__container'>
              <input
                className='subscribe-form__input'
                type='email'
                placeholder='Email Address'
                title='Add your email address'
              />
              <button className='btn' type='submit'>
                Subscribe
              </button>
            </form>
          </div>
          <div className='footer__contact'>
            <p className='footer__contact--bold'>Contact Us</p>
            <p>912-231-112*</p>
            <p>info@agem.ca</p>
          </div>
          <div className='footer__links'>
            <div className='footer__links--left'>
              <a href='#'>About Us</a>
              <a href='#'>Blog</a>
              <a href='#'>Rewards</a>
            </div>
            <div className='footer__links--right'>
              <a href='#'>FAQ</a>
              <a href='#'>Shipping Info</a>
              <a href='#'>Return Policy</a>
            </div>
          </div>
        </div>
        <div className='footer__bottom'>
          <p className='footer__copyright'>
            <Copyright className='copyright' /> AGEM - Concept Website by Lena
          </p>
          <p className='divider'>|</p>
          <p className='footer__terms'>Terms of Use </p>
          <p className='divider'>|</p>
          <p className='footer__privacy'>Privacy Policy</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
