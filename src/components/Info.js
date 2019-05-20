import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button } from '../components'

import me from '../images/me.jpg'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import github from '../images/github.png'
import instagram from '../images/instagram.png'

const Wrapper = styled.div`
  margin: 6rem auto 0 auto;
  width: 100%;
  text-align: center;
  display: flex;
  border-top: 1px solid #d4d8dd;
  border-bottom: 1px solid #d4d8dd;
  padding: 1rem 0 1rem 0;
`

const Content = styled.div`
  text-align: left;
  padding: 0 1rem 0 1rem;
  a {
    color: ${props => props.theme.colors.primary};
    display: inline-block;
    align-items: center;
  }
  img {
    margin: auto auto;
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
  .name {
    font-size: ${props => props.theme.fontSize.medium};
  }
  .bio {
    font-size: ${props => props.theme.fontSize.small};
    color: ${props => props.theme.colors.grey.light};
  }
  .media-icons {
    width: 1.5rem;
    height: 1.5rem;
  }
`


const Info = ({}) => (
  <Wrapper>
      <Content>
        <img src={me} alt="Me" />
      </Content>
      <Content>
        <span className="name">Andrea Veronica Mendoza</span>
        <p className="bio">Software Engineer - Front-end Developer</p>
        <a href="https://www.facebook.com/iamdreimendoza">
          <img className="media-icons" src={facebook} alt="facebook" title="https://www.facebook.com/iamdreimendoza"/>
        </a>
        <a href="https://www.twitter.com/dreiamendoza">
          <img className="media-icons" src={twitter} alt="twitter" title="https://www.twitter.com/dreiamendoza"/>
        </a>
        <a href="https://www.instagram.com/dreia.mendoza">
          <img className="media-icons" src={instagram} alt="instagram" title="https://www.instagram.com/dreia.mendoza"/>
        </a>
        <a href="https://www.github.com/dreiamendoza">
          <img className="media-icons" src={github} alt="github" title="https://www.github.com/dreiamendoza"/>
        </a>
      </Content>
  </Wrapper>
)

export default Info