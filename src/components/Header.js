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
`

const Header = ({}) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <Brand/>
      </Link>   
    </Content>
  </Wrapper>
)

export default Header
