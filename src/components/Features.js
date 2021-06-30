import React from 'react';
import { features } from '../config.js';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useImageQuery } from '../useImageQuery';

import Wave from '../images/svg/wave-2.svg';

import './styles/features.scss';

const Features = () => {
  const data = useImageQuery();
  return (
    <>
      <section className='features'>
        <div className='wave-element'>
          <Wave />
        </div>
        <div className='features__container'>
          {features.map(({ text, file }, index) => (
            <div className='features__item' key={index}>
              {data.allImageSharp.nodes.map(item => {
                if (item.fluid.originalName.includes(file)) {
                  const image = getImage(item.gatsbyImageData);
                  return (
                    <GatsbyImage
                      image={image}
                      alt={`${text} feature`}
                      key={`${index}+1`}
                    />
                  );
                } else return null;
              })}
              <p className='features__text'>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
