import React from 'react'
import styled from 'styled-components'

import me from '../images/me.jpg'
import facebookIcon from '../images/facebook.png'
import twitterIcon from '../images/twitter.png'

const Wrapper = styled.div`
  margin: 6rem auto 2rem auto;
  width: 100%;
  text-align: center;
  display: flex;
  border-top: 1px solid #d4d8dd;
  border-bottom: 1px solid #d4d8dd;
  padding: 1rem 0 1rem 0;
`

const Content = styled.div`
  text-align: left;
  padding: 0 1rem 0 0;
  a {
    color: ${props => props.theme.colors.grey.default};
    display: inline-block;
    align-items: center;
  }
  img {
    margin: auto auto;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 100%;
  }
  .name {
    font-size: ${props => props.theme.fontSize.medium};
    font-weight: bold;
  }
  .bio {
    font-size: ${props => props.theme.fontSize.small};
    color: ${props => props.theme.colors.grey.light};
    margin: 0;
    padding: 0;
  }
  .media-icons {
    width: 1.5rem;
    height: 1.5rem;
  }
  button {
    border: none;
    display: inline-flex;
    align-items: center;
    border-radius: 0.3rem;
    font-size:  0.8rem;
    padding: .2rem .5rem .2rem .2rem;
    margin: 0 0.5rem 0 0;
    background: none;
  }
  button: hover {
    transition: 0.3s;
    z-index: -1;
    background: rgba(182,161,212,0.82);
  }
`


const InfoShare = ({ title, url, slug }) => {
  const twitter = `https://twitter.com/intent/tweet?url=${url +
        slug}&text=${title} by @dreiamendoza`;

  const fb = `https://www.facebook.com/sharer/sharer.php?u=${url +
      slug}`;

  return (
    <Wrapper>
      <Content>
        <img src={me} alt="Me" />
      </Content>
      <Content>
        <span className="name">Andrea Veronica Mendoza</span>
        <p className="bio">Software Engineer - Front-end Developer</p>
        <button> 
          <a href={fb} target="blank">
           <img src={facebookIcon} alt="facebook" className="media-icons"/> Share
          </a>
        </button>
        <button> 
          <a href={twitter} target="blank">
            <img src={twitterIcon} alt="twitter" className="media-icons"/> Tweet
          </a>
        </button>
      </Content>
    </Wrapper>
  )
}

export default InfoShare
