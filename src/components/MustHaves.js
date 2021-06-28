import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './styles/must-haves.scss';
import './styles/typography.scss';

const MustHaves = () => {
  return (
    <>
      <section className='must-haves'>
        <h1 className='heading-large'>Must Haves</h1>
        <div className='must-haves__container'>
          <div className='must-haves__item'>
            <StaticImage
              src='../images/agem-orange_toner.png'
              alt='Toner Image'
            />
            <p className='must-haves__text'>Agem Toner</p>
            <a href='#/products/toner' className='btn btn--light'>
              Add To Bag - $20
            </a>
          </div>
          <div className='must-haves__item'>
            <StaticImage src='../images/agem-green_btl.png' alt='Toner Image' />
            <p className='must-haves__text'>Magic Serum</p>
            <a href='#/products/toner' className='btn btn--light'>
              Add To Bag - $35
            </a>
          </div>
          <div className='must-haves__item'>
            <StaticImage
              src='../images/agem-face_cream.png'
              alt='Toner Image'
            />
            <p className='must-haves__text'>Moon Night Cream</p>
            <a href='#/products/toner' className='btn btn--light'>
              Add To Bag - $30
            </a>
          </div>
          <div className='must-haves__item'>
            <StaticImage
              src='../images/agem-pink_mosturizer.png'
              alt='Toner Image'
            />
            <p className='must-haves__text'>Cherry Blossom Mosturizer</p>
            <a href='#/products/toner' className='btn btn--light'>
              Add To Bag - $15
            </a>
          </div>
        </div>
        <a href='#/products' className='btn btn--green'>
          All Products
        </a>
      </section>
    </>
  );
};

export default MustHaves;
