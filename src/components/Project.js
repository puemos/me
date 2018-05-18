import React from 'react';
import styled from 'styled-components';
import Subline from './Subline';

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  position: relative;
  margin-bottom: 0.75rem;
`;
const Subtitle = styled.span`
  font-size: ${props => props.theme.fontSmall};
  color: ${props => props.theme.light};
  /* border: 1px solid ${props => props.theme.light}; */
  background: #e6e6e6;
  padding: 0.3rem 0.7rem;
  border-radius: 7px;
`;
const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const Project = ({ title, link, excerpt, tech }) => (
  <Post>
    <Title>
      <a href={link}>{title}</a>
    </Title>
    <div>
      <Subtitle>{tech}</Subtitle>
    </div>
    <Excerpt>{excerpt}</Excerpt>
  </Post>
);

export default Project;
