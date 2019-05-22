import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { darken, lighten } from 'polished'

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

const BrandGrey = styled.span`
  color: ${props => props.theme.colors.grey.light};
  font-weight: bold;
  font-size: 1.5rem;
`
const BrandPurple = styled.span`
  color: ${props => props.theme.colors.grey.primaryLight};
  font-weight: bold;
  font-size: 1.5rem;
`


const Header = ({}) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <BrandGrey>still</BrandGrey>
        <BrandPurple>DREI</BrandPurple>
      </Link>
    </Content>
  </Wrapper>
)

export default Header
