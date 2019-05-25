import React from 'react'
import styled from 'styled-components'

import { Layout, Wrapper, Header, Hero } from '../components'

import facebook from '../assets/images/facebook.png'
import twitter from '../assets/images/twitter.png'
import github from '../assets/images/github.png'
import instagram from '../assets/images/instagram.png'
import linkedin from '../assets/images/linkedin.png'
import spotify from '../assets/images/spotify.png'


const Content = styled.div`
  grid-column: 2;
  padding: 3rem 6rem;
  border-bottom: 1px solid #d4d8dd;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`

const MediaLinks = styled.div`
  grid-column: 2;
  padding: 2rem;
  text-align: center;
  .img-logo {
    width: 100px;
    height: 100px;
    margin: auto auto;
    display: block;
    border-radius: 5px;
  }

  img {
    width: 2rem;
    height: 2rem;
    margin: 0 2rem 0 2rem;
    padding: 0.3rem;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      transition: 0.5s;
      width: 1.5rem;
      height: 1.5rem;
      margin: 0 1rem 0 1rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      transition: 0.5s;
      width: 1.15rem;
      height: 1.15rem;
      margin: 0 0.25rem 0 0.25rem;
    }
  }

  p {
    color: ${props => props.theme.colors.grey.light};
  }
`

const IndexPage = ({}) => (
  <Layout>
    <Wrapper>
      <Header />
      <Hero />
      <MediaLinks>
        <a href="https://www.facebook.com/iamdreimendoza" target="_blank" rel="noopener noreferrer">
          <img className="media-icons" src={facebook} alt="facebook" title="https://www.facebook.com/iamdreimendoza"/>
        </a>
        <a href="https://www.twitter.com/dreiamendoza" target="_blank" rel="noopener noreferrer">
          <img className="media-icons" src={twitter} alt="twitter" title="https://www.twitter.com/dreiamendoza"/>
        </a>
        <a href="https://www.instagram.com/dreia.mendoza" target="_blank" rel="noopener noreferrer">
          <img className="media-icons" src={instagram} alt="instagram" title="https://www.instagram.com/dreia.mendoza"/>
        </a>
        <a href="https://www.github.com/dreiamendoza" target="_blank" rel="noopener noreferrer">
          <img className="media-icons" src={github} alt="github" title="https://www.github.com/dreiamendoza"/>
        </a>
        <a href="http://linkedin.com/in/andrea-veronica-mendoza-5869b6139" target="_blank" rel="noopener noreferrer">
          <img className="media-icons" src={linkedin} alt="github" title="http://linkedin.com/in/andrea-veronica-mendoza-5869b6139"/>
        </a>
        <a href="https://open.spotify.com/user/andimendozait?si=2vibpeZESTCLfy-45VfgIQ" target="_blank" rel="noopener noreferrer">
          <img className="media-icons" src={spotify} alt="github" title="https://open.spotify.com/user/andimendozait?si=2vibpeZESTCLfy-45VfgIQ"/>
        </a>
      </MediaLinks>
    </Wrapper>
  </Layout>
)

export default IndexPage
