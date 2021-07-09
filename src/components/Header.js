import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './styles/header.scss';
import './styles/button.scss';

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='header__container'>
          <div className='header__container--left'>
            <p className='header__text'>
              ESSENSE OF NATURAL PRODUCTS<br></br> JUST FOR YOU
            </p>
            <div>
              <a className='btn btn--green' href='#/products'>
                Shop Now
              </a>
            </div>
          </div>
          <div className='header__container--right'>
            <StaticImage
              src='../images/header-img.png'
              className='header__img'
              alt='Header Image'
              width={460}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
