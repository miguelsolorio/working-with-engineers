import React, { Fragment } from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
  background-color: transparent;
`

const Footer = styled.footer`
  font-size: 0.6em;
  padding: 60px;
  text-align: right;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`

const Layout = ({ children }) => (
  <Fragment>
    <Wrapper>{children}</Wrapper>
    <Footer>
      <span>How To Work With Engineers</span>
      <span>@miguelsolorio_</span>
    </Footer>
  </Fragment>
)

export default Layout