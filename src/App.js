import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './sections/header.js'
import WhoWeAre from './sections/whoweare.js'
import RequestAnEstimate from './sections/requestanestimate.js'
import WhatWeDo from './sections/whatwedo.js'
import Brands from './sections/brands.js'
import HowWeWork from './sections/howwework.js'
import StatsAndServices from './sections/statsandservices.js'
import FromTheBlog from './sections/fromtheblog.js'
import Carousel from './sections/carousel.js'
import Newsletter from './sections/newsletter.js'
import GetInTouch from './sections/getintouch.js'
import Map from './sections/map.js'
import FooterWithForm from './sections/footerwithform.js'

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <WhoWeAre />
        <RequestAnEstimate />
        <WhatWeDo />
        <Brands />
        <HowWeWork />
        <StatsAndServices />
        <FromTheBlog />
        <Carousel />
        <Newsletter />
        <GetInTouch />
        <Map />
        <FooterWithForm />
      </AppContainer>
    )
  }
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default App
