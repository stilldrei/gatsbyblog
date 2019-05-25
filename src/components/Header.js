import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Brand } from '../components';

const Wrapper = styled.header`
  grid-column: 1 / -1;
  margin-left: -1rem;
  margin-right: -1rem;
  padding: 1rem;
`

const Content = styled.div`
  grid-column: 2;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  ul {
    float: right;
    list-style-type: none;
    li {
      display: inline-block;
      padding: 0 1rem 0 1rem;
      @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        transition: 0.5s;
        padding: 0 0.8rem 0 0.8rem;
        font-size: 1rem;
      }
      @media (max-width: ${props => props.theme.breakpoints.phone}) {
        transition: 0.5s;
        padding: 0 0.5rem 0 0.5rem;
        font-size: 0.8rem;
      }
    }
  }
`

const Header = ({}) => (
  <Wrapper>
    <Content>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/blog">
            Blog
          </Link>
        </li>
      </ul>       
    </Content>
  </Wrapper>
)

export default Header
