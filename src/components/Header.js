import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Brand } from '../components'

const Wrapper = styled.header`
  grid-column: 1 / -1;
  margin-left: -1rem;
  margin-right: -1rem;
  padding: 2rem 2rem 2rem 2rem;
  border-bottom: 1px solid #d4d8dd;
`

const Content = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`

const Header = ({}) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <Brand />
      </Link>
    </Content>
  </Wrapper>
)

export default Header
