import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useImageQuery } from '../useImageQuery';
import { blogPicks } from '../config.js';
import './styles/blog-picks.scss';
import './styles/typography.scss';

const BlogPicks = () => {
  const data = useImageQuery();
  return (
    <section className='blog-picks'>
      <>
        <h1 className='heading-large'>Top Picks From Blog</h1>
        <div className='blog-picks__container'>
          {blogPicks.map(({ text, file }, index) => (
            // map through all items from config and create div w/ img, name & price
            <div className='blog-picks__item' key={index}>
              <div className='blog-picks__item--top'>
                {data.allImageSharp.nodes.map(item => {
                  // map trough all imgs from query and find one that matches item's name from config
                  if (item.fluid.originalName.includes(file)) {
                    //once match is found - set image with item's gatsbyImageData
                    const image = getImage(item.gatsbyImageData);
                    //return image - make sure to reference gatsbyImageData (doesn't work otherwise)
                    return (
                      <GatsbyImage
                        image={image}
                        alt={`${text}'s Photo`}
                        key={`${index}+1`}
                      />
                    );
                  } else return null;
                })}
              </div>
              <div className='blog-picks__item--bottom'>
                <p className='blog-picks__text'>{text}</p>
                <a href={`#/products/${text}`} className='btn'>
                  Read Now &rarr
                </a>
              </div>
            </div>
          ))}
        </div>
      </>
    </section>
  );
};

export default BlogPicks;
