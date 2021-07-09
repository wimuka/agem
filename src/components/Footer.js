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
            <form className='footer__subscribe-form'>
              <input
                className='footer__subscribe-form--input'
                type='email'
                placeholder='Enter email address and save 15%'
                title='Add your email address'
              />
              <button className='btn footer__subscribe-form__btn' type='submit'>
                Subscribe
              </button>
            </form>
          </div>
          <div className='footer__contact'>
            <p className='footer__contact--bold'>Contact Us</p>
            <p className='footer__contact--phone'>1-912-231-112*</p>
            <p>info@agem.ca</p>
          </div>
          <div className='footer__links'>
            <div className='footer__links--left'>
              <a className='footer__links--a' href='#about'>
                About Us
              </a>
              <a className='footer__links--a' href='#blog'>
                Blog
              </a>
              <a className='footer__links--a' href='#rewards'>
                Rewards
              </a>
            </div>
            <div className='footer__links--right'>
              <a className='footer__links--a' href='#faq'>
                FAQ
              </a>
              <a className='footer__links--a' href='#ship-info'>
                Shipping Info
              </a>
              <a className='footer__links--a' href='#return'>
                Return Policy
              </a>
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
