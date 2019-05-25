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
        <SectionTitle>About</SectionTitle>
        <p>To me, learning is as essential as eating your breakfast.</p>
        <p>
        I am a developer with 2 years of industry experience. I have worked
        with people in my local country and in the US. Currently, my current
        focus is front-end web development. I also do development of web
        APIs. My ultimate career goal is to become a full-stack developer or
        a technical manager. I love creating things. I love writing. With
        that, to exercise my technical and analytical abilities I entered
        the world of software development.
        </p>
        <p>
        The best thing about being in IT for me is seeing your finished
        product being utilized by people and making lives for everyone
        easier. Not to mention working together with smart and creative
        individuals to achieve a common goal. It is a very fulfilling
        feeling to achieve something together with teamwork.
        </p>

        <h5> Languages and scripting: </h5>
        <ul>  
            <li> JavaScript </li>
            <li> PHP </li>
            <li> Python </li>
            <li> Java </li>
            <li> C# </li>
            <li> HTML &amp; CSS </li>
            <li> SASS &amp; SCSS </li>
        </ul>

        <h5> Frameworks:  </h5>
        <ul>  
            <li> AngularJS &amp; Angular </li>
            <li> VueJS </li>
            <li> ReactJS </li>
            <li> Python-Django </li>
            <li> J2EE / Spring + Hibernate </li>
        </ul>
        
        <h5> Software packages: </h5>
        <ul>  
            <li> SuiteCRM </li>
            <li> SugarCRM </li>
        </ul>
        <br/>
        <p> Click <a href={resume} target="_blank" rel="noopener noreferrer">here</a> to view my resume.</p>
      </Content>
    </Wrapper>
  </Layout>
)

export default AboutPage
