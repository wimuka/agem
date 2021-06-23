import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import './styles/navbar.scss';

const Navbar = () => {
  return (
    <>
      <nav className='nav'>
        <div className='nav__logo'>
          <StaticImage src='../images/agem-logo.svg' />
        </div>
        <div className='nav__links'>
          <ul className='links-list'>
            <li className='links-list__item'>
              <Link to={'#'}>Products</Link>
            </li>
            <li className='links-list__item'>
              <Link to={'#'}>Reviews</Link>
            </li>
            <li className='links-list__item'>
              <Link to={'#'}>About</Link>
            </li>
            <li className='links-list__item'>
              <Link to={'#'}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className='nav__phone'>
          <p>705-977-3303</p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
