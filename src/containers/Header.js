import React, { Component } from 'react'
import styled from 'styled-components'
const mainLogo = require('../assets/flickr_logo.png')

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: baseline;
  align-content: baseline;
`

const Logo = styled.img`
  max-width: 600px;
  max-height: 200px;
`

export const Header = () => {
  return (
    <Container>
      <Logo src={mainLogo} />
    </Container>
  )
}