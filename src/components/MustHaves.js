import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useImageQuery } from '../useImageQuery';
import { featuredProducts } from '../config.js';
import './styles/must-haves.scss';
import './styles/typography.scss';

const MustHaves = () => {
  const data = useImageQuery();
  return (
    <>
      <section className='must-haves'>
        <h1 className='heading-large'>Must Haves</h1>
        <div className='must-haves__container'>
          {featuredProducts.map(({ name, price, file }, index) => (
            // map through all items from config and create div w/ img, name & price
            <div className='must-haves__item' key={index}>
              {data.allImageSharp.nodes.map(item => {
                // map trough all imgs from query and find one that matches item's name from config
                if (item.fluid.originalName.includes(file)) {
                  //once match is found - set image with item's gatsbyImageData
                  const image = getImage(item.gatsbyImageData);
                  //return image - make sure to reference gatsbyImageData (doesn't work otherwise)
                  return (
                    <GatsbyImage
                      image={image}
                      alt={`${name}'s Photo`}
                      key={`${index}+1`}
                      layout='constrained'
                    />
                  );
                } else return null;
              })}
              <p className='must-haves__text'>{name}</p>
              <a href={`#/products/${name}`} className='btn btn--light'>
                Add To Bag - {`${price}`}
              </a>
            </div>
          ))}
        </div>
        <a href='#/products' className='btn btn--green'>
          All Products
        </a>
      </section>
    </>
  );
};

export default MustHaves;
