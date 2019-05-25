import React from 'react'
import styled from 'styled-components'

import { Layout, Wrapper, Header, SectionTitle, Hero } from '../components'

import resume from '../assets/drei_resume.pdf'

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

const AboutPage = ({}) => (
  <Layout>
    <Wrapper>
      <Header />
      <Hero />
      <Content>
        <SectionTitle>Projects</SectionTitle>
        <p>
            Right now I am focusing on working with corporate companies. When I get
            the adequate skills to do collaboration work internationally, I will settle
            for remote work. I plan to attend tech conferences locally, meet new like-minded people from tech,
            acquire best practices and standards from the corporate companies I am currently in.
        </p>    
        <p>
            For now, here is a list of my works I can share:
        </p> 
        <ol>           
            <li>
                <a 
                href="https://stilldrei.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                 stillDREI (This site)
                </a>
                <p> Portfolio and blog to document experiences in IT and learnings. </p>
            </li>
            <li> <a 
                href="https://github.com/dreiamendoza/solarsystem"
                target="_blank"
                rel="noopener noreferrer"
                >
                 SolarSystem
                </a>
                <p> Informational site about the solar system celestial objects. 
                    Self-study about Angular 7 fundamentals such as routing, data-binding, and module recycling. </p>
            </li>
            <li> G***** (WIP - upcoming)
                <p> Current project in conception phase. </p>
            </li>
        </ol>
      </Content>
    </Wrapper>
  </Layout>
)

export default AboutPage
