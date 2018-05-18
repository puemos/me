/* eslint no-unused-expressions:0 */

import React from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import SEO from '../components/SEO';
import theme from '../../config/Theme';
import { media } from '../utils/media';

injectGlobal`
  ::selection {
    color: ${theme.bg};
    background: ${theme.primary};
  }
  body {
    background: ${theme.bg};
    color: ${theme.default};
    @media ${media.phone} {
      font-size: 14px;
    }
  }
  a {
    color: ${theme.primary};
    text-decoration: none;
    transition: all ${theme.transitionTime};
  }
  h2{
    background: linear-gradient(to right, #330867 0%, ${theme.primary} 60%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 2rem;
  }
  h2:hover{
    background: ${theme.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  a:hover {
    color: ${theme.primary};
  }
  h1, h2, h3, h4 {
    color: ${theme.dark};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
`;

const TemplateWrapper = props => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <div>
        <SEO />
        {children()}
        <Footer>
          &copy; 2018 by Shy Alter. All rights reserved. <br />
        </Footer>;
      </div>
    </ThemeProvider>
  );
};

export default TemplateWrapper;
