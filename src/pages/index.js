import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, Article, Wrapper, Button, SectionTitle } from '../components'

import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import github from '../images/github.png'
import instagram from '../images/instagram.png'
import me from '../images/me.jpg'

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

const Hero = styled.div`
  transition: 0.5s;
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
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
    margin: 0 0.5rem 0 0;
    float: right;
  }
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
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    margin: 0 0.5rem 0 0;
  }

  img: hover {
    z-index: -1;
    background: rgba(182,161,212,0.82);
  }

  p {
    color: ${props => props.theme.colors.grey.light};
    .span-bold {
      text-transform: uppercase;
      font-weight: bold;
      color: ${props => props.theme.colors.grey.default}; 
    }
    .span-regular {
      text-transform: uppercase;
      color: ${props => props.theme.colors.grey.default};
    }
  }
`

const IndexPage = ({
  data: {
    allMdx: { edges: postEdges },
  },
}) => (
  <Layout>
    <Wrapper>
      <Hero>
        <h1> Hi, I&apos;m Drei <img src={me} alt="drei" /> </h1>
        <p>A front-end software developer based in the Philippines.</p>
      </Hero>
      <Content>
        <SectionTitle>Latest stories</SectionTitle>
        {postEdges.map(post => (
          <Article
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            excerpt={post.node.excerpt}
            timeToRead={post.node.timeToRead}
            slug={post.node.fields.slug}
            categories={post.node.frontmatter.categories}
            key={post.node.fields.slug}
          />
        ))}
      </Content>
      <MediaLinks>
        <p> <span className="span-regular">still</span><span className="span-bold">drei</span> - andimendozait@gmail.com </p>
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
      </MediaLinks>
    </Wrapper>
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const IndexQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            categories
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`
