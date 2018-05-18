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
  margin-bottom: 0.75rem;
`;

const Excerpt = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Article = ({ title, date, excerpt, link, timeToRead, publication }) => (
  <Post>
    <Title>
      <a href={link}>{title}</a>
    </Title>
    <Subline>
      {date} &mdash; {timeToRead} &mdash; In {publication}
    </Subline>
    <Excerpt>{excerpt}</Excerpt>
  </Post>
);

export default Article;
