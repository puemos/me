import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Article from '../components/Article';
import Wrapper from '../components/Wrapper';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';

import { media } from '../utils/media';
import Project from '../components/Project';
import projects from './projects.json';
import articles from './articles.json';

const Content = styled.div`
  margin-bottom: 3rem;
  grid-column: 2;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 2rem 2rem;
  background: white;
  @media ${media.tablet} {
    padding: 3rem 2rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`;

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  color: ${props => props.theme.dark};

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media ${media.phone} {
      font-size: 1.25rem;
    }
    @media ${media.tablet} {
      font-size: 1.45rem;
    }
  }
`;

const IndexPage = props => (
  <Wrapper>
    <Hero>
      <p>Shy Alter (puemos), a Senior Software Developer.</p>
    </Hero>
    <Content>
      <SectionTitle>Open source projects</SectionTitle>
      {projects.map(project => (
        <Project
          key={project.title}
          title={project.title}
          link={project.link}
          excerpt={project.excerpt}
          tech={project.tech}
        />
      ))}
    </Content>
    <Content>
      <SectionTitle>Latest stories</SectionTitle>
      {articles.map(post => (
        <Article
          title={post.title}
          date={post.date}
          excerpt={post.excerpt}
          timeToRead={post.timeToRead}
          link={post.link}
          publication={post.publication}
          key={post.title}
        />
      ))}
    </Content>
  </Wrapper>
);

export default IndexPage;
