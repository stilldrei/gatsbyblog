import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { darken, lighten } from 'polished'

const Wrapper = styled.header`
  padding: 0,5rem;
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


const Brand = ({}) => (
  <Wrapper>
    <BrandGrey>still</BrandGrey>
    <BrandPurple>DREI</BrandPurple>
  </Wrapper>
)

export default Brand
