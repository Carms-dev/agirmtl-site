import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components';

const MenuIcon = styled.button`
  display: flex;
  flex-direction: column;
  justify-content space-around;
  width: 1.5rem;
  height: 1.5rem;
  z-index: 5;
  cursor: pointer;

  div {
    width: 1.5rem;
    height: 0.15rem;
    border-radius: 0.25rem;
    background: black;
    transform-origin: 0.1rem;
    position: relative;
    transition: transform 300ms, opacity 300ms;

    :first-child {
      transform: ${({nav}) => nav ? "rotate(45deg)" : "rotate(0deg)"};
    }
    :nth-child(2) {
      opacity: ${({nav}) => nav ? "0" : "1"};
    }
    :nth-child(3) {
      transform: ${({nav}) => nav ? "rotate(-45deg)" : "rotate(0deg)"};
    }
  }
`

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 200px;
  background: var(--off-white);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
  transform: ${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};
  transition: transform 300ms;
  `

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      fileName: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const activeStyles = {
    borderBottom: "2px solid hotpink",
  }

  const [nav, showNav] = useState(false)

  return (
    <header>
      <div className="container-wide nav" id="nav">
        <Link to="/" className="logo">
          <Img fixed={data.fileName.childImageSharp.fixed} alt="logo" />
          <div className="logo-text">
            <h4>
              <span className="hl">A</span>
              ction L<span className="hl">G</span>
              BTQ avec les&nbsp;
              <span className="hl">I</span>
              mmigrantEs et&nbsp;
              <span className="hl">R</span>
              éfugiéEs
            </h4>
          </div>
        </Link>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}>
          <ul className="nav-lang">
            <li>
              <Link to="/" activeStyle={activeStyles}>
                EN
              </Link>
            </li>
            <li>
              <Link to="/FR" activeStyle={activeStyles}>
                FR
              </Link>
            </li>
            <li>
              <Link to="/AR" activeStyle={activeStyles}>
                AR
              </Link>
            </li>
            <li>
              <Link to="/ES" activeStyle={activeStyles}>
                ES
              </Link>
            </li>
          </ul>
          <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
            <div />
            <div />
            <div />
          </MenuIcon>
          <MenuLinks nav={nav}>
            <nav>
              <ul>
                <li>
                  <Link to="/" activeStyle={activeStyles}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about/" activeStyle={activeStyles}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services/" activeStyle={activeStyles}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact/" activeStyle={activeStyles}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/donate/" activeStyle={activeStyles}>
                    Donate
                  </Link>
                </li>
              </ul>
            </nav>
          </MenuLinks>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
