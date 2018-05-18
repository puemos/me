import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';
import Subline from './Subline';

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
`;

const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`;
const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const Project = ({ title, link, excerpt, tech }) => (
  <Post>
    <Title>
      <Link to={link}>{title}</Link>
    </Title>
    <Subline>{tech}</Subline>
    <Excerpt>{excerpt}</Excerpt>
  </Post>
);

export default Project;
