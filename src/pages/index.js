import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Article from '../components/Article';
import Wrapper from '../components/Wrapper';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';

import { media } from '../utils/media';
import Project from '../components/Project';

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
      {[
        {
          title: 'HLS downloader - Google Chrome extension',
          link: 'https://github.com/puemos/hls-downloader-chrome-extension',
          excerpt: 'Google Chrome Extension for sniffing and downloading HTTP Live streams (HLS)',
          tech: 'Javascript',
        },
        {
          title: 'Web recorder',
          link: 'https://github.com/puemos/web-recorder',
          excerpt: 'Browser microphone initialization and recording management',
          tech: 'Typescript',
        },
        {
          title: 'Hangman game',
          link: 'https://github.com/puemos/elm-hangman',
          excerpt: 'The game of Hangman written in Elm.',
          tech: 'Elm',
        },
        {
          title: 'AWS-lambda - ECR/ECS cleaner',
          link: 'https://github.com/puemos/aws-lambda-ecr-cleaner',
          excerpt: 'An AWS Lambda Function to automate ECR cleanup ♻️',
          tech: 'AWS Lambda, Javascript',
        },
      ].map(project => (
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
      {[
        {
          title: 'Dos and don’ts while trying to persuade functional programming.',
          date: 'Apr 27',
          excerpt:
            'A short list for helping you to convince your teammates to adopt functional programming (or any technology/practice/tool currently unknown…',
          timeToRead: '3 min read',
          link: 'https://hackernoon.com/dos-and-donts-while-trying-to-persuade-functional-programming-69a472c28580',
          publication: 'Hacker Noon',
        },
        {
          title: 'Why you should start a side project — and how',
          date: 'Apr 11',
          excerpt:
            'A two-part article about how you can benefit from working on a side project and how you can start your own.',
          timeToRead: '3 min read',
          link: 'https://medium.com/ideas-at-igenius/why-you-should-start-a-side-project-and-how-8e63a33187e5',
          publication: 'Ideas at iGenius',
        },
      ].map(post => (
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
