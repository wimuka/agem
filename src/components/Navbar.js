import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { navLinks } from '../config.js';
import './styles/navbar.scss';

const Navbar = () => {
  return (
    <>
      <nav className='nav'>
        <div className='nav__logo'>
          <Link to='/#home'>
            <StaticImage src='../images/agem-logo.svg' alt='AGEM Logo' />
          </Link>
        </div>
        <div className='nav__links'>
          <ul className='links-list'>
            {navLinks.map(({ url, name }, index) => (
              <li className='links-list__item' key={index}>
                <Link to={url} className='link-style'>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='nav__phone-box'>
          <p className='nav__phone'>705-977-3303</p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
