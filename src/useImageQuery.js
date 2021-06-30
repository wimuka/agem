import { useStaticQuery, graphql } from 'gatsby';

export const useImageQuery = () => {
  const imageQuery = useStaticQuery(graphql`
    query MyQuery {
      allImageSharp {
        nodes {
          gatsbyImageData
          fluid {
            originalName
          }
        }
      }
    }
  `);
  return imageQuery;
};
