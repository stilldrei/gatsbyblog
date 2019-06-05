import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Wrapper } from '../components'

import me from '../assets/images/me.jpg'

const Container = styled.div`
  transition: 0.5s;
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-align: center;
  color: ${props => props.theme.colors.grey.dark};

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    transition: 0.5s;
    padding: 2rem 1rem 4rem 1rem;
    display: block;
  }

  p {
    margin-top: -1rem;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.25rem;
      transition: 0.5s;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1rem;
      transition: 0.5s;
    }
  }

  h1 {
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      transition: 0.5s;
      font-size: 2.2rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      transition: 0.5s;
      font-size: 1.5rem;
    }
  }

  img {
    transition: 0.5s;
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 100%;
  }

  ul{
    list-style-type: none;
    text-align: center;
    li {
      margin: 0 1.5rem 0 0;
      display: inline-block;
    }
  }
`

const Hero = ({}) => (
    <Container>
        <img src={me} alt="drei" /> 
        <h1> Hi, I&apos;m Drei </h1>
        <p>A software developer based in the Philippines.</p>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
    </Container>
)

export default Hero
