import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, Wrapper, Header, Article } from '../components'
import config from '../../config'

const Content = styled.div`
  grid-column: 2;
  border-bottom: 1px solid #d4d8dd;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
`

const Subline = styled.div`
  color: ${props => props.theme.colors.grey.light};
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const BreadCrumbs = styled.div`
  color: ${props => props.theme.colors.grey.ultraLight};
  font-size: ${props => props.theme.fontSize.small};
  span {
    padding: 0 0 0 0.3rem;
  }
`


const Category = ({ pageContext: { category }, data: { allMdx } }) => {
  const { edges, totalCount } = allMdx
  const subline = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${category}"`

  return (
    <Layout>
      <Wrapper>
        <Helmet title={`Category: ${category} | ${config.siteTitle}`} />
        <Header />
        <Content>
          <BreadCrumbs>
            <Link to="/"> Home </Link> / 
            <Link to="/blog"> Blog </Link> /
            <Link to="/categories"> Categories </Link> /
            <span> {category} </span>
          </BreadCrumbs>
          <Subline>
            {subline} (See <Link to="/categories">all categories</Link>)
          </Subline>
          {edges.map(post => (
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
      </Wrapper>
    </Layout>
  )
}

export default Category

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }),
  }).isRequired,
}

export const postQuery = graphql`
  query CategoryPage($category: String!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            categories
          }
          fields {
            slug
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`
