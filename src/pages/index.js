import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, Article, Wrapper, Button, SectionTitle } from '../components'

import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import github from '../images/github.png'
import instagram from '../images/instagram.png'

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 3rem 6rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.grey.dark};

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1rem 4rem 1rem;
  }

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.45rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.25rem;
    }
  }

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
    transition: 0.3s;
    z-index: -1;
    background: rgba(182,161,212,0.82);
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
    transition: 0.3s;
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
        <h1> Hello there.</h1>
        <p>
          I&apos;m Andrea Veronica Mendoza. A front-end software developer.
        </p>
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
